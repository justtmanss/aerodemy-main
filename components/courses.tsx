const posts = [
    {
        id: 1,
        title: "Indigo Cadet Pilot Program",
        href: "/icpp",
        description:
            "Elevate your aviation aspirations with Aerodemy's ICPP COURSE! Experience tailored 1v1 classes, a strategic approach, continuous 24/7 mentorship, comprehensive materials, budget-friendly packages, and flexible scheduling. Let dedicated instructors steer your path to a flourishing aviation career!",
        imageUrl: "/indigo.png",
    },

    {
        id: 2,
        title: "Air India Cadet Pilot Program",
        href: "/aicpp",
        description:
            "Join Aerodemy's AICPP for a top-tier aviation experience. Benefit from personalized 1v1 classes, 24/7 mentorship, and flexible scheduling – all in a budget-friendly package. Enroll now to launch your dream of becoming a Cadet Pilot for Air India. Elevate your aviation journey with us!",
        imageUrl: "/airindia.png",
    },

    {
        id: 3,
        title: "Flash Course",
        href: "/flash",
        description:
            "Fast-track your DGCA exam success with Aerodemy's Intensive Ground Subject Flash Course. Tailored for time efficiency, enjoy premium education, personalized mentoring, and exclusive notes. Elevate your aviation journey confidently with Aerodemy's expert guidance. Buckle up for excellence!",
        imageUrl: "/flash.jpg",
    },

    {
        id: 4,
        title: "DGCA Ground Classes",
        href: "/subjects",
        description:
            "The Directorate General of Civil Aviation (DGCA) oversees civil aviation in India. The various DGCA Subjects are Aviation Meteorology, Air Regulations, Air Navigation and Technical General. Pilots need to have a thorough understanding of these subjects in order to obtain a Commercial Pilot License (CPL)!",
        imageUrl: "/dgca1.jpg",
    },
    // More posts...
];

export default function Courses() {
    return (
        <div className="relative isolate py-24 sm:py-32" id="courses">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-[#bf9b30] underline decoration-[#bf9b30]">
                        Courses
                    </h2>
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
