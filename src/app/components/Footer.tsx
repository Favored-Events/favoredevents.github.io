import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif text-amber-500 mb-4">Favored Events</h3>
            <p className="text-gray-400 mb-4">
              A faith-based event design company specializing in luxury event decor, florals, and photography.
            </p>
            <p className="text-gray-400 italic text-sm">
              "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@favoredevents.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>123 Event Street, City, ST 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Business Hours</h4>
            <div className="text-gray-400 space-y-2">
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: By appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Favored Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}