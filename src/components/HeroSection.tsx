import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-navy-light" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up opacity-0 stagger-1">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up opacity-0 stagger-2">
              <span className="text-foreground">Harish </span>
              <span className="gradient-text">R</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-up opacity-0 stagger-3">
              AWS DevOps / Site Reliability Engineer
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up opacity-0 stagger-4">
              Building reliable, scalable, and secure cloud infrastructure. Passionate about 
              automation, monitoring, and ensuring 99.9% uptime for production systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up opacity-0 stagger-5">
              <Button size="lg" className="gap-2 glow-effect">
                <Download size={18} />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="#contact">
                  <Mail size={18} />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-scale-in opacity-0">
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-cyan-glow blur-md opacity-50 animate-glow-pulse" />
              {/* Photo container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 bg-card">
                <img
                  src={profilePhoto}
                  alt="Harish R - AWS DevOps Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card border border-border px-4 py-2 rounded-full">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
