import React, { useState } from 'react';
import { usePersistentState } from '../hooks/usePersistentState';
import { DropdownArrow } from '../images/icons';

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const searchEngines = [
  { name: 'Google', action: 'http://www.google.com/search', query: 'q' },
  { name: 'DuckDuckGo', action: 'https://duckduckgo.com/', query: 'q' },
  {
    name: 'Startpage',
    action: 'https://www.startpage.com/sp/search',
    query: 'query',
  },
];

export const SearchBox = ({ className, style }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchEngine, setSearchEngine] = usePersistentState(
    searchEngines[0],
    'searchEngine',
  );
  return (
    <div
      className={`flex bg-white mx-auto rounded ${
        dropdownOpen && 'rounded-bl-none'
      } ${className}`}
      style={style}
    >
      <div className="relative py-1 px-2 border-r bg-gradient-to-t from-gray-100 to-white rounded-l">
        <div
          className=" flex text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>{searchEngine.name}</span>
          <DropdownArrow className="block ml-1" style={{ width: '10px' }} />
        </div>
        {dropdownOpen && (
          <div className="absolute bg-white rounded-b top-8 min-w-full py-1 left-0 shadow">
            <ul>
              {searchEngines.map(search => (
                <li
                  key={search.name}
                  className="px-2 hover:bg-gray-500 hover:text-white hover:italic cursor-pointer"
                  onClick={() => {
                    setSearchEngine(search);
                    setDropdownOpen(false);
                  }}
                >
                  {search.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="py-1 px-2 flex-grow">
        <form action={searchEngine.action} method="get" target="_blank">
          <input
            type="text"
            placeholder="Suche"
            className="block w-full focus:outline-none"
            name={searchEngine.query}
          ></input>
        </form>
      </div>
    </div>
  );
};
