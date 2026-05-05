import Lenis from "lenis"
import { lazy, useEffect } from "react"
import { Route, Routes } from "react-router-dom"


import { CookiePolicy, Home, PrivacyPolicy, TermsOfService, Work } from "@pages/index"
import { MainLayout } from "@common/index"
import { AskQuestionForm } from "./components/Common/index"
import { BookAMeetingFrom } from "./components/Common/index"
import LazyWrapper from "./hooks/LazyWrapper"


// Lazy Loaded Pages
const About = lazy(() => import("./pages/About/About"));




function App() {

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<LazyWrapper> <About /></LazyWrapper>} />
          <Route path="/work" element={<Work />} />
          <Route path="/contactform" element={<AskQuestionForm />} />
          <Route path="/bookameetingform" element={<BookAMeetingFrom />} />
          <Route path="/cookiepolicy" element={<CookiePolicy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
