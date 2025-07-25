import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, Heart, Share2, MapPin, Shield, MessageCircle, ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock product data
  const product = {
    id: 1,
    title: "iPhone 14 Pro Max - 256GB Deep Purple",
    seller: {
      name: "Alex Chen",
      username: "tech_trader",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      reviews: 45,
      memberSince: "2019",
      responseTime: "2 hours"
    },
    price: 1200,
    originalPrice: 1299,
    condition: "Like New",
    location: "San Francisco, CA",
    images: [
      "https://images.unsplash.com/photo-1664136969554-d5e8d4a84e48?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop"
    ],
    description: "Selling my iPhone 14 Pro Max in excellent condition. Only used for 6 months with a case and screen protector. Battery health is at 98%. Includes original box, charger, and documentation. No scratches or dents.",
    specifications: {
      "Storage": "256GB",
      "Color": "Deep Purple", 
      "Condition": "Like New",
      "Battery Health": "98%",
      "Screen Size": "6.7 inches",
      "Camera": "48MP Triple System"
    },
    features: [
      "Original box and accessories included",
      "No scratches or damage",
      "Always used with case and screen protector",
      "Non-smoking household",
      "Fast shipping available"
    ],
    isLocal: true,
    shippingOptions: ["Local pickup", "Shipping available"],
    tags: ["Verified", "Fast Shipping", "Like New"]
  };

  const reviews = [
    {
      id: 1,
      user: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Exactly as described! Phone was in perfect condition and Alex was very responsive. Highly recommend!",
      date: "1 week ago",
      product: "MacBook Pro 13-inch"
    },
    {
      id: 2,
      user: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", 
      rating: 5,
      comment: "Great seller, fast shipping, and product was exactly as advertised. Would buy from again!",
      date: "2 weeks ago",
      product: "iPad Air"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Images */}
            <Card className="glass-card border-0 overflow-hidden">
              <div className="relative">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index ? 'border-primary' : 'border-white/50'
                      }`}
                    >
                      <img
                        src={product.images[index]}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Product Info */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                
                <h1 className="text-3xl font-display font-bold mb-4">{product.title}</h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">{product.location}</span>
                  </div>
                  <Badge className="bg-secondary/20 text-secondary">
                    {product.condition}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="specifications">Specifications</TabsTrigger>
                    <TabsTrigger value="reviews">Seller Reviews</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-6">
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-3">What's included:</h3>
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Shield className="h-5 w-5 text-secondary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3">Shipping Options:</h3>
                        <div className="flex gap-2">
                          {product.shippingOptions.map((option, index) => (
                            <Badge key={index} variant="outline">{option}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specifications" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="p-4 rounded-lg bg-muted/50">
                          <p className="text-sm text-muted-foreground">{key}</p>
                          <p className="font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="mt-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-6 mb-8">
                        <img
                          src={product.seller.avatar}
                          alt={product.seller.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{product.seller.name}</h3>
                          <p className="text-muted-foreground mb-4">@{product.seller.username}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Member since</p>
                              <p className="font-semibold">{product.seller.memberSince}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Avg. response time</p>
                              <p className="font-semibold">{product.seller.responseTime}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Rating</p>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-accent text-accent" />
                                <span className="font-semibold">{product.seller.rating}</span>
                                <span className="text-sm text-muted-foreground">({product.seller.reviews} reviews)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                          <div className="flex items-start gap-4">
                            <img
                              src={review.avatar}
                              alt={review.user}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold">{review.user}</h4>
                                <div className="flex items-center gap-1">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">Purchased: {review.product}</p>
                              <p className="text-muted-foreground">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price and Buy */}
            <Card className="glass-card border-0 sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    ${product.price}
                  </div>
                  {product.originalPrice && (
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                      <Badge variant="secondary" className="bg-accent/20 text-accent">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Buy Now
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Add to Cart
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Seller
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">Buyer Protection</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get your money back if the item doesn't match the description
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Similar Products */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Similar Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <img
                      src={`https://images.unsplash.com/photo-1664136969554-d5e8d4a84e48?w=80&h=80&fit=crop`}
                      alt="Similar product"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">iPhone 14 Pro</h4>
                      <p className="text-xs text-muted-foreground mb-2">Like New</p>
                      <p className="font-semibold text-primary">$1,100</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;