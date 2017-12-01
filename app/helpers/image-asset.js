import { helper } from '@ember/component/helper';

export function imageAsset(imageSrc) {
  return `https://s3-us-west-1.amazonaws.com/waldojobs-dev/app-assets/images/source/${imageSrc}`;
}

export default helper(imageAsset);
