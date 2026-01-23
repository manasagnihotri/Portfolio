import React, { useState } from 'react';
import experienceModel from '../models/experienceModel';
import DetailModalView from '../../DetailModal/views/DetailModalView';

export default function ExperienceView() {
  const experiences = experienceModel.getExperiences();
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  const colors = [
    { bg: 'bg-purple-400', border: 'border-black' },
    { bg: 'bg-blue-400', border: 'border-black' },
    { bg: 'bg-indigo-400', border: 'border-black' },
  ];

  const getColor = (index) => colors[index % colors.length];

  return (
    <>
      <section id="experience" className="py-20 px-6 bg-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-black uppercase tracking-tight">
              Experience
            </h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const color = getColor(index);
              return (
                <div
                  key={index}
                  onClick={() => handleExperienceClick(exp)}
                  className={`${color.bg} border-8 ${color.border} p-8 md:p-10 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-3 shadow-lg hover:brightness-110`}
                  style={{
                    boxShadow: 'inset -4px -4px 0px rgba(0, 0, 0, 0.2), inset 4px 4px 0px rgba(255, 255, 255, 0.3), 0 8px 0px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Period */}
                  <div className="mb-4 inline-block">
                    <div className="bg-black text-white px-4 py-2 font-black text-xs md:text-sm uppercase tracking-wider">
                      {exp.period}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-black text-black uppercase mb-2 tracking-tight">
                    {exp.title}
                  </h3>

                  {/* Company */}
                  <p className="text-black font-bold text-base md:text-lg mb-6">
                    {exp.company}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.slice(0, 2).map((achievement, idx) => (
                      <li key={idx} className="text-black font-semibold text-sm md:text-base flex items-start gap-3">
                        <span className="flex-shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Click to view */}
                  <div className="text-black font-black text-sm uppercase hover:underline">
                    Click to view →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DetailModalView
        isOpen={!!selectedExperience}
        type="experience"
        data={selectedExperience}
        onClose={handleCloseModal}
      />
    </>
  );
}


