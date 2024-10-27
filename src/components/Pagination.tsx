import { useStore } from '@nanostores/preact';

// Services
import { MangaService } from '../services/mangas.service';

// Shared
import { PAGINATION_SIZE_DEFAULT } from '../shared/constants';
import { cn } from '../shared/utils';
import { globalState } from '../shared/globalState';

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

    const response = await MangaService.getMangaListByPage(pageNumber);
    return globalState.set({
      ...response,
      metaData: {
        ...response.metaData,
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
            'font-bold border-red-500 w-8 h-8 rounded-lg hover:border hover:border-red-500 text-sm',
            {
              'border border-red-500':
                page === $globalState.metaData.currentPage,
            },
          )}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      {'...'}
      <span className='font-bold'>{$globalState?.metaData?.totalPages}</span>
    </article>
  );
}
