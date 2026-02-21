import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { QuoteForm } from "../components/QuoteForm";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Sparkles, Users, Building, Gift } from "lucide-react";

export function LuxuryEventDecor() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1765614768003-cffd87c0808b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjB2ZW51ZSUyMGRlY29yYXRpb24lMjBmbG93ZXJzfGVufDF8fHx8MTc3MTA0NTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Elegant event venue decoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Luxury Event Decor</h1>
          <p className="text-xl md:text-2xl">Transforming Venues into Unforgettable Experiences</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            From elegant weddings to sophisticated corporate events, Favored Events creates stunning 
            atmospheres that captivate your guests. Our expert event design team specializes in luxury 
            decor and exquisite floral arrangements that reflect your style and elevate every moment 
            of your special occasion. As a faith-based company, we thoughtfully incorporate scripture 
            and meaningful elements into our designs to celebrate the blessings of your event.
          </p>
          <p className="text-lg text-gray-600 italic">
            "In all your ways acknowledge Him, and He will make straight your paths." - Proverbs 3:6
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Events We Transform</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Sparkles className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Weddings</h3>
              <p className="text-gray-600">
                Breathtaking ceremony and reception decor for your special day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Building className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Corporate Events</h3>
              <p className="text-gray-600">
                Professional and sophisticated decor for galas, conferences, and launches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Gift className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Milestone Celebrations</h3>
              <p className="text-gray-600">
                Anniversaries, birthdays, and special occasions deserve luxury treatment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Users className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl mb-3">Private Parties</h3>
              <p className="text-gray-600">
                Elegant setups for intimate gatherings and grand celebrations.
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
                src="https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGJhbGxyb29tJTIwZGVjb3J8ZW58MXx8fHwxNzcxMDQ1MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury ballroom decor"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677768061409-3d4fbd0250d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc3MTA0NTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wedding reception table setting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764874299927-ffca82850d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFydHklMjBkZWNvcmF0aW9uJTIwbGlnaHRzfGVufDF8fHx8MTc3MTA0NTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elegant party decoration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZ2FyZGVuJTIwd2VkZGluZyUyMGNlcmVtb255fGVufDF8fHx8MTc3MDk3NTU2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Outdoor garden wedding ceremony"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758723208958-c18fa48aaff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjZW50ZXJwaWVjZSUyMGZsb3dlcnMlMjBnb2xkfGVufDF8fHx8MTc3MTA0NTIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury centerpiece flowers"
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

      {/* Services Included */}
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
                <h3 className="text-xl mb-2">Custom Design Consultation</h3>
                <p className="text-gray-600">
                  Personalized planning session to understand your vision and preferences.
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
                <h3 className="text-xl mb-2">Premium Floral Arrangements</h3>
                <p className="text-gray-600">
                  Fresh, high-quality flowers and greenery from trusted vendors.
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
                <h3 className="text-xl mb-2">Professional Lighting Design</h3>
                <p className="text-gray-600">
                  Ambient, accent, and specialty lighting to enhance your venue.
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
                <h3 className="text-xl mb-2">Table Settings & Linens</h3>
                <p className="text-gray-600">
                  Elegant place settings, centerpieces, and premium table linens.
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
                <h3 className="text-xl mb-2">Installation & Breakdown</h3>
                <p className="text-gray-600">
                  Complete setup before your event and full cleanup afterward.
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
                <h3 className="text-xl mb-2">On-Site Coordination</h3>
                <p className="text-gray-600">
                  Dedicated team member to ensure everything runs smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Investment Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl mb-4">Essential</h3>
              <p className="text-3xl text-amber-800 mb-6">From $2,000</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Up to 50 guests</li>
                <li>• Basic floral arrangements</li>
                <li>• Standard table settings</li>
                <li>• Simple lighting setup</li>
                <li>• 4-hour service</li>
              </ul>
            </div>

            {/* Premium Package */}
            <div className="bg-amber-800 text-white rounded-lg shadow-lg p-8 transform scale-105">
              <div className="text-center mb-2">
                <span className="bg-white text-amber-800 px-3 py-1 rounded-full text-sm">Popular Choice</span>
              </div>
              <h3 className="text-2xl mb-4">Premium</h3>
              <p className="text-3xl mb-6">From $5,000</p>
              <ul className="space-y-3 mb-8">
                <li>• Up to 150 guests</li>
                <li>• Elaborate floral designs</li>
                <li>• Premium table settings</li>
                <li>• Professional lighting</li>
                <li>• Custom signage & props</li>
                <li>• 8-hour full service</li>
              </ul>
            </div>

            {/* Luxury Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl mb-4">Luxury</h3>
              <p className="text-3xl text-amber-800 mb-6">From $10,000</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Unlimited guests</li>
                <li>• Bespoke floral installations</li>
                <li>• Luxury table settings</li>
                <li>• Designer lighting & effects</li>
                <li>• Full event styling</li>
                <li>• Unlimited service hours</li>
                <li>• Dedicated event manager</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            *Prices vary based on location, date, and specific requirements. Contact us for a detailed quote.
          </p>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Request a Quote</h2>
            <p className="text-xl text-gray-600">
              Let's create something extraordinary together
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}