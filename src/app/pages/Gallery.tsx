import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1766734865418-c8b5ca3d548a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZW5nYWdlbWVudCUyMHByb3Bvc2FsJTIwZGVjb3J8ZW58MXx8fHwxNzcxMDQ1MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury engagement proposal decor",
      category: "Proposals"
    },
    {
      url: "https://images.unsplash.com/photo-1765614768003-cffd87c0808b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjB2ZW51ZSUyMGRlY29yYXRpb24lMjBmbG93ZXJzfGVufDF8fHx8MTc3MTA0NTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Elegant event venue decoration",
      category: "Weddings"
    },
    {
      url: "https://images.unsplash.com/photo-1765185205714-09094f4d8ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHByb3Bvc2FsJTIwc2V0dXAlMjBjYW5kbGVzfGVufDF8fHx8MTc3MTA0NTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Romantic proposal setup with candles",
      category: "Proposals"
    },
    {
      url: "https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGJhbGxyb29tJTIwZGVjb3J8ZW58MXx8fHwxNzcxMDQ1MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury event ballroom decor",
      category: "Corporate"
    },
    {
      url: "https://images.unsplash.com/photo-1677768061409-3d4fbd0250d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc3MTA0NTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wedding reception table setting",
      category: "Weddings"
    },
    {
      url: "https://images.unsplash.com/photo-1764874299927-ffca82850d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFydHklMjBkZWNvcmF0aW9uJTIwbGlnaHRzfGVufDF8fHx8MTc3MTA0NTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Elegant party decoration with lights",
      category: "Parties"
    },
    {
      url: "https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZ2FyZGVuJTIwd2VkZGluZyUyMGNlcmVtb255fGVufDF8fHx8MTc3MDk3NTU2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Outdoor garden wedding ceremony",
      category: "Weddings"
    },
    {
      url: "https://images.unsplash.com/photo-1758870041148-31d28fdf34d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiaXJ0aGRheSUyMHBhcnR5JTIwYmFsbG9vbnN8ZW58MXx8fHwxNzcxMDQ1MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury birthday party balloons",
      category: "Parties"
    },
    {
      url: "https://images.unsplash.com/photo-1752766074168-44afdbaaf390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY29ycG9yYXRlJTIwZXZlbnQlMjBzZXR1cHxlbnwxfHx8fDE3NzEwNDUyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Elegant corporate event setup",
      category: "Corporate"
    },
    {
      url: "https://images.unsplash.com/photo-1680079033073-860e3b9c2094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMHRhYmxlJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzEwNDUyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Romantic dinner table decoration",
      category: "Proposals"
    },
    {
      url: "https://images.unsplash.com/photo-1766734865829-148caaf01afa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYXJjaCUyMGZsb3JhbCUyMGRlc2lnbnxlbnwxfHx8fDE3NzEwMTg0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wedding arch floral design",
      category: "Weddings"
    },
    {
      url: "https://images.unsplash.com/photo-1758723208958-c18fa48aaff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjZW50ZXJwaWVjZSUyMGZsb3dlcnMlMjBnb2xkfGVufDF8fHx8MTc3MTA0NTIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury centerpiece flowers",
      category: "Weddings"
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Proposals", "Weddings", "Corporate", "Parties"];

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-20 bg-gradient-to-r from-amber-900 to-amber-700">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Event Gallery</h1>
          <p className="text-xl md:text-2xl">A Showcase of Our Beautiful Work</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === category
                    ? "bg-amber-800 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.url)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </span>
                </div>
              </div>
            ))}

            {/* Placeholder Images */}
            {[...Array(6)].map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className="aspect-square overflow-hidden rounded-lg shadow-lg bg-gray-200 flex items-center justify-center"
              >
                <p className="text-gray-500 text-center px-4">Photo placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6 text-gray-900">Love What You See?</h2>
          <p className="text-xl text-gray-600 mb-4">
            Let Favored Events create something beautiful for your special occasion.
          </p>
          <p className="text-lg text-gray-600 italic mb-8">
            "Whatever you do, work at it with all your heart, as working for the Lord." - Colossians 3:23
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/engagement-proposals"
              className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-900 transition-colors"
            >
              Book Proposal Decor
            </a>
            <a
              href="/luxury-event-decor"
              className="bg-white border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors"
            >
              Book Event Decor
            </a>
          </div>
        </div>
      </section>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}