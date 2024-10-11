import { Icons } from "@/utils/icons";
import Image from "next/image"
import Link from "next/link";
const Footer = () => {
    return(
        <footer className="flex flex-col">
            <div className="w-full px-[1.2rem] py-[1.5rem] h-max grid grid-row-2 bg-[#132123] text-[#ffffff] ">
                <div className="w-max items-center justify-center mb-4">
                    <Image src={'/logo.png'} alt="" height={70} width={70} className="object-cover rounded-small bg-black p-2" />
                </div>
                <div className="flex flex-row gap-[2rem]">
                    <div className="flex flex-col items-start justify-center gap-[1.5rem]">
                        <div className="flex flex-col items-start justify-start">
                            <h4 className="text-xl font-semibold">Accountant Ai LLC</h4>
                            <div className="flex flex-col">
                                <Link href={'/'}>About</Link>
                                <Link href={'/'}>Careers</Link>
                                <Link href={'/'}>Blogs</Link>
                                <Link href={'/'}>Contact Us</Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h4 className="text-xl font-semibold">How it works</h4>
                            <div className="flex flex-col">
                                <Link href={'/'}>Import Documents</Link>
                                <Link href={'/'}>Analyze Document</Link>
                                <Link href={'/'}>Manage Approvals</Link>
                                <Link href={'/'}>Export Transactions</Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h4 className="text-xl font-semibold">Solutions</h4>
                            <div className="flex flex-col">
                                <Link href={'/'}>Small businesses</Link>
                                <Link href={'/'}>BPO accounting firms</Link>
                                <Link href={'/'}>Mid sized companies</Link>
                                <Link href={'/'}>Enterprisess</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-start justify-start">
                            <h4 className="text-xl font-semibold">Products</h4>
                            <div className="flex flex-col">
                                <Link href={'/'}>Document Processing</Link>
                                <Link href={'/'}>Accounting</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-[1.2rem] py-[1.5rem] h-max ">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col w-max h-full">
                        <Link href={'/'}>Privacy Policy</Link>
                        <Link href={'/'}>Sitemap</Link>
                        <Link href={'/'}>Terms of Use</Link>
                        <Link href={'/'}>Privacy Choices</Link>
                    </div>
                    <div className="w-max h-full flex items-center justify-start">
                        <select className="w-max bg-transparent">
                            <option>USA</option>
                            <option>Hong Kong</option>
                            <option>India</option>
                        </select>
                    </div>
                </div>
                <div className="w-full h-max flex items-center justify-center gap-2 py-[1.5rem]">
                    <div className="w-max h-auto  flex items-center justify-center ">
                        {/* <Image src={'/favicon.ico'} alt="" height={36} width={36} className="object-cover rounded-small bg-primary p-2" /> */}
                        <Icons.instagram size={36}/>
                    </div>
                    <div className="w-max h-auto  flex items-center justify-center ">
                    <Icons.linkedin size={36}/>
                    </div>
                    <div className="w-max h-auto  flex items-center justify-center ">
                    <Icons.facebook size={36}/>
                    </div>
                </div>
                <span className="w-full h-max flex items-center justify-center">All Rights Reserved © Accountant Ai LLC</span>
            </div>
        </footer>
    )
}

export default Footer;