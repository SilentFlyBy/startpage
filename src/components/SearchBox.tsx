import React from 'react';

interface Props {
  className?: string;
}

const formAction = 'https://google.com/search';

export const SearchBox = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <form action={formAction}>
        <input type="text" placeholder="Suche" className="block w-full"></input>
      </form>
    </div>
  );
};
