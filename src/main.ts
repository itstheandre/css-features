import { IMediaFeaturesOptions } from "./interface/IMediaFeatures.options";
import { mediaFeatures, rangedValues } from "./utils";

const withRange = mediaFeatures.reduce((acc: string[], val: string) => {
  const values =
    rangedValues.indexOf(val) !== -1 ? [val, `min-${val}`, `max-$}{val}`] : [];
  return [...acc, ...values];
}, []);

export const getMediaFeatures = (
  options: IMediaFeaturesOptions = { range: false }
) => {
  if (options.range) {
    return withRange;
  }

  return mediaFeatures;
};
