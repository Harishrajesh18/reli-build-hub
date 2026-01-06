import { 
  Cloud, 
  Server, 
  Container, 
  GitBranch, 
  Activity, 
  Shield, 
  Database, 
  FileText 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'AWS Services',
    icon: Cloud,
    skills: ['EC2', 'IAM', 'VPC', 'S3', 'CloudWatch', 'RDS', 'Lambda'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Linux Administration',
    icon: Server,
    skills: ['Ubuntu', 'RHEL', 'CentOS', 'Shell Scripting', 'System Tuning'],
    color: 'from-primary to-cyan-glow',
  },
  {
    title: 'Containerization',
    icon: Container,
    skills: ['Docker', 'Docker Compose', 'Container Orchestration', 'Image Management'],
    color: 'from-blue-500 to-blue-400',
  },
  {
    title: 'CI/CD Pipelines',
    icon: GitBranch,
    skills: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Automated Deployments'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Monitoring & Logging',
    icon: Activity,
    skills: ['CloudWatch', 'Prometheus', 'Grafana', 'Log Analysis', 'Alerting'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Security',
    icon: Shield,
    skills: ['IAM Policies', 'Security Groups', 'Encryption', 'Access Control'],
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'Backup & Recovery',
    icon: Database,
    skills: ['Snapshots', 'Disaster Recovery', 'Data Backup', 'Replication'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Documentation',
    icon: FileText,
    skills: ['Runbooks', 'SOPs', 'Technical Docs', 'Knowledge Base'],
    color: 'from-teal-500 to-cyan-500',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit for building and managing cloud infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 hover:translate-y-[-4px] transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Header */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
