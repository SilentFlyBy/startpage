import React from 'react';
import { Compass } from '../images/icons';

interface Props {
  className?: string;
  style?: React.CSSProperties;
}
export const Weather = ({ className, style }: Props) => {
  return (
    <div
      className={`text-white ${className}`}
      style={{ ...style, width: '100px' }}
    >
      <Compass />
    </div>
  );
};
