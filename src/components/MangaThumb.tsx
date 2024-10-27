export function MangaThumb({ id, title, image }: any) {
  return (
    <div className='flex flex-col gap-2 w-[150px]'>
      <a href={`/book/${id}`}>
        <img
          className='min-h-[230px] w-full object-cover rounded-xl hover:scale-105 transition-transform cursor-pointer'
          src={image}
          alt={title}
          style={`view-transition-name: image-thumb-${id}`}
        />
      </a>

      <p className='text-md line-clamp-5 overflow-hidden'>{title}</p>
    </div>
  );
}

export default MangaThumb;
