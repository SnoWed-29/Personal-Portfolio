import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
const ScrollEffect = () => {
  const { scrollYProgress } = useViewportScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  // Parallax effect for various elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]); // Moves slower than scroll
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]); // Moves faster than scroll

  return (
    <>
      {/* Gradient Background with Floating Particles */}
      <div style={{ position: 'relative' }}>
        {/* Keep the AnimatedBackground from the previous example */}
        <AnimatedBackground />

        {/* Parallax Shape 1 (moves slower) */}
        <motion.div
          style={{
            position: 'absolute',
            top: '30%',
            left: '10%',
            width: '150px',
            height: '150px',
            backgroundColor: '#379777',
            borderRadius: '50%',
            y: y1, // Parallax movement based on scroll
          }}
        />

        {/* Parallax Shape 2 (moves faster) */}
        <motion.div
          style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '200px',
            height: '200px',
            backgroundColor: '#f4ce14',
            borderRadius: '50%',
            y: y2, // Faster movement
          }}
        />

        {/* Scroll-triggered Section Animation */}
        <div style={{ height: `${windowHeight}px`, padding: '50px', textAlign: 'center' }}>
          <motion.div
            style={{
              fontSize: '30px',
              fontWeight: 'bold',
              marginTop: '300px',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }} // Trigger animation when in view
            transition={{ duration: 0.8 }}
          >
            Welcome to My Portfolio
          </motion.div>
        </div>

        <div style={{ height: `${windowHeight}px`, padding: '50px', textAlign: 'center' }}>
          <motion.div
            style={{
              fontSize: '30px',
              fontWeight: 'bold',
              marginTop: '300px',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }} // Trigger animation when in view
            transition={{ duration: 0.8 }}
          >
            Scroll to Discover More
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ScrollEffect;
