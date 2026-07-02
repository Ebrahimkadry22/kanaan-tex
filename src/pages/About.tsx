import AboutHero from "../components/about/AboutHero"
import Certifications from "../components/about/Certifications/Certifications"
import CompanyStory from "../components/about/CompanyStory"
import CompanyTimeline from "../components/about/CompanyTimeline/CompanyTimeline"
import CoreValues from "../components/about/CoreValues"
import OurClients from "../components/about/our clients/OurClients"

const About = () => {
  return (
    <>
    <AboutHero />
    <CompanyStory />
    <CoreValues />
    <CompanyTimeline />
    <Certifications />
    <OurClients />
    </>
  )
}

export default About