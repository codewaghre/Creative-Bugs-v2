import { CallIcon, WorkIcon } from "@/assets/svg/Incos"
import { Button, TopCornorBox } from "@/components/Common"
import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"




import bannerImag from "@assets/banner/heroBanner.svg"
import type { ContainerProps } from "@/components/components.type"
import { motion } from "motion/react"


const brands = [
    {
        "id": 1,
        "src": "/brand/brand-1.svg",
        "alt": "Brand 1 company logo"
    },
    {
        "id": 2,
        "src": "/brand/brand-2.svg",
        "alt": "Brand 2 company logo"
    },
    {
        "id": 3,
        "src": "/brand/brand-3.svg",
        "alt": "Brand 3 company logo"
    },
    {
        "id": 4,
        "src": "/brand/brand-4.svg",
        "alt": "Brand 4 company logo"
    },
    {
        "id": 5,
        "src": "/brand/brand-5.svg",
        "alt": "Brand 5 company logo"
    },
    {
        "id": 6,
        "src": "/brand/brand-6.svg",
        "alt": "Brand 6 company logo"
    }
]


export const Hero = () => {


    return (
        <>
            <section className="relative pt-24 border-x  border-border-default bg-bg-primary mt-1">
                <div className="">
                    <HeroContainer>
                        <motion.span
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
                            initial={{ opacity: 0, y: 12, filter: 'blur(1px)' }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                            }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={cn("text-text-secondary text-sm max-w-md")}>It drives 87% more leads, builds trust faster, and keeps you top-of-mind. If you’re not showing up, your competitors will.</motion.p>
                    </ HeroContainer>

                    <ButtonContainer>
                        <Link to={"/call"}>
                            <Button
                                varient="dark"
                                text="Book a Meeting"
                                icon={<CallIcon />}
                                className="w-40"
                                iconPosition="end"
                            />
                        </Link>

                        <Link to={"/call"}>
                            <Button
                                varient="light"
                                text="Our Work"
                                icon={<WorkIcon />}
                                className="w-40"
                                iconPosition="end"
                            />
                        </Link>
                    </ButtonContainer >

                    <BannerContainer>
                        <img src={bannerImag} alt="company banner image" loading="lazy" className="w-200" />
                    </BannerContainer>

                    <BrandContainer>
                        <h2 className="text-center text-sm text-text-secondary">Trusted by Industry Leaders and Brands</h2>

                        <div className={cn("grid grid-cols-3 place-content-center place-items-center px-2 max-w-xl mx-auto gap-x-4 gap-y-3",
                            "tablet:grid-cols-6  tablet:max-w-4xl",
                            "lg:grid-cols-6 lg:px-6",
                        )}>
                            {brands.map((brand) => (
                                <motion.img
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
        </>


    )
}


// Containers
const ButtonContainer = ({ className, children }: ContainerProps) => {

    return (
        <motion.div
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

const BannerContainer = ({ className, children }: ContainerProps) => {

    return (
        <motion.div
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

const BrandContainer = ({ className, children }: ContainerProps) => {

    return (
        <div className={cn("space-y-2 py-10",
            className
        )}>
            {children}
        </div >
    )
}

const HeroContainer = ({ className, children }: ContainerProps) => {

    return (
        <div className={cn("flex flex-col justify-center items-center gap-4 px-4 leading-relaxed  text-center ",
            "lg:px-6 ",
            "tablet:px-10",
            className
        )}>
            {children}
        </div >
    )
}


