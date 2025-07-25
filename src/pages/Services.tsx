import { useState } from "react";
import { Search, Filter, Star, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const categories = [
    "All Categories", "Programming & Tech", "Graphic Design", "Writing & Translation",
    "Digital Marketing", "Video & Animation", "Music & Audio", "Business"
  ];

  const services = [
    {
      id: 1,
      title: "I will create a modern website design",
      seller: "designpro_sarah",
      rating: 4.9,
      reviews: 234,
      price: 50,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      tags: ["Best Seller", "Top Rated"],
      category: "design",
      deliveryTime: "3 days"
    },
    {
      id: 2,
      title: "I will develop a React web application",
      seller: "codemaster_alex",
      rating: 5.0,
      reviews: 189,
      price: 200,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
      tags: ["Pro", "Fast Delivery"],
      category: "programming",
      deliveryTime: "5 days"
    },
    {
      id: 3,
      title: "I will write engaging blog content",
      seller: "writer_emma",
      rating: 4.8,
      reviews: 156,
      price: 25,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      tags: ["Popular"],
      category: "writing",
      deliveryTime: "2 days"
    },
    // Add more services...
    {
      id: 4,
      title: "I will create stunning logo designs",
      seller: "logo_genius",
      rating: 4.9,
      reviews: 312,
      price: 35,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      tags: ["Best Seller"],
      category: "design",
      deliveryTime: "1 day"
    },
    {
      id: 5,
      title: "I will create animated explainer videos",
      seller: "video_creator",
      rating: 4.7,
      reviews: 98,
      price: 150,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      tags: ["Trending"],
      category: "video",
      deliveryTime: "7 days"
    },
    {
      id: 6,
      title: "I will provide social media marketing strategy",
      seller: "marketing_expert",
      rating: 4.8,
      reviews: 145,
      price: 75,
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      tags: ["Pro"],
      category: "marketing",
      deliveryTime: "3 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Browse Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover talented freelancers ready to bring your projects to life
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search for services..."
                    className="pl-12 h-12 border-0 bg-white/50 backdrop-blur"
                  />
                </div>
                <Button variant="gradient" size="lg" className="h-12 px-8">
                  Search
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <Button variant="outline" className="glass">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={selectedCategory === category.toLowerCase() ? "default" : "ghost"}
                    onClick={() => setSelectedCategory(category.toLowerCase())}
                    className="transition-smooth"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.id} to={`/service/${service.id}`}>
                <Card className="group tilt-card glow-on-hover bg-white/70 backdrop-blur border-0 shadow-card hover:shadow-float transition-all duration-500 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {service.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          className="bg-gradient-primary text-white border-0 shadow-lg"
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

                    {/* Delivery Time */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur text-white px-2 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.deliveryTime}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {service.seller.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{service.seller}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-medium">{service.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({service.reviews})
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-muted-foreground">Starting at</span>
                        <div className="text-xl font-bold text-primary">
                          ${service.price}
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Button variant="default" className="w-full group-hover:bg-primary-dark transition-colors">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="glass-card">
              Load More Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;