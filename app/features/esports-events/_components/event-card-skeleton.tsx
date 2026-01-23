export function EventCardSkeleton() {
  return (
    <div className="relative h-[260px] w-full animate-pulse bg-[#1f262c]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/5" />

      <div className="relative flex h-full flex-col px-6 pt-4 pb-5">
        <div className="h-3 w-20 bg-white/20" />

        <div className="mt-3 h-6 w-3/4 bg-white/20" />

        <div className="mt-3 h-4 w-1/2 bg-white/15" />

        <div className="mt-4 flex gap-2">
          <div className="h-8 w-20 bg-white/15" />
          <div className="h-8 w-24 bg-white/10" />
          <div className="h-8 w-20 bg-white/10" />
        </div>

        <div className="flex items-center justify-between">
          <div className="h-4 w-32 bg-white/15" />
          <div className="h-10 w-40 bg-white/20" />
        </div>
      </div>
    </div>
  );
}
