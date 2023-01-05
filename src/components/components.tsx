import * as React from 'react';

export const Card = ( p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> ) => (
  <div {...p} className={'bg-white m-2 rounded-xl p-4 shadow-lg min-w-min' + ( p.className ? ` ${ p.className }` : '' )}>
    {p.children}
  </div>
);

export const Button = ( p: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> ) => (
  <button {...p} className={'p-2 border border-gray-900 rounded-xl hover:border-blue-700 hover:text-blue-700 transition-colors px-8' + ( p.className ? ` ${ p.className }` : '' )} >
    {p.children}
  </button>
);