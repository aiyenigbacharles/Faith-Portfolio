import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                Let's Create Something Beautiful
              </h1>
              <p className="text-muted-foreground">
                For collaborations, commissions, or creative discussions — reach out below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-poppins text-sm">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-poppins"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-poppins text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-poppins"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-poppins text-sm">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="font-poppins resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full font-poppins">
                Send Message
              </Button>
            </form>

            <div className="border-t border-border pt-8 space-y-6">
              <div className="flex items-center gap-3 justify-center">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:faithpius321@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  faithpius321@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <Phone className="w-5 h-5 text-accent" />
                <a
                  href="tel:+2348136765387"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +234 813 676 5387
                </a>
              </div>

              <div className="flex gap-6 justify-center pt-4">
                <a
                  href="https://www.linkedin.com/in/faith-pius-35761a379/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/_phyate_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

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

export default Contact;
