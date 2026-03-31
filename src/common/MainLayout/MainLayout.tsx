import { useState } from "react"
import { Outlet } from "react-router-dom"

import { Navbar } from "@common/index"
import { Footer } from "@common/index"



export const MainLayout = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar
                isMobileNavOpen={isMobileNavOpen}
                setIsMobileNavOpen={setIsMobileNavOpen}
            />

            <main className="mt-12 relative">
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}

