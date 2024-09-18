"use client";

import { useState } from "react";
const stats = [
    { label: "\u00a0", value: "Flash course" },
    { label: "28", value: "Days" },
    { label: "2", value: "Hours per day" },
    { label: "Rs. 33,000", value: "Course fees" },
];

const stats1 = [
    { label: "\u00a0", value: "Full course" },
    { label: "50", value: "Days" },
    { label: "1", value: "Hours per day" },
    { label: "Rs. 30,000", value: "Course fees" },
];

export default function AICPP() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="">
            <main className="relative isolate">
                {/* Background */}
                <div
                    className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ffcf40] to-[#ffdc73] opacity-25"
                        style={{
                            clipPath:
                                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                        }}
                    />
                </div>

                {/* Header section */}
                <div className="px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Air{" "}
                            <span className="text-[#bf9b30]">Navigation</span>{" "}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            To prepare for the DGCA (Directorate General of
                            Civil Aviation) subject on Air Navigation,
                            you&apos;ll need to cover a range of topics related
                            to navigation in the context of civil aviation.
                            Here&apos;s a broad outline of the key areas you
                            might need to study.
                        </p>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2 text-lg">
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    1. Navigation Fundamentals:
                                </span>
                                <br /> - Basic principles of navigation.
                                <br /> - Types of navigation (celestial,
                                terrestrial, electronic).
                                <br /> - Navigation aids and devices.
                            </p>

                            <p>
                                <span className="text-[#bf9b30] bold">
                                    2. Charts and Publications:
                                </span>
                                <br />
                                - Interpretation of NOTAMs (Notices to Airmen)
                                and other relevant publications.
                                <br />- Understanding aeronautical charts
                                (enroute, approach, and departure charts).
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    3. Radio Navigation:
                                </span>
                                <br /> - VOR (VHF Omni-Directional Range)
                                navigation.
                                <br /> - NDB (Non-Directional Beacon)
                                navigation.
                                <br /> - GPS (Global Positioning System)
                                principles.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    4. Instrumentation:
                                </span>
                                <br /> - Introduction to navigation instruments.
                                <br /> - Use of autopilots and flight management
                                systems.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    5. Navigation Regulations:
                                </span>
                                <br /> - Compliance with international and
                                national regulations.
                                <br /> - Rules of the air.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    6. Emergency Navigation
                                </span>
                                <br /> - Procedures for navigation in emergency
                                situations.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    7. Practical Navigation Exercises:
                                </span>
                                <br /> - Plotting courses on charts.
                                <br /> - Flight planning and navigation
                                calculations.
                            </p>
                        </div>
                        <br />
                        {/*brochure */}
                        <dl className="mt-30 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                            {stats.map((stat, statIdx) => (
                                <div
                                    key={statIdx}
                                    className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
                                >
                                    <dt className="text-base leading-7 text-gray-300">
                                        {stat.label}
                                    </dt>
                                    <dd className="text-2xl font-semibold tracking-tight text-[#bf9b30]">
                                        {stat.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <br />
                        <br />
                        <dl className="mt-30 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                            {stats1.map((stats1, stats1Idx) => (
                                <div
                                    key={stats1Idx}
                                    className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
                                >
                                    <dt className="text-base leading-7 text-gray-300">
                                        {stats1.label}
                                    </dt>
                                    <dd className="text-2xl font-semibold tracking-tight text-[#bf9b30]">
                                        {stats1.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <br />
                        <br />

                        <div className="flex justify-center mt-10 gap-10 flex-col lg:mt-20 lg:flex-row text-center">
                            <div className="flex items-center gap-x-6">
                                <a
                                    href="/contact"
                                    className="flex-1 rounded-md bg-gradient-to-tr text-xl from-[#bf9b30] to-[#ffdc73] px-10 py-6 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                >
                                    Flash Course
                                    <br />
                                    <span className="text-white">
                                        Rs. 33,000
                                    </span>
                                </a>
                            </div>
                            <div className="flex items-center gap-x-6">
                                <a
                                    href="/contact"
                                    className="flex-1 rounded-md bg-gradient-to-tr text-xl from-[#bf9b30] to-[#ffdc73] px-10 py-6 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                >
                                    Full Course
                                    <br />
                                    <span className="text-white">
                                        Rs. 30,000
                                    </span>
                                </a>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </main>
        </div>
    );
}
