// Particle Physics Engine
// Handles particle creation, physics simulation, and rendering

class Particle {
  constructor(x, y, canvas) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    
    // Velocity
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    
    // Acceleration
    this.ax = 0;
    this.ay = 0;
    
    // Properties
    this.radius = Math.random() * 2 + 1;
    this.mass = this.radius;
    this.friction = 0.95;
    this.lifetime = Math.random() * 100 + 50;
    this.maxLifetime = this.lifetime;
    this.color = `hsl(${Math.random() * 60 + 180}, 100%, ${Math.random() * 30 + 50}%)`;
  }

  // Apply force to particle
  applyForce(force) {
    this.ax += force.x / this.mass;
    this.ay += force.y / this.mass;
  }

  // Update particle physics each frame
  update() {
    // Apply friction
    this.vx *= this.friction;
    this.vy *= this.friction;
    
    // Apply acceleration to velocity
    this.vx += this.ax;
    this.vy += this.ay;
    
    // Reset acceleration each frame
    this.ax = 0;
    this.ay = 0;
    
    // Update position
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
    ctx.globalAlpha = alpha * 0.6;
    ctx.fillStyle = this.color;
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
    this.gravity = { x: 0, y: 0.1 };
    this.wind = { x: 0.01, y: 0 };
    this.maxParticles = 100;
    this.emissionRate = 2;
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
    const y = Math.random() * this.canvas.height;
    this.emit(x, y, this.emissionRate);
  }

  // Apply forces to all particles
  applyForces() {
    this.particles.forEach(particle => {
      particle.applyForce(this.gravity);
      particle.applyForce(this.wind);
    });
  }

  // Update all particles
  update() {
    this.applyForces();
    
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

  // Update wind with sine wave for natural motion
  updateWind(time) {
    this.wind.x = Math.sin(time * 0.005) * 0.05;
  }

  // Set gravity
  setGravity(x, y) {
    this.gravity = { x, y };
  }

  // Get particle count
  getParticleCount() {
    return this.particles.length;
  }
}

export { Particle, ParticleSystem };
