import { Heading, HeadingContentContainer, MainContentContainer, TopCornorBox } from "@/components/Common/index"
import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"



export const PrivacyPolicy = () => {
    return (

        <MainContentContainer>
            <section className="relative pt-2 border-x border-border-default bg-bg-primary mt-1">

                <div>
                    <HeadingContentContainer>
                        <Heading heading="Privacy Policy of The Creative Bugs Media" />
                    </HeadingContentContainer>
                </div>


                <div className={cn("mx-auto px-3 w-full pb-20 ",
                    "card-md:w-full card-md:px-4",
                    "card-lg:px-56")}>


                    <div className="space-y-2 pb-10">

                        <p><span className="font-semibold">Effective Date:</span> April 22, 2026</p>

                        <p className="">
                            At <span className="font-semibold">The Creative Bugs Media</span>, we respect your privacy and are committed to protecting any personal information you share with us.
                        </p>

                    </div>


                    <div className="space-y-4">
                        <p>
                            This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our services.
                        </p>


                        {/* first Cookie Policy */}
                        <div className="space-y-2">

                            {/* Heading */}
                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">1. Information We Collect</h2>
                                <p className="text-sm card-md:text-base">We may collect the following types of information:</p>
                            </div>

                            <div className="pb-3">
                                <h3 className="font-semibold  text-sm card-md:text-base card-lg:text-lg">Personal Information</h3>

                                <p className="pb-2 text-sm card-md:text-base">
                                    Information you voluntarily provide, such as:
                                </p>

                                <ul className="list-disc pl-6 text-sm card-md:text-base">
                                    <li>Full name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Company name</li>
                                    <li>Project details or inquiry messages</li>
                                </ul>
                            </div>

                            <div className="pb-3">
                                <h3 className="font-semibold  text-sm card-md:text-base card-lg:text-lg">Non-Personal Information</h3>

                                <p className="pb-2 text-sm card-md:text-base">
                                    Automatically collected information such as:
                                </p>

                                <ul className="list-disc pl-6 text-sm card-md:text-base">
                                    <li>Browser type</li>
                                    <li>Device information</li>
                                    <li>IP address</li>
                                    <li>Pages visited</li>
                                    <li>Time spent on the website</li>
                                    <li>Referral source</li>
                                </ul>


                            </div>
                        </div>

                        {/* Second Cookie Policy */}
                        <div className="space-y-4">

                            {/* Heading */}
                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">2. How We Use Your Information</h2>
                                <p className="text-sm card-md:text-base">We may use your information to:</p>
                            </div>


                            <div className="pb-3">


                                <ul className="list-disc pl-6 text-sm card-md:text-base">
                                    <li>Respond to inquiries or requests</li>
                                    <li>Provide our services</li>
                                    <li>Improve website performance and user experience</li>
                                    <li>Communicate updates or promotional content</li>
                                    <li>Analyze website traffic and engagement</li>
                                    <li>Prevent fraud or misuse</li>


                                </ul>
                            </div>



                        </div>

                        {/* Third Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">3. Cookies & Tracking Technologies</h2>
                                <p className="text-sm card-md:text-base">We may use cookies and similar technologies to enhance your browsing experience, remember preferences, and analyze website traffic.</p>
                            </div>

                            <div className="pb-3">

                                <p className="pb-2 text-sm card-md:text-base">
                                    Please review our Cookie Policy for more details.
                                </p>
                            </div>

                        </div>


                        {/* Four Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">4. Sharing Your Information</h2>
                                <p className="text-sm card-md:text-base">We do not sell, rent, or trade your personal information.</p>
                            </div>



                            <div className="pb-3">

                                <p className="pb-2 text-sm card-md:text-base">
                                    We may share information with trusted third parties only when necessary, such as:
                                </p>

                                <ul className="list-disc pl-6 pb-2 text-sm card-md:text-base">
                                    <li>Website hosting providers</li>
                                    <li>Analytics providers (such as Google Analytics)</li>
                                    <li>Email communication platforms</li>
                                    <li>Legal authorities when required by law</li>
                                </ul>
                            </div>
                        </div>


                        {/* Five Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">5. Data Security</h2>
                                <p className="text-sm card-md:text-base">We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, misuse, loss, or disclosure.</p>
                            </div>

                            <div className="pb-3">
                                <p className="pb-2 text-sm card-md:text-base">
                                    However, no online platform can guarantee absolute security.
                                </p>

                            </div>
                        </div>


                        {/* six Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">6. Third-Party Links</h2>
                                <p className="text-sm card-md:text-base">Our website may contain links to third-party websites or embedded services such as YouTube or social media platforms.</p>
                            </div>

                            <div className="pb-3">
                                <p>
                                    We are not responsible for the privacy practices of third-party websites.
                                </p>
                            </div>
                        </div>

                        {/* seven Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">7. Your Rights & Choices</h2>
                                <p className="text-sm card-md:text-base">Depending on your location, you may have the right to:</p>
                            </div>

                            <div className="pb-3">
                                <ul className="list-disc pl-6 pb-2 text-sm card-md:text-base">
                                    <li>Request access to your data</li>
                                    <li>Correct inaccurate information</li>
                                    <li>Request deletion of your information</li>
                                    <li>Withdraw consent for marketing communication</li>
                                </ul>

                                <p className="pb-2 text-sm card-md:text-base">
                                    To exercise these rights, contact us using the details below.
                                </p>
                            </div>
                        </div>

                        {/* eight Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">8. Children’s Privacy</h2>

                            </div>

                            <div className="pb-3">

                                <p className="pb-2 text-sm card-md:text-base">
                                    Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children.
                                </p>
                            </div>
                        </div>

                        {/* nine Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">9. Changes to This Privacy Policy</h2>

                            </div>

                            <div className="pb-3">

                                <p className="pb-2 text-sm card-md:text-base">
                                    We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.
                                </p>
                            </div>
                        </div>


                        {/* ten Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">10. Contact Us</h2>

                            </div>

                            <div className="pb-3">

                                <p className="pb-2 text-sm card-md:text-base">
                                    If you have any questions regarding this Privacy Policy, please contact us:
                                </p>

                                <div className="pb-3">
                                    <p>
                                        <span className="font-semibold text-sm card-md:text-base">The Creative Bugs Media</span><br />
                                        Mumbai, Maharashtra, India<br />

                                        <Link to={"mailto:ops.creativebugs@gmail.com"}>ops.creativebugs@gmail.com</Link><br />

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <TopCornorBox />

            </section>
        </MainContentContainer>

    )
}

