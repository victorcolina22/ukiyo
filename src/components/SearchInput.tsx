import { useState, type TargetedEvent } from 'preact/compat';
import { Spinner } from './Spinner';
import { MangaService } from '../services/mangas.service';
import { SearchIcon } from './icons/SearchIcon';
import { globalState } from '../globalState';

export function SearchInput() {
  const [mangaName, setMangaName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e: TargetedEvent<HTMLInputElement>) => {
    const target = e?.target as HTMLInputElement;
    return setMangaName(target.value);
  };

  const handleOnKeyPress = (e: any) => {
    if (e.key !== 'Enter') return;
    setIsLoading(true);
    return searchManga(mangaName).finally(() => setIsLoading(false));
  };

  const searchManga = async (name: string) => {
    const response = await MangaService.search(name);
    return globalState.set(response);
  };

  return (
    <div className='bg-white flex items-center gap-2 px-4 rounded-lg h-[30px]'>
      <input
        className='text-black focus:outline-none'
        placeholder='Search manga...'
        type='text'
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      />
      <div className='min-w-5'>
        {isLoading ? (
          <Spinner size={17} />
        ) : (
          <SearchIcon
            className='w-5 h-auto cursor-pointer'
            stroke='gray'
            onClick={() => {
              setIsLoading(true);
              searchManga(mangaName).finally(() => setIsLoading(false));
            }}
          />
        )}
      </div>
    </div>
  );
}
