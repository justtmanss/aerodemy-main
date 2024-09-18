const navigation = {
    services: [
        { name: "AICPP", href: "/aicpp" },
        { name: "ICPP", href: "/icpp" },
        { name: "Flash Course", href: "/flash" },
        { name: "DGCA Ground Classes", href: "/subjects" },
    ],
    socials: [
        { name: "Email", href: "mailto:aviationaerodemy@gmail.com" },
        {
            name: "Instagram",
            href: "https://www.instagram.com/aerodemyaviation?igsh=eDVmYXI4ZWJ6OGw4",
        },
        { name: "Telegram", href: "https://t.me/aerodemyaviation" },
        {
            name: "Whatsapp",
            href: "https://chat.whatsapp.com/D4SCa57L36y1wEiQEwOzwm",
        },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privpol" },
        { name: "Terms and conditions", href: "/termsandcon" },
        { name: "Disclaimer", href: "/disc" },
    ],
};

export default function Footer() {
    return (
        <footer className="black-bg-25" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <div className="flex items-center gap-10 flex-col md:flex-row lg:gap-20">
                    <div className="lg:mr-auto">
                        <img
                            className="h-46 mx-auto "
                            src="/biglogo.png"
                            alt="Company name"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-center flex-col md:flex-row items-center md:items-start md:gap-8">
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-sm font-semibold leading-6 text-[#bf9b30]">
                                    Courses
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.services.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 mt-10 md:mt-0 text-center md:text-left">
                                <h3 className="text-sm font-semibold leading-6 text-[#bf9b30]">
                                    Socials
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.socials.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex-1 mt-10 md:mt-0 text-center md:text-left">
                                <h3 className="text-sm font-semibold leading-6 text-[#bf9b30]">
                                    Legal
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
