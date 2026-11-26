type ArrowIconProps = {
  direction?: 'right' | 'up-right' | 'left';
};

export default function ArrowIcon({ direction = 'right' }: ArrowIconProps) {
  const paths = {
    right: 'M4 12h16m-6-6 6 6-6 6',
    'up-right': 'M6 18 18 6M6 6h12v12',
    left: 'M20 12H4m6-6-6 6 6 6',
  };

  return (
    <svg className="arrowIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={paths[direction]} />
    </svg>
  );
}
