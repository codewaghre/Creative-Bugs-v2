import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import { useTheme } from "@/hooks/useTheme"
import { cn } from "@/lib/cn"

import type { NavbarProps } from "../common.type"

import { DarkThemeIcon, LightThemeIcon, SidebarIcon } from "@/assets/index"
import { LogoContainer, NavbarContainer, NavLinksContainer } from "@/components/Common/index"
import { Button } from "@/components/Common/index"
import { Logo } from "@/assets/index"
import { MobileNavbar } from "./MobileNavbar"



export const Navbar = ({ isMobileNavOpen, setIsMobileNavOpen }: NavbarProps) => {

    const { theme, toggleTheme } = useTheme()

    // toogle mobile navigation menu [true - false]
    const toggleMobileNav = () => {
        setIsMobileNavOpen(prev => !prev)
    }

    // check screen sixe [less than 550px]
    const useIsDesktop = () => {
        const [isDesktop, setIsDesktop] = useState(
            window.innerWidth >= 550 // nav - lg breakpoint
        )

        useEffect(() => {
            const handler = () => setIsDesktop(window.innerWidth >= 550)
            window.addEventListener("resize", handler)
            return () => window.removeEventListener("resize", handler)
        }, [])

        return isDesktop
    }

    const isDesktop = useIsDesktop()

    // check if [isDesktop] is  greater than 550px  [close mobile nav]
    useEffect(() => {
        if (isDesktop) {
            setIsMobileNavOpen(false)
        }

        // prevent srcolling when mobile nav is open
        if (isMobileNavOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }

    }, [isDesktop, setIsMobileNavOpen, isMobileNavOpen])


    return (
        <>
            <NavbarContainer>

                <LogoContainer>
                    <Link to={"/"} className={cn("flex items-center justify-center gap-1 font-semibold")}>
                        <div>
                            <Logo />
                        </div>
                        <span>CreativeBugs</span>
                    </Link>
                </LogoContainer>

                <NavLinksContainer>
                    <Link to={"/work"} className={cn("hover:text-text-primary hidden nav-lg:block")}>
                        Work
                    </Link>

                    <Link to={"/about"} className={cn("hover:text-text-primary hidden nav-lg:block")}>
                        About
                    </Link>


                    <button
                        onClick={toggleTheme}
                        className={cn("hover:text-text-primary")}>
                        {theme === "light" ? <DarkThemeIcon className="w-4 h-4" /> : <LightThemeIcon className="w-4 h-4" />}
                    </button>

                    <button

                        onClick={toggleMobileNav}
                        className={cn(
                            "hover:text-text-primary block nav-lg:hidden",
                            isMobileNavOpen ? "rotate-180" : "rotate-0")}>
                        <SidebarIcon className="w-5 h-4.7 text-text-secondary" />
                    </button>


                    <Link to={"/call"}
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


