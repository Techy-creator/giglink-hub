import { Search, User, Menu, ShoppingBag, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Marketplace
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for services or products..."
                className="pl-10 pr-4 w-full border-2 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Button variant="ghost" className="font-medium">
              <Briefcase className="h-4 w-4 mr-2" />
              Services
            </Button>
            <Button variant="ghost" className="font-medium">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Products
            </Button>
            <Button variant="ghost" className="font-medium">
              Become a Seller
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button variant="gradient" size="sm" className="hidden sm:flex">
              Join Now
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for services or products..."
              className="pl-10 pr-4 w-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;