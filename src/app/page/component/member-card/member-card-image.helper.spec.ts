import { ImageUrls } from 'src/app/api/page-content';
import { calculateSrcSet } from './member-card-image.helper';

describe('MemberCardImageHelper', () => {
  describe('has calculateSrcSet function, which', () => {
    it('should return srcset path for provided ImageUrls', () => {
      const imageUrl: ImageUrls = {
        w1080: 'image-1080',
        w1920: 'image-1920',
        w200: 'image-200',
        w2560: 'image-2560',
        w400: 'image-400',
      };

      expect(calculateSrcSet(imageUrl)).toEqual('image-2560 2560w, image-1920 1920w, image-1080 1080w, image-400 400w, image-200 200w');
    });

    it('should return different srcset path for other ImageUrls', () => {
      const imageUrl: ImageUrls = {
        w1080: 'img-1080',
        w1920: 'img-1920',
        w200: 'img-200',
        w2560: 'img-2560',
        w400: 'img-400',
      };

      expect(calculateSrcSet(imageUrl)).toEqual('img-2560 2560w, img-1920 1920w, img-1080 1080w, img-400 400w, img-200 200w');
    });
  });
});
