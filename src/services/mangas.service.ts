const URL = 'http://localhost:3000/api/mangaList';
const BY_ID_URL = 'http://localhost:3000/api/manga';

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
}
