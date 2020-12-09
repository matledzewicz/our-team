import { ImageUrls } from './image-urls';

export interface MemberCard {
  block: {
    description: string;
    link: string;
    text: string;
    title: string;
  };
  imageUrl: ImageUrls;
}
