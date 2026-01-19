// Particle Canvas Controller - Handles animation and interactions
import particleCanvasModel from '../models/particleCanvasModel';

const particleCanvasController = {
  animate(timestamp) {
    const model = particleCanvasModel;
    const canvas = model.getCanvas();
    const ctx = model.getContext();
    const particleSystem = model.getParticleSystem();

    if (!model.isRunning) return;

    // Clear canvas with semi-transparent background for trail effect
    ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Emit particles
    particleSystem.emitRandom();

    // Update physics
    particleSystem.update();

    // Update wind
    model.incrementTime();
    particleSystem.updateWind(model.getTime());

    // Render particles
    particleSystem.render(ctx);

    // Continue animation
    if (model.isRunning) {
      model.animationId = requestAnimationFrame((t) => this.animate(t));
    }
  },

  startAnimation() {
    const model = particleCanvasModel;
    model.setRunning(true);
    if (model.isInitialized()) {
      this.animate(0);
    }
  },

  stopAnimation() {
    const model = particleCanvasModel;
    model.setRunning(false);
    if (model.animationId) {
      cancelAnimationFrame(model.animationId);
    }
  },

  resizeCanvas(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },

  handleWindowResize(canvas) {
    this.resizeCanvas(canvas);
  },

  emitAtPosition(x, y, count = 5) {
    const model = particleCanvasModel;
    if (model.particleSystem) {
      model.particleSystem.emit(x, y, count);
    }
  }
};

export default particleCanvasController;
