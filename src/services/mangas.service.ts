const URL = 'http://localhost:3000/api/mangaList';
const BY_ID_URL = 'http://localhost:3000/api/manga';
const SEARCH_URL = 'http://localhost:3000/api/search';

export class MangaService {
  private static MANGA_HOOK_URL = URL;
  private static MANGA_BY_ID_URL = BY_ID_URL;

  static async getMangaList() {
    try {
      const response = await fetch(this.MANGA_HOOK_URL);
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  static async getMangaById(id: string) {
    if (!id) return;
    try {
      const response = await fetch(`${this.MANGA_BY_ID_URL}/${id}`);
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  static async getChapterById(bookId: string, id: string) {
    if (!id) return;
    try {
      const response = await fetch(`${this.MANGA_BY_ID_URL}/${bookId}/${id}`);
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  static async search(query: string) {
    if (!query) return;
    try {
      const response = await fetch(`${SEARCH_URL}/${query}`);
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}
