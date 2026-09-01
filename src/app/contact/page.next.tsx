
'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import SEO from '../../components/SEO';

const LegacyContactPage = () => {
  const [todayDate, setTodayDate] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
    setTodayDate(new Date().toLocaleDateString());
  }, []);

  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    errors: [] as any[],
  });
  const navigate = useNavigate();

  const handleClose = () => {
    setState({ submitting: false, succeeded: false, errors: [] });
    navigate("/");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, submitting: true }));
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add _subject
    if (!formData.has("_subject")) {
      formData.append(
        "_subject",
        "Commercial Mushroom Setup Enquiry from " + formData.get("name"),
      );
    }

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        },
      );

      if (response.ok) {
        setState({ submitting: false, succeeded: true, errors: [] });
        form.reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || await response.text() || 'Something went wrong';
        console.error("[FormSubmit] Server error:", errorMessage);
        setState({
          submitting: false,
          succeeded: false,
          errors: [{ message: errorMessage }],
        });
      }
    } catch (err: any) {
      console.error("[FormSubmit] Email submit failed:", err);
      setState({
        submitting: false,
        succeeded: false,
        errors: [{ message: err.message || String(err) }],
      });
    }
  };

  const webmcpSchema = {
    "@context": "https://webmcp.dev",
    "@type": "WebMCP",
    tool: {
      name: "mushroom_farming_enquiry_form",
      description:
        "Submit a commercial mushroom farming business or factory setup enquiry. Available for states like Madhya Pradesh, Maharashtra, UP, Bihar, etc.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string", description: "Full name of the inquirer" },
          email: {
            type: "string",
            format: "email",
            description: "Email address for communications",
          },
          message: {
            type: "string",
            description:
              "Detailed requirements, farm capacity, or location questions for custom setup",
          },
        },
        required: ["name", "email", "message"],
      },
    },
  };

  return (
    <div className="min-h-screen   overflow-x-hidden pt-24 md:pt-32 pb-12">
      <SEO
        title="Contact Us for Mushroom Setup & Consultancy | Pan India"
        description="Get a consultation for your custom mushroom farm setup. Expert advice on mushroom training, spawn supply, and turnkey projects across India."
        schemas={[webmcpSchema]}
      />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-6">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-start/10 border border-primary-start/20 text-[10px] font-black text-primary-start uppercase tracking-widest mb-4">
              Contact Us
            </div>
            <h1 className="text-xl md:text-6xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight leading-tight">
              Start Your Commercial{" "}
              <span className="text-primary-start">Mushroom Farming</span>{" "}
              Business Worldwide
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-sm max-w-2xl mx-auto font-medium px-2">
              Ready to build a commercial factory or a small unit? Our
              specialists are here to guide you through every step of button and
              oyster mushroom production.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-start">
          {/* Details Column */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                {
                  icon: Phone,
                  label: "Call Operations",
                  values: ["+91 9203544140", "+91 7440806690"],
                  href: "tel:+919203544140",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp Support",
                  values: ["Chat with Expert"],
                  isWhatsApp: true,
                  href: "https://wa.me/919203544140",
                },
                {
                  icon: Mail,
                  label: "Email Support",
                  values: ["support@organicmushroomsfarm.com"],
                  href: "mailto:support@organicmushroomsfarm.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.isWhatsApp ? "_blank" : undefined}
                  rel={item.isWhatsApp ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-3 bg-white/[0.03] border dark:border-white/10 border-black/10 rounded-2xl group transition-all hover:bg-white/[0.06] ${item.isWhatsApp ? "ring-1 ring-green-500/30" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${item.isWhatsApp ? "bg-green-500/20 text-green-400" : "bg-primary-start/20 text-primary-start"}`}
                  >
                    <item.icon
                      size={22}
                      className={item.isWhatsApp ? "animate-pulse" : ""}
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm md:text-sm font-bold dark:text-white text-slate-900 tracking-tight">
                      {item.values[0]}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Map Optimized for Mobile */}
            <div className="rounded-2xl border dark:border-white/10 border-black/10 overflow-hidden h-44 md:h-64 dark:bg-white/5 bg-black/5 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6593645366115!2d79.86616429726563!3d23.186307199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0dbcbb97%3A0x15f3810ec56063b4!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1713881900000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>

            <div className="p-3 bg-white/[0.03] border dark:border-white/10 border-black/10 rounded-2xl flex items-start gap-4">
              <MapPin className="text-primary-start shrink-0" size={20} />
              <div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">
                  Office Address
                </div>
                <div className="text-sm font-bold dark:text-white text-slate-900 tracking-tight leading-snug">
                  Katangi Road, Jabalpur, Madhya Pradesh – 483105, India
                </div>
              </div>
            </div>
          </div>

          {/* Clean Enquiry Form */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 1, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/[0.02] border dark:border-white/10 border-black/10 p-3 md:p-10 rounded-3xl"
            >
              <div className="mb-5 text-center md:text-left">
                <h2 className="text-xl md:text-sm font-bold dark:text-white text-slate-900 mb-2">
                  Mushroom Farming Setup Enquiry Form
                </h2>
                <p className="dark:text-slate-400 text-slate-600 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">
                  Please fill in your details for a callback regarding
                  commercial mushroom setups.
                </p>
              </div>

              <div className="space-y-6 text-center py-2">
                <h3 className="text-xl font-bold dark:text-white text-slate-900">Get Expert Setup Advice</h3>
                <p className="text-slate-500 text-sm">
                  Click below to submit your location and requirements in our main enquiry form.
                </p>
                <Link href="/enquiry"
                  className="inline-block w-full px-6 py-2 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide hover:shadow-lg transition-all"
                >
                  Enquiry Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CompanyProfile />

      {/* Success Modal */}
      <AnimatePresence>
        {state.succeeded && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-3">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              onClick={handleClose}
            ></motion.div>

            <motion.div
              initial={{ opacity: 1, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="relative glass p-3 md:p-12 rounded-3xl border dark:border-white/10 border-black/10 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-sm font-bold dark:text-white text-slate-900 mb-4">
                Enquiry Received
              </h2>
              <p className="dark:text-slate-400 text-slate-600 text-sm mb-5 leading-relaxed font-medium">
                Thank you! Your commercial setup enquiry has been received. Our
                expert will call you within{" "}
                <span className="dark:text-white text-slate-900 font-bold underline decoration-primary-start underline-offset-4">
                  24 hours
                </span>
                .
              </p>
              <button
                onClick={handleClose}
                className="w-full py-2 rounded-xl btn-primary font-bold text-xs uppercase tracking-widest transition-all shadow-xl"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LegacyContactPage;
