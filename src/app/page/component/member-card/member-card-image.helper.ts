import { ImageUrls } from 'src/app/api/page-content';
import { keys, sortBy, parseInt, reverse, get, property } from 'lodash-es';

interface WidthValue {
  width: number;
  value: string;
}
export function calculateSrcSet(imageUrls: ImageUrls): string {
  const widthValuCollection: WidthValue[] = keys(imageUrls)
    .map((key: string) => ({
      width: parseInt(key.substring(1), 10),
      value: get(imageUrls, key),
    }));

  return reverse(sortBy(widthValuCollection, property('width')))
    .map((o: any) => `${o.value} ${o.width}w`)
    .join(', ');
}
