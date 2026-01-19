// Particle Canvas Controller - Handles animation and interactions
import particleCanvasModel from '../models/particleCanvasModel';

const particleCanvasController = {
  animate(timestamp) {
    const model = particleCanvasModel;
    const canvas = model.getCanvas();
    const ctx = model.getContext();
    const particleSystem = model.getParticleSystem();

    if (!model.isRunning) return;

    // Clear canvas
    ctx.fillStyle = 'rgba(248, 250, 252, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Emit particles
    particleSystem.emitRandom();

    // Update physics
    particleSystem.update();

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

  emitAtPosition(x, y, count = 3) {
    const model = particleCanvasModel;
    if (model.particleSystem) {
      model.particleSystem.emit(x, y, count);
    }
  }
};

export default particleCanvasController;
