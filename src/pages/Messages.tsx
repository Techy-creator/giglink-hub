import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Messages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-display font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Messages
        </h1>
        <p className="text-muted-foreground">Messages page coming soon...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Messages;