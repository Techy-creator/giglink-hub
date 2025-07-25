import { useState } from "react";
import { Search, Filter, Star, Heart, ShoppingCart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Products = () => {
  const [viewMode, setViewMode] = useState("grid");

  const products = [
    {
      id: 1,
      title: "iPhone 14 Pro Max - Like New",
      seller: "tech_trader",
      rating: 4.8,
      reviews: 45,
      price: 1200,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1664136969554-d5e8d4a84e48?w=400&h=300&fit=crop",
      location: "San Francisco, CA",
      condition: "Like New",
      tags: ["Verified", "Fast Shipping"],
      isLocal: true
    },
    {
      id: 2,
      title: "Vintage Film Camera Collection",
      seller: "vintage_collector",
      rating: 4.9,
      reviews: 23,
      price: 450,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      location: "Portland, OR",
      condition: "Good",
      tags: ["Collector's Item"],
      isLocal: true
    },
    {
      id: 3,
      title: "MacBook Pro 16-inch M2",
      seller: "laptop_pro",
      rating: 5.0,
      reviews: 67,
      price: 2200,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=400&h=300&fit=crop",
      location: "New York, NY",
      condition: "Excellent",
      tags: ["Best Deal", "Warranty"],
      isLocal: false
    },
    {
      id: 4,
      title: "Gaming Setup - Complete Bundle",
      seller: "gamer_hub",
      rating: 4.7,
      reviews: 89,
      price: 1800,
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
      location: "Austin, TX",
      condition: "Very Good",
      tags: ["Bundle Deal"],
      isLocal: true
    },
    {
      id: 5,
      title: "Designer Furniture Set",
      seller: "home_stylist",
      rating: 4.6,
      reviews: 34,
      price: 850,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      location: "Los Angeles, CA",
      condition: "Good",
      tags: ["Local Pickup"],
      isLocal: true
    },
    {
      id: 6,
      title: "Professional Art Supplies",
      seller: "art_supplies_pro",
      rating: 4.8,
      reviews: 156,
      price: 120,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      location: "Chicago, IL",
      condition: "New",
      tags: ["New", "Bundle"],
      isLocal: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shop Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find amazing deals on electronics, furniture, and unique items from local sellers
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search for products..."
                    className="pl-12 h-12 border-0 bg-white/50 backdrop-blur"
                  />
                </div>
                <Button variant="gradient" size="lg" className="h-12 px-8">
                  Search
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="glass">
                  <Filter className="h-4 w-4 mr-2" />
                  All Filters
                </Button>
                <Button variant="ghost">Electronics</Button>
                <Button variant="ghost">Furniture</Button>
                <Button variant="ghost">Fashion</Button>
                <Button variant="ghost">Sports</Button>
                <Button variant="ghost">Books</Button>
                <Button variant="ghost">Art & Collectibles</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="group tilt-card glow-on-hover bg-white/80 backdrop-blur border-0 shadow-card hover:shadow-float transition-all duration-500 animate-fade-in"
                      style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          className="bg-gradient-primary text-white border-0 shadow-lg w-fit"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Heart Icon */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 bg-white/20 backdrop-blur hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>

                    {/* Condition Badge */}
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {product.condition}
                    </div>

                    {/* Local Badge */}
                    {product.isLocal && (
                      <div className="absolute bottom-3 right-3 bg-secondary/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Local
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {product.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {product.seller.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{product.seller}</span>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{product.location}</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          ${product.price}
                        </div>
                        {product.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </div>
                        )}
                      </div>
                      {product.originalPrice && (
                        <Badge variant="secondary" className="bg-accent/20 text-accent">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Message Seller
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="glass-card">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;