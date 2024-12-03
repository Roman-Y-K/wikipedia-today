import React from 'react';

import { useAppSelector } from '../hooks';

const EventsList: React.FC = () => {
  const { events } = useAppSelector((state) => state.events);

  if (!events.length) return;

  return (
    <ul className="grid py-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <li
          key={event.text}
          className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
        >
          <h2 className="text-lg font-bold text-gray-800 mb-2">{event.year}</h2>
          <p className="text-gray-700">{event.text}</p>
          <a
            href={event.pages[0]?.content_urls.desktop.page}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-4 block"
          >
            Read more →
          </a>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(EventsList);
