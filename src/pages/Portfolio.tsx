import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import portfolio1 from "@/assets/Port 1.png";
import portfolio2 from "@/assets/Port 2.jpg";
import portfolio3 from "@/assets/Port 3.png";
import portfolio4 from "@/assets/Port 4.jpg";
import portfolio5 from "@/assets/Port 5.png";
import portfolio6 from "@/assets/Port 6.jpg";
import portfolio7 from "@/assets/Port 6.png";
import portfolio8 from "@/assets/Port 7.jpg";
import portfolio9 from "@/assets/Port 7.png";
import portfolio10 from "@/assets/Port 8.jpg";
import portfolio11 from "@/assets/Port 11.jpg";
import portfolio12 from "@/assets/Port 9.jpg";

const portfolioItems = [
  {
    id: 1,
    sketch: portfolio1,
    final: portfolio2,
  },
    {
    id: 1,
    sketch: portfolio3,
    final: portfolio4,
  },
  {
    id: 2,
    sketch: portfolio5,
    final: portfolio6,
  },
    {
    id: 2,
    sketch: portfolio7,
    final: portfolio8,
  },
{
    id: 2,
    sketch: portfolio9,
    final: portfolio10,
  },
  {
    id: 2,
    sketch: portfolio11,
    final: portfolio12,
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<{itemId: number, type: 'sketch' | 'final'} | null>(null);

  const getSelectedImageSrc = () => {
    if (!selectedImage) return null;
    const item = portfolioItems.find(i => i.id === selectedImage.itemId);
    return selectedImage.type === 'sketch' ? item?.sketch : item?.final;
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Portfolio
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of fashion design concepts, sketches, and digital illustrations
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {portfolioItems.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Sketch */}
                <div
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage({itemId: item.id, type: 'sketch'})}
                >
                  <div className="border border-border overflow-hidden bg-white transition-transform hover:scale-[1.02]">
                    <img
                      src={item.sketch}
                      alt={`Sketch ${item.id}`}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-center mt-2 text-sm text-muted-foreground">Sketch</p>
                </div>

                {/* Final Design */}
                <div
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage({itemId: item.id, type: 'final'})}
                >
                  <div className="border border-border overflow-hidden bg-white transition-transform hover:scale-[1.02]">
                    <img
                      src={item.final}
                      alt={`Final design ${item.id}`}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-center mt-2 text-sm text-muted-foreground">Final Design</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-background">
          {selectedImage && (
            <img
              src={getSelectedImageSrc() || ''}
              alt="Portfolio item"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Faith Pius
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;