import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import tabsIcon from "../assets/tabsIcon.png";
import tabs from "../assets/tabs.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="block relative overflow-hidden scroll-start-ref">
        <Hero />

        <div className="flex flex-col justify-center items-center gap-25 mb-25 antialiased load">
          <ProjectCard
            icon={tabsIcon}
            title="Tabs"
            subtitle="Web | Extension"
            year="2025"
            description="Designed a unified workspace that brings together notes, bookmarks, and more in one seamless web and extension experience"
            url="https://github.com/harshkyadav5/tabs"
            image={tabs}
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
