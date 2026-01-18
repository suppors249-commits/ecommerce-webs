import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LUXE BEAUTY</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your destination for premium beauty and cosmetics products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123 Beauty Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>support@luxebeauty.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Luxe Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
