import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
      {/* Image Skeleton */}
      <div className="relative aspect-square bg-karite-light">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <Skeleton className="h-6 w-3/4 rounded-lg" />
        
        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-5/6 rounded-lg" />
        </div>
        
        {/* Benefits */}
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
        
        {/* Weight */}
        <Skeleton className="h-5 w-16 rounded-full" />
        
        {/* Button */}
        <Skeleton className="h-10 w-full rounded-full" />
      </div>
    </div>
  );
}
