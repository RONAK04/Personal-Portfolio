'use client';
import { data } from "../types/main";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/projects";
import Socials from "../components/Socials";
import Experiences from "../components/experiences/Experiences";
import Contact from "../components/Contact";
import CallToAction from "../components/CallToAction";
import Header from "./Header";
import Footer from "./footer";

interface Props {
    data: data,
}

const HomePage = ({ data }: Props) => {
    return (
        <>
            <Header logo={data.main.name} />
            <Hero mainData={data.main} />
            <Socials socials={data.socials} />
            <About aboutData={data.about} name={data.main.name} />
            <Skills skillData={data.skills} />
            <Projects projectsData={data.projects} />
            <Experiences experienceData={data.experiences} educationData={data.educations} />
            <Contact />
            <CallToAction />
            <Footer socials={data.socials} name={data.main.name} />
        </>
    )
}

export default HomePage