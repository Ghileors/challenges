import { cn } from '@/lib/utils';

export const Background = () => {
  return (
    <>
      {/* Lines layer (background + mask) */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0',
          '[background:repeating-linear-gradient(30deg,rgba(229,233,236,0.30)_0,rgba(229,233,236,0.30)_10px,transparent_12px,transparent_16px)]',
          'mask-image:radial-gradient(circle_at_-10%_-10%,#000000_0%,#000000_4%,#00000000_32%)',
          'mask-repeat:no-repeat',
          'mask-size:100%_100%',
          '[-webkit-mask-image:radial-gradient(circle_at_-10%_-10%,#000000_0%,#000000_4%,#00000000_32%)]',
          '[-webkit-mask-repeat:no-repeat]',
          '[-webkit-mask-size:100%_100%]'
        )}
      />
      {/* Ellipse layer */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 opacity-70',
          'bg-[radial-gradient(circle_at_-10%_-10%,#5C96B0_0%,#4B7E94_0.5%,#3B6678_1%,#5C96B026_32%,#1E242900_62%)]',
          'group-hover:bg-[radial-gradient(circle_at_-10%_-10%,#8800FF_0%,#8800FF26_32%,#1E242900_62%)]',
          'transition-[background] duration-150'
        )}
      />
    </>
  );
};
