import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-display font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground">Dashboard coming soon...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;