import {Card, Skeleton} from "@nextui-org/react";

export default function App() {
  return (
    <Card className="w-full lg:h-96 md:lg-96 xl:h-[28rem] h-72 " radius="none">
      <Skeleton className="h-full">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
     
    </Card>
  );
}