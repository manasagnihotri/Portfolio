import React from 'react';
import skillsModel from '../models/skillsModel';

export default function SkillsView() {
  const skillCategories = skillsModel.getSkillCategories();

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="section-title">Technical Skills</div>
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-cyan-300 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
