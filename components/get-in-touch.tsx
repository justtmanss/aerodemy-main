import Link from "next/link";

export default function GetInTouch() {
    return (
        <div className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-[#bf9b30] underline">
                                Get in touch
                            </h2>
                            <p className="mt-4 leading-7 text-white">
                                Piqued your interest while navigating our
                                courses and interested in buying one of our
                                courses? We invite you to take the next
                                exhilarating step. Feel the freedom to get in
                                touch and let the enchanting adventure of
                                aviation unfold with Aerodemy Aviation – where
                                your journey begins in style. Buckle up,
                                future aviators!!
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <Link
                                href="mailto:aviationaerodemy@gmail.com"
                                className="rounded-2xl bg-black/25 p-10"
                            >
                                <h3 className="text-base font-semibold leading-7 text-[#bf9b30]">
                                    Email
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-white">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <span className="font-semibold text-white">
                                                aviationaerodemy@gmail.com
                                            </span>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">Email</dt>
                                        {/*<dd>+1 (555) 905-3456</dd>*/}
                                    </div>
                                </dl>
                            </Link>

                            <Link
                                href="https://chat.whatsapp.com/D4SCa57L36y1wEiQEwOzwm"
                                className="rounded-2xl bg-black/25 p-10"
                            >
                                <h3 className="text-base font-semibold leading-7 text-[#bf9b30]">
                                    Whatsapp
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-white">
                                    <div>
                                        <dt className="sr-only">Number</dt>
                                        <dd>
                                            <span className="font-semibold text-white">
                                                Aerodemy Aviation 🛩
                                            </span>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">Number</dt>
                                        {/*<dd>+1 (555) 905-3456</dd>*/}
                                    </div>
                                </dl>
                            </Link>

                            <Link
                                href="https://www.instagram.com/aerodemyaviation?igsh=eDVmYXI4ZWJ6OGw4"
                                className="rounded-2xl bg-black/25 p-10"
                            >
                                <h3 className="text-base font-semibold leading-7 text-[#bf9b30]">
                                    Instagram
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-white">
                                    <div>
                                        <dt className="sr-only">Link</dt>
                                        <dd>
                                            <span className="font-semibold text-white">
                                                @aerodemyaviation
                                            </span>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">Link</dt>
                                        {/*<dd>+1 (555) 905-3456</dd>*/}
                                    </div>
                                </dl>
                            </Link>

                            <Link
                                href="https://t.me/aerodemyaviation"
                                className="rounded-2xl bg-black/25 p-10"
                            >
                                <h3 className="text-base font-semibold leading-7 text-[#bf9b30]">
                                    Telegram
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-white">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <span className="font-semibold text-white">
                                                https://t.me/aerodemyaviation
                                            </span>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        {/*<dd>+1 (555) 905-3456</dd>*/}
                                    </div>
                                </dl>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
