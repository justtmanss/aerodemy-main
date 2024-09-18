/*
okay so in order to make this component reusable we need to first create the types that we will be passing through
yes i understood

okay so now the component is reusable

now lets go to home-testimonials
*/

interface Props {
    testimonial: string;
    name: string;
    position: string;
    image: string;
}
export default function Testimonial(props: Props) {
    return (
        <section>
            <div className="mx-auto max-w-7xl py-10 pt-24">
                <div className="relative isolate overflow-hidden px-6 py-6 text-center shadow-2xl sm:rounded-3xl sm:px-16  black-bg-25">
                    <div className="mx-auto grid max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="flex flex-col p-10">
                            <figure className="mt-10 flex flex-auto flex-col justify-between">
                                <blockquote className="text-lg leading-8 text-white">
                                    <p>“{props.testimonial}”</p>
                                </blockquote>
                                <figcaption className="mt-10 flex items-center justify-center gap-x-6">
                                    <img
                                        className="h-14 w-14 rounded-full bg-gray-50"
                                        src={props.image}
                                        alt=""
                                    />
                                    <div className="text-base">
                                        <div className="font-semibold text-white">
                                            {props.name}
                                        </div>
                                        <div className="mt-1 text-gray-500">
                                            {props.position}
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
