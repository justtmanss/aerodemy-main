"use client";

import { useState } from "react";
const stats = [
    { label: "\u00a0", value: "Flash course" },
    { label: "35", value: "Days" },
    { label: "2", value: "Hours per day" },
    { label: "Rs. 40,000", value: "Course fees" },
];

const stats1 = [
    { label: "\u00a0", value: "Full course" },
    { label: "60", value: "Days" },
    { label: "1", value: "Hours per day" },
    { label: "Rs. 35,000", value: "Course fees" },
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
                            Technical{" "}
                            <span className="text-[#bf9b30]">General</span>{" "}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            The DGCA (Directorate General of Civil Aviation)
                            subject on Technical General encompasses various
                            topics related to the general technical aspects of
                            aircraft and aviation. Here is a general outline of
                            key areas you may need to study for DGCA Technical
                            General.
                        </p>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2 text-xl">
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    1. Aerodynamics
                                </span>
                                <br /> - Basic principles of aerodynamics.
                                <br /> - Forces acting on an aircraft (lift,
                                drag, thrust, and weight).
                                <br /> - Aircraft stability and control.
                            </p>

                            <p>
                                <span className="text-[#bf9b30] bold">
                                    2. Aircraft Systems:
                                </span>
                                <br />
                                - Understanding various aircraft systems
                                (electrical, hydraulic, fuel, etc.).
                                <br />- Operation and maintenance
                                considerations.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    3. Engines:
                                </span>
                                <br /> - Principles of aircraft engines (piston
                                engines, turbine engines).
                                <br /> - Engine components and systems.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    4. Airframes:
                                </span>
                                <br /> - Structure and materials of aircraft.
                                <br /> - Inspection and maintenance of
                                airframes.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    5. Instruments:
                                </span>
                                <br /> - Basic principles of flight instruments.
                                <br /> - Navigation instruments.
                                <br /> - Communication instruments.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    6. Flight Controls:
                                </span>
                                <br /> - Types of flight controls (ailerons,
                                elevators, rudders).
                                <br /> - Aircraft control surfaces and their
                                functions.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    7. Weight and Balance:
                                </span>
                                <br /> - Understanding the importance of weight
                                and balance in aviation.
                                <br /> - Calculation of weight and balance for
                                different configurations.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    8. Aviation Regulations:
                                </span>
                                <br /> - Compliance with technical regulations
                                and standards.
                                <br /> - Certification requirements for aircraft
                                and components.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    9. Emergency Procedures:
                                </span>
                                <br /> - Emergency systems and equipment on
                                aircraft.
                                <br /> - Procedures for handling various
                                emergencies.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    9. Principles of Flight:
                                </span>
                                <br /> - Understanding the factors affecting the
                                performance of an aircraft.
                                <br /> - Effect of altitude, temperature, and
                                other variables.
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
                                <span className="text-white">Rs. 40,000</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-x-6">
                            <a
                                href="/contact"
                                className="flex-1 rounded-md bg-gradient-to-tr text-xl from-[#bf9b30] to-[#ffdc73] px-10 py-6 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                            >
                                Full Course
                                <br />
                                <span className="text-white">Rs. 35,000</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
