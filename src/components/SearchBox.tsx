import React, { useState } from 'react';
import { DropdownArrow } from '../images/icons';

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const formAction = 'https://google.com/search';
const searchEngines = ['Google', 'DuckDuckGo', 'Startpage'];

export const SearchBox = ({ className, style }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchEngine, setSearchEngine] = useState(searchEngines[0]);
  return (
    <div
      className={`flex bg-white mx-auto rounded ${
        dropdownOpen && 'rounded-bl-none'
      } ${className}`}
      style={style}
    >
      <div className="relative py-1 px-2 border-r">
        <div
          className=" flex text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>{searchEngine}</span>
          <DropdownArrow className="block ml-1" style={{ width: '10px' }} />
        </div>
        {dropdownOpen && (
          <div className="absolute bg-white rounded-b top-8 min-w-full py-1 left-0">
            <ul>
              {searchEngines.map(search => (
                <li
                  className="px-2 hover:bg-gray-500 hover:text-white hover:italic cursor-pointer"
                  onClick={() => {
                    setSearchEngine(search);
                    setDropdownOpen(false);
                  }}
                >
                  {search}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="py-1 px-2 flex-grow">
        <form action={formAction}>
          <input
            type="text"
            placeholder="Suche"
            className="block w-full"
          ></input>
        </form>
      </div>
    </div>
  );
};
