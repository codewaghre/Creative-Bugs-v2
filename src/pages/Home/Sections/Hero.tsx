

import { motion } from "motion/react"
import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"

import { brandgridOne, heroButtons } from "@/data/index"

import { Button, TopCornorBox } from "@/components/Common/index"

import type { ContainerProps } from "@/components/components.type"

import heroBanner from "/heroBanner.webp"

export const Hero = () => {

    return (
        <section id="hero" className="relative pt-24 border-x  border-border-default bg-bg-primary mt-0 card-md:mt-1">
            <div>
                {/* Hero Container */}
                <HeroContainer>
                    <motion.span
                        tabIndex={0}
                        aria-label="Video isn’t optional anymore"
                        initial={{
                            opacity: 0, y: 12, filter: 'blur(1px)'
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-text-head-one font-semibold text-sm relative">Video isn’t optional anymore
                    </motion.span>


                    <motion.h1
                        id="hero-heading"
                        tabIndex={0}
                        aria-label="Built for Founders Who Want to Be Trusted, Not Just Seen"
                        initial={{ opacity: 0, y: 12, filter: 'blur(1px)' }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                        }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={cn("text-3xl text-text-primary font-semibold tracking-tighter",
                            "lg:text-5xl",
                            "tablet:text-7xl"
                        )}>
                        Built for Founders Who Want to Be Trusted, Not Just Seen
                    </motion.h1>

                    <motion.p
                        id="hero-description"
                        tabIndex={0}
                        aria-label="It drives 87% more leads, builds trust faster, and keeps you top-of-mind. If you’re not showing up, your competitors will."
                        initial={{ opacity: 0, y: 12, filter: 'blur(1px)' }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                        }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={cn("text-text-secondary text-sm max-w-lg")}
                    >
                        We've helped founders and brands
                        generate over 1 billion views across
                        platforms not through volume, but
                        through content that builds category
                        authority. Clients include HDFC Bank,
                        ICICI Bank, HSBC, and Motilal Oswal
                    </motion.p>
                </ HeroContainer>

                {/* Hero Page Buttons Container */}
                <ButtonContainer>
                    {
                        heroButtons.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.id}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${item.text} (opens in a new tab)`}
                                    to={item.to}>

                                    <Button
                                        varient={item.variant}
                                        text={item.text}
                                        icon={<Icon aria-hidden="true" />}
                                        className={item.className}
                                        iconPosition={item.iconPosition}
                                    />
                                </Link>
                            );
                        })
                    }

                </ButtonContainer >

                {/*  Banner Image Container */}
                <BannerContainer>
                    <img
                        aria-hidden="true"
                        src={heroBanner ? heroBanner : "https://ik.imagekit.io/creativebugs/Short%20Videos/Banner/heroBanner.webp"}
                        alt="Creative Bugs Media team producing branded video content"
                        tabIndex={0}
                        loading="eager"
                        className="w-200" />
                </BannerContainer>

                {/* Brand Logo Container  */}
                <BrandContainer>
                    <h2 id="brands-heading"
                        tabIndex={0}
                        className="text-center text-sm text-text-secondary">
                        Trusted by Industry Leaders and Brands
                    </h2>

                    <div className={cn("grid grid-cols-3 place-content-center place-items-center px-2 max-w-xl mx-auto gap-x-4 gap-y-3",
                        "tablet:grid-cols-6  tablet:max-w-4xl",
                        "lg:grid-cols-6 lg:px-6",
                    )}>
                        {brandgridOne.map((brand) => (

                            <motion.img
                                tabIndex={0}
                                initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}

                                key={brand.id}
                                src={brand.src}
                                alt={brand.alt}
                                loading="lazy"
                                className={cn("w-16 h-auto object-cover",
                                    "lg:w-20",
                                    "tablet:grid-cols-6 tablet:w-30"
                                )}
                            />
                        ))}
                    </div>
                </BrandContainer>
            </div >

            <TopCornorBox />
        </section >
    )
}



// Containers

// Hero Container
const HeroContainer = ({ className, children }: ContainerProps) => {

    return (
        <div
            role="banner"
            aria-labelledby="hero-heading"
            aria-describedby="hero-description"
            className={cn("flex flex-col justify-center items-center gap-4 px-4 leading-relaxed  text-center ",
                "lg:px-6 ",
                "tablet:px-10",
                className
            )}>
            {children}
        </div >
    )
}

// Button Container
const ButtonContainer = ({ className, children }: ContainerProps) => {

    return (
        <motion.div
            role="navigation"
            aria-label="Hero actions"
            initial={{ opacity: 0, y: 12, filter: 'blur(1px)' }}
            animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn("flex flex-col justify-center items-center gap-2 pt-6 ",
                "lg:flex-row",
                className
            )}>
            {children}
        </motion.div >
    )
}

// Banner Image Container
const BannerContainer = ({ className, children }: ContainerProps) => {

    return (
        <motion.div
            aria-labelledby="brands-heading"
            initial={{ opacity: 0, y: 12, filter: 'blur(1px)' }}
            animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={cn("flex justify-center items-center py-2",
                className
            )}>
            {children}
        </motion.div >
    )
}

// Brand Logo Container
const BrandContainer = ({ className, children }: ContainerProps) => {

    return (
        <div
            aria-labelledby="brands-heading"
            className={cn("space-y-6 py-10",
                className
            )}>
            {children}
        </div >
    )
}



