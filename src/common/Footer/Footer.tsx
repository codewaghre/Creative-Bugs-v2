import { Logo, LoveIcon, OnlineIcon } from "@/assets"
import { Button, LogoContainer } from "@/components/Common"
import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"


export const Footer = () => {
    return (
        <div className="bg-bg-black">

            <div className={cn("w-full px-4 mx-auto py-10 space-y-3 relative", "card-md:px-8", "card-lg:w-5xl card-lg:px-8")}>
                <div className="text-white grid grid-cols-2 gap-8 card-md:grid-cols-3 card-lg:grid-cols-6">
                    <div className="space-y-5 col-span-2 card-md:col-end-2 card-lg:col-span-2 card-lg:spce-y-15">
                        <div>
                            <LogoContainer>
                                <Link to={"/"} className={cn("flex items-center  gap-1 font-semibold")}>
                                    <div>
                                        <Logo />
                                    </div>
                                    <span>CreativeBugs</span>
                                </Link>
                            </LogoContainer>

                            <div>
                                <p className="text-xs card-md:text-sm card-lg:text-base text-text-white-50">Start your next project with us.</p>
                            </div>
                        </div>

                        <div>
                            <Button text="Meet the Founders" varient="dark" icon={<OnlineIcon />} iconPosition="start" />
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col text-text-white-50 items-start gap-6  text-xs card-md:text-sm card-lg:text-base">
                            <span className="text-text-white">Company</span>
                            <Link to={"/"} >Work</Link>
                            <Link to={"/"} >Abput</Link>
                            <Link to={"/"} >Team</Link>
                            <Link to={"/"} >Growth</Link>
                            <Link to={"/"} >Service</Link>
                            <Link to={"/"} >FAQ's</Link>
                            <Link to={"/"} >Workflow</Link>
                        </div>
                    </div>


                    <div>
                        <div className="flex flex-col text-text-white-50 items-start gap-6 text-xs card-md:text-sm card-lg:text-base">
                            <span className="text-text-white">Socials</span>
                            <Link to={"/"}>LinkedIn</Link>
                            <Link to={"/"}>Instagram</Link>
                            <Link to={"/"}>Twitter</Link>
                        </div>
                    </div>


                    <div className="card-md:col-start-2 card-lg:col-auto">
                        <div className="flex flex-col text-text-white-50 items-start gap-6  text-xs card-md:text-sm card-lg:text-base">
                            <span className="text-text-white">Legal</span>
                            <Link to={"/"}>Privacy Policy</Link>
                            <Link to={"/"}>Terms of Service</Link>
                            <Link to={"/"}>Cookie Policy</Link>
                        </div>
                    </div>


                    <div className="card-md:col-start-3 card-lg:col-auto">
                        <div className="flex flex-col text-text-white-50 items-start gap-6  text-xs card-md:text-sm card-lg:text-base">
                            <span className="text-text-white">Contact</span>
                            <Link to={"/"}>Book a meeting</Link>
                            <Link to={"/"}>Ask a question</Link>
                        </div>
                    </div>

                </div>

                <div className="text-center  text-balance text-text-white-50 pt-10 space-y-3 card-md:space-y-1">
                    <h2 className="text-sm card-md:text-sm card-lg:text-base">@ 2026 Creative Bugs Media. All rights reserved.</h2>
                    <h3 className="flex flex-wrap items-center justify-center gap-1 text-xs text-center">
                        Built with  <LoveIcon className="w-3 h-3 inline-block" />  by the Creative Bugs Media team in Mumbai, India.
                    </h3>
                </div>
            </div>
        </div >
    )
}

