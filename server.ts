import express from 'express';
import cors from 'cors';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API Key is safe here.
const key_id = "rzp_live_Ssg7Eepps3J0ch";
const key_secret = "97qz8ls18Y1M4Vzuj1TCX9Ss"; // In a real app this should be in process.env

// JSON API Endpoint requested by the user
app.post('/api/checkout-payload', (req, res) => {
  const { name, mobile, email, productType } = req.body;

  let amount = 0;
  let purpose = "";

  if (productType === "training") {
    amount = 29900;
    purpose = "Mushroom Farming Masterclass Training";
  } else if (productType === "consultation") {
    amount = 5900;
    purpose = "Expert 1-on-1 Business Consultation Slot";
  } else {
    return res.status(400).json({ error: "Invalid productType" });
  }

  // Generate exact payload structure
  const payload = {
    key_id: key_id,
    amount: amount,
    currency: "INR",
    name: "Organic Mushroom Farm",
    description: purpose,
    prefill: {
      name: name || "",
      email: email || "",
      contact: mobile || ""
    },
    notes: {
      product: purpose
    },
    theme: {
      color: "#25D366"
    }
  };

  res.json(payload);
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
