export function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={props.className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={24}
      height={24}
      strokeWidth={2}
      {...props}
    >
      <path d='M18 6l-12 12'></path> <path d='M6 6l12 12'></path>
    </svg>
  );
}
