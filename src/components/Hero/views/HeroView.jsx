import React from 'react';
import heroModel from '../models/heroModel';
import heroController from '../controllers/heroController';

export default function HeroView() {
  const heroData = heroModel.getHeroData();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 float-animation">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold gradient-text">
              MA
            </div>
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">{heroData.name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-cyan-300 mb-4">
          {heroData.title}
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {heroData.bio}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => heroController.handleViewWorkClick()}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
          >
            View My Work
          </button>
          <button 
            onClick={() => heroController.handleContactClick()}
            className="px-8 py-3 border border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition"
          >
            Get in Touch
          </button>
        </div>
        <div className="mt-12 flex justify-center gap-6 text-sm text-slate-400 flex-wrap">
          <span>📍 {heroData.contact.location}</span>
          <span>📧 {heroData.contact.email}</span>
          <span>📱 {heroData.contact.phone}</span>
        </div>
      </div>
    </section>
  );
}
