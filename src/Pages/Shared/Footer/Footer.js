import React from 'react';
import { GiFoodTruck } from "react-icons/gi";

const Footer = () => {
    return (
        <div className=''>
            <footer aria-label="Site Footer" className="bg-gray-900">
                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
                >
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
                        <a
                            className=" text-lime-400 inline-block rounded-full  p-2  shadow transition hover:bg-lime-500 sm:p-3 lg:p-4"
                            href="#MainContent"
                        >
                            <span className="sr-only">Back to top</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="lg:flex lg:items-end lg:justify-between">
                        <div>
                            <div className="flex justify-center text-white  lg:justify-start">
                                <GiFoodTruck className=' w-9 h-9 text-white'></GiFoodTruck>
                                <p className='text-3xl ml-3 text-lime-500 font-bold'>Green Food</p>
                            </div>

                            <p
                                className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                                consequuntur amet culpa cum itaque neque.
                            </p>
                        </div>

                        <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
                            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
                                <li>
                                    <a className= "text-white transition hover:text-gray-700/75" href="/">About</a>
                                </li>
                                <li>
                                    <a className= "text-white transition hover:text-gray-700/75" href="/">Services</a>
                                </li>

                                <li>
                                    <a className= "text-white transition hover:text-gray-700/75" href="/">Projects</a>
                                </li>

                                <li>
                                    <a className= "text-white transition hover:text-gray-700/75" href="/">Blog</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <p className="mt-12 text-center text-sm text-red-500 lg:text-right">
                        Copyright &copy; 2022. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;