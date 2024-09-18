import { ChevronRightIcon } from "@heroicons/react/20/solid";
import css from "./home-about.module.css";
import clsx from "clsx";

export default function HomeAbout() {
    return (
        <div className="relative isolate py-24 sm:py-32">
            <div
                className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#ffcf40] to-[#ffdc73] opacity-20"
                    style={{
                        clipPath:
                            "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                    }}
                />
            </div>

            <div className={clsx(css.flex, "max-w-7xl mx-auto px-6 lg:px-8")}>
                <div className={css.item}>
                    <div className="inline-flex space-x-6">
                        <span className="rounded-full bg-[#bf9b30]-500/10 px-3 py-1 text-sm font-semibold leading-6 text-[#bf9b30] ring-1 ring-inset ring-[#bf9b30]">
                            Buckle Up, Future Avatiors!
                        </span>
                    </div>

                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Welcome to Aerodemy Aviation!
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Your dedicated online platform crafted for aspiring
                        aviators. Here, we immerse you in the world of aviation,
                        offering a range of services from online consultations
                        and aviation materials to personalized 1-on-1 classes
                        tailored for Cadet Pilot Programs of Indian Airlines and
                        DGCA Ground Classes with personal mentoring – all at
                        affordable prices!
                    </p>
                    {/*<div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-gradient-to-tr from-[#bf9b30] to-[#ffdc73] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-white"
                        >
                            See Courses <span aria-hidden="true">→</span>
                        </a>
                </div>*/}
                </div>

                <div className={css.item}>
                    <img
                        src="/pilots.png"
                        alt="App screenshot"
                        className={clsx(
                            css.image,
                            "rounded-md bg-black/5 shadow-2xl ring-1 ring-white/10",
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
