import React from 'react';
import contactModel from '../models/contactModel';
import contactController from '../controllers/contactController';

export default function ContactView() {
  const contactInfo = contactModel.getContactInfo();
  const channels = contactModel.getContactChannels();

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* CTA Section */}
        <div className="bg-black border-8 border-black p-16 md:p-20 mb-16 shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-8 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-base md:text-lg text-white mb-10 max-w-2xl mx-auto leading-relaxed font-semibold">
            I'm always interested in hearing about new projects and opportunities. Let's create something amazing.
          </p>
          <button
            onClick={() => contactController.handleContactClick('mailto:maa2416@columbia.edu', 'email')}
            className="px-10 py-4 bg-yellow-300 text-black font-bold uppercase text-base tracking-wider hover:scale-110 transition transform shadow-lg hover:shadow-xl border-4 border-black"
          >
            Start a Conversation
          </button>
        </div>

        {/* Main Contact Section */}
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
          GET IN TOUCH
        </h2>
        <p className="text-base md:text-lg text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed font-semibold">
          {contactInfo.message}
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {channels.map((channel) => (
            <button
              key={channel.name}
              onClick={() => contactController.handleContactClick(channel.url, channel.type)}
              className={`px-8 py-3 font-black uppercase text-sm md:text-base transition transform hover:scale-110 hover:shadow-lg shadow-md ${
                channel.name === 'Email'
                  ? 'bg-black text-white hover:bg-slate-800 border-4 border-black'
                  : 'border-4 border-black text-black hover:bg-slate-100'
              }`}
            >
              {channel.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
