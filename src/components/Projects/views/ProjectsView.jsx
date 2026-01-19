import React from 'react';
import projectsModel from '../models/projectsModel';

export default function ProjectsView() {
  const projects = projectsModel.getProjects();

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-title">Featured Projects</div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-effect p-8 rounded-lg card-hover flex flex-col">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{project.subtitle}</p>
              <p className="text-slate-300 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
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
