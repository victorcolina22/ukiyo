export function MangaThumb({ id, title, image }: any) {
  return (
    <div class='flex flex-col gap-2 w-[150px] reveal-animation'>
      <a href={`/book/${id}`}>
        <img
          class='w-full object-cover rounded-xl hover:scale-105 transition-transform cursor-pointer'
          src={image}
          alt={title}
          // transition:name={`image-thumb-${id}`}
        />
      </a>

      <p class='text-xl'>{title}</p>

      {/* <div class="flex items-center gap-2 flex-wrap w-[130px]"> */}
      {/*   {tags.map((tag: any) => ( */}
      {/*     <div class="border border-[#B6C4B6] rounded-md px-2"> */}
      {/*       <p class="text-xs text-gray-500">{tag.name.en}</p> */}
      {/*     </div> */}
      {/*   ))} */}
      {/* </div> */}
    </div>
  );
}

export default MangaThumb;
