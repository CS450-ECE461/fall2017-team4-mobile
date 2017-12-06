import { helper } from '@ember/component/helper';

export function timeConverter(time) {
  time = new Date(time).toDateString().split('');
  time.splice(3,0,",");
  time.splice(11,0,",")
  return time.join('');
}

export default helper(timeConverter);
