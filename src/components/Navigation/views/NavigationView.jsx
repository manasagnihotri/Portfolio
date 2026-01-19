import React from 'react';
import navigationModel from '../models/navigationModel';
import navigationController from '../controllers/navigationController';

export default function NavigationView() {
  const navItems = navigationModel.getNavItems();
  const socialLinks = navigationModel.getSocialLinks();

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b border-slate-700/50 relative">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">MA</div>
        <div className="flex gap-8 max-md:hidden">
          {navItems.map((item) => (
            <div 
              key={item.id}
              className="nav-link cursor-pointer" 
              onClick={() => navigationController.handleNavClick(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
