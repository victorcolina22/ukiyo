import { useStore } from '@nanostores/preact';

// Services
import { MangaService } from '../services/mangas.service';

// Shared
import { PAGINATION_SIZE_DEFAULT } from '../shared/constants';
import { cn } from '../shared/utils';
import { globalState, type IGlobalState } from '../shared/globalState';

interface PaginationProps {
  className?: string;
}

export function Pagination(props: Partial<PaginationProps>) {
  const $globalState = useStore(globalState);

  const totalPages = $globalState?.metaData?.totalPages;
  const pages = Array.from(
    { length: totalPages ?? PAGINATION_SIZE_DEFAULT },
    (_, i) => i + 1,
  );

  const handlePageChange = async (pageNumber: number) => {
    globalState.set({ ...$globalState, loading: true });

    // const response = await MangaService.getMangaListByPage(pageNumber);
    return globalState.set({
      // ...response,
      mangaList: {
        ...$globalState.mangaList,
      },
      metaData: {
        // ...response.metaData,
        ...$globalState.metaData,
        currentPage: pageNumber,
      },
      loading: false,
    });
  };

  return (
    <article
      className={`w-full flex items-center justify-end gap-3 ${props?.className}`}
    >
      {pages.slice(0, PAGINATION_SIZE_DEFAULT).map((page) => (
        <button
          className={cn(
            'font-bold py-1 px-3 rounded-lg hover:outline hover:outline-red-500 text-sm',
            {
              'outline outline-red-500':
                page === $globalState.metaData.currentPage,
            },
          )}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      {'...'}
      <button
        className={cn(
          'font-bold py-1 px-2 rounded-lg hover:outline hover:outline-red-500 text-sm',
          {
            'outline outline-red-500':
              pages.at(-1) === $globalState.metaData.currentPage,
          },
        )}
        onClick={() => handlePageChange($globalState.metaData.totalPages)}
      >
        {$globalState?.metaData?.totalPages}
      </button>
    </article>
  );
}
