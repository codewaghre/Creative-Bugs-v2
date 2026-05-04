import type { ContainerProps } from "../common.type"

import { Link } from "react-router-dom"
import { cn } from "@/lib/cn"

import { Button } from "@/components/Common/index"
import { EmailIcon, InstagramIcon, LinkedInIcon } from "@/assets/index"


type MobileNavbarProps = {
    setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export const MobileNavbar = ({ setIsMobileNavOpen }: MobileNavbarProps) => {

    const handleClose = () => {
        setIsMobileNavOpen(false)
    }

    return (

        <div id="mobile-navigation" className="absolute right-0 top-12 z-100 w-screen h-[calc(100dvh-2.5rem)] bg-bg-primary">
            <MobileNavLinkContainer>
                {/* top part */}
                <MobileNavbarContentContainer className="px-3 py-4 border-y border-border-default">
                    <div className="grid grid-cols-3 gap-y-4 text-sm">
                        <Link to="/work" onClick={handleClose}>Work</Link>
                        <Link to="/about" onClick={handleClose}>About</Link>
                        <a href="/about/#team" onClick={handleClose}>Team</a>
                        <a href="/#service" onClick={handleClose}>Service</a>
                        <a href="/#growth" onClick={handleClose}>Growth</a>
                        <a href="/#faq" onClick={handleClose}>FAQ's</a>
                        <a href="/#workflow" onClick={handleClose}>Workflow</a>
                    </div>
                </MobileNavbarContentContainer >

                {/* Bottom part */}
                <MobileNavbarContentContainer className="flex flex-col gap-3 px-3 py-2 border-t border-border-default">
                    <SocialIconContainer className="flex flex-col gap-3 text-sm pt-2">
                        <SocialIcons >
                            <InstagramIcon className="w-4 h-4 text-text-primary" />
                            <span>@creativebugs.media</span>
                        </SocialIcons>

                        <SocialIcons>
                            <LinkedInIcon className="w-4 h-4" />
                            <span>/creative-bugs-media</span>
                        </SocialIcons>

                        <SocialIcons>
                            <EmailIcon className="w-4 h-4" />
                            <span>creativebugsmedia@</span>
                        </SocialIcons>


                    </SocialIconContainer>

                    <ButtonContainer>
                        <Link to="/bookameetingform">
                            <Button
                                text="Book a Call"
                                varient="dark"
                                className="w-full"
                            />
                        </Link>

                        <Link to="/contactform">
                            <Button
                                text="Book a Meeting"
                                varient="light"
                                className="w-full"
                            />
                        </Link>
                    </ButtonContainer>
                </MobileNavbarContentContainer>
            </MobileNavLinkContainer>
        </div >

    )
}






// Contains nav Link
const MobileNavLinkContainer = ({ children, className }: ContainerProps) => {

    return (
        <div className={cn("flex flex-col z-60 justify-between min-h-full w-full", className)}>
            {children}
        </div >
    )
}

// Contains NavLinks and Socials, button - content
const MobileNavbarContentContainer = ({ children, className }: ContainerProps) => {

    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}

// Container for Icon
const SocialIconContainer = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}

// Icon
const SocialIcons = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            {children}
        </div>
    )
}

// button Container
const ButtonContainer = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn("space-y-2 mb-5", className)}>
            {children}
        </div>
    )
}