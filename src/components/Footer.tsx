import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-dark to-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">M</span>
              </div>
              <h3 className="text-2xl font-bold">Marketplace</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted platform for finding amazing services and products. 
              Connect with talented sellers worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Browse Services</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Shop Products</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Become a Seller</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Safety & Trust</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4">
              Subscribe to get the latest deals and opportunities
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder-white/60"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@marketplace.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80">
            © 2024 Marketplace. All rights reserved. Made with ❤️ for creators and shoppers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;