import React, { useState } from 'react';
import projectsModel from '../models/projectsModel';
import DetailModalView from '../../DetailModal/views/DetailModalView';

export default function ProjectsView() {
  const projects = projectsModel.getProjects();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const colors = [
    { bg: 'bg-yellow-300', border: 'border-black' },
    { bg: 'bg-green-400', border: 'border-black' },
    { bg: 'bg-pink-400', border: 'border-black' },
    { bg: 'bg-purple-400', border: 'border-black' },
    { bg: 'bg-orange-400', border: 'border-black' },
  ];

  const getColor = (index) => colors[index % colors.length];

  return (
    <>
      <section id="projects" className="py-20 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-black uppercase tracking-tight">
              Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const color = getColor(index);
              return (
                <div
                  key={index}
                  onClick={() => handleProjectClick(project)}
                  className={`${color.bg} border-8 ${color.border} p-8 md:p-10 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-3 shadow-lg hover:brightness-110`}
                  style={{
                    boxShadow: 'inset -4px -4px 0px rgba(0, 0, 0, 0.2), inset 4px 4px 0px rgba(255, 255, 255, 0.3), 0 8px 0px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Category Tag */}
                  <div className="mb-4 inline-block">
                    <div className="bg-black text-white px-4 py-2 font-black text-xs md:text-sm uppercase tracking-wider">
                      {project.category || 'PROJECT'}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black font-semibold text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="bg-black text-white px-3 py-1 font-bold text-xs uppercase">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Click to view - Now more prominent */}
                  <div className="inline-block mt-4 text-black font-black text-sm uppercase tracking-wider group">
                    <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Click to view 
                      <span className="text-lg">→</span>
                    </span>
                    <div className="h-1 bg-black w-full mt-1 transform origin-left group-hover:scale-x-110 transition-transform duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DetailModalView
        isOpen={!!selectedProject}
        type="project"
        data={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
}

