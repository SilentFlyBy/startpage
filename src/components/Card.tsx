import React from 'react';

const entries = ['GitHub', 'DevDocs', 'Foo', 'Bar'];

export const Card = () => {
  return (
    <div className="m-2 rounded bg-gray-300 shadow">
      <div className="py-4 bg-blue-deep rounded-t">
        <h2 className="m-0 text-center text-white">DEV</h2>
      </div>
      <ul className="group m-0 p-0">
        {entries.map(e => (
          <li className="m-0">
            <a
              href=""
              className={`block py-1 pl-8 text-xl text-blue-deep transition-all 
              duration-300 hover:font-italic hover:py-2 hover:text-white 
              hover:bg-gray-500 hover:pl-12 last:mb-4`}
            >
              {e}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
