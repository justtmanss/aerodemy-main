"use client";

import { useState } from "react";
import {
    AcademicCapIcon,
    HandRaisedIcon,
    RocketLaunchIcon,
    SparklesIcon,
    SunIcon,
    UserGroupIcon,
} from "@heroicons/react/20/solid";

const stats = [
    { label: "Rs. 5,500", value: "Resume & Cut-e Test" },
    { label: "Rs. 6,500", value: "Group Discussion" },
    { label: "Rs. 8,000", value: "Personal Interview" },
    { label: "Rs. 18,000", value: "Full Course" },
];
const values = [
    {
        name: "Comprehensive Materials:",
        description:
            "Access all necessary materials, ensuring you're well-equipped for success in each phase.",
        icon: RocketLaunchIcon,
    },
    {
        name: "24/7 Mentorship:",
        description:
            " Benefit from personal mentors addressing your doubts round-the-clock, offering support and guidance throughout the curriculum.",
        icon: HandRaisedIcon,
    },
    {
        name: "Phased Approach:",
        description:
            "Navigate adapt, group discussion and interviews with precision, ensuring thorough preparation for success in each step.",
        icon: UserGroupIcon,
    },
    {
        name: "Personalized 1-on-1 Classes:",
        description:
            "Engage in tailored learning with dedicated instructors, initiating your aviation journey on a personalized path.",
        icon: AcademicCapIcon,
    },
    {
        name: "Affordable Packages:",
        description:
            "Aerodemy's commitment to accessibility includes affordably priced courses and customizable packages for tailored learning experiences.",
        icon: SparklesIcon,
    },
    {
        name: "Flexible Timings:",
        description:
            "A key feature is the focus on flexible timings, catering to candidates' availability.",
        icon: SunIcon,
    },
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
                            <span className="text-[#cd1d25]">Air India</span>{" "}
                            Cadet <span className="text-[#bf9b30]">Pilot</span>{" "}
                            Program
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Embark on a meticulously designed journey into the
                            aviation realm with Aerodemy Aviation&apos;s AICPP
                            preparatory course. Our comprehensive course steers
                            aspiring aviators through four vital phases.
                            Let&apos;s delve into the four essential phases of
                            Air India Cadet Pilot Program.
                        </p>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    1. Screening:
                                </span>
                                <br />
                                <span className="text-white bold">
                                    {" "}
                                    Resume and Cover Letter Assessment:{" "}
                                </span>
                                <br /> - Identify candidates with the right
                                qualifications and a genuine passion for
                                aviation.
                                <br /> - Shortlist individuals demonstrating
                                strong communication and presentation skills
                            </p>

                            <p>
                                <span className="text-[#bf9b30] bold">
                                    2. Cut-e Assessment:
                                </span>
                                <br />
                                <span className="text-white bold">
                                    {" "}
                                    Mathematics and English Tests:{" "}
                                </span>
                                <br />
                                - Evaluate candidates&apos; proficiency in
                                fundamental mathematical and English skills.
                                <br />
                                <span className="text-white bold">
                                    {" "}
                                    Spatial Orientation:{" "}
                                </span>
                                <br />
                                - Assess spatial awareness and the ability to
                                navigate three-dimensional space.
                                <br />
                                <span className="text-white bold">
                                    {" "}
                                    Monitoring and Reaction Speed:{" "}
                                </span>
                                <br />
                                - Measure cognitive functions related to
                                monitoring and quick reaction times.
                                <br />
                                <span className="text-white bold">
                                    {" "}
                                    Wing Challenge and Sonic Game:{" "}
                                </span>
                                <br />- Engage candidates in aviation-related
                                challenges to assess problem-solving abilities.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    3. Group Discussions (GD):
                                </span>
                                <br /> - Problem Solving: Evaluating analytical
                                and critical thinking.
                                <br /> - Decision Making: Assessing the ability
                                to make informed and timely decisions.
                                <br /> - Interpersonal Skills: Gauging effective
                                communication and collaboration.
                                <br /> - Adaptability: Evaluating the capacity
                                to adjust to changing circumstances.
                                <br /> - Conflict Resolution: Assessing the
                                ability to navigate and resolve conflicts.
                                <br /> - Cultural Awareness and Sensitivity:
                                Ensuring awareness and respect for diverse
                                perspectives.
                                <br /> - Professionalism: Evaluating conduct in
                                a professional setting.
                            </p>
                            <p>
                                <span className="text-[#bf9b30] bold">
                                    4. Personal Interview (PI):
                                </span>
                                <br /> - Personality Assessment: Delving into
                                the candidate&apos;s character, values, and
                                interpersonal skills.
                                <br /> - Current Affairs and General Knowledge:
                                Assessing awareness of current events and
                                company-specific knowledge.
                                <br /> - Body Language and Etiquette: Evaluating
                                non-verbal communication and professional
                                demeanor.
                                <br /> - Company-Specific Knowledge: Ensuring
                                that the candidate is familiar with the
                                company&apos;s dynamics and current affairs.
                                <br /> - Technical knowledge: Assessing your
                                basic aerodynamics and aviation knowlegde
                            </p>
                        </div>

                        {/*brochure */}
                        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                            <div className="course-container p-8 rounded-lg shadow-lg">
                                <h1 className="text-3xl text-[#bf9b30] font-bold mb-6 text-center underline">
                                    Preparatory Course Details
                                </h1>

                                <div className="module">
                                    <h2 className="text-xl font-semibold mb-4 text-[#bf9b30]">
                                        1. English Speaking Classes
                                    </h2>
                                    <p className="mb-4">
                                        Join our 5-hour sessions to boost your
                                        confidence in speaking English fluently.
                                    </p>
                                </div>

                                <div className="module">
                                    <h2 className="text-xl font-semibold mb-4 text-[#bf9b30]">
                                        2. Resume and CUT-e Test Preparation
                                    </h2>
                                    <p className="mb-4">
                                        Join our 5-hour sessions where the
                                        student will be given a brief on how to
                                        prepare a good resume and tips to
                                        prepare for the very important CUT-e
                                        test. Additionally, mock tests for the
                                        same will be held to help the student
                                        gain confidence.
                                    </p>
                                </div>

                                <div className="module">
                                    <h2 className="text-xl font-semibold mb-4 text-[#bf9b30]">
                                        3. Group Discussion Preparation
                                    </h2>
                                    <p className="mb-4">
                                        Get guidance on Group Discussion
                                        techniques in a 5-hour session with mock
                                        discussions for confidence building.
                                    </p>
                                </div>

                                <div className="module">
                                    <h2 className="text-xl font-semibold mb-4 text-[#bf9b30]">
                                        4. Interview Practice
                                    </h2>
                                    <p className="mb-4">
                                        10-hour training covering various
                                        interview questions. Mock interviews
                                        simulate real scenarios for better
                                        preparation.
                                    </p>
                                </div>

                                <div className="additional-materials mt-8">
                                    <h2 className="text-2xl font-bold mb-4 text-white text-[#bf9b30]">
                                        Additional Materials Provided:
                                    </h2>
                                    <ul className="list-disc list-inside text-white">
                                        <li>
                                            A software for Cut-e Test
                                            preparation –{" "}
                                            <span className="font-semibold text-[#bf9b30]">
                                                FREE!
                                            </span>
                                        </li>
                                        <li>
                                            500+ Questions for Physics, Maths,
                                            English, and Cognitive Reasoning –{" "}
                                            <span className="font-semibold text-[#bf9b30]">
                                                FREE!
                                            </span>
                                        </li>
                                        <li>
                                            Personality Questionnaire for
                                            psychometric assessment –{" "}
                                            <span className="font-semibold text-[#bf9b30]">
                                                FREE!
                                            </span>
                                        </li>
                                        <li>
                                            25+ Group Discussion Topics and
                                            Activities with Detailed Answers –{" "}
                                            <span className="font-semibold text-[#bf9b30]">
                                                FREE!
                                            </span>
                                        </li>
                                        <li>
                                            500+ Personal Interview Questions
                                            with Detailed Answers –{" "}
                                            <span className="font-semibold text-[#bf9b30]">
                                                FREE!
                                            </span>
                                        </li>
                                        <li>
                                            Daily Aviation Newsletters covering
                                            current affairs related to aviation
                                            –{" "}
                                            <span className="font-semibold text-[#bf9b30]">
                                                FREE!
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                            {stats.map((stat, statIdx) => (
                                <div
                                    key={statIdx}
                                    className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
                                >
                                    <dt className="text-base leading-7 text-gray-300">
                                        {stat.label}
                                    </dt>
                                    <dd className="text-2xl font-semibold tracking-tight text-white">
                                        {stat.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="mx-auto flex justify-center">
                    {" "}
                    {/* Updated this line */}
                    <a
                        href="/contact"
                        className="rounded-md bg-gradient-to-tr from-[#bf9b30] to-[#ffdc73] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Buy Now !
                    </a>
                </div>

                {/* Values section */}
                <div className="mx-auto mt-32 mb-32 max-w-7xl px-6 sm:mt-40 sm:mb-40 lg:px-8 ">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#bf9b30] underline">
                            Key features of this course
                        </h2>
                        {/*<p className="mt-6 text-lg leading-8 text-gray-300">
                            
                            </p>*/}
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                        {values.map((value) => (
                            <div key={value.name} className="relative pl-9">
                                <dt className="inline font-semibold text-white">
                                    <value.icon
                                        className="absolute left-1 top-1 h-5 w-5 text-[#bf9b30]"
                                        aria-hidden="true"
                                    />
                                    {value.name}
                                </dt>{" "}
                                <dd className="inline">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="mt-10 sm:mt-15 xl:mx-auto xl:max-w-5xl xl:px-8">
                    <div className="course-container p-8 rounded-lg shadow-lg">
                        <div className="additional-materials mt-2 flex items-center">
                            <p className="text-xl flex-shrink-0">
                                <span className="text-[#bf9b30]">Note: </span>
                                Custom packages can be made as per the
                                student&apos;s requirement. Please feel free to{" "}
                                <a
                                    href="/contact"
                                    className="text-[#bf9b30] hover:underline"
                                >
                                    contact us{" "}
                                </a>
                                for the same.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
