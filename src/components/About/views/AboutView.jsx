import React from 'react';
import aboutModel from '../models/aboutModel';

export default function AboutView() {
  const aboutData = aboutModel.getAboutData();

  return (
    <section id="about" className="py-20 px-6 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 uppercase tracking-tight">
          ABOUT ME
        </h2>
        
        {/* Unified Box - Intro + Highlights */}
        <div 
          className="bg-yellow-300 border-8 border-black p-10 md:p-14 shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          style={{
            boxShadow: 'inset -4px -4px 0px rgba(0, 0, 0, 0.2), inset 4px 4px 0px rgba(255, 255, 255, 0.3), 0 8px 0px rgba(0, 0, 0, 0.15)'
          }}
        >
          {/* Intro Section */}
          <div className="mb-12 pb-12 border-b-4 border-black">
            <p className="text-base md:text-lg text-black leading-relaxed font-bold uppercase">
              {aboutData.description.intro}
            </p>
          </div>

          {/* Highlights Section */}
          <h3 className="text-2xl md:text-3xl font-bold text-black uppercase mb-10 tracking-tight">My Focus Areas</h3>
          <div className="space-y-8">
            {aboutData.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="text-4xl flex-shrink-0 pt-1">{highlight.icon}</div>
                <div className="space-y-2">
                  <p className="font-bold text-black text-base uppercase tracking-wider">{highlight.title}</p>
                  <p className="text-sm text-black font-bold uppercase leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
