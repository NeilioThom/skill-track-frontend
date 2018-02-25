import moment from 'moment';
import clamp from 'clamp';
import momentDurationFormatSetup from 'moment-duration-format';

// Takes a number of seconds and returns as a moment object
export const durationToMoment = (duration) => {
  return moment.duration(duration, 'seconds');
}

// Takes a duration and converts it to a number of seconds. Returns seconds as string
export const durationToSeconds = (duration) => {
  return durationToMoment(duration).format('ss').replace(',', '');
}

// Takes an item and calculates the percentage of completion this week
export const getWeeklyPercentage = (weekly_goal, entries) => {
  return(entries.length > 0
    ? Math.round(clamp(entries.reduce((total, current) => total + current.time_spent, 0) / weekly_goal * 100, 0, 100))
    : 0
  );
}
