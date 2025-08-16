import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import snapIcon from "../assets/SnapchatIcon.png";
import snap from "../assets/Snapchat.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
        <Hero />
        <div className="flex flex-col justify-center items-center gap-25 mb-25 antialiased">
          <ProjectCard
            icon={snapIcon}
            title="Simple Snapchat"
            subtitle="Snapchat"
            year="2024"
            description="Pitched the original prototype and led design for a simpler app that brings Snapchatters closer to their friends."
            image={snap}
            onButtonClick={() => alert("Read more clicked")}
          />
          <ProjectCard
            icon={snapIcon}
            title="Simple Snapchat"
            subtitle="Snapchat"
            year="2024"
            description="Pitched the original prototype and led design for a simpler app that brings Snapchatters closer to their friends."
            image={snap}
            onButtonClick={() => alert("Read more clicked")}
          />
        </div>
        <Footer />
    </>
  );
}
