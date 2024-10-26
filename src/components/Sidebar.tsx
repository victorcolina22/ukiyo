import { useRef } from 'preact/hooks';

// Icons
import { ArrowLeftFilled } from './icons/ArrowLeftFilled';
import { ArrowRightFilled } from './icons/ArrowRightFilled';
import { CloseIcon } from './icons/CloseIcon';

// Interfaces
import type { IChapterList } from '../interfaces/chapterList';

interface SidebarProps {
  bookId: string;
  chapterId: string;
  chapterList: IChapterList[];
  children: React.ReactNode;
}

export function Sidebar({
  bookId,
  chapterId,
  chapterList,
  children,
}: SidebarProps) {
  const ref = useRef<HTMLDivElement>(null);

  const chapterIndex = chapterList.findIndex(
    (chapter: any) => chapter?.id === chapterId,
  );
  const prevChapter = chapterList[chapterIndex + 1]?.id;
  const nextChapter = chapterList[chapterIndex - 1]?.id;

  const handleTouchEnd = (e: any) => {
    const sidebar = ref.current;
    if (!sidebar) return;

    handleToggleSidebar();
  };

  const handleClick = () => handleToggleSidebar();

  const handleToggleSidebar = () => ref.current?.classList.toggle('hidden');

  return (
    <aside className='flex justify-center'>
      <div
        id='sidebar'
        className='lg:flex flex-col items-center bg-custom-black h-screen pt-3 px-5 fixed left-0 hidden'
        ref={ref}
      >
        <header className='flex items-center justify-between gap-2'>
          <a
            className='flex items-center gap-2 text-2xl'
            href={`/book/${bookId}`}
          >
            <ArrowLeftFilled className='w-[30px]' />
            <span>Go back</span>
          </a>
          <CloseIcon className='lg:hidden' onClick={handleToggleSidebar} />
        </header>

        <div className='flex items-center gap-3 mt-5'>
          {prevChapter && (
            <a
              id='prev-chapter'
              className='bg-custom-gray px-8 rounded-lg'
              href={`/book/${bookId}/${prevChapter}`}
              onClick={handleClick}
            >
              <ArrowLeftFilled className='w-[20px]' />
            </a>
          )}
          {nextChapter && (
            <a
              id='next-chapter'
              className='bg-custom-gray px-8 rounded-lg'
              href={`/book/${bookId}/${nextChapter}`}
              onClick={handleClick}
            >
              <ArrowRightFilled className='w-[20px]' />
            </a>
          )}
        </div>
      </div>

      <div
        draggable={true}
        id='interactive-bar'
        className='fixed left-0 top-0 bg-transparent w-5 h-screen'
        onTouchEnd={handleTouchEnd}
      ></div>

      <div className='max-w-5xl'>{children}</div>
    </aside>
  );
}

export default Sidebar;
