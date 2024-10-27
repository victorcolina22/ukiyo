import { useEffect, useState } from 'preact/hooks';
import { useStore } from '@nanostores/preact';

// Components
import { Loading } from './Loading';
import { MangaThumb } from './MangaThumb';
import { Pagination } from './Pagination';

// Shared
import { NO_RESULTS } from '../shared/constants';
import { globalState } from '../shared/globalState';

// Services
import { MangaService } from '../services/mangas.service';

// Interfaces
import type { MangaList } from '../interfaces/mangaList';
import type { IGlobalState } from '../shared/globalState';

export const useLatestMangas = () => {
  const $globalState: IGlobalState = useStore(globalState);

  const [isLoading, setIsLoading] = useState(true);

  const mangas = $globalState?.mangaList;

  useEffect(() => {
    getMangaList($globalState.metaData.currentPage)
      .then((response) => {
        const pageNumber = $globalState.metaData.currentPage;
        const data = {
          metaData: {
            ...response.metaData,
            currentPage: pageNumber,
          },
          mangaList: response.mangaList,
        };
        globalState.set(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const getMangaList = async (pageNumber: number) => {
    const response = await MangaService.getMangaListByPage(pageNumber);
    return response;
  };

  return { isLoading, mangas, $globalState };
};

export function Mangas({ children }: { children?: React.ReactNode }) {
  const { isLoading, mangas, $globalState } = useLatestMangas();

  if (isLoading) return <Loading />;

  return (
    <>
      <div className='flex items-start lg:justify-start justify-center gap-x-16 gap-y-10 flex-wrap'>
        {$globalState && $globalState.mangaList.length === 0 && (
          <p>{NO_RESULTS}</p>
        )}
        {mangas &&
          mangas.length > 0 &&
          mangas.map((manga: MangaList) => <MangaThumb {...manga} />)}
      </div>
      {children}
    </>
  );
}
Mangas.Pagination = Pagination;

export function LatestMangas() {
  return (
    <Mangas>
      <Mangas.Pagination className='mt-10' />
    </Mangas>
  );
}

export default LatestMangas;
