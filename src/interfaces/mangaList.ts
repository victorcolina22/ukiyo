import type { MetaData } from './metaData';

export interface IMangaList {
  mangaList: MangaList[];
  metaData: MetaData;
}

export interface MangaList {
  id: String;
  image: String;
  title: String;
  chapter: String;
  view: String;
  description: String;
}
