import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";

// ======================================================
// ENVIRONMENT VARIABLES
// ======================================================

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

const PAYPAL_API_BASE = (
  process.env.PAYPAL_API_BASE || "https://api-m.paypal.com"
).replace(/\/$/, "");

// ======================================================
// EMAIL TRANSPORTER
// ======================================================

const transporter =
  EMAIL_USER && EMAIL_PASS
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      })
    : null;

// ======================================================
// ENVIRONMENT CHECK
// ======================================================

const checkEnvironment = () => {
  const missing: string[] = [];

  if (!PAYPAL_CLIENT_ID) {
    missing.push("PAYPAL_CLIENT_ID");
  }

  if (!PAYPAL_CLIENT_SECRET) {
    missing.push("PAYPAL_CLIENT_SECRET");
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
};

// ======================================================
// GENERATE INVOICE PDF
// ======================================================

const generateInvoice = (data: any): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        margin: 50,
      });

      const buffers: Buffer[] = [];

      doc.on("data", (chunk) => {
        buffers.push(chunk);
      });

      doc.on("end", () => {
        resolve(Buffer.concat(buffers));
      });

      doc.on("error", reject);

      // --------------------------------------------------
      // HEADER
      // --------------------------------------------------

      doc.fontSize(24).text("Organic Mushroom Farm", {
        align: "center",
      });

      doc
        .fontSize(10)
        .text("Katangi Road, Jabalpur, MP, India", {
          align: "center",
        });

      doc
        .fontSize(10)
        .text("Email: support@mushroomtraining.online", {
          align: "center",
        });

      doc.moveDown(2);

      // --------------------------------------------------
      // INVOICE TITLE
      // --------------------------------------------------

      doc
        .fontSize(20)
        .text("OFFICIAL INVOICE", {
          align: "center",
          underline: true,
        });

      doc.moveDown(1.5);

      // --------------------------------------------------
      // TRANSACTION INFORMATION
      // --------------------------------------------------

      doc
        .fontSize(12)
        .text(
          `Date: ${new Date().toLocaleDateString("en-IN")}`
        );

      doc.text(
        `Transaction ID: ${data.orderID || "N/A"}`
      );

      doc.moveDown();

      // --------------------------------------------------
      // CUSTOMER
      // --------------------------------------------------

      doc
        .fontSize(14)
        .text("Billed To:", {
          underline: true,
        });

      doc
        .fontSize(12)
        .text(`Name: ${data.name || "N/A"}`);

      doc.text(`Email: ${data.email || "N/A"}`);

      doc.text(`Phone: ${data.phone || "N/A"}`);

      doc.moveDown();

      // --------------------------------------------------
      // ORDER DETAILS
      // --------------------------------------------------

      doc
        .fontSize(14)
        .text("Order Details:", {
          underline: true,
        });

      doc
        .fontSize(12)
        .text(
          `Description: ${
            data.planName || "Mushroom Training"
          }`
        );

      doc.text(
        `Amount Paid: $${data.amount || "0.00"} USD`
      );

      doc.text("Status: PAID");

      doc.moveDown(3);

      // --------------------------------------------------
      // FOOTER
      // --------------------------------------------------

      doc
        .fontSize(10)
        .text(
          "Thank you for choosing Organic Mushroom Farm Training!",
          {
            align: "center",
          }
        );

      doc.text(
        "This is an electronically generated invoice.",
        {
          align: "center",
        }
      );

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};

// ======================================================
// GET PAYPAL ACCESS TOKEN
// ======================================================

