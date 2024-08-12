import next from "next";
import Image from "next/image";
import Link from "next/link";
// import { CiSearch } from "react-icons/ci";
// import { IoIosSearch } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const navs = [
    {
        Link: "/",
        text: "Home",       
    },
    {
        Link: "/blog",
        text: "Blog",       
    },
    {
        Link: "/",
        text: "Contact",       
    },
]

export function Header() {
    return (
        <div className="flex gap-5 items-center mb-8">
           <div className="flex-1"> < Image src="/Images/Logo.png" width={158} height={36} className="bg-slate-50 rounded-xl py-2 px-2"/></div> 
            <div className="flex gap-[40px] flex-1">
                {navs.map((item) => (
                    <div>
                        {item.link}
                        {item.text}
                    </div>
                
                ))}
            </div>
            <div className="bg-slate-600 w-60 h-8 px-4 py-1 h-8 rounded-lg flex items-center gap-10">
                <div>search</div>
                <div><IoIosSearch /> </div>
            </div>
                {/* <Link href={"/Blog"} /> */}

        </div>

    )
};