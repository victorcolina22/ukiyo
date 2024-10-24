export function MangaThumb({ id, title, image }: any) {
  return (
    <div class='flex flex-col gap-2 w-[150px] reveal-animation'>
      <a href={`/book/${id}`}>
        <img
          class='min-h-[230px] w-full object-cover rounded-xl hover:scale-105 transition-transform cursor-pointer'
          src={image}
          alt={title}
          // transition:name={`image-thumb-${id}`}
        />
      </a>

      <p class='text-md line-clamp-5 overflow-hidden'>{title}</p>
    </div>
  );
}

export default MangaThumb;
