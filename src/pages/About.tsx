import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Palette, Pencil, TrendingUp, Users } from "lucide-react";

const About = () => {
 const skills = [
  { icon: Pencil, title: "Fashion Sketching", description: "Hand-drawn and digital concept illustrations" },
  { icon: Palette, title: "Digital Illustration", description: "Professional design visualization" },
  { icon: TrendingUp, title: "Trend Research", description: "Contemporary style analysis" },
  { icon: Users, title: "Styling Consultations", description: "Creative direction and concept development" },
 ];

 return (
  <div className="min-h-screen bg-background font-poppins">
   <Navigation />
   
   <main className="pt-16">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
     <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
       <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-secondary border-2 border-accent overflow-hidden">
        
<img 
    src="/faith.jpg" 
    alt="Faith Pius" 
    className="w-full h-full object-cover" 
/>
       </div>
       <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3">
        Faith Pius
       </h1>
       <p className="text-lg text-accent font-medium mb-6">
        Fashion Designer | Creative Consultant
       </p>
      </div>

      <div className="prose max-w-none space-y-6 text-center mb-12">
       <p className="text-muted-foreground leading-relaxed">
        I'm Faith Pius, a Nigerian fashion designer and a creative passionate about storytelling through design. My experience spans concept sketching, digital illustration, and client styling.
       </p>
       <p className="text-muted-foreground leading-relaxed">
        I combine creativity and structure to deliver design visuals that connect with elegance, purpose, and emotion.
       </p>
      </div>

      <div className="text-center mb-12">
       <a
       href="/Pius Faith - My CV.pdf"
       download="Pius Faith - My CV.pdf"
      >
       <Button size="lg" className="font-poppins">
        Download Resume
       </Button>
      </a>
      </div>

      <div className="border-t border-border pt-12">
       <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
        Core Skills
       </h2>
       <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill) => {
         const Icon = skill.icon;
         return (
          <div key={skill.title} className="text-center space-y-3">
           <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10">
            <Icon className="w-6 h-6 text-accent" />
           </div>
           <h3 className="font-playfair text-lg font-semibold text-foreground">
            {skill.title}
           </h3>
           <p className="text-sm text-muted-foreground">
            {skill.description}
           </p>
          </div>
         );
        })}
       </div>
      </div>
     </div>
    </div>
   </main>

   <footer className="bg-muted py-8">
    <div className="container mx-auto px-4 md:px-6 text-center">
     <p className="text-sm text-muted-foreground">
      © 2025 Faith Pius      </p>
    </div>
   </footer>
  </div>
 );
};

export default About;