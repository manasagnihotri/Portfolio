// Particle Canvas Model - Manages particle system state

import { ParticleSystem } from "../../../utils/particlePhysics";

const particleCanvasModel = {
  canvas: null,
  ctx: null,
  particleSystem: null,
  animationId: null,
  isRunning: false,

  initialize(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particleSystem = new ParticleSystem(canvas);
    this.isRunning = true;
    return this.particleSystem;
  },

  getParticleSystem() {
    return this.particleSystem;
  },

  getCanvas() {
    return this.canvas;
  },

  getContext() {
    return this.ctx;
  },

  isInitialized() {
    return this.canvas !== null && this.ctx !== null;
  },

  setRunning(value) {
    this.isRunning = value;
  }
};

export default particleCanvasModel;
