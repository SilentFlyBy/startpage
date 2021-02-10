import React from 'react';

export const DropdownArrow = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    version="1.1"
    viewBox="0 0 255 255"
    className={className}
    style={style}
    fill="currentColor"
  >
    <g id="arrow-drop-down">
      <polygon points="0,63.75 127.5,191.25 255,63.75" />
    </g>
  </svg>
);