const getPayPalAccessToken = async () => {
  checkEnvironment();

  const auth = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(
    `${PAYPAL_API_BASE}/v1/oauth2/token`,
    {
      method: "POST",

      headers: {
        Authorization: `Basic ${auth}`,
        Accept: "application/json",
        "Content-Type":
          "application/x-www-form-urlencoded",
      },

      body: "grant_type=client_credentials",
    }
  );

  const text = await response.text();

  console.log(
    "PayPal Auth Status:",
    response.status
  );

  console.log(
    "PayPal Auth Content-Type:",
    response.headers.get("content-type")
  );

  // ----------------------------------------------------
  // CHECK HTTP STATUS BEFORE JSON PARSING
  // ----------------------------------------------------

  if (!response.ok) {
    console.error(
      "PayPal Auth Error Response:",
      text
    );

    throw new Error(
      `PayPal authentication failed. HTTP ${response.status}`
    );
  }

  // ----------------------------------------------------
  // SAFE JSON PARSE
  // ----------------------------------------------------

  let data: any;

  try {
    data = JSON.parse(text);
  } catch {
    console.error(
      "PayPal Auth returned non-JSON response:",
      text
    );

    throw new Error(
      "PayPal authentication returned an invalid non-JSON response."
    );
  }

  if (!data.access_token) {
    console.error(
      "PayPal Auth Response:",
      data
    );

    throw new Error(
      "PayPal authentication succeeded but no access_token was returned."
    );
  }

  return {
    accessToken: data.access_token,
    apiBase: PAYPAL_API_BASE,
  };
};

// ======================================================
// 1. CREATE INTERNATIONAL ORDER
// ======================================================

const createIntlOrder = async (
  req: VercelRequest,
  res: VercelResponse
) => {
  try {
    const {
      amount,
      name,
      email,
      phone,
      planName,
    } = req.body || {};

    // --------------------------------------------------
    // VALIDATION
    // --------------------------------------------------

    if (!amount || !name || !email) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    const numericAmount = Number(amount);

    if (
      !Number.isFinite(numericAmount) ||
      numericAmount <= 0
    ) {
      return res.status(400).json({
        error: "Invalid payment amount",
      });
    }

    // --------------------------------------------------
    // PAYPAL TOKEN
    // --------------------------------------------------

    const {
      accessToken,
      apiBase,
    } = await getPayPalAccessToken();

    // --------------------------------------------------
    // CREATE PAYPAL ORDER
    // --------------------------------------------------

    const response = await fetch(
      `${apiBase}/v2/checkout/orders`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },

        body: JSON.stringify({
          intent: "CAPTURE",

          purchase_units: [
            {
              description:
                planName ||
                "Mushroom Training",

              amount: {
                currency_code: "USD",
                value: numericAmount.toFixed(2),
              },
            },
          ],
        }),
      }
    );

    const text = await response.text();

    console.log(
      "PayPal Create Order Status:",
      response.status
    );

    console.log(
      "PayPal Create Order Content-Type:",
      response.headers.get("content-type")
    );

    // --------------------------------------------------
    // SAFE JSON PARSE
    // --------------------------------------------------

    let data: any;

    try {
      data = JSON.parse(text);
    } catch {
      console.error(
        "PayPal Create Order returned non-JSON:",
        text
      );

      return res.status(502).json({
        error:
          "PayPal returned an invalid response.",
        paypalStatus: response.status,
      });
    }

    // --------------------------------------------------
    // PAYPAL ERROR
    // --------------------------------------------------

    if (!response.ok) {
      console.error(
        "PayPal Create Order Error:",
        JSON.stringify(data, null, 2)
      );

      return res.status(response.status).json({
        error:
          "PayPal failed to create the order.",
        details: data,
      });
    }

    // --------------------------------------------------
    // ADMIN INITIATED EMAIL
    // --------------------------------------------------

    if (transporter && EMAIL_USER) {
      await transporter
        .sendMail({
          from: EMAIL_USER,
          to: EMAIL_USER,

          subject: `Payment INITIATED: ${name} (${
            planName || "Training"
          })`,

          html: `
            <h3>
              New International Payment Initiated
            </h3>

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone || "N/A"}
            </p>

            <p>
              <strong>Plan:</strong>
              ${planName || "N/A"}
            </p>

            <p>
              <strong>Amount:</strong>
              $${numericAmount.toFixed(2)} USD
            </p>

            <p>
              <strong>PayPal Order ID:</strong>
              ${data.id || "N/A"}
            </p>

            <p>
              <em>
                Status: Waiting for user to complete
                PayPal checkout.
              </em>
            </p>
          `,
        })
        .catch((error) => {
          console.error(
            "Initiated email failed:",
            error
          );
        });
    }

    // --------------------------------------------------
    // RETURN PAYPAL ORDER
    // --------------------------------------------------

    return res.status(200).json(data);
  } catch (error: any) {
    console.error(
      "Create Intl Order Error:",
      error
    );

    return res.status(500).json({
      error:
        "Failed to create PayPal order.",
      message:
        error?.message || "Unknown error",
    });
  }
};

