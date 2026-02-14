"use client";

import { ValidationError, useForm } from "@formspree/react";
import { CheckCircle2, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzbqnljl");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12"
      >
        <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-700 mb-2">
            Message Sent!
          </h3>
          <p className="text-green-600">
            Thank you for reaching out. I'll get back to you soon.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden subject field for Formspree */}
      <input
        type="hidden"
        name="_subject"
        value="New Message from Portfolio Site"
      />
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold text-slate-700 mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-bold text-slate-700 mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="john@example.com"
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-bold text-slate-700 mb-2"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your project or just say hi..."
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-brand-primary to-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
};

export default ContactForm;
