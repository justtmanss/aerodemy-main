"use client";

import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export default function HomeHero() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 h-screen sm:h-fit">
            <div
                className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffcf40] to-[#ffdc73] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <div className="mx-auto py-32 sm:py-48 lg:py-56">
                <div className="mb-8 sm:flex sm:justify-center text-center">
                    <div className="relative rounded-full px-3 py-1 leading-8 text-lg lg:text-3xl lg:leading-10 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Embarking On A{" "}
                        <span className="font-semibold text-[#bf9b30]">
                            Journey
                        </span>{" "}
                        To Become A Pilot?
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        <Typewriter
                            options={{
                                strings: [
                                    `<span class="text-[#bf9b30]">Unsure</span> Where To Begin?`,
                                    `Welcome To <span class="text-[#bf9b30]">Aerodemy Aviation</span>!`,
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/contact"
                            className="rounded-md bg-gradient-to-tr from-[#bf9b30] to-[#ffdc73] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#courses"
                            className="text-sm font-semibold leading-6 text-white"
                        >
                            See Courses <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffcf40] to-[#ffdc73] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
        </div>
    );
}
