import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

const Testimonials = () =>{
    return (
        <section>
            <div>
                <UsersIcon />
                <h1>
                    Client Testimonials
                </h1>
                <div>
                    {testimonials.map((testimonial) => (
                        <div>
                            <div>
                                <TerminalIcon />
                                <p>
                                    {testimonial.quote}
                                </p>
                                <div>
                                    <img alt="testimonial" src={testimonial.image}/>
                                    <span>
                                        <span>
                                            {testimonial.name}
                                        </span>
                                        <span>
                                            {testimonial.company}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;