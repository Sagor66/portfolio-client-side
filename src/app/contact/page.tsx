"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wide text-brand-primary uppercase bg-blue-50 rounded-full">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Let's <span className="text-brand-primary">Connect</span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Have a project in mind or want to discuss backend architecture?
              I'm always open to new opportunities and interesting
              conversations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-blue-50 text-brand-primary rounded-xl"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:shazzad.sagor@outlook.com"
                      className="text-lg font-medium text-slate-900 hover:text-brand-primary transition-colors"
                    >
                      shazzad.sagor@outlook.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-blue-50 text-brand-primary rounded-xl"
                  >
                    <MapPin className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">
                      Location
                    </p>
                    <p className="text-lg font-medium text-slate-900">
                      Sylhet, Bangladesh
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-blue-50 text-brand-primary rounded-xl"
                  >
                    <Phone className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/8801723624896"
                      className="text-lg font-medium text-slate-900 hover:text-brand-primary transition-colors"
                    >
                      +880 1723-624896
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-brand-primary to-blue-600 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 right-0 p-4 opacity-10"
              >
                <Send className="w-32 h-32" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                Ready to start a project?
              </h3>
              <p className="text-blue-100 mb-6 relative z-10">
                I'm currently available for freelance work and full-time
                opportunities. Let's build something amazing together.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send Me a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
