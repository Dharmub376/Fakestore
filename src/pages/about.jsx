import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen pt-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=500&h=500&fit=crop"
                            alt="Our Team"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-xl font-semibold mb-4">Our Story</h2>
                        <p className="text-gray-700 mb-4">
                            We are a passionate team dedicated to providing the best products and services
                            to our customers. With years of experience in the industry, we strive for
                            excellence in everything we do.
                        </p>
                        <p className="text-gray-700">
                            Our mission is to make quality products accessible to everyone while maintaining
                            sustainable practices and supporting our local community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;