import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main className="p-2 h-screen bg1 shadow">
      <h1 className="text-center font-semibold text-lg p-2 mt-8 ">
        Hellow word
      </h1>
      <div className="flex text-center ">
        <Link
          href="/users"
          className="p-[1rem] w-[8rem] border-[1px] border-black flex gap-1 ">
          <h1 className=" font-semibold "> Colors</h1>
          <span className=" hover:translate-x-2  duration-500 ease-in-out">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="dig-UIIcon dig-UIIcon--standard"
              width="24"
              height="24"
              role="presentation"
              focusable="false">
              <path
                d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                vector-effect="non-scaling-stroke"></path>
            </svg>
          </span>
        </Link>

        <ProductCard />
      </div>
    </main>
  );
}
