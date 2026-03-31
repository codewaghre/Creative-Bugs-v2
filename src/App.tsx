import { Route, Routes } from "react-router-dom"
import { About, Home, Work } from "@pages/index"
import { MainLayout } from "@common/index"
import { AskQuestionForm } from "./components/Common/AskQuestionForm"
import { BookAMeetingFrom } from "./components/Common/BookAMeetingFrom"
import ReactLenis from "lenis/react"



function App() {

  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2
        }}
      >


        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contactform" element={<AskQuestionForm />} />
            <Route path="/bookameetingform" element={<BookAMeetingFrom />} />
          </Route>

        </Routes>
      </ReactLenis>
    </>
  )
}

export default App
