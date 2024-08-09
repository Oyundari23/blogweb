import next from "next";
import Image from "next/image";
import Link from "next/link";
// import { CiSearch } from "react-icons/ci";
// import { IoIosSearch } from "react-icons/io";

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
        <div className="flex gap-5 ">
           <div className="justify-between"> < Image src="/Images/Logo.png" width={158} height={36} className="bg-slate-50 rounded-xl py-2 px-2"/></div> 
            <div className="flex gap-10">
                {navs.map((item) => (
                    <div>
                        {item.link}
                        {item.text}
                    </div>
                
                ))}
            </div>
            <div className="bg-slate-600 w-60 px-4 h-8 rounded-xl ">
                search
                <div> </div>
            </div>
                {/* <Link href={"/Blog"} /> */}

        </div>

    )
};