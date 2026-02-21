import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { QuoteForm } from "../components/QuoteForm";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Camera, Heart, Clock, Image as ImageIcon } from "lucide-react";

export function Photography() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769230385107-bc6eaa7a123e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaGVyJTIwY2FtZXJhJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTIwMDk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional event photographer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Event Photography</h1>
          <p className="text-xl md:text-2xl">Capturing Your Most Precious Moments</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Your special moments deserve to be captured beautifully. Our professional photography 
            services document every detail, emotion, and precious memory of your event with artistry 
            and care. As a faith-based company, we believe every moment is a gift, and we're honored 
            to preserve these blessings for you.
          </p>
          <p className="text-lg text-gray-600 italic">
            "Every good and perfect gift is from above, coming down from the Father of the heavenly lights." - James 1:17
          </p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Photography Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Heart className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Weddings</h3>
              <p className="text-gray-600">
                Complete wedding day coverage from getting ready to the grand exit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Camera className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Engagement Sessions</h3>
              <p className="text-gray-600">
                Romantic photo sessions to celebrate your love story and journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <ImageIcon className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Event Coverage</h3>
              <p className="text-gray-600">
                Corporate events, parties, and celebrations documented professionally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Clock className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Detail Shots</h3>
              <p className="text-gray-600">
                Capturing the beautiful details of your decor, florals, and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Our Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700157679224-56c9f3d15118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3MTI3MjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bride and groom wedding photography"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764590894172-b43654e28276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwY291cGxlJTIwcGhvdG9ncmFwaHklMjBvdXRkb29yfGVufDF8fHx8MTc3MTI3MjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Engagement couple photography"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1623648418948-da17e2dbdddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGV0YWlscyUyMHBob3RvZ3JhcGh5JTIwcmluZ3N8ZW58MXx8fHwxNzcxMjcyMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wedding details photography"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763256377723-45268485e370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGhlciUyMHRha2luZyUyMHBob3Rvc3xlbnwxfHx8fDE3NzEyNzIwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Event photographer at work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763089040164-7b6a26ff98da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudCUyMGNhbWVyYXxlbnwxfHx8fDE3NzEyNzIwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional photography equipment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">Your photo here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">What's Included</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-800">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Professional Equipment</h3>
                <p className="text-gray-600">
                  High-end cameras, lenses, and lighting for stunning image quality.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-800">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Edited Digital Gallery</h3>
                <p className="text-gray-600">
                  Professionally edited high-resolution images in an online gallery.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-800">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Full Print Rights</h3>
                <p className="text-gray-600">
                  Complete ownership and printing rights for all your images.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-800">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Quick Turnaround</h3>
                <p className="text-gray-600">
                  Receive your edited photos within 2-3 weeks of your event.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-800">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Second Shooter Available</h3>
                <p className="text-gray-600">
                  Additional photographer for comprehensive event coverage.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-800">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Backup Equipment</h3>
                <p className="text-gray-600">
                  Multiple camera bodies and storage to ensure nothing is missed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Photography Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl mb-4">Essentials</h3>
              <p className="text-3xl text-amber-800 mb-6">From $1,500</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• 4 hours of coverage</li>
                <li>• 1 photographer</li>
                <li>• 200+ edited images</li>
                <li>• Online gallery</li>
                <li>• Print release</li>
              </ul>
            </div>

            {/* Premium Package */}
            <div className="bg-amber-800 text-white rounded-lg shadow-lg p-8 transform scale-105">
              <div className="text-center mb-2">
                <span className="bg-white text-amber-800 px-3 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <h3 className="text-2xl mb-4">Complete</h3>
              <p className="text-3xl mb-6">From $3,000</p>
              <ul className="space-y-3 mb-8">
                <li>• 8 hours of coverage</li>
                <li>• 2 photographers</li>
                <li>• 500+ edited images</li>
                <li>• Online gallery</li>
                <li>• Engagement session included</li>
                <li>• Print release</li>
              </ul>
            </div>

            {/* Luxury Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl mb-4">Luxury</h3>
              <p className="text-3xl text-amber-800 mb-6">From $5,000</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Unlimited coverage</li>
                <li>• 2 photographers</li>
                <li>• 800+ edited images</li>
                <li>• Premium online gallery</li>
                <li>• Engagement session</li>
                <li>• Photo album included</li>
                <li>• Print release</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            *All packages can be customized to fit your specific needs and event type.
          </p>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Book Your Photography</h2>
            <p className="text-xl text-gray-600">
              Let's capture your beautiful moments together
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
