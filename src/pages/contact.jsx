// Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                        <div className="space-y-4">
                            <p className="text-gray-700">
                                <strong>Email:</strong> Bigyan@gmail.com
                            </p>
                            <p className="text-gray-700">
                                <strong>Phone:</strong> +977 976-1234567
                            </p>
                            <p className="text-gray-700">
                                <strong>Address:</strong> Bharatpur-2, Kshetrapur
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-lg"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border rounded-lg"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-3 border rounded-lg"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;