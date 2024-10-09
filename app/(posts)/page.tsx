import Card from "@/components/Card";
import PaginationComponent from "@/components/pagination";

export default function Posts() {
  return (
    <div className="container mx-auto bg-white px-2 py-10 h-d">
    <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
   
      </div>
      <div className="flex lg:justify-end xl:justify-end justify-center px-6 py-6 ">
      < PaginationComponent />

      </div>
    </div>
    </div>
  );
}
