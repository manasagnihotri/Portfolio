import React, { useEffect, useRef } from 'react';
import particleCanvasModel from '../models/particleCanvasModel';
import particleCanvasController from '../controllers/particleCanvasController';

export default function ParticleCanvasView() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize canvas size
    particleCanvasController.resizeCanvas(canvas);

    // Initialize particle system
    particleCanvasModel.initialize(canvas);

    // Start animation
    particleCanvasController.startAnimation();

    // Handle window resize
    const handleResize = () => {
      particleCanvasController.handleWindowResize(canvas);
    };

    // Emit particles on mouse move
    const handleMouseMove = (e) => {
      if (Math.random() > 0.8) {
        particleCanvasController.emitAtPosition(e.clientX, e.clientY, 1);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      particleCanvasController.stopAnimation();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background: 'transparent',
        zIndex: 1
      }}
    />
  );
}
