import { Logo, LoveIcon, OnlineIcon } from "@/assets"
import { Button, CarbonBadge, LogoContainer } from "@/components/Common"
import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"


export const Footer = () => {
    return (
        <footer
            role="contentinfo"
            className="bg-bg-black"
            aria-labelledby="footer-heading">

            <div className={cn("w-full px-4 mx-auto py-10 space-y-3 relative", "card-md:px-8", "card-lg:w-5xl card-lg:px-8")}>
                <div className="text-white grid grid-cols-2 gap-8 card-md:grid-cols-3 card-lg:grid-cols-6">
                    <section aria-labelledby="footer-brand-heading"
                        className="space-y-5 col-span-2 card-md:col-end-2 card-lg:col-span-2 card-lg:spce-y-15">
                        <div>
                            <LogoContainer>
                                <Link to={"/"} aria-label="Creative Bugs home page ( Logo )" className={cn("flex items-center  gap-1 font-semibold")}>
                                    <div>
                                        <Logo />
                                    </div>
                                    <span id="footer-brand-heading">CreativeBugs</span>
                                </Link>
                            </LogoContainer>

                            <div>
                                <p tabIndex={0} aria-label={"Start your next project with us."} className="text-xs card-md:text-sm card-lg:text-base text-text-white-50">Start your next project with us.</p>
                            </div>
                        </div>

                        <div>
                            <Link
                                to="/bookameetingform"
                                target="_blank"
                                aria-label="book a Meeting with founders"
                                className="inline-block focus:outline-none focus:ring-2 focus:ring-offset-2"
                            >
                                <Button
                                    text="Meet the Founders"
                                    varient="dark"
                                    icon={<OnlineIcon aria-hidden="true" />}
                                    iconPosition="start"
                                />
                            </Link>
                        </div>

                        <div>
                            <CarbonBadge />
                        </div>


                    </section>

                    {/* Company */}
                    <nav aria-labelledby="footer-company-heading">

                        <h3
                            id="footer-company-heading"
                            className="text-text-white text-sm mb-6 card-md:text-sm card-lg:text-base"
                        >
                            Company
                        </h3>

                        <ul className="flex flex-col text-text-white-50 items-start gap-6 text-xs card-md:text-sm card-lg:text-base">


                            <li><a href="#growth">Growth</a></li>
                            <li><a href="/#workflow">Workflow</a></li>
                            <li><a href="/about#service">Services</a></li>
                            <li><a href="/#faq">FAQs</a></li>
                            <li><Link to="/work">Work</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/about/#team">Team</Link></li>

                        </ul>
                    </nav>




                    {/* Social */}
                    <nav aria-labelledby="footer-social-heading">
                        <h3
                            id="footer-social-heading"
                            className="text-text-white text-sm mb-6 card-md:text-sm card-lg:text-base"
                        >
                            Socials
                        </h3>

                        <ul className="flex flex-col text-text-white-50 items-start gap-6 text-xs card-md:text-sm card-lg:text-base">
                            <li>
                                <Link
                                    to="https://www.linkedin.com/company/creative-bugs-media/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn opens in new tab"
                                >
                                    LinkedIn
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="https://www.instagram.com/creativebugs.media/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram opens in new tab"
                                >
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </nav>




                    {/* Legal */}
                    <nav
                        aria-labelledby="footer-legal-heading"
                        className="card-md:col-start-2 card-lg:col-auto"
                    >
                        <h3
                            id="footer-legal-heading"
                            className="text-text-white text-sm mb-6"
                        >
                            Legal
                        </h3>

                        <ul className="flex flex-col text-text-white-50 items-start gap-6 text-xs card-md:text-sm card-lg:text-base">
                            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                            <li><Link to="/termsofservice">Terms of Service</Link></li>
                            <li><Link to="/cookiepolicy">Cookie Policy</Link></li>
                        </ul>
                    </nav>


                    <nav
                        aria-labelledby="footer-contact-heading"
                        className="card-md:col-start-3 card-lg:col-auto"
                    >
                        <h3
                            id="footer-contact-heading"
                            className="text-text-white text-sm mb-6"
                        >
                            Contact
                        </h3>

                        <ul className="flex flex-col text-text-white-50 items-start gap-6 text-xs card-md:text-sm card-lg:text-base">
                            <li><Link to="/bookameetingform" target="_blank">Book a meeting</Link></li>
                            <li><Link to="/contactform" target="_blank">Ask a question</Link></li>
                            <li><Link to="https://mail.google.com/mail/?view=cm&fs=1&to=ops.creativebugs@gmail.com" target="_blank">Email</Link></li>
                        </ul>
                    </nav>

                </div>

                <div className="text-center  text-balance text-text-white-50 pt-10 space-y-3 card-md:space-y-1">
                    <p tabIndex={0} aria-label="@ 2026 Creative Bugs Media. All rights reserved." className="text-sm card-md:text-sm card-lg:text-base">@ 2026 Creative Bugs Media. All rights reserved.</p>
                    <p tabIndex={0} aria-label="Built with love by the Cretive Bugs Media team in Mumbai, India" className="flex flex-wrap items-center justify-center gap-1 text-xs text-center">
                        Built with  <span aria-hidden="true"><LoveIcon className="w-3 h-3 inline-block" /></span>  by the Creative Bugs Media team in Mumbai, India
                    </p>
                </div>
            </div>
        </footer >
    )
}

