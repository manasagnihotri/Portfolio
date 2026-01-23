import React from 'react';
import heroModel from '../models/heroModel';

export default function HeroView() {
  const heroData = heroModel.getHeroData();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white relative overflow-hidden">
      {/* Decorative colored boxes in background */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 border-4 border-black opacity-20 -z-10 shadow-2xl transform -rotate-6"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-green-400 border-4 border-black opacity-20 -z-10 shadow-2xl transform rotate-3"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-400 border-4 border-black opacity-20 -z-10 shadow-2xl transform -rotate-2"></div>
      
      <div className="max-w-4xl text-center space-y-8">
        {/* Avatar Circle - Outline style with thick border */}
        <div className="flex justify-center">
          <div className="w-40 h-40 mx-auto rounded-full border-8 border-black flex items-center justify-center float-animation bg-white shadow-2xl transform hover:scale-110 hover:shadow-3xl transition-all duration-300">
            <span className="text-6xl font-bold text-black">MA</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          {heroData.name}
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl text-black font-bold">
          {heroData.title}
        </h2>

        {/* Bio */}
        <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
          {heroData.bio}
        </p>

        {/* Contact Info */}
        <div className="mt-12 flex justify-center gap-8 text-sm text-slate-600 flex-wrap">
          <span className="flex items-center gap-2">
            <span>📍</span> {heroData.contact.location}
          </span>
          
        </div>

        
      </div>
    </section>
  );
}
