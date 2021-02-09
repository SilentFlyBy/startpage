import React from 'react';
import './Card.css';

export interface LinkDescription {
  label: string;
  url: string;
}

interface Props {
  headline: string;
  color: string;
  links: LinkDescription[];
  className?: string;
}

export const Card = ({ headline, links, color, className }: Props) => (
  <div
    className={`m-2 rounded bg-gray-200 shadow overflow-hidden ${className}`}
  >
    <div className="py-4 rounded-t" style={{ backgroundColor: color }}>
      <h2 className="m-0 text-center text-white text-2xl font-bold">
        {headline}
      </h2>
    </div>
    <ul className="card-links">
      {links.map(l => (
        <li key={l.label}>
          <a href={l.url}>{l.label}</a>
        </li>
      ))}
    </ul>
  </div>
);
