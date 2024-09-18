import Courses from "@/components/courses";
import HomeAbout from "@/components/home-about";
import HomeHero from "@/components/home-hero";
import Testimonials from "@/components/home-testimonials";

export default function Home() {
    return (
        <div>
            <HomeHero />
            <HomeAbout />
            <Courses />
            <Testimonials />
        </div>
    );
}
