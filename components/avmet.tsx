"use client";

import { useState } from "react";
const stats = [
    { label: "\u00a0", value: "Flash course" },
    { label: "14", value: "Days" },
    { label: "2", value: "Hours per day" },
    { label: "Rs. 25,000", value: "Course fees" },
];

const stats1 = [
    { label: "\u00a0", value: "Full course" },
    { label: "25", value: "Days" },
    { label: "1", value: "Hours per day" },
    { label: "Rs. 20,000", value: "Course fees" },
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
                            Aviation{" "}
                            <span className="text-[#bf9b30]">Meterology</span>{" "}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            To prepare for the DGCA (Directorate General of
                            Civil Aviation) subject on Aviation Meteorology,
                            you&apos;ll need to cover a range of topics related
                            to meteorology in the context of civil aviation.
                            Meteorology plays a crucial role in aviation safety
                            and decision-making. Below is a list of key areas
                            you may need to study.
                        </p>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2 text-xl">
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    1. Basic Meteorological Concepts:
                                </span>
                                <br /> - Atmospheric layers and composition.
                                <br /> - Temperature, pressure, and humidity.
                            </p>

                            <p>
                                <span className="text-[#bf9b30] bold">
                                    2. Weather Phenomena:
                                </span>
                                <br />
                                - Cloud types and formations.
                                <br />- Precipitation (rain, snow, sleet).
                                <br />- Fog and visibility.
                                <br />- Thunderstorms and lightning.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    3. Air Masses and Fronts:
                                </span>
                                <br /> - Different types of air masses.
                                <br /> - Frontal systems and their
                                characteristics.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    4. Pressure Systems:
                                </span>
                                <br /> - High and low-pressure systems.
                                <br /> - Isobars and pressure gradients.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    5. Wind Patterns:
                                </span>
                                <br /> - Global wind patterns.
                                <br /> - Local wind effects.
                                <br /> - Jet streams.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    6. Weather Charts and Maps:
                                </span>
                                <br /> - Interpretation of weather charts
                                (surface analysis, upper-level charts).
                                <br /> - Use of satellite and radar imagery.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    7. METAR and TAF Reports:
                                </span>
                                <br /> - Understanding METAR (Meteorological
                                Aerodrome Report) and TAF (Terminal Aerodrome
                                Forecast) reports.
                                <br /> - Extracting relevant information for
                                flight planning.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    8. Aerodrome Weather:
                                </span>
                                <br /> - Aerodrome climatology.
                                <br /> - Wind shear and microbursts.
                                <br /> - Crosswinds and their effects on
                                aircraft.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    9. Icing and Turbulence
                                </span>
                                <br /> - Types of icing (structural and
                                induction).
                                <br /> - Causes and effects of turbulence.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    10. Weather Decision-Making:
                                </span>
                                <br /> - Impact of weather on flight planning
                                and operations.
                                <br /> - Decision-making in adverse weather
                                conditions.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    11. Aviation Weather Services:
                                </span>
                                <br /> - Use of weather briefings and updates.
                                <br /> - Interaction with meteorological
                                services.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    12. Weather and Navigation:
                                </span>
                                <br /> -- Influence of weather on navigation
                                decisions.
                                <br /> - Practical considerations for pilots.
                            </p>
                        </div>
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
                                <span className="text-white">Rs. 25,000</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-x-6">
                            <a
                                href="/contact"
                                className="flex-1 rounded-md bg-gradient-to-tr text-xl from-[#bf9b30] to-[#ffdc73] px-10 py-6 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                            >
                                Full Course
                                <br />
                                <span className="text-white">Rs. 20,000</span>
                            </a>
                        </div>
                    </div>
                    <br />
                </div>
            </main>
        </div>
    );
}
