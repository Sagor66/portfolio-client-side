import { Metadata } from "next";
import Banner from "@/components/Home/Banner";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import ExperienceTimeline from "@/components/Home/ExperienceRoadmap";
import TechStackMarquee from "@/components/Home/TechStackMarquee";

export const metadata: Metadata = {
  title: "Shazzad | Home",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <ExperienceTimeline />
      <TechStackMarquee />
      <FeaturedProjects />
    </div>
  );
}
