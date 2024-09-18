"use client";

import { useState } from "react";

export default function Disclaimer() {
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
                            Disclaimer
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Aerodemy Aviation is in no way affiliated with any
                            Airline or any other organisation. The Airlines and
                            DGCA reserve the right to alter the selection
                            process at any time, and the final selection of
                            candidates is solely at the discretion of the
                            Airlines and DGCA. Enrollment in our courses do not
                            guarantee selection in the Airline Cadet Pilot
                            Programs or passing of the students in the DGCA
                            Exams. The primary goal of the courses we provide is
                            to give students theoretical knowledge and enhance
                            understanding of the relevant topics. Prospective
                            students should enroll in various courses based on
                            their own judgement and understanding of its scope.
                            <br />
                            Note: Custom packages can be tailored to meet the
                            specific requirements of students. Please feel free
                            to get in touch with us for further details or to
                            discuss your individual needs.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
