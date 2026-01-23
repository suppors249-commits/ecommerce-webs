import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted mt-12" style={{ backgroundColor: "#f2f9f5" }}>
      <div className="container mx-auto px-4 py-8 overflow-visible">
 {/* Brand Section */}
        <div className="text-2 mb-8 ">
          <h3 className="text-[#154734] font-semibold mb-4">VELORA</h3>
          <p className="text- text-muted-foreground mb-4">
            Your destination for premium beauty and cosmetics products.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className=" hover:text-accent-foreground transition-colors text-[#154734]">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-[#154734] hover:text-accent-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-[#154734] hover:text-accent-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

    {/* Payment Methods */}
        <div className="flex justify-center gap-2 mb-6">
          <img alt="mastercard" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mastercard.svg" width="41" height="26" />
          <img alt="visa" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-visa.svg" width="41" height="26" />
          <img alt="valu" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/valu_v2.svg" width="41" height="26" />
          <img alt="amex" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-amex.svg" width="41" height="26" />
          <img alt="cod" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/cod-ar.svg" width="41" height="26" />
        </div>
        {/* Customer Service + Quick Links - always side by side */}
        <div className="flex justify-between mb-10">
           
          {/* Customer Service - left */}
          <div>
            <h3 className=" font-semibold mb-4 text-[#154734]"> Service</h3>
            <ul className="space-y-2  text-sm">
              <li>
                <Link to="/profile" className=" hover:text-accent-foreground transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <a href="#" className=" hover:text-accent-foreground transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-accent-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-accent-foreground transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links - right */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4 text-[#154734]"> Links</h3>
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
        </div>

       

       

        {/* Copyright */}
       <div className="border-t border-border pt-1 text-center text-sm text-muted-foreground">
  <p>&copy; {new Date().getFullYear()} Luxe Beauty. All rights reserved.</p>
</div>


      </div>
    </footer>
  );
}
