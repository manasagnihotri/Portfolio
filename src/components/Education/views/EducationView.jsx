import React from 'react';
import educationModel from '../models/educationModel';
import educationController from '../controllers/educationController';

export default function EducationView() {
  const educationList = educationModel.getEducation();

  return (
    <section id="education" className="py-20 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 uppercase tracking-tight">
          EDUCATION
        </h2>
        
        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <div
              key={index}
              onClick={() => educationController.handleEducationClick(edu)}
              className="bg-purple-400 border-8 border-black p-8 md:p-10 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 hover:scale-105 cursor-pointer rounded hover:brightness-110"
              style={{
                boxShadow: 'inset -4px -4px 0px rgba(0, 0, 0, 0.2), inset 4px 4px 0px rgba(255, 255, 255, 0.3), 0 8px 0px rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Degree */}
              <h3 className="text-2xl md:text-3xl font-bold text-black uppercase mb-4 tracking-tight">
                {edu.degree}
              </h3>

              {/* Institution and Period */}
              <p className="text-base md:text-lg font-bold text-black uppercase tracking-wider mb-4">
                {edu.institution}
              </p>

              {/* Period */}
              <div className="inline-block bg-black text-white px-4 py-2 font-bold text-xs uppercase tracking-wider mb-4">
                {edu.period}
              </div>

              {/* Description */}
              <p className="text-base text-black font-bold uppercase leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
