import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

// Takes a number of seconds and returns as a moment object
export function durationToFormattedMoment(duration) {
  return moment.duration(duration, 'seconds').format('hh:mm:ss', { trim: false });
}
