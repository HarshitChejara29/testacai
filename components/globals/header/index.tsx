"use client";

import { useState } from "react";
import { Icons } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    };

    const toggleAbout = () => {
        setIsAboutOpen(!isAboutOpen);
    };
    const toggleProducts = () => {
        setIsProductsOpen(!isProductsOpen);
    };
    const toggleResources = () => {
        setIsResourcesOpen(!isResourcesOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <header className="absolute z-[200] top-0 pt-[1.5rem] left-0 px-[1.2rem] w-full h-max flex items-center justify-between">
            <div className="w-max h-auto flex items-center justify-center ">
                <Link href="/"><Image src={'/logo.png'} alt="" height={70} width={70} className="object-cover rounded-small bg-black p-2" /></Link>
            </div>
            <div className="w-max h-full flex items-center justify-center gap-4">
                <Link href="https://app.theaccountantai.com:8080/realms/accai/protocol/openid-connect/auth?client_id=accai-client&redirect_uri=https%3A%2F%2Fapp.theaccountantai.com%2F&state=25dc4704-b7c3-4c4d-85a1-cc7050c5029c&response_mode=fragment&response_type=code&scope=openid&nonce=c14cce4c-83df-4eb2-a020-99c88f799601&code_challenge=ty4YkJcL8DRVayF52jp9jEY2lAi9xGbLmU6tNkLCAu0&code_challenge_method=S256" target="_blank" className="font-bold">Login</Link>
                <Link href="https://app.theaccountantai.com/register" className="w-max h-auto flex items-center justify-center text-black">Start Free Trial</Link>
                <div className="w-max h-auto flex items-center justify-center" onClick={toggleMenu}>
                    <Icons.menu size={48} className="text-black cursor-pointer" />
                </div>
            </div>

            {/* Side Menu */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 w-full h-full bg-[#716D84] shadow-lg z-50 px-[1.2rem] py-6 flex flex-col justify-between">
                    <div className="overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <Link href="/"><Image src={'/logo.png'} alt="" height={70} width={70} className="object-cover rounded-small bg-black p-2" /></Link>
                            <button onClick={toggleMenu} className="text-[#000000] object-cover rounded-small">
                                <Icons.close size={48} className="cursor-pointer" />
                            </button>
                        </div>
                        <nav className="mt-14">
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center justify-between border-b border-[#ffffff] border-opacity-[50%] py-2" onClick={toggleProducts}>
                                    <div className="text-black font-semibold text-3xl flex-grow">
                                        Products
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="ml-2">
                                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                                    </svg>
                                </li>
                                {isProductsOpen && (
                                    <div className="w-full px-1 py-4 rounded-lg">
                                        <div className="inline-block">
                                            <Link href="/product" onClick={handleLinkClick}>
                                                <h1 className="font-bold text-sm bg-[#000000] text-[#ffffff] rounded-full px-3 py-1">
                                                ACAi Document Management
                                                </h1>
                                            </Link>
                                        </div>
                                        <Link href="/product" onClick={handleLinkClick}><Image src="/backgrounds/bg_image.png" alt="integration" width={100} height={100} className="w-full h-[164px] rounded-t-lg py-2"/></Link>
                                        <p className="text-sm mb-4">Easy file management, automatic data entry process</p>
                                        <div className="space-y-2 px-2 border-l">
                                            <div>
                                                <h1 className="font-semibold">ACAi Import</h1>
                                                <p className="font-light text-sm">Easy file management, automatic data entry process</p>
                                            </div>
                                            <div>
                                                <h1 className="font-semibold">Financial v/s Non Financial documents</h1>
                                                <p className="font-light text-sm">Easy file management, automatic data entry process</p>
                                            </div>
                                            <div>
                                                <h1 className="font-semibold">ACAi Export</h1>
                                                <p className="font-light text-sm">Easy file management, automatic data entry process</p>
                                            </div>
                                        </div>
                                        {/* <div className="mt-5">
                                            <div className="inline-block">
                                                <h1 className="font-bold text-sm bg-[#000000] text-[#ffffff] rounded-full px-3 py-1">
                                                    Accountant  Ai Accounting
                                                </h1>
                                            </div>
                                            <Link href="/product"><Image src="/backgrounds/bg_image.png" alt="integration" width={100} height={100} className="w-full h-[164px] rounded-t-lg py-2"/></Link>
                                            <p className="text-sm mb-4">Safe, secure and fast accounting, at your fingertips.</p>
                                            <div className="space-y-2 px-2 border-l">
                                                <div>
                                                    <h1 className="font-semibold">ACAi Import</h1>
                                                    <p className="font-light text-sm">Easy file management, automatic data entry process</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-semibold">ACAi Import</h1>
                                                    <p className="font-light text-sm">Easy file management, automatic data entry process</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-semibold">ACAi Import</h1>
                                                    <p className="font-light text-sm">Easy file management, automatic data entry process</p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                )}

                                <li className="flex items-center justify-between border-b border-[#ffffff] border-opacity-[50%] py-2" onClick={toggleAbout}>
                                    <div className="text-black font-semibold text-3xl flex-grow">
                                        About Us
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="ml-2">
                                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                                    </svg>
                                </li>
                                {isAboutOpen && (
                                    <div className="w-full px-1 py-4 rounded-lg">
                                        {/* <div className="inline-block">
                                            <h1 className="font-bold text-sm bg-[#000000] text-[#ffffff] rounded-full px-3 py-1">
                                                Featured
                                            </h1>
                                        </div>
                                        <Link href="/why_acai"><Image src="/backgrounds/bg_image.png" alt="integration" width={100} height={100} className="w-full h-[164px] rounded-t-lg py-2"/></Link>
                                        <p className="text-sm mb-4">How AI is transforming finance accounting processes in 2024</p>
                                        <div className="space-y-2 px-2 border-l">
                                            <div>
                                                <h1 className="font-semibold">Why Accountant Ai?</h1>
                                                <p className="font-light text-sm">Get 24x7 support</p>
                                            </div>
                                            <div>
                                                <h1 className="font-semibold">Mission & Vision</h1>
                                                <p className="font-light text-sm">Read in-depth business guides</p>
                                            </div>
                                            <div>
                                                <h1 className="font-semibold">Timeline</h1>
                                                <p className="font-light text-sm">Accountant Ai tips & tricks.</p>
                                            </div>
                                            <div>
                                                <h1 className="font-semibold">Careers</h1>
                                                <p className="font-light text-sm">Accountant Ai tips & tricks.</p>
                                            </div>
                                            <div>
                                                <h1 className="font-semibold">Future Plans</h1>
                                                <p className="font-light text-sm">Accountant Ai tips & tricks.</p>
                                            </div>
                                        </div> */}
                                        <Link href="/why_acai" onClick={handleLinkClick}>
                                            <div className="border-l px-2">
                                                <li><span className="font-bold">Sales office</span> - HKG (TBD)</li>
                                                <li><span className="font-bold">Head office</span> - USA</li>
                                                <li><span className="font-bold">Production office</span> - India (511, International Finance Centre, VIP Road, Vesu, Surat, Gujarat 395007)</li>
                                            </div>
                                        </Link>
                                    </div>
                                )}

                                <li className="flex items-center justify-between border-b border-[#ffffff] border-opacity-[50%] py-2">
                                    <Link href="/integration" onClick={handleLinkClick} className="text-black font-semibold text-3xl flex-grow">
                                        Integration
                                    </Link>
                                </li>
                                <li className="flex items-center justify-between border-b border-[#ffffff] border-opacity-[50%] py-2">
                                    <Link href="/pricing" onClick={handleLinkClick} className="text-black font-semibold text-3xl flex-grow">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="flex items-center justify-between border-b border-[#ffffff] border-opacity-[50%] py-2" onClick={toggleResources}>
                                    <Link href="/" className="text-black font-semibold text-3xl flex-grow">
                                        Resources
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="ml-2">
                                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                                    </svg>
                                </li>
                                {isResourcesOpen && (
                                    <div className="w-full px-1 py-4 rounded-lg">
                                        <div className="inline-block mb-3">
                                            <h1 className="font-bold text-sm bg-[#000000] text-[#ffffff] rounded-full px-3 py-1">
                                                Help & Support
                                            </h1>
                                        </div>
                                        <div className="space-y-2 px-2 border-l">
                                            <div>
                                                <h1 className="font-semibold">Help & Support</h1>
                                                <p className="font-light text-sm">Get 24x7 support</p>
                                            </div>
                                            <div>
                                                <h1 className="font-semibold">How to guides</h1>
                                                <p className="font-light text-sm">Read in-depth business guides</p>
                                            </div>
                                            <div>
                                                <h1 className="font-semibold">ACAi Blog</h1>
                                                <p className="font-light text-sm">Accountant Ai tips & tricks.</p>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <div className="inline-block mb-3">
                                                <h1 className="font-bold text-sm bg-[#000000] text-[#ffffff] rounded-full px-3 py-1">
                                                    Popular Topics
                                                </h1>
                                            </div>
                                            <div className="space-y-2 px-2 border-l">
                                                <div>
                                                    <h1 className="font-semibold">What is Accountant Ai ?</h1>
                                                    <p className="font-light text-sm">Get 24x7 support</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-semibold">Founder story</h1>
                                                    <p className="font-light text-sm">Read in-depth business guides</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-semibold">Company</h1>
                                                    <p className="font-light text-sm">Product oriented</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-semibold">Integration</h1>
                                                    <p className="font-light text-sm">Accountant Ai tips & tricks.</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-semibold">Import</h1>
                                                    <p className="font-light text-sm">Accountant Ai tips & tricks.</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-semibold">Export</h1>
                                                    <p className="font-light text-sm">Accountant Ai tips & tricks.</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-semibold">Usage & Consumption</h1>
                                                    <p className="font-light text-sm">Accountant Ai tips & tricks.</p>
                                                </div>
                                                {/* <div>
                                                    <h1 className="font-semibold">Scale your business</h1>
                                                    <p className="font-light text-sm">Accountant Ai tips & tricks.</p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </ul>
                        </nav>
                        <div className="space-y-4 mt-10">
                            <div>
                                <Link href="https://app.theaccountantai.com/register">
                                    <button className="font-bold bg-translate hover:bg-[#FFFFFF] hover:bg-opacity-80 border border-[0.4px] border-black rounded-full w-full py-2">
                                        Start Free Trial
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <Link href="/scheduledemo" onClick={handleLinkClick}>
                                    <button className="font-bold bg-[#FFFFFF] bg-opacity-80 border border-[0.4px] border-black rounded-full w-full py-2">
                                        Book Sales Demo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Sign in prompt at the bottom */}
                    <h1 className="text-center py-10">Already have an account? <Link href="https://app.theaccountantai.com:8080/realms/accai/protocol/openid-connect/auth?client_id=accai-client&redirect_uri=https%3A%2F%2Fapp.theaccountantai.com%2F&state=25dc4704-b7c3-4c4d-85a1-cc7050c5029c&response_mode=fragment&response_type=code&scope=openid&nonce=c14cce4c-83df-4eb2-a020-99c88f799601&code_challenge=ty4YkJcL8DRVayF52jp9jEY2lAi9xGbLmU6tNkLCAu0&code_challenge_method=S256" target="_blank"><span className="font-semibold">Sign in</span></Link></h1>
                </div>
            )}
        </header>
    );
};

export default Header;
