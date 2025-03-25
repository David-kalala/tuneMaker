import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Wand2, Clock, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-gray-900">
          Create Your Perfect Music
          <br />
          <span className="text-indigo-600">With AI</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your musical ideas into reality. No musical experience needed - just describe what you want, and let our AI create your perfect track.
        </p>
        <Link
          to="/create"
          className="inline-block px-8 py-4 rounded-full bg-indigo-600 text-white text-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Start Creating
        </Link>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-12">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
            <Wand2 className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold">Easy Creation</h3>
          <p className="text-gray-600">
            Simply describe your desired music style, mood, and instruments. No technical knowledge required.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
            <Clock className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold">Quick Delivery</h3>
          <p className="text-gray-600">
            Get your custom music track delivered within hours, professionally crafted to your specifications.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold">100% Satisfaction</h3>
          <p className="text-gray-600">
            Love your music or get a free revision. We're committed to your satisfaction.
          </p>
        </div>
      </section>

      {/* Example Tracks */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Listen to Example Tracks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add example tracks here when available */}
        </div>
      </section>
    </div>
  );
}

export default Home;