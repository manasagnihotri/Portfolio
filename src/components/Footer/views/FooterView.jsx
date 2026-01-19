import React from 'react';
import footerModel from '../models/footerModel';

export default function FooterView() {
  const copyright = footerModel.getCopyright();

  return (
    <footer className="border-t-4 border-black bg-white py-16 px-6 mt-20 shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-black uppercase text-sm tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><a href="#about" className="hover:text-black font-semibold transition">About</a></li>
              <li><a href="#experience" className="hover:text-black font-semibold transition">Experience</a></li>
              <li><a href="#projects" className="hover:text-black font-semibold transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-black font-semibold transition">Skills</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-black uppercase text-sm tracking-wider mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><a href="https://linkedin.com" className="hover:text-black font-semibold transition">LinkedIn</a></li>
              <li><a href="https://github.com" className="hover:text-black font-semibold transition">GitHub</a></li>
              <li><a href="mailto:maa2416@columbia.edu" className="hover:text-black font-semibold transition">Email</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black uppercase text-sm tracking-wider mb-4">Location</h3>
            <p className="text-sm text-slate-700 font-semibold">New York, NY</p>
            <p className="text-sm text-slate-700 font-semibold mt-2">(332) 267-9106</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-black my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-black font-bold text-sm uppercase tracking-wide">{copyright}</p>
          <p className="text-slate-600 text-xs mt-3">Designed & Built by Manas Agnihotri</p>
        </div>
      </div>
    </footer>
  );
}
