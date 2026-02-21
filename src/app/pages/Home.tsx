import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Heart, Sparkles, Star } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1766734865418-c8b5ca3d548a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZW5nYWdlbWVudCUyMHByb3Bvc2FsJTIwZGVjb3J8ZW58MXx8fHwxNzcxMDQ1MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury event decor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Favored Events</h1>
          <p className="text-xl md:text-2xl mb-4">
            Faith-Based Event Design | Luxury Decor, Florals & Photography
          </p>
          <p className="text-lg mb-8 italic">
            "She is clothed with strength and dignity; she can laugh at the days to come." - Proverbs 31:25
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/engagement-proposals"
              className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-900 transition-colors"
            >
              Engagement Proposals
            </Link>
            <Link
              to="/luxury-event-decor"
              className="bg-white text-amber-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Luxury Events
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive event design services including decor, florals, and professional photography
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Engagement Proposals Card */}
            <Link to="/engagement-proposals" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765185205714-09094f4d8ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHByb3Bvc2FsJTIwc2V0dXAlMjBjYW5kbGVzfGVufDF8fHx8MTc3MTA0NTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Romantic proposal setup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="text-amber-800" size={24} />
                    <h3 className="text-2xl text-gray-900">Engagement Proposals</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Romantic setups with florals, candles, and faith-inspired elements to create the perfect moment.
                  </p>
                  <span className="text-amber-800 group-hover:underline">Learn More →</span>
                </div>
              </div>
            </Link>

            {/* Luxury Event Decor Card */}
            <Link to="/luxury-event-decor" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765614768003-cffd87c0808b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjB2ZW51ZSUyMGRlY29yYXRpb24lMjBmbG93ZXJzfGVufDF8fHx8MTc3MTA0NTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Elegant event venue decoration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="text-amber-800" size={24} />
                    <h3 className="text-2xl text-gray-900">Luxury Event Decor</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Exquisite floral arrangements, elegant lighting, and thoughtfully designed spaces for your celebration.
                  </p>
                  <span className="text-amber-800 group-hover:underline">Learn More →</span>
                </div>
              </div>
            </Link>

            {/* Photography Card */}
            <Link to="/photography" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1769230385107-bc6eaa7a123e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaGVyJTIwY2FtZXJhJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTIwMDk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional event photography"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="text-amber-800" size={24} />
                    <h3 className="text-2xl text-gray-900">Event Photography</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Professional photography services capturing every precious moment of your special day.
                  </p>
                  <span className="text-amber-800 group-hover:underline">Learn More →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Star className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Expert Design</h3>
              <p className="text-gray-600">
                Our experienced designers create custom decor that perfectly matches your vision and style.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Heart className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Attention to Detail</h3>
              <p className="text-gray-600">
                Every element is carefully curated to ensure your event is flawless and memorable.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Sparkles className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest materials and work with trusted vendors to deliver excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6">Ready to Create Your Perfect Event?</h2>
          <p className="text-xl mb-8">
            Let us bring your vision to life with our exceptional event decor services.
          </p>
          <Link
            to="/engagement-proposals"
            className="inline-block bg-white text-amber-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}