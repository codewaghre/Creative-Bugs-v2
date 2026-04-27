import { Heading, HeadingContentContainer, MainContentContainer, TopCornorBox } from "@/components/Common/index"
import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"

export const TermsOfService = () => {
    return (
        <MainContentContainer>
            <section className="relative pt-2 border-x border-border-default bg-bg-primary mt-1">

                <div>
                    <HeadingContentContainer>
                        <Heading heading="Terms of Service for The Creative Bugs Media" />
                    </HeadingContentContainer>
                </div>


                <div className={cn("mx-auto px-3 w-full pb-20 ",
                    "card-md:w-full card-md:px-4",
                    "card-lg:px-56")}>


                    <div className="space-y-2 pb-10">

                        <p><span className="font-semibold">Effective Date:</span> April 22, 2026</p>

                        <p className="">
                            At <span className="font-semibold">The Creative Bugs Media</span>,By accessing or using our website, content, or services, you agree to be bound by these Terms of Service.
                        </p>

                    </div>


                    <div className="space-y-4">
                        <p>
                            If you do not agree with these terms, please do not use our website or services.
                        </p>

                        {/* first Cookie Policy */}
                        <div className="space-y-2">


                            {/* Heading */}
                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">1. Use of Website</h2>
                                <p className="text-sm card-md:text-base">You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website.</p>
                            </div>

                            <div className="pb-3">

                                <p className="pb-2 text-sm card-md:text-base">
                                    Information you voluntarily provide, such as:
                                </p>

                                <ul className="list-disc pl-6 text-sm card-md:text-base">
                                    <li>Attempt unauthorized access to our systems or servers</li>
                                    <li>Upload malicious code, spam, or harmful content</li>
                                    <li>Misuse forms, inquiries, or communication channels</li>
                                    <li>Copy or exploit website content without permission</li>

                                </ul>
                            </div>


                        </div>

                        {/* Second Cookie Policy */}
                        <div className="space-y-4">

                            {/* Heading */}
                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">2. Services</h2>
                                <p className="text-sm card-md:text-base">we may provide services including, but not limited to:</p>
                            </div>


                            <div className="pb-3">


                                <ul className="list-disc pl-6 pb-3 text-sm card-md:text-base">
                                    <li>Video editing</li>
                                    <li>Animation</li>
                                    <li>Podcast production</li>
                                    <li>Reel editing</li>
                                    <li>Content production</li>
                                    <li>Media shooting and creative services</li>


                                </ul>

                                <p className="pb-2 text-sm card-md:text-base">
                                    All project timelines, pricing, deliverables, and revisions are subject to separate written agreements or proposals.
                                </p>
                            </div>



                        </div>

                        {/* Third Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">3. Intellectual Property</h2>
                                <p className="text-sm card-md:text-base">All content on this website, including text, branding, graphics, logos, videos, designs, and code, is owned by The Creative Bugs Media or used with permission.</p>
                            </div>



                            <div className="pb-3">

                                <p className="pb-2 text-sm card-md:text-base">
                                    You may not reproduce, distribute, modify, or republish any content without prior written consent.
                                </p>
                            </div>


                        </div>

                        {/* Four Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">4. User Submissions</h2>
                                <p className="text-sm card-md:text-base">If you submit inquiries, feedback, files, or project materials:</p>
                            </div>

                            <div className="pb-3">

                                <ul className="list-disc pl-6 pb-2 text-sm card-md:text-base">
                                    <li>You confirm you have the rights to share them</li>
                                    <li>You grant us permission to review and use them solely for responding, quoting, or delivering services</li>
                                    <li>You agree not to submit unlawful, infringing, or harmful material</li>

                                </ul>
                            </div>
                        </div>

                        {/* Five Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">5. Payments & Refunds</h2>
                                <p className="text-sm card-md:text-base">Payment terms, deposits, milestones, cancellation terms, and refund policies will be defined in individual project agreements.</p>
                            </div>

                            <div className="pb-3">
                                <p className="pb-2 text-sm card-md:text-base">
                                    Unless otherwise agreed in writing, fees paid for completed work are non-refundable.
                                </p>

                            </div>
                        </div>

                        {/* six Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">6. Third-Party Tools & Platforms</h2>
                                <p className="text-sm card-md:text-base">Our website or services may integrate with third-party platforms such as YouTube, cloud storage providers, analytics tools, or social platforms.</p>
                            </div>

                            <div className="pb-3">
                                <p>
                                    We are not responsible for third-party outages, policies, or action.
                                </p>
                            </div>
                        </div>

                        {/* seven Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">7. Disclaimer</h2>
                                <p className="text-sm card-md:text-base">Our website and content are provided on an “as is” and “as available” basis without warranties of any kind, express or implied.</p>
                            </div>

                            <div className="pb-3">


                                <p className="pb-2 text-sm card-md:text-base">
                                    We do not guarantee uninterrupted availability, error-free operation, or specific business results.
                                </p>
                            </div>
                        </div>

                        {/* eight Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">8. Limitation of Liability</h2>

                            </div>

                            <div className="pb-3">

                                <p className="pb-2 text-sm card-md:text-base">
                                    To the maximum extent permitted by law, The Creative Bugs Media shall not be liable for indirect, incidental, special, or consequential damages arising from your use of our website or services.
                                </p>
                            </div>
                        </div>

                        {/* nine Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">9. Termination</h2>

                            </div>

                            <div className="pb-3">

                                <p className="pb-2 text-sm card-md:text-base">
                                    We reserve the right to suspend or restrict access to our website or services if these terms are violated or misuse is suspected.
                                </p>
                            </div>
                        </div>

                        {/* 10 Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">10. Governing Law</h2>
                            </div>

                            <div className="pb-3">

                                <p className="pb-2 text-sm card-md:text-base">
                                    These Terms shall be governed by the laws of India, with jurisdiction in Mumbai, unless otherwise required by applicable law.
                                </p>
                            </div>
                        </div>

                        {/* 11 Cookie Policy */}
                        <div className="space-y-4">

                            <div>
                                <h2 className="font-semibold text-lg text-text-primary">11. Changes to Terms</h2>
                            </div>

                            <div className="pb-3">

                                <p className="pb-2 text-sm card-md:text-base">
                                    We may update these Terms of Service at any time. Continued use of the website after updates means you accept the revised terms.
                                </p>
                            </div>
                        </div>

                        {/* 12 Cookie Policy */}
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

