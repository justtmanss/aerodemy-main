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
                            Privacy Policy
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            At Aerodemy Aviation, we respect your privacy and
                            are committed to protecting your personal
                            information. This Privacy Policy explains how we
                            collect, use, and disclose your personal information
                            when you use our coaching website. By using our
                            website, you consent to the terms of this Privacy
                            Policy. Information We Collect: When you use our
                            website, we may collect personal information from
                            you, such as your name, email address, and any other
                            information you provide to us through our contact
                            form or other means. We may also collect information
                            about your use of our website, such as your IP
                            address, browser type, and device information. How
                            We Use Your Information: We may use your personal
                            information for the following purposes: -To
                            communicate with you and respond to your inquiries
                            -To provide coaching services to you and personalize
                            your experience on our website -To send you
                            promotional materials and other communications about
                            our coaching services -To improve our website and
                            optimize its performance -How We Disclose Your
                            Information: We do not sell or rent your personal
                            information to third parties. However, we may
                            disclose your personal information in the following
                            circumstances: To our third-party service providers
                            who assist us in operating our website or providing
                            our coaching services To comply with legal
                            obligations, such as responding to subpoenas or
                            court orders To protect the rights or property of
                            Aerodemy Aviation or its users In the event of a
                            merger, acquisition, or sale of all or a portion of
                            Aerodemy Aviation&apos;s assets Data Security: We
                            take reasonable steps to safeguard your personal
                            information against unauthorized access, use, and
                            disclosure. However, no data transmission over the
                            internet is 100% secure, and we cannot guarantee the
                            security of information transmitted through our
                            website. Changes to Privacy Policy: We reserve the
                            right to change this Privacy Policy at any time. Any
                            changes to this Policy will be posted on our
                            website. Contact Us: If you have any questions or
                            concerns about this Privacy Policy or our use of
                            your personal information, please contact us at
                            aviationaerodemy@gmail.com.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
