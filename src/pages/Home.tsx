import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Hi, I'm Faith Pius, a fashion designer and creative visual storyteller.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I bring ideas to life through elegant sketches and digital illustrations that celebrate individuality and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="font-poppins">
                <Link to="/portfolio">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-poppins">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground">
                Where Creativity Meets Elegance
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Every design begins with inspiration; a color, texture, or emotion. I transform these moments into visual stories that capture the essence of modern elegance and timeless style.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Faith Pius          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
