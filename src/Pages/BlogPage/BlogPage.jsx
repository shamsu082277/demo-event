import React from 'react';

const BlogPage = () => {
    return (
        <section>
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
                    {/* First Blog Item */}
                    <div className="p-6">
                        <img className="object-cover object-center w-full mb-8 rounded-xl" src="https://i.ibb.co/zrsr80T/blog1.jpg" alt="blog"/>
                        <div className="inline-flex justify-between w-full">
                            <h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Planning a Birthday Bash</h1> {/* Changed title */}
                        </div>
                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
                            Dive into the world of birthday celebrations! Explore unique party themes, cake ideas, and tips for making every birthday special.
                        </p> {/* Changed description */}
                    </div>

                    {/* Second Blog Item */}
                    <div className="p-6">
                        <img className="object-cover object-center w-full mb-8 rounded-xl" src="https://i.ibb.co/4gC9V33/blog2.jpg" alt="blog"/>
                        <div className="inline-flex justify-between w-full">
                            <h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Wedding Inspirations</h1> {/* Changed title */}
                        </div>
                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
                            Find inspiration for your dream wedding! Discover trends, venue ideas, and wedding planning tips for a memorable day.
                        </p> {/* Changed description */}
                    </div>

                    {/* Third Blog Item */}
                    <div className="p-6">
                        <img className="object-cover object-center w-full mb-8 rounded-xl" src="https://i.ibb.co/pnQhGGq/blog3.jpg" alt="blog"/>
                        <div className="inline-flex justify-between w-full">
                            <h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Party Planning 101</h1> {/* Changed title */}
                        </div>
                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
                            Become a party planning pro! Learn the art of organizing social events, from themed parties to family gatherings.
                        </p> {/* Changed description */}
                    </div>

                    {/* Fourth Blog Item */}
                    <div className="p-6">
                        <img className="object-cover object-center w-full mb-8 rounded-xl" src="https://i.ibb.co/pP9nxkk/blog4.jpg" alt="blog"/>
                        <div className="inline-flex justify-between w-full">
                            <h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Anniversary Celebrations</h1> {/* Changed title */}
                        </div>
                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
                            Explore ideas for celebrating love! Discover romantic anniversary plans, gift ideas, and ways to cherish your special moments.
                        </p> {/* Changed description */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
