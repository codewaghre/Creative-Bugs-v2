import { useEffect } from "react"

import { Link } from "react-router-dom"

import { cn } from "@/lib/cn"

import type { NavbarProps } from "../common.type"

import { SidebarIcon } from "@/assets/index"
import { LogoContainer, NavbarContainer, NavLinksContainer } from "@/components/Common/index"
import { Button } from "@/components/Common/index"
import { Logo } from "@/assets/index"
import { MobileNavbar } from "./MobileNavbar"
import { useIsDesktop } from "@/hooks/useIsDesktop"




export const Navbar = ({ isMobileNavOpen, setIsMobileNavOpen }: NavbarProps) => {

    // toogle mobile navigation menu [true - false]
    const toggleMobileNav = () => {
        setIsMobileNavOpen(prev => !prev)
    }



    const isDesktop = useIsDesktop(550);

    useEffect(() => {
        if (isDesktop) {
            setIsMobileNavOpen(false);
        }
    }, [isDesktop, setIsMobileNavOpen]);

    useEffect(() => {
        document.body.style.overflow = isMobileNavOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileNavOpen]);


    return (
        <>
            <NavbarContainer>

                <LogoContainer>
                    <Link
                        to={"/"}
                        aria-label="Go to CreativeBugs homepage"
                        className={cn("flex items-center justify-center gap-1 font-semibold")}>
                        <div aria-hidden="true">
                            <Logo />
                        </div>
                        <span>CreativeBugs</span>
                    </Link>
                </LogoContainer>

                <NavLinksContainer>
                    <Link
                        aria-label="View our work"
                        to={"/work"}
                        className={cn("hover:text-text-primary hidden nav-lg:block")}>
                        Work
                    </Link>

                    <Link
                        aria-label="Learn about us"
                        to={"/about"}
                        className={cn("hover:text-text-primary hidden nav-lg:block")}>
                        About
                    </Link>



                    <button
                        type="button"
                        aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileNavOpen}
                        aria-controls="mobile-navigation"
                        onClick={toggleMobileNav}
                        className={cn(
                            "hover:text-text-primary block nav-lg:hidden",
                            isMobileNavOpen ? "rotate-180" : "rotate-0")}>
                        <SidebarIcon className="w-5 h-4.7 text-text-secondary" />
                    </button>


                    <Link
                        aria-label="Book a meeting"
                        to={"/bookameetingform"}
                        className={cn("hidden nav-lg:block")}
                    >
                        <Button
                            text={"Book a Meeting"}
                            varient={"dark"}
                        />
                    </Link>
                </NavLinksContainer>

                {isMobileNavOpen && (
                    <MobileNavbar setIsMobileNavOpen={setIsMobileNavOpen} />
                )}
            </NavbarContainer>
        </>
    )
}


