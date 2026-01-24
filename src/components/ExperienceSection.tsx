import { Briefcase, MapPin, Calendar } from 'lucide-react';
const experiences = [{
  title: 'Cloud Support Engineer',
  company: 'Shellkode',
  location: 'Coimbatore, India',
  period: 'Jan 2024 – Present',
  description: ['Managed AWS cloud infrastructure to ensure high availability and optimal performance for production environments', 'Supported EC2 instances, IAM roles, VPC networking, and CloudWatch monitoring setup and maintenance', 'Implemented Docker-based container deployments for improved application portability and scalability', 'Assisted with CI/CD pipeline operations and automation to streamline deployment processes', 'Performed Linux server administration, troubleshooting, and performance optimization', 'Maintained comprehensive runbooks, SOPs, and technical documentation for team knowledge sharing'],
  current: true
}];
const ExperienceSection = () => {
  return <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            My professional journey in cloud infrastructure and DevOps
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 w-0.5 h-full bg-border transform md:-translate-x-1/2" />
              
              {/* Experience Card */}
              <div className={`relative flex flex-col md:flex-row gap-8 pb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                
                
                {/* Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.current && <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Current
                        </span>}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ExperienceSection;