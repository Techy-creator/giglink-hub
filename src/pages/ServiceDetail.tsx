import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, Heart, Share2, Clock, CheckCircle, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  const [selectedPackage, setSelectedPackage] = useState("standard");

  // Mock service data
  const service = {
    id: 1,
    title: "I will create a modern website design with responsive layout",
    seller: {
      name: "Sarah Johnson",
      username: "designpro_sarah",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      reviews: 234,
      level: "Level 2 Seller",
      memberSince: "2020",
      responseTime: "1 hour"
    },
    rating: 4.9,
    totalReviews: 234,
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop"
    ],
    description: "I will create a stunning, modern website design that perfectly represents your brand. With over 5 years of experience in web design, I specialize in creating responsive, user-friendly interfaces that convert visitors into customers.",
    packages: {
      basic: {
        name: "Basic",
        price: 50,
        delivery: "3 days",
        features: ["1 page design", "Mobile responsive", "Basic revisions", "Source files"]
      },
      standard: {
        name: "Standard", 
        price: 100,
        delivery: "5 days", 
        features: ["3 page designs", "Mobile responsive", "Unlimited revisions", "Source files", "SEO optimization"]
      },
      premium: {
        name: "Premium",
        price: 200,
        delivery: "7 days",
        features: ["5 page designs", "Mobile responsive", "Unlimited revisions", "Source files", "SEO optimization", "Speed optimization", "1 month support"]
      }
    },
    features: [
      "Modern and clean design",
      "100% responsive layout", 
      "Cross-browser compatibility",
      "Fast loading speed",
      "SEO friendly structure"
    ],
    tags: ["Web Design", "UI/UX", "Responsive", "Modern"]
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      user: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Absolutely fantastic work! Sarah delivered exactly what I wanted and even exceeded my expectations. Highly recommended!",
      date: "2 days ago"
    },
    {
      id: 2,
      user: "Emily Rodriguez", 
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Professional, fast, and great communication throughout the project. Will definitely work with Sarah again!",
      date: "1 week ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Images */}
            <Card className="glass-card border-0 overflow-hidden">
              <div className="relative">
                <img
                  src={service.images[currentImageIndex]}
                  alt={service.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {service.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index ? 'border-primary' : 'border-white/50'
                      }`}
                    >
                      <img
                        src={service.images[index]}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Service Info */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                
                <h1 className="text-3xl font-display font-bold mb-4">{service.title}</h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-semibold">{service.rating}</span>
                    <span className="text-muted-foreground">({service.totalReviews} reviews)</span>
                  </div>
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
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="seller">About Seller</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-6">
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-3">What you'll get:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-secondary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="mt-6">
                    <div className="space-y-6">
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
                              <p className="text-muted-foreground">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="seller" className="mt-6">
                    <div className="flex items-start gap-6">
                      <img
                        src={service.seller.avatar}
                        alt={service.seller.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{service.seller.name}</h3>
                        <p className="text-muted-foreground mb-4">@{service.seller.username}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Level</p>
                            <p className="font-semibold">{service.seller.level}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Member since</p>
                            <p className="font-semibold">{service.seller.memberSince}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Avg. response time</p>
                            <p className="font-semibold">{service.seller.responseTime}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Rating</p>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-accent text-accent" />
                              <span className="font-semibold">{service.seller.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="outline">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Contact Seller
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Package Selection */}
            <Card className="glass-card border-0 sticky top-4">
              <CardHeader>
                <CardTitle>Choose a Package</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(service.packages).map(([key, pkg]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedPackage(key)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPackage === key
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg">{pkg.name}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">${pkg.price}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{pkg.delivery} delivery</span>
                    </div>
                    
                    <ul className="space-y-1">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                <div className="space-y-3 pt-4">
                  <Button className="w-full" size="lg">
                    Continue (${service.packages[selectedPackage].price})
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Seller
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;