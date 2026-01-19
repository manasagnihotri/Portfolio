import React from 'react';
import aboutModel from '../models/aboutModel';

export default function AboutView() {
  const aboutData = aboutModel.getAboutData();

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 uppercase tracking-tight">
          ABOUT ME
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Text Content in Pink Box */}
          <div className="bg-pink-400 border-8 border-black p-10 md:p-12 shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 space-y-8">
            <p className="text-base md:text-lg text-black leading-relaxed font-bold uppercase">
              {aboutData.description.intro}
            </p>
            <p className="text-base md:text-lg text-black leading-relaxed font-bold uppercase">
              {aboutData.description.expertise}
            </p>
          </div>

          {/* Right Column - Highlights Box in Yellow */}
          <div className="bg-yellow-300 border-8 border-black p-10 md:p-12 shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-fit sticky top-20">
            <h3 className="text-2xl md:text-3xl font-bold text-black uppercase mb-12 tracking-tight">Key Highlights</h3>
            <div className="space-y-10">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0 pt-1">{highlight.icon}</div>
                  <div className="space-y-2">
                    <p className="font-bold text-black text-sm uppercase tracking-wider">{highlight.title}</p>
                    <p className="text-xs text-black font-bold uppercase leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
