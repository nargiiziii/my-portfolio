import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div style={{ width: '100%', maxWidth: '600px', marginTop: '2rem' }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <motion.input
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          type="text"
          placeholder="Name"
          style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#A78BFA'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
        />
        <motion.input
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          type="email"
          placeholder="Email"
          style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#A78BFA'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
        />
        <motion.textarea
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          rows="5"
          placeholder="Message"
          style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none',
            resize: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#A78BFA'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
        />
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          style={{
            padding: '1rem',
            background: 'linear-gradient(90deg, #A78BFA, #8BEAFF)',
            border: 'none',
            borderRadius: '4px',
            color: '#0A0A1A',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Send Transmission
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
