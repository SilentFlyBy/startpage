import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

export const Snow = () => {
  const [date, setDate] = useState<Date>();

  const winterMonths = [0, 1, 11];
  const isWinter = () => date && winterMonths.includes(date?.getMonth());

  useEffect(() => setDate(new Date()), []);

  return isWinter() ? <Snowfall /> : null;
};
