
import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonComponent() {
  return (
    <div className="flex-1 w-full lg:w-1/2 lg:h-[34rem] h-56 sm:h-64 md:h-72 pt-8">
    <Card className="space-y-5 border-none shadow-none">
      <Skeleton className="rounded-l-full"> 
        <div className="rounded-none lg:h-[28rem] h-72 bg-default-300"></div>
      </Skeleton>
      <div className="rounded-none space-y-3 flex justify-end items-end">
        <Skeleton className="w-3/4 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
    </Card>
  </div>
  
  );
}
