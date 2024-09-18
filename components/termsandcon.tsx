"use client";

import { useState } from "react";

export default function TnC() {
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
                            Terms and Conditons
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            1. Terms By accessing this Academy, you are agreeing
                            to be bound by these Terms of Use, all applicable
                            laws and regulations, and agree that you are
                            responsible for compliance with any applicable local
                            laws. If you do not agree with any of these terms,
                            you are prohibited from using or accessing this
                            site. The materials contained in this Academy are
                            protected by applicable copyright and trademark law.
                            2. Use License 1. Permission is granted to
                            temporarily download one copy of any downloadable
                            materials on the Academy’s website for personal,
                            non-commercial transitory viewing only. This is the
                            grant of a license, not a transfer of title, and
                            under this license you may not: 1. modify or copy
                            the materials; 2. use the materials for any
                            commercial purpose, or for any public display
                            (commercial or non-commercial); 3. attempt to
                            decompile or reverse engineer any software contained
                            on the Academy&apos;s web site; 4. remove any
                            copyright or other proprietary notations from the
                            materials; or 5. transfer the materials to another
                            person or &apos;mirror&apos; the materials on any
                            other server. 2. This license shall automatically
                            terminate if you violate any of these restrictions
                            and may be terminated by Company at any time. Upon
                            terminating your viewing of these materials or upon
                            the termination of this license, you must destroy
                            any downloaded materials in your possession whether
                            in electronic or printed format. 3. Disclaimer The
                            materials on the Academy’s website are provided
                            &apos;as is&apos;. The Academy makes no warranties,
                            expressed or implied, and hereby disclaims and
                            negates all other warranties, including without
                            limitation, implied warranties or conditions of
                            merchantability, fitness for a particular purpose,
                            or non-infringement of intellectual property or
                            other violation of rights. Further, the Academy does
                            not warrant or make any representations concerning
                            the accuracy, likely results, or reliability of the
                            use of the materials on its website or otherwise
                            relating to such materials or on any sites linked to
                            this site. 4. Limitations In no event shall the
                            Academy be liable for any damages (including,
                            without limitation, damages for loss of data or
                            profit, or due to business interruption) arising out
                            of the use or inability to use the materials on the
                            Academy’s website, even if the Academy or an
                            authorized of the Academy has been notified orally
                            or in writing of the possibility of such damage.
                            Because some jurisdictions do not allow limitations
                            on implied warranties, or limitations of liability
                            for consequential or incidental damages, these
                            limitations may not apply to you. 5. Revisions and
                            Errata The materials appearing on the Academy’s
                            website may include technical, typographical, or
                            photographic errors. The Academy does not warrant
                            that any of the materials on its web site are
                            accurate, complete, or current. The Academy may make
                            changes to the materials contained on its web site
                            at any time without notice. The Academy does not,
                            however, make any commitment to update the
                            materials. 6. Links The Academy has not reviewed all
                            of the sites linked to its website and is not
                            responsible for the contents of any such linked
                            site. The inclusion of any link does not imply
                            endorsement by the Academy of the site. Use of any
                            such linked website is at the user&apos;s own risk.
                            7. Site Terms of Use Modifications The Academy may
                            revise these Terms of Use for its website at any
                            time without notice. By using this website, you are
                            agreeing to be bound by the then current version of
                            these Terms of Use. 8. Governing Law Any claim
                            relating to the Academy&apos;s website shall be
                            governed by the laws of the Academy Owner&apos;s
                            home jurisdiction without regard to its conflict
                            of law provisions.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
