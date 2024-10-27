export const BASE_URL = import.meta.env.PUBLIC_BASE_URL;
const API = 'api';
export const URL = `${BASE_URL}/${API}`;
export const ENDPOINTS = {
  MANGA_LIST: '/mangaList',
  MANGA_BY_ID: '/manga',
  SEARCH: '/search',
};

export const NO_RESULTS = 'No results was found :(';

export const PAGINATION_SIZE_DEFAULT = 5;
