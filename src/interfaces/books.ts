import type { Links } from "./links";
import type { PurpleDescription } from "./purpleDescription";
import type { Relationship } from "./relationship";
import type { Tag } from "./tags";
import type { Title } from "./title";

export interface Books {
  data: Book[];
  limit: number;
  offset: number;
  response: string;
  result: string;
  total: number;
}

export interface Book {
  attributes: BookAttributes;
  id: string;
  relationships: Relationship[];
  type: string;
}

export interface BookAttributes {
  altTitles: Record<string, string>[];
  availableTranslatedLanguages: string[];
  chapterNumbersResetOnNewVolume: boolean;
  contentRating: string;
  createdAt: Date;
  description: PurpleDescription;
  isLocked: boolean;
  lastChapter: string;
  lastVolume: string;
  latestUploadedChapter: string;
  links: Links;
  originalLanguage: string;
  publicationDemographic: null | string;
  state: string;
  status: string;
  tags: Tag[];
  title: Title;
  updatedAt: Date;
  version: number;
  year: number;
}
