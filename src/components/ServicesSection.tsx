import { 
  Cloud, 
  Server, 
  Container, 
  GitBranch, 
  Shield, 
  Database 
} from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'AWS Cloud Support & Monitoring',
    description: 'Comprehensive AWS infrastructure management, real-time monitoring, and performance optimization to ensure your cloud environment runs smoothly.',
  },
  {
    icon: Server,
    title: 'Linux Server Administration',
    description: 'Expert Linux system administration including setup, configuration, security hardening, and ongoing maintenance for optimal performance.',
  },
  {
    icon: Container,
    title: 'Docker Deployment & Support',
    description: 'Container deployment, orchestration, and management using Docker for improved application portability and scalability.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline Support',
    description: 'Design and implementation of automated CI/CD pipelines to streamline your development workflow and accelerate deployments.',
  },
  {
    icon: Shield,
    title: 'Cloud Security Implementation',
    description: 'Implementation of security best practices including IAM policies, security groups, encryption, and access control mechanisms.',
  },
  {
    icon: Database,
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup strategies and disaster recovery planning to protect your data and ensure business continuity.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading mx-auto">
            Professional DevOps and cloud infrastructure services to help your business scale
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 hover:border-primary/50 hover:translate-y-[-4px] transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
