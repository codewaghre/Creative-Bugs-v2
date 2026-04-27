import { Heading, HeadingContentContainer, MainContentContainer } from "@/components/Common/index"
import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"



export const CookiePolicy = () => {
  return (

    <MainContentContainer>
      <section className="relative pt-2 border-x border-border-default bg-bg-primary mt-1">

        <div>
          <HeadingContentContainer>
            <Heading heading="Cookie Policy of The Creative Bugs Media" />
          </HeadingContentContainer>
        </div>


        <div className={cn("mx-auto px-3 w-full pb-20 ",
          "card-md:w-full card-md:px-4",
          "card-lg:px-56")}>


          <div className="space-y-2 pb-10">

            <p><span className="font-semibold">Effective Date:</span> April 22, 2026</p>

            <p className="">
              At <span className="font-semibold">The Creative Bugs Media</span>, we value your privacy and are
              committed to being transparent about how we use cookies and similar
              technologies on our website
            </p>

          </div>


          <div className="space-y-4">
            <p>
              This Cookie Policy explains what cookies are, how we use them, and the
              choices you have regarding them.
            </p>


            {/* first Cookie Policy */}
            <div className="space-y-2">
              <h2 className="font-semibold text-lg text-text-primary">1. What Are Cookies?</h2>

              <p>
                Cookies are small text files stored on your device (computer, mobile phone,
                or tablet) when you visit a website. They help websites function properly,
                improve user experience, remember preferences, and collect analytics data.
              </p>
            </div>

            {/* Second Cookie Policy */}
            <div className="space-y-4">

              {/* Heading */}
              <div>
                <h2 className="font-semibold text-lg text-text-primary">2. How We Use Cookies</h2>
                <p className="text-sm card-md:text-base">We may use cookies for the following purposes:</p>
              </div>


              <div className="pb-3">
                <h3 className="font-semibold  text-sm card-md:text-base card-lg:text-lg">Essential Cookies</h3>

                <p className="pb-2 text-sm card-md:text-base">
                  These cookies are necessary for the website to function properly. They
                  enable core features such as:
                </p>

                <ul className="list-disc pl-6 text-sm card-md:text-base">
                  <li>Page navigation</li>
                  <li>Secure access to forms</li>
                  <li>Website performance and stability</li>
                </ul>
              </div>

              <div className="pb-3">
                <h3 className="font-semibold  text-sm card-md:text-base card-lg:text-lg">Performance &amp; Analytics Cookies</h3>

                <p className="pb-2 text-sm card-md:text-base">
                  These cookies help us understand how visitors interact with our website by
                  collecting anonymous information such as:
                </p>

                <ul className="list-disc pl-6 text-sm card-md:text-base pb-2">
                  <li>Number of visitors</li>
                  <li>Most visited pages</li>
                  <li>Time spent on pages</li>
                  <li>Traffic sources</li>
                </ul>

                <p className="pb-2 text-sm card-md:text-base" >
                  We may use tools such as <span className="font-semibold">Google Analytics</span> or similar
                  services.
                </p>
              </div>


              <div className="pb-3">

                <h3 className="font-semibold  text-sm card-md:text-base card-lg:text-lg">Functionality Cookies</h3>

                <p className="pb-2 text-sm card-md:text-base">
                  These cookies remember your preferences to improve your browsing experience,
                  such as:
                </p>

                <ul className="list-disc pl-6 text-sm card-md:text-base">
                  <li>Language settings</li>
                  <li>Device preferences</li>
                  <li>Previously entered form data</li>
                </ul>

              </div>


              <div className="pb-3">
                <h3 className="font-semibold  text-sm card-md:text-base card-lg:text-lg">Marketing Cookies (if applicable)</h3>

                <p className="pb-2 text-sm card-md:text-base">
                  These cookies may be used to deliver relevant advertisements or track
                  campaign performance through third-party platforms.
                </p>
              </div>

            </div>

            {/* Third Cookie Policy */}
            <div className="space-y-4">

              <div>
                <h2 className="font-semibold text-lg text-text-primary">3. Third-Party Cookies</h2>
                <p className="text-sm card-md:text-base">We may use cookies for the following purposes:</p>
              </div>



              <div className="pb-3">

                <p className="pb-2 text-sm card-md:text-base">
                  Some third-party services integrated into our website may place cookies on
                  your device, including:
                </p>

                <ul className="list-disc pl-6 pb-2 text-sm card-md:text-base">
                  <li>Analytics providers</li>
                  <li>Embedded video platforms (such as <strong>YouTube</strong>)</li>
                  <li>Social media integrations</li>
                  <li>Advertising networks</li>
                </ul>

                <p className="pb-2 text-sm card-md:text-base">
                  We do not control third-party cookies. Please review their privacy policies
                  separately.
                </p>

              </div>





            </div>


            {/* Four Cookie Policy */}
            <div className="space-y-4">

              <div>
                <h2 className="font-semibold text-lg text-text-primary">4. Your Choices</h2>
                <p className="text-sm card-md:text-base">You can manage or disable cookies through:</p>
              </div>



              <div className="pb-3">

                <ul className="list-disc pl-6 pb-2 text-sm card-md:text-base">
                  <li>Your browser settings</li>
                  <li>Cookie consent banner (if enabled on our site)</li>
                  <li>Third-party opt-out tools</li>
                </ul>

                <p className="pb-2 text-sm card-md:text-base">
                  Please note that disabling some cookies may affect website functionality.
                </p>

              </div>





            </div>


            {/* Five Cookie Policy */}
            <div className="space-y-4">

              <div>
                <h2 className="font-semibold text-lg text-text-primary">5. Updates to This Policy</h2>
                <p className="text-sm card-md:text-base"> We may update this Cookie Policy from time to time. Any changes will be
                  posted on this page with a revised effective date.</p>
              </div>

              <div className="pb-3">
              </div>
            </div>


            {/* six Cookie Policy */}
            <div className="space-y-4">

              <div>
                <h2 className="font-semibold text-lg text-text-primary">6. Contact Us</h2>
                <p className="text-sm card-md:text-base">If you have questions about this Cookie Policy, you can contact us:</p>
              </div>

              <div className="pb-3">
                <p>
                  <span className="font-semibold text-sm card-md:text-base">The Creative Bugs Media</span><br />
                  Mumbai, Maharashtra, India<br />

                  <Link to={"mailto:ops.creativebugs@gmail.com"}>ops.creativebugs@gmail.com</Link><br />

                </p>
              </div>
            </div>

          </div>

        </div>


      </section>
    </MainContentContainer>

  )
}
