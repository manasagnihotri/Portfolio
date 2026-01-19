import React from 'react';
import contactModel from '../models/contactModel';
import contactController from '../controllers/contactController';

export default function ContactView() {
  const contactInfo = contactModel.getContactInfo();
  const channels = contactModel.getContactChannels();

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 gradient-text">{contactInfo.heading}</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          {contactInfo.message}
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {channels.map((channel) => (
            <button
              key={channel.name}
              onClick={() => contactController.handleContactClick(channel.url, channel.type)}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                channel.name === 'Email'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50'
                  : 'border border-cyan-500 hover:bg-cyan-500/10'
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
