import { PageElementType } from './page-element-type';
import { Attributes } from './attributes';

export interface PageElement {
  id: string;
  type: PageElementType;
  attributes: Attributes;
}
