import { useEffect, useState } from 'preact/hooks';
import { useStore } from '@nanostores/preact';
import { globalState } from '../globalState';
import { MangaThumb } from './MangaThumb';
import { MangaService } from '../services/mangas.service';
import { NO_RESULTS } from '../constants';

export const useLatestMangas = () => {
  const $globalState: any = useStore(globalState);

  const [mangaList, setMangaList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const mangas = $globalState?.mangaList ?? mangaList;

  useEffect(() => {
    getMangaList()
      .then((response) => {
        setMangaList(response);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const getMangaList = async () => {
    const response = await MangaService.getMangaList();
    return response?.mangaList;
  };

  return { isLoading, mangas, $globalState };
};

export function LatestMangas() {
  const { isLoading, mangas, $globalState } = useLatestMangas();
  return isLoading ? (
    // TODO: add loading animation
    <p>loading...</p>
  ) : (
    <div class='flex items-start lg:justify-start justify-center gap-x-16 gap-y-10 flex-wrap'>
      {$globalState && $globalState.mangaList.length === 0 && (
        <p>{NO_RESULTS}</p>
      )}
      {mangas &&
        mangas.length > 0 &&
        mangas.map((manga: any) => <MangaThumb {...manga} />)}
    </div>
  );
}

export default LatestMangas;
