import React from 'react';
import aboutModel from '../models/aboutModel';

export default function AboutView() {
  const aboutData = aboutModel.getAboutData();

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-title">About Me</div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed">
              {aboutData.description.intro}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {aboutData.description.expertise}
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-cyan-300">Education</h3>
              {aboutData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-cyan-500/50 pl-4">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm text-slate-400">{edu.institution} • {edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-effect p-8 rounded-lg">
            <h3 className="text-lg font-semibold text-cyan-300 mb-6">Key Highlights</h3>
            <div className="space-y-4">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-2xl">{highlight.icon}</div>
                  <div>
                    <p className="font-semibold">{highlight.title}</p>
                    <p className="text-sm text-slate-400">{highlight.description}</p>
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
