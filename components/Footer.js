import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="dark:text-[#D1D5DB] dark:bg-[#030712]">

        <div className="container mx-auto px-8 dark:text-[#D1D5DB] dark:bg-[#030712]">
            <div >
                <div className="md:flex md:gap-5 md:mb-[25px] pt-16">
                    <div className="hidden md:block">
                        <div className="mb-6 ">
                            <h3 className="font-semibold text-lg text-[#181A2A] mb-3 dark:text-[#696A75]">About</h3>
                            <p className="font-normal text-base text-[#696A75] max-w-[280px] md:max-w-[320px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam
                            </p>
                        </div>
                        <div className="font-normal text-base text-[#696A75]">
                            <div>Email : info@jstemplate.net</div>
                            <div>Phone : 880 123 456 789</div>
                        </div>
                    </div>
                    <div className="text-center mb-[30px] lg:w-[521px] md:w-[250px]">
                        <div className="flex flex-col text-[#696A75] font-normal text-base">
                            <Link href={"/"}>Home</Link>
                            <Link href={"/Blog"}>Blog</Link>
                            <Link href={"/Contact"}>Contact</Link>
                        </div>
                    </div>
                    <div className="flex justify-center gap-[27px] mb-[30px]">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </div>
                <div className=" py-5 md:flex md:justify-between md:items-center md:border-t-[1px] ">
                    <div className="flex justify-center">
                        <img src="/Images/Footer.png" alt="Footer-logo" className="mr-3 bg-white rounded-lg px-1 py-1"/>
                    </div>
                    <div className="hidden md:block ">
                        <ul className="flex gap-4 font-normal text-base text-[#3B3C4A]">
                            <li className="border-r-[1px] pr-4">Terms of Use</li>
                            <li className="border-r-[1px] pr-4">Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};