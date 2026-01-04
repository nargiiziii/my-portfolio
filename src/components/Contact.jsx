import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-section">
      <form className="contact-form">
        <motion.input
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          type="text"
          placeholder="Name"
          className="contact-input"
          onFocus={(e) => (e.target.style.borderColor = "#A78BFA")}
          onBlur={(e) =>
            (e.target.style.borderColor = "rgba(255, 255, 255, 0.1)")
          }
        />
        <motion.input
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          type="email"
          placeholder="Email"
          className="contact-input"
          onFocus={(e) => (e.target.style.borderColor = "#A78BFA")}
          onBlur={(e) =>
            (e.target.style.borderColor = "rgba(255, 255, 255, 0.1)")
          }
        />
        <motion.textarea
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          rows="5"
          placeholder="Message"
          className="contact-textarea"
          onFocus={(e) => (e.target.style.borderColor = "#A78BFA")}
          onBlur={(e) =>
            (e.target.style.borderColor = "rgba(255, 255, 255, 0.1)")
          }
        />
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="contact-button"
        >
          Send Transmission
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