// ======================================================
// 2. CAPTURE INTERNATIONAL ORDER
// ======================================================

const captureIntlOrder = async (
  req: VercelRequest,
  res: VercelResponse
) => {
  try {
    const {
      orderID,
      amount,
      name,
      email,
      phone,
      planName,
    } = req.body || {};

    // --------------------------------------------------
    // VALIDATION
    // --------------------------------------------------

    if (!orderID) {
      return res.status(400).json({
        error: "orderID required",
      });
    }

    // --------------------------------------------------
    // PAYPAL TOKEN
    // --------------------------------------------------

    const {
      accessToken,
      apiBase,
    } = await getPayPalAccessToken();

    // --------------------------------------------------
    // CAPTURE ORDER
    // --------------------------------------------------

    const response = await fetch(
      `${apiBase}/v2/checkout/orders/${encodeURIComponent(
        orderID
      )}/capture`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const text = await response.text();

    console.log(
      "PayPal Capture Status:",
      response.status
    );

    console.log(
      "PayPal Capture Content-Type:",
      response.headers.get("content-type")
    );

    // --------------------------------------------------
    // SAFE JSON PARSE
    // --------------------------------------------------

    let data: any;

    try {
      data = JSON.parse(text);
    } catch {
      console.error(
        "PayPal Capture returned non-JSON:",
        text
      );

      return res.status(502).json({
        error:
          "PayPal returned an invalid capture response.",
        paypalStatus: response.status,
      });
    }

    // --------------------------------------------------
    // CAPTURE ERROR
    // --------------------------------------------------

    if (!response.ok) {
      console.error(
        "PayPal Capture Error:",
        JSON.stringify(data, null, 2)
      );

      return res.status(response.status).json({
        error: "PayPal capture failed.",
        details: data,
      });
    }

    // --------------------------------------------------
    // PAYMENT COMPLETED
    // --------------------------------------------------

    if (data.status === "COMPLETED") {
      // ----------------------------------------------
      // GENERATE PDF
      // ----------------------------------------------

      const pdfBuffer =
        await generateInvoice({
          orderID,
          amount,
          name,
          email,
          phone,
          planName,
        });

      // ----------------------------------------------
      // ADMIN SUCCESS EMAIL
      // ----------------------------------------------

      if (transporter && EMAIL_USER) {
        await transporter
          .sendMail({
            from: EMAIL_USER,
            to: EMAIL_USER,

            subject: `Payment SUCCESS: ${name} ($${amount})`,

            html: `
              <h3 style="color: green;">
                International Payment Successful
              </h3>

              <p>
                <strong>Transaction ID:</strong>
                ${orderID}
              </p>

              <p>
                <strong>Name:</strong>
                ${name}
              </p>

              <p>
                <strong>Email:</strong>
                ${email}
              </p>

              <p>
                <strong>Phone:</strong>
                ${phone || "N/A"}
              </p>

              <p>
                <strong>Plan:</strong>
                ${planName || "N/A"}
              </p>

              <p>
                <strong>Amount:</strong>
                $${amount} USD
              </p>

              <p>
                Payment completed successfully.
              </p>
            `,
          })
          .catch((error) => {
            console.error(
              "Admin success email failed:",
              error
            );
          });
      }

      // ----------------------------------------------
      // USER SUCCESS EMAIL + PDF
      // ----------------------------------------------

      if (transporter && email) {
        await transporter
          .sendMail({
            from: `"Organic Mushroom Farm" <${EMAIL_USER}>`,

            to: email,

            subject:
              "Payment Successful - Organic Mushroom Farm Training",

            html: `
              <h3>
                Welcome, ${name}!
              </h3>

              <p>
                Your payment of
                <strong>$${amount} USD</strong>
                for
                <strong>
                  ${planName || "Mushroom Training"}
                </strong>
                was successful.
              </p>

              <p>
                <strong>Transaction ID:</strong>
                ${orderID}
              </p>

              <p>
                Your official invoice is attached
                to this email as a PDF.
              </p>

              <p>
                We will contact you shortly with
                the next steps for your training.
              </p>

              <br />

              <p>
                Best Regards,<br />
                Organic Mushroom Farm Team
              </p>
            `,

            attachments: [
              {
                filename:
                  `Invoice_${orderID}.pdf`,

                content: pdfBuffer,

                contentType:
                  "application/pdf",
              },
            ],
          })
          .catch((error) => {
            console.error(
              "User success email failed:",
              error
            );
          });
      }
    }

    // --------------------------------------------------
    // RETURN PAYPAL RESPONSE
    // --------------------------------------------------

    return res.status(200).json(data);
  } catch (error: any) {
    console.error(
      "Capture Intl Order Error:",
      error
    );

    return res.status(500).json({
      error:
        "Failed to capture PayPal order.",
      message:
        error?.message || "Unknown error",
    });
  }
};

// ======================================================
// 3. FAILED / CANCELLED PAYMENT
// ======================================================

const failIntlOrder = async (
  req: VercelRequest,
  res: VercelResponse
) => {
  try {
    const {
      name,
      email,
      phone,
      planName,
      errorMsg,
    } = req.body || {};

    // --------------------------------------------------
    // ADMIN FAILED PAYMENT EMAIL
    // --------------------------------------------------

    if (transporter && EMAIL_USER) {
      await transporter
        .sendMail({
          from: EMAIL_USER,
          to: EMAIL_USER,

          subject:
            `Payment FAILED/CANCELLED: ${
              name || "Unknown User"
            }`,

          html: `
            <h3 style="color: red;">
              International Payment Failed
            </h3>

            <p>
              <strong>Name:</strong>
              ${name || "N/A"}
            </p>

            <p>
              <strong>Email:</strong>
              ${email || "N/A"}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone || "N/A"}
            </p>

            <p>
              <strong>Plan:</strong>
              ${planName || "N/A"}
            </p>

            <p>
              <strong>Reason/Error:</strong>
              ${
                errorMsg ||
                "User cancelled or payment failed"
              }
            </p>
          `,
        })
        .catch((error) => {
          console.error(
            "Admin failed-payment email error:",
            error
          );
        });
    }

    // --------------------------------------------------
    // USER FAILED PAYMENT EMAIL
    // --------------------------------------------------

    if (transporter && email) {
      await transporter
        .sendMail({
          from:
            `"Organic Mushroom Farm" <${EMAIL_USER}>`,

          to: email,

          subject:
            "Payment Attempt Failed - Organic Mushroom Farm",

          html: `
            <p>
              Hi ${name || "there"},
            </p>

            <p>
              We noticed your recent payment attempt
              for
              <strong>
                ${planName || "Mushroom Training"}
              </strong>
              was not completed or failed.
            </p>

            <p>
              If you faced a technical issue,
              please try the payment again.
            </p>

            <p>
              Best Regards,<br />
              Organic Mushroom Farm Team
            </p>
          `,
        })
        .catch((error) => {
          console.error(
            "User failed-payment email error:",
            error
          );
        });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error: any) {
    console.error(
      "Fail Intl Order Error:",
      error
    );

    return res.status(500).json({
      error:
        "Failed to process payment failure notification.",
      message:
        error?.message || "Unknown error",
    });
  }
};

// ======================================================
// VERCEL API HANDLER
// ======================================================

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // ----------------------------------------------------
  // ONLY POST REQUESTS
  // ----------------------------------------------------

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
    });
  }

  // ----------------------------------------------------
  // GET ACTION
  // ----------------------------------------------------

  const action = req.query.action;

  // ----------------------------------------------------
  // CREATE
  // ----------------------------------------------------

  if (action === "create") {
    return createIntlOrder(req, res);
  }

  // ----------------------------------------------------
  // CAPTURE
  // ----------------------------------------------------

  if (action === "capture") {
    return captureIntlOrder(req, res);
  }

  // ----------------------------------------------------
  // FAIL
  // ----------------------------------------------------

  if (action === "fail") {
    return failIntlOrder(req, res);
  }

  // ----------------------------------------------------
  // INVALID ACTION
  // ----------------------------------------------------

  return res.status(400).json({
    error: "Invalid action",
  });
}
