import { useEffect, useState } from 'react';

const one_second = 1000;
const one_minute = 60 * one_second;
const one_hour = 60 * one_minute;
const one_day = 24 * one_hour;

type CountLevel = 'day' | 'hour' | 'minute' | 'second';

interface CountDownProps {
  time: number;
  reset?: boolean;
  countLevel?: CountLevel;
}

export const useCountDown = ({ time, reset, countLevel = 'day' }: CountDownProps) => {
  const [timmer, setTimmer] = useState(() => getTimer(time, countLevel));

  useEffect(() => {
    let start_count = time;
    if (start_count > 0) {
      setTimmer(getTimer(start_count, countLevel));
    }
    const interval = setInterval(() => {
      start_count = start_count - 1000;
      if (start_count <= 0) clearInterval(interval);
      setTimmer(getTimer(start_count, countLevel));
    }, 1000);
    return () => {
      clearInterval(interval);
      setTimmer(getTimer(time, countLevel));
    };
  }, [time, reset, countLevel]);

  return timmer;
};

const getTimer = (time: number, countLevel: CountLevel) => {
  let days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0;

  if (time - 1000 >= 0) {
    switch (countLevel) {
      case 'hour':
        hours = Math.floor(time / one_hour);
        time = time % one_hour;
        minutes = Math.floor(time / one_minute);
        time = time % one_minute;
        seconds = Math.floor(time / one_second);
        break;
      case 'minute':
        minutes = Math.floor(time / one_minute);
        time = time % one_minute;
        seconds = Math.floor(time / one_second);
        break;
      case 'second':
        seconds = Math.floor(time / one_second);
        break;
      default: // "day"
        days = Math.floor(time / one_day);
        time = time % one_day;
        hours = Math.floor(time / one_hour);
        time = time % one_hour;
        minutes = Math.floor(time / one_minute);
        time = time % one_minute;
        seconds = Math.floor(time / one_second);
    }
  }

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
