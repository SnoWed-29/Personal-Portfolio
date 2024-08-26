import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const particles = Array.from({ length: 10 });

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'linear-gradient(135deg, #f5f7f8, #f4ce14, #379777, #45474b)',
      backgroundSize: '400% 400%', // Smooth gradient animation
      animation: 'gradientAnimation 15s ease infinite'
    }}>
      {/* Generate floating particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light particles
            borderRadius: '50%',
            opacity: 0.7,
          }}
          animate={{
            x: [0, 20 - Math.random() * 40], // Random horizontal movement
            y: [0, 20 - Math.random() * 40], // Random vertical movement
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Add CSS for gradient animation
const styles = `
@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);

export default AnimatedBackground;
