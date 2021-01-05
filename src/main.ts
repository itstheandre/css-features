import { IMediaFeaturesOptions } from "./interface/IMediaFeatures.options";
import { mediaFeatures, rangedValues } from "./utils";

const withRange = mediaFeatures.reduce((acc: string[], val: string) => {
  const values =
    rangedValues.indexOf(val) !== -1 ? [val, `min-${val}`, `max-${val}`] : [];
  return [...acc, ...values];
}, []);

/**
 *
 * @param info this is an optional `range` property that will add stuff like min and max values to the media query constructor
 */
export const getMediaFeatures = (
  info: IMediaFeaturesOptions = { range: false }
) => {
  if (info.range) {
    return withRange;
  }

  return mediaFeatures;
};
