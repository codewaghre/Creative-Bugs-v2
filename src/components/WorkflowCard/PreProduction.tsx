import { cn } from "@/lib/cn";

import { orbitConfig } from "@/data/WorkflowSection";

import type { renderRingProps } from "@/data/data.type";
import type { OrbitProps } from "@/pages/Home/home.type";

import { BannerConentContainer } from "@components/Common/index";
import { Logo } from "@/assets/index";



//workflow card-2 Banner - Pre-Production
export const PreProductionContent = () => {
    return (
        <BannerConentContainer className={
            cn("px-6 py-5 flex-1 h-72  z-30 relative flex items-center justify-center transform-3d perspective-1000px transform-[rotateX(-20deg)_rotateY(10deg)]")}>


            {/* Outer circle */}
            <div className={cn("size-100 rounded-full bg-surface-gradient-2 border border-border-default absolute",
                "card-md:size-110"
            )} />

            {/* Middle circle  */}
            <div className={cn("size-70 rounded-full bg-surface-gradient-2 border border-border-default absolute z-10", "card-md:size-80")} />

            {/* Center circle */}
            <div className={cn("size-40 rounded-full bg-bg-primary border-border-default absolute z-20", "card-md:size-50")} />

            {/* Main Center logo */}
            <div className="z-40 opacity-70">
                <Logo className="size-13" />
            </div>

            {/* ORBIT WRAPPER - Moving icon  */}
            <div className="absolute inset-0 flex items-center justify-center">
                {renderRing({ ring: orbitConfig.inner, keyPrefix: "inner" })}
                {renderRing({ ring: orbitConfig.outer, keyPrefix: "outer" })}
            </div>
        </BannerConentContainer>


    )
}

// Orbit - placed Icon
export const Orbit = ({
    radius = 60,
    duration = 6,
    startAngle = 0,
    className = "",
    children,
}: OrbitProps) => {
    return (
        // This wrapper controls starting position
        <div
            className={`absolute ${className}`}
            style={{
                transform: `rotate(${startAngle}deg)`,
            }}
        >
            {/* This div handles animation */}
            <div
                className="animate-orbit will-change-transform"
                style={
                    {
                        "--radius": `${radius}px`,
                        "--duration": `${duration}s`,
                    } as React.CSSProperties
                }
            >
                {children}
            </div>
        </div>
    );
};


const renderRing = ({ ring, keyPrefix }: renderRingProps) =>
    ring.items.map((item, index) => {
        const Icon = item.icon;
        return (
            <Orbit
                key={`${keyPrefix}-${index}`}
                radius={ring.radius}
                duration={ring.duration}
                startAngle={(360 / ring.items.length) * index + (ring.offset || 0)}
                className="absolute z-30"
            >
                <Icon className="size-6 text-black/60 opacity-75 card-md:size-7" />
            </Orbit>
        );
    });



