import { MangaThumb } from './MangaThumb';
import { MangaService } from '../services/mangas.service';

const response = await MangaService.getMangaList();
const mangaList = response?.mangaList;

export function LatestMangas() {
  return (
    <div class='flex items-start justify-center gap-x-16 gap-y-10 xl:justify-between xl:gap-x-0 flex-wrap'>
      {mangaList &&
        mangaList.length > 0 &&
        mangaList.map((manga: any) => <MangaThumb {...manga} />)}
    </div>
  );
}

export default LatestMangas;
