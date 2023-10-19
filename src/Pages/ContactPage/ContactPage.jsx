import React from 'react';

const ContactPage = () => {
    return (
        <div className="flex justify-center items-center w-screen bg-white">
            <div className="container mx-auto px-4 lg:px-20 my-20">
                <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div className="flex">
                        <h1 className="font-bold uppercase text-5xl">Contact Us</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="First Name*"
                        />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Last Name*"
                        />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email*"
                        />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number"
                            placeholder="Phone*"
                        />
                    </div>
                    <div className="my-4">
                        <textarea
                            placeholder="Message*"
                            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        ></textarea>
                    </div>
                    <div className="my-2 w-1/2 lg:w-1/4">
                        <button
                            className="uppercase text-sm font-bold tracking-wide bg-pink-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
                <div
                    className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-pink-500 rounded-2xl"
                >
                    <div className="flex flex-col text-white">
                        <h1 className="font-bold uppercase text-4xl my-4">Visit Our Office</h1>
                        <p className="text-white">
                            We welcome you to visit our office and discuss your needs with us. Our
                            team is here to assist you.
                        </p>
                        <div className="flex my-4 w-2/3 lg:w-1/2">
                            <div className="flex flex-col">
                                <i className="fas fa-map-marker-alt pt-2 pr-2" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl">Main Office</h2>
                                <p className="text-white">
                                    5555 Tailwind RD, Pleasant Grove, UT 73533
                                </p>
                            </div>
                        </div>
                        <div className="flex my-4 w-2/3 lg:w-1/2">
                            <div className="flex flex-col">
                                <i className="fas fa-phone-alt pt-2 pr-2" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl">Call Us</h2>
                                <p className="text-white">Tel: (123) 456-7890</p>
                                <p className="text-white">Fax: (123) 456-7891</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
