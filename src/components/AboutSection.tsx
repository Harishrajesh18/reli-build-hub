import { Cloud, Server, Shield, Terminal } from 'lucide-react';
const highlights = [{
  icon: Cloud,
  title: 'Cloud Expert',
  description: 'Extensive experience with AWS services and cloud architecture'
}, {
  icon: Terminal,
  title: 'Automation',
  description: 'CI/CD pipelines, Infrastructure as Code, and scripting'
}, {
  icon: Server,
  title: 'Infrastructure',
  description: 'Linux administration, Docker containers, and system optimization'
}, {
  icon: Shield,
  title: 'Security',
  description: 'Cloud security best practices and access control management'
}];
const AboutSection = () => {
  return <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light via-background to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            A passionate DevOps engineer dedicated to building reliable cloud infrastructure
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm an <span className="text-primary font-semibold">Cloud DevOps</span> with 
              over 1 year of hands-on experience in cloud infrastructure management. Currently working as a 
              Cloud Support Engineer at Shellkode, I focus on building and maintaining reliable, scalable, 
              and secure cloud environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans across <span className="text-foreground font-medium">AWS cloud services</span>, 
              Linux systems administration, Docker containerization, and CI/CD pipeline implementation. 
              I'm passionate about automation, monitoring, and ensuring high availability for production systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying updated with the latest DevOps practices and 
              cloud technologies. My goal is to help organizations achieve operational excellence through 
              efficient infrastructure management and automation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold gradient-text">1+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold gradient-text">2</div>
                <div className="text-sm text-muted-foreground mt-1">Certifications</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => <div key={item.title} className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;