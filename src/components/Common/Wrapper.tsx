import { cn } from "@/lib/cn"
import type { ContainerProps } from "@components/components.type"
import { motion } from "motion/react"


// Navbar Logo 
export const LogoContainer = ({ children }: ContainerProps) => {

    return (
        <div className={cn("")}>
            {children}
        </div>
    )
}

// right side - Navigation Link 
export const NavLinksContainer = ({ children }: ContainerProps) => {

    return (
        <div className={cn("realtive flex items-center justify-end gap-4 text-sm text-text-secondary")}>
            {children}
        </div>
    )
}


// Navbar Main 
export const NavbarMainContainer = ({ className, children }: ContainerProps) => {

    return (
        <>
            <header className="bg-bg-primary w-full fixed top-0 left-0 z-100">
                <div className={cn("max-w-7xl mx-auto ", className)}>
                    {children}
                </div>
            </header>
        </>
    )
}

// Navbar  
export const NavbarContainer = ({ children }: ContainerProps) => {

    return (
        <>
            <NavbarMainContainer>
                <motion.nav
                    role="navigation"
                    aria-label="Main navigation"
                    initial={{ opacity: 0, y: -12, filter: 'blur(1px)' }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                    }}
                    transition={{ duration: 0.3, }}
                    className="bg-bg-primary flex items-center justify-between gap-40 border-x border-b border-border-default px-2 py-3 nav-lg:px-4 nav-lg:py-2">
                    {children}
                </motion.nav>
            </NavbarMainContainer>
        </>
    )
}


// home - work - about MainContentContainer 
export const MainContentContainer = ({ children, className }: ContainerProps) => {

    return (
        <>
            <main className={cn("bg-bg-primary max-w-7xl mx-auto", className)}>
                {children}
            </main>
        </>
    )
}


// heading container
export const HeadingContentContainer = ({ children, className }: ContainerProps) => {

    return (
        <>
            <div className={cn("text-center space-y-1 my-10",
                "card-lg:my-14",
                className)}>
                {children}
            </div >
        </>
    )
}


// card container
export const CardContainer = ({ children, className }: ContainerProps) => {

    return (
        <>
            <div
                role="list"
                aria-label="Company performance statistics"
                className={cn("", className)}>
                {children}
            </div>
        </>
    )
}

// card Content container
export const CardContentContainer = ({ children, className }: ContainerProps) => {

    return (
        <>
            <motion.div
                role="group"
                tabIndex={0}
                initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className={cn("", className)}>
                {children}
            </motion.div>
        </>
    )
}

// card bannetr Content container
export const CardBannerContentContainer = ({ children, className }: ContainerProps) => {

    return (
        <>
            <div className={cn("", className)}>
                {children}
            </div>
        </>
    )
}



// Banner Content container
export const BannerContainer = ({ children, className }: ContainerProps) => {

    return (
        <>
            <div className={cn("", className)}>
                {children}
            </div>
        </>
    )
}

// Banner Content container
export const BannerHeadingContainer = ({ children, className }: ContainerProps) => {

    return (
        <>
            <div className={cn("text-center py-4", className)}>
                {children}
            </div>
        </>
    )
}

// Banner Content container
export const BannerConentContainer = ({ children, className }: ContainerProps) => {

    return (
        <>
            <div className={cn(className)}>
                {children}
            </div>
        </>
    )
}