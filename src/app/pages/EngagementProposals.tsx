import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { QuoteForm } from "../components/QuoteForm";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Heart, Sparkles, Camera, Music } from "lucide-react";

export function EngagementProposals() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1765185205714-09094f4d8ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHByb3Bvc2FsJTIwc2V0dXAlMjBjYW5kbGVzfGVufDF8fHx8MTc3MTA0NTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Romantic proposal setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Engagement Proposals</h1>
          <p className="text-xl md:text-2xl">Create the Perfect Moment to Say "Yes"</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Your proposal should be as unique and special as your love story. At Favored Events, 
            we create magical, romantic settings that set the stage for one of life's most important 
            moments. From intimate candlelit setups to grand outdoor displays with exquisite florals, 
            we'll help you create a proposal they'll never forget. As a faith-based event design company, 
            we infuse thoughtful scripture and spiritual elements into our designs when desired.
          </p>
          <p className="text-lg text-gray-600 italic">
            "Love is patient, love is kind... It always protects, always trusts, always hopes, always perseveres." - 1 Corinthians 13:4-7
          </p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Heart className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Custom Themes</h3>
              <p className="text-gray-600">
                Personalized decor that reflects your unique story and style.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Sparkles className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Romantic Lighting</h3>
              <p className="text-gray-600">
                Candles, string lights, and ambient lighting to set the perfect mood.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Camera className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Photography Setup</h3>
              <p className="text-gray-600">
                Picture-perfect arrangements designed with photography in mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Music className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Full Coordination</h3>
              <p className="text-gray-600">
                Complete setup and coordination so you can focus on the moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Proposal Setups</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766734865418-c8b5ca3d548a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZW5nYWdlbWVudCUyMHByb3Bvc2FsJTIwZGVjb3J8ZW58MXx8fHwxNzcxMDQ1MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elegant proposal setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1680079033073-860e3b9c2094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMHRhYmxlJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzEwNDUyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Romantic dinner table setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765185205714-09094f4d8ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHByb3Bvc2FsJTIwc2V0dXAlMjBjYW5kbGVzfGVufDF8fHx8MTc3MTA0NTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Candle-lit proposal"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">Your photo here</p>
              </div>
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">Your photo here</p>
              </div>
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">Your photo here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Proposal Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl mb-4">Intimate</h3>
              <p className="text-3xl text-amber-800 mb-6">From $500</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Simple romantic setup</li>
                <li>• Rose petals and candles</li>
                <li>• 2-hour setup window</li>
                <li>• Photo backdrop</li>
                <li>• Basic cleanup</li>
              </ul>
            </div>

            {/* Standard Package */}
            <div className="bg-amber-800 text-white rounded-lg shadow-lg p-8 transform scale-105">
              <div className="text-center mb-2">
                <span className="bg-white text-amber-800 px-3 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <h3 className="text-2xl mb-4">Romantic</h3>
              <p className="text-3xl mb-6">From $1,200</p>
              <ul className="space-y-3 mb-8">
                <li>• Custom theme design</li>
                <li>• Premium floral arrangements</li>
                <li>• Professional lighting</li>
                <li>• 4-hour setup window</li>
                <li>• Personalized signage</li>
                <li>• Full cleanup service</li>
              </ul>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl mb-4">Grand</h3>
              <p className="text-3xl text-amber-800 mb-6">From $2,500</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Luxurious custom design</li>
                <li>• Elaborate floral displays</li>
                <li>• Premium lighting & effects</li>
                <li>• Full-day coordination</li>
                <li>• Custom props & decor</li>
                <li>• Photographer coordination</li>
                <li>• Complete event management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Request a Quote</h2>
            <p className="text-xl text-gray-600">
              Let's start planning your perfect proposal
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}