import { cn } from '@/lib/utils';
import { ClassNameValue } from 'tailwind-merge';

interface Props {
  size: number;
  className: ClassNameValue;
}

function ShoppingCartSvg({ size, className }: Props): React.ReactNode {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 35 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.0834 23.8227C13.0834 22.5877 12.1233 21.6327 10.8815 21.6327C9.78054 21.6327 8.83321 22.5877 8.83321 23.8227C8.83321 25.0578 9.79334 26 10.8815 26C12.1233 26 13.0834 25.0451 13.0834 23.8227ZM28.3815 0V4.25269H0L0.678493 6.42997H26.9989V8.76004H1.24177L4.41661 19.43H28.3943L30.5834 4.38002V2.03722H35V0H28.3815ZM24.1057 23.8227C24.1057 22.5877 23.1456 21.6327 21.9038 21.6327C20.662 21.6327 19.7019 22.5877 19.7019 23.8227C19.7019 25.0578 20.662 26 21.9038 26C23.1456 26 24.1057 25.0451 24.1057 23.8227Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default ShoppingCartSvg;
