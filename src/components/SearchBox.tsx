import React, { useState } from 'react';
import { useHasMounted } from '../hooks/useHasMounted';
import { usePersistentState } from '../hooks/usePersistentState';
import { DropdownArrow } from '../images/icons';

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

interface SearchEngine {
  name: string;
  action: string;
  query: string;
}

const searchEngines: SearchEngine[] = [
  { name: 'Google', action: 'https://www.google.com/search', query: 'q' },
  { name: 'DuckDuckGo', action: 'https://duckduckgo.com/', query: 'q' },
  {
    name: 'Startpage',
    action: 'https://www.startpage.com/sp/search',
    query: 'query',
  },
];

const SearchEngineDropdown = ({
  searchEngine,
  onSetSearchEngine,
}: {
  searchEngine: SearchEngine;
  onSetSearchEngine: (search: SearchEngine) => any;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className={`relative py-1 px-2 border-r bg-gradient-to-t from-gray-100 to-white rounded-l ${
        dropdownOpen && 'rounded-bl-none'
      }`}
    >
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
                  onSetSearchEngine(search);
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
  );
};

export const SearchBox = ({ className, style }: Props) => {
  const [searchEngine, setSearchEngine] = usePersistentState(
    searchEngines[0],
    'searchEngine',
  );
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  return (
    <div className={`flex mx-auto ${className}`} style={style}>
      <SearchEngineDropdown
        searchEngine={searchEngine}
        onSetSearchEngine={search => setSearchEngine(search)}
      />
      <div className="py-1 px-2 flex-grow bg-white rounded-r">
        <form action={searchEngine.action} method="get" target="_blank">
          <input
            type="text"
            placeholder="Suche"
            className="block w-full focus:outline-none"
            name={searchEngine.query}
            autoFocus
          ></input>
        </form>
      </div>
    </div>
  );
};
