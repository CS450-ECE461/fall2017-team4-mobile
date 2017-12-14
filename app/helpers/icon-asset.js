import { helper } from '@ember/component/helper';

export function iconAsset(imageSrc) {
  return `https://s3-us-west-1.amazonaws.com/waldojobs-dev/app-assets/icons/${imageSrc}`;
}

export default helper(iconAsset);
