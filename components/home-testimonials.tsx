"use client";

import React from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Testimonial from "./testimonial";
export default function MyApp() {
    return (
        <div className="relative" id="reviews">
            <div
                className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 -z-50"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffcf40] to-[#ffdc73] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <div className="flex items-center justify-between">
                <div className="w-1/3 " />
                <div className="w-4/6 ml-16" />
            </div>
            <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={400}
                    isIntrinsicHeight={true}
                    totalSlides={4}
                >
                    <h1 className="text-5xl font-bold xl:block leading-tight text-white text-center underline decoration-[#bf9b30]">
                        Student <span className="text-[#bf9b30]">Insights</span>
                    </h1>

                    <Slider>
                        <Slide index={0} tabIndex={0}>
                            <Testimonial
                                testimonial="The classes provided a focused, professional and structured approach to learning that helped me understand the subject. The course content was well-organized and they offered valuable resources and materials to practice. The instructor was knowledgeable and engaging, making complex concepts easy to grasp.Throughout the course, I was provided personalized attention and support from the instructor, who was readily available to answer questions, be it day or night. 
                                By the end of the course, I felt more confident in my abilities and had acquired the skills to glide through the exam. Highly recommended for anyone looking to deepen their understanding of aviation  in a supportive and enriching environment."
                                image="/roshanraj.jpg"
                                name="Roshan Raj"
                                position="Air Navigation"
                            />
                        </Slide>
                        <Slide index={1}>
                            <Testimonial
                                testimonial="These guys are excellent. They provide really good instruction’s and I have taken classes from them. They address all the  topics discussed in group discussions, as well as technical and HR inquiries. They regularly conduct mock exams and provide short & to the point notes . Time slots are also negotiable. I recently completed my personal interview and group discussion; the results are still pending, but I am confident that I will get accepted."
                                image="/deepak.jpg"
                                name="Deepak Bishnoi"
                                position="AICPP"
                            />
                        </Slide>
                        <Slide index={2}>
                            <Testimonial
                                testimonial="Studying for the DGCA Technical General course with aerodemy provided me with a comprehensive understanding of crucial aviation aspects. The well-structured curriculum covered aerodynamics, aircraft systems, engines, airframes, instruments, flight controls, weight and balance, regulations, emergency procedures, and principles of flight. This course not only equipped me with theoretical knowledge but also emphasized practical applications, ensuring a well-rounded preparation. The detailed outline and emphasis on real-world scenarios make it an invaluable resource for anyone pursuing a career in aviation. Highly recommended for aspiring aviation professionals."
                                image="/anon.png"
                                name="Ananya Thapa"
                                position="Technical General"
                            />
                        </Slide>
                        <Slide index={3}>
                            <Testimonial
                                testimonial="The ICPP Full Course is a game-changer, providing a holistic approach to success. Engaging English speaking classes boosted my confidence, while ADAPT Test Preparation and mock tests ensured I was well-prepared. Group Discussion Preparation offered practical insights, and Interview Practice, spanning 10 hours, was a crown jewel, simulating real-life scenarios and leaving me interview-ready. This course is a comprehensive, transformative experience that I highly recommend for anyone aiming to excel in their pursuits."
                                image="/anon.png"
                                name="Arpit Kapoor"
                                position="ICPP"
                            />
                        </Slide>
                    </Slider>
                    <div className="flex items-center justify-center invert">
                        <ButtonBack
                            className="cursor-pointer"
                            role="button"
                            aria-label="previous slide"
                        >
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                                alt="previous"
                                style={{ transform: "scaleX(-1)" }}
                            />
                        </ButtonBack>

                        <ButtonNext
                            role="button"
                            aria-label="next slide"
                            className="cursor-pointer"
                        >
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                                alt="next"
                            />
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
