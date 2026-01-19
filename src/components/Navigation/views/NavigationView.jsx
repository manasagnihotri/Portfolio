import React from 'react';
import navigationModel from '../models/navigationModel';
import navigationController from '../controllers/navigationController';

export default function NavigationView() {
  const navItems = navigationModel.getNavItems();
  const socialLinks = navigationModel.getSocialLinks();

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-black bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        {/* Nav Items - Hidden on mobile */}
        <div className="flex gap-10 max-md:hidden text-center">
          {navItems.map((item) => (
            <div 
              key={item.id}
              className="cursor-pointer text-black transition duration-300 font-bold uppercase text-lg md:text-xl tracking-wide group relative pb-1" 
              onClick={() => navigationController.handleNavClick(item.id)}
            >
              {item.label}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:scale-110 transition duration-300 font-bold text-lg md:text-xl uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
