
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container bg-white md:px-8 dark:bg-[#030712] ">
      <div className="flex py-[100px] md:gap-[58px] gap-8 justify-center dark:text-[#D1D5DB] dark:bg-[#030712]">
        <div className=" border-r-[1px] py-20 md:pr-[58px] pr-4  text-7xl font-normal">
          404
        </div>
        <div>
          <div className="text-2xl font-semibold mb-5">Page Not Found</div>
          <div className="max-w-[300px] font-normal text-lg text-[#696A75] mb-5">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </div>
          <Link href="/" className="btn text-black">
            Back To Home
          </Link>
        </div>
      </div>
      
    </div>
  );
}
