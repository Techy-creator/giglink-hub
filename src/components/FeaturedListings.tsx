import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, User } from "lucide-react";

const featuredListings = [
  {
    id: 1,
    title: "Professional Logo Design",
    seller: "Sarah M.",
    rating: 4.9,
    reviews: 127,
    price: "$25",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
    tag: "Best Seller",
    type: "service"
  },
  {
    id: 2,
    title: "React Web Development",
    seller: "Alex K.",
    rating: 5.0,
    reviews: 89,
    price: "$150",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    tag: "Top Rated",
    type: "service"
  },
  {
    id: 3,
    title: "iPhone 14 Pro Max",
    seller: "Tech Store",
    rating: 4.8,
    reviews: 45,
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1664136969554-d5e8d4a84e48?w=400&h=300&fit=crop",
    tag: "Like New",
    type: "product"
  },
  {
    id: 4,
    title: "Content Writing Services",
    seller: "Emma L.",
    rating: 4.9,
    reviews: 156,
    price: "$35",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
    tag: "Fast Delivery",
    type: "service"
  },
  {
    id: 5,
    title: "Vintage Camera Collection",
    seller: "Photo Enthusiast",
    rating: 4.7,
    reviews: 23,
    price: "$450",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
    tag: "Collector's Item",
    type: "product"
  },
  {
    id: 6,
    title: "Social Media Marketing",
    seller: "Marketing Pro",
    rating: 4.8,
    reviews: 98,
    price: "$75",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
    tag: "Trending",
    type: "service"
  },
];

const FeaturedListings = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Listings</h2>
            <p className="text-xl text-muted-foreground">
              Discover top-rated services and products from our community
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredListings.map((listing) => (
            <Card 
              key={listing.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge 
                  className="absolute top-3 left-3 bg-gradient-primary text-white border-0"
                >
                  {listing.tag}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-foreground"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {listing.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{listing.seller}</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-medium">{listing.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({listing.reviews})
                    </span>
                  </div>
                  <span className="text-lg font-bold text-primary">
                    {listing.price}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button 
                  variant={listing.type === 'service' ? 'default' : 'secondary'} 
                  className="w-full"
                >
                  {listing.type === 'service' ? (
                    <>Order Now</>
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:hidden">
          <Button variant="outline" size="lg">
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;