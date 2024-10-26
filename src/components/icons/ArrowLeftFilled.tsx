export function ArrowLeftFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`icon icon-tabler icon-tabler-arrow-big-left-filled ${props.className}`}
      width='44'
      height='44'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='#2c3e50'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path
        d='M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z'
        strokeWidth='0'
        fill='currentColor'
      ></path>
    </svg>
  );
}
