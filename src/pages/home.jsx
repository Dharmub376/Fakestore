// Home.js
import React from 'react';
import About from './About';
import Contact from './Contact';
import Products from './products';

const Home = () => {
    return (
        <>
            <div 
                className="min-h-screen pt-20 px-4 bg-cover bg-center bg-no-repeat flex items-center"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images8.alphacoders.com/118/thumb-1920-1180524.jpg')" }}
            >
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">Welcome to Our Premium Store</h1>
                    <p className="text-xl mb-8">
                        Discover amazing products at great prices. Shop with confidence and enjoy fast delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-lg">
                            Shop Now
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors font-semibold text-lg">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <About />
            <Products />
            <Contact />
        </>
    );
};

export default Home;