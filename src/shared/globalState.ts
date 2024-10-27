import { atom } from 'nanostores';
import type { MangaList } from '../interfaces/mangaList';
import type { MetaData } from '../interfaces/metaData';

export interface IGlobalState {
  mangaList: MangaList[];
  metaData: MetaData;
  loading?: boolean;
}

export const INIT_VALUES: IGlobalState = {
  mangaList: [],
  metaData: {
    totalStories: 0,
    totalPages: 0,
    type: [],
    state: [],
    category: [],
    currentPage: 1,
  },
  loading: true,
};

export const globalState = atom<IGlobalState>(INIT_VALUES);
