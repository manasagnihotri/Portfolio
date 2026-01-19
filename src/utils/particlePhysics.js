// Particle Physics Engine - Standard Implementation
// Simple particle system with basic physics

class Particle {
  constructor(x, y, canvas) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    
    // Simple velocity
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5 - 0.5; // Slight downward bias
    
    // Properties
    this.radius = 1.5;
    this.lifetime = 100;
    this.maxLifetime = 100;
    this.color = 'rgba(56, 189, 248, 0.5)'; // Simple cyan color
    this.shimmer = Math.sin(Math.random() * Math.PI); // Subtle shimmer variation
  }

  // Update particle position
  update() {
    // Simple gravity
    this.vy += 0.05;
    
    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;
    
    // Decrease lifetime
    this.lifetime -= 1;
    
    // Boundary wrapping
    if (this.x < 0) this.x = this.canvas.width;
    if (this.x > this.canvas.width) this.x = 0;
    if (this.y < 0) this.y = this.canvas.height;
    if (this.y > this.canvas.height) this.y = 0;
  }

  // Render particle to canvas
  render(ctx) {
    const alpha = this.lifetime / this.maxLifetime;
    // Very minimal glow effect
    const glowAlpha = alpha * 0.2 * (0.8 + this.shimmer * 0.2);
    
    ctx.globalAlpha = glowAlpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius + 0.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Core particle with slightly higher opacity
    ctx.globalAlpha = glowAlpha * 1.5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.globalAlpha = 1;
  }

  // Check if particle is dead
  isDead() {
    return this.lifetime <= 0;
  }
}

class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.particles = [];
    this.maxParticles = 50;
    this.emissionRate = 1;
  }

  // Emit new particles
  emit(x, y, count = 1) {
    for (let i = 0; i < count; i++) {
      if (this.particles.length < this.maxParticles) {
        this.particles.push(new Particle(x, y, this.canvas));
      }
    }
  }

  // Emit particles at random positions
  emitRandom() {
    const x = Math.random() * this.canvas.width;
    const y = Math.random() * this.canvas.height * 0.3; // Top third of screen
    this.emit(x, y, this.emissionRate);
  }

  // Update all particles
  update() {
    this.particles.forEach(particle => {
      particle.update();
    });

    // Remove dead particles
    this.particles = this.particles.filter(p => !p.isDead());
  }

  // Render all particles
  render(ctx) {
    this.particles.forEach(particle => {
      particle.render(ctx);
    });
  }

  // Get particle count
  getParticleCount() {
    return this.particles.length;
  }
}

export { Particle, ParticleSystem };
