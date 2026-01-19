import React from 'react';
import footerModel from '../models/footerModel';

export default function FooterView() {
  const copyright = footerModel.getCopyright();

  return (
    <footer className="border-t border-slate-700/50 py-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
        <p>{copyright}</p>
      </div>
    </footer>
  );
}
