import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from './TextReveal';

const Layer = ({ id, title, text, children, zIndex = 1 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id={id}
      ref={ref}
      className="layer-content"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem', // Fallback, overridden by CSS class on mobile
        overflow: 'hidden',
        zIndex: zIndex
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          y
        }}
      >
        {children}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        style={{ textAlign: 'center', maxWidth: '800px', zIndex: 2 }}
      >
        <h1 style={{
          fontSize: '4rem',
          marginBottom: '2rem',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          background: 'linear-gradient(to right, #fff, #A78BFA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {title}
        </h1>
        <div style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#B0B0B0' }}>
          <TextReveal text={text} />
        </div>
      </motion.div>
    </section>
  );
};

export default Layer;
