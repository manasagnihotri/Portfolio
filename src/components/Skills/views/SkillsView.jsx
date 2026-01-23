import React from 'react';
import skillsModel from '../models/skillsModel';

export default function SkillsView() {
  const skillCategories = skillsModel.getSkillCategories();

  const colors = [
    'bg-green-400',
    'bg-pink-400',
    'bg-orange-400',
    'bg-blue-400',
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 uppercase tracking-tight">
          TECHNICAL SKILLS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`${colors[index % colors.length]} border-8 border-black p-8 md:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300`}
              style={{
                boxShadow: 'inset -4px -4px 0px rgba(0, 0, 0, 0.2), inset 4px 4px 0px rgba(255, 255, 255, 0.3), 0 8px 0px rgba(0, 0, 0, 0.15)'
              }}
            >
              <h3 className="text-2xl md:text-3xl font-black text-black uppercase mb-8 tracking-tight">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="bg-black text-white px-4 py-2 font-black text-xs md:text-sm uppercase">
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
