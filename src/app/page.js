import Image from "next/image";
import HomeComponent from "./componet/home/page";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full">
   <main className="w-full flex-1">
      <HomeComponent />
    </main>
    </div>
  );
}