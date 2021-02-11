import React, { useState } from 'react';
import { useEffect } from 'react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const dayNames = [
  'Sonntag',
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
];

const monthNames = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
];

export const Clock = ({ className, style }: Props) => {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    setDate(new Date());

    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <div className={`text-white flex flex-col items-center ${className}`}>
      <div
        style={{ ...style, fontSize: '120px', lineHeight: '120px' }}
      >{`${date?.getHours().toLocaleString(undefined, {
        minimumIntegerDigits: 2,
      })}:${date
        ?.getMinutes()
        .toLocaleString(undefined, { minimumIntegerDigits: 2 })}`}</div>
      <div className="text-2xl">
        {date &&
          `${dayNames[date?.getDay()]}, ${date.getDate()}. ${
            monthNames[date.getMonth()]
          } ${date.getFullYear()}`}
      </div>
    </div>
  );
};
