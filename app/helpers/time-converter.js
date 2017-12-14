import { helper } from '@ember/component/helper';

export function timeConverter(time) {
  time = new Date(time);
  return time.toString().split(' ')[0]+" "+time.toLocaleTimeString().replace(/:([\d]*) /g, ' ');
}

export default helper(timeConverter);
