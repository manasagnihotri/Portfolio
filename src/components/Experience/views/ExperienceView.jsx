import React from 'react';
import experienceModel from '../models/experienceModel';

export default function ExperienceView() {
  const experiences = experienceModel.getExperiences();

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="section-title">Professional Experience</div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-effect p-8 rounded-lg card-hover">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300">{exp.title}</h3>
                  <p className="text-slate-400">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-400">{exp.period}</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>✓ {achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
