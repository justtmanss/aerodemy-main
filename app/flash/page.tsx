const posts = [
    {
        id: 1,
        title: "Air Navigation",
        href: "/airnav",
        description: "",
        imageUrl: "/airnav.jpg",
    },

    {
        id: 2,
        title: "Aviation Meteorology",
        href: "/avmet",
        description: "",
        imageUrl: "/airmet.jpg",
    },

    {
        id: 3,
        title: "Air Regulations",
        href: "/airreg",
        description: "",
        imageUrl:
            "https://unsplash.com/photos/UOJ6vz2khrY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cGlsb3RzfGVufDB8fHx8MTcwOTg3OTY1MXww&force=true&w=640",
    },

    {
        id: 4,
        title: "Technical General",
        href: "/techgen",
        description: "",
        imageUrl: "/techgen.jpg",
    },
    // More posts...
];

export default function Flash() {
    return (
        <div className="relative isolate py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#bf9b30] underline">
                        Flash Course
                    </h2>
                    <p className="mt-10">
                        Welcome to Aerodemy Aviation&apos;s Intensive Ground
                        Subject Flash Course— a specialized program crafted for
                        ambitious aviators eager to swiftly master their DGCA
                        exams. Tailored for those with time constraints, our
                        flash courses offer premium education and comprehensive
                        materials, ensuring effective preparation even in tight
                        schedules. Emphasizing quality, candidates benefit from
                        personalized online mentoring and exclusive handwritten
                        notes provided to them by their mentors, tailored to
                        their specific subjects. Beyond exam preparation, this
                        course serves as a thorough revision for those already
                        acquainted with the material. Elevate your aviation
                        journey with Aerodemy Aviation&apos;s professional
                        guidance, arming you with the knowledge and confidence
                        essential for DGCA ground subject excellence. Buckle up,
                        future aviators!
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-60"
                        >
                            <img
                                src={post.imageUrl}
                                alt=""
                                className="absolute inset-0 -z-10 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/65" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <h3 className="mb-3 text-lg font-semibold leading-6 text-[#ffdc73]">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                            <p>{post.description}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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
