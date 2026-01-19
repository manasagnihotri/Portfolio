import React from 'react';

export default function DetailModalView({ isOpen, type, data, onClose }) {
  if (!isOpen || !data) return null;

  const isExperience = type === 'experience';

  const colors = [
    { bg: 'bg-yellow-300', border: 'border-black' },
    { bg: 'bg-green-400', border: 'border-black' },
    { bg: 'bg-pink-400', border: 'border-black' },
    { bg: 'bg-purple-400', border: 'border-black' },
    { bg: 'bg-orange-400', border: 'border-black' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-2 md:p-4">
      <div className="bg-white rounded-lg w-full h-full md:h-[90vh] md:max-w-5xl overflow-hidden shadow-2xl flex flex-col border-4 border-black">
        {/* Header with colored background */}
        <div className={`${colors[0].bg} border-b-4 border-black p-6 md:p-8 flex justify-between items-start flex-shrink-0`}>
          <div className="flex-1 pr-4">
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight">
              {data.title}
            </h2>
            {isExperience ? (
              <p className="text-black text-sm md:text-base font-bold mt-2">{data.company}</p>
            ) : (
              <p className="text-black text-sm md:text-base font-bold mt-2">{data.category || data.subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-700 text-4xl font-black transition flex-shrink-0 ml-4 w-12 h-12 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto flex-1 p-6 md:p-8 bg-white">
          <div className="space-y-8 max-w-4xl">
            {/* Period Badge for Experience */}
            {isExperience && data.period && (
              <div className="inline-block">
                <div className="bg-black text-white px-4 py-2 font-black text-xs md:text-sm uppercase">
                  {data.period}
                </div>
              </div>
            )}

            {/* Main Description */}
            {data.detailedDescription && (
              <div className={`${colors[1].bg} border-4 border-black p-6 md:p-8`}>
                <h3 className="text-2xl md:text-3xl font-black text-black uppercase mb-4 tracking-tight">
                  {isExperience ? 'Role Overview' : 'Project Details'}
                </h3>
                <p className="text-black text-base md:text-lg font-bold leading-relaxed">
                  {data.detailedDescription}
                </p>
              </div>
            )}

            {/* Achievements/Outcomes Section */}
            {(isExperience ? data.achievements : data.outcomes) && (
              <div className={`${colors[2].bg} border-4 border-black p-6 md:p-8`}>
                <h3 className="text-2xl md:text-3xl font-black text-black uppercase mb-6 tracking-tight">
                  {isExperience ? 'Key Achievements' : 'Key Outcomes'}
                </h3>
                <div className="space-y-3">
                  {(isExperience ? data.achievements : data.outcomes).map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="text-black font-black text-xl flex-shrink-0">▪</span>
                      <p className="text-black text-base md:text-lg font-bold leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies/Skills Section */}
            {(isExperience ? data.technologies : data.skills) && (
              <div className={`${colors[3].bg} border-4 border-black p-6 md:p-8`}>
                <h3 className="text-2xl md:text-3xl font-black text-black uppercase mb-6 tracking-tight">
                  {isExperience ? 'Tech Stack' : 'Skills & Tools'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {(isExperience ? data.technologies : data.skills).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-black text-white px-4 py-2 font-black text-xs md:text-sm uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}




