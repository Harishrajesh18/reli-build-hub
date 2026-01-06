import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  field: 'Computer Science',
  institution: 'Hindusthan College of Arts and Science',
  location: 'Coimbatore',
  year: '2024',
  gpa: '7.5',
};

const certifications = [
  {
    title: 'AWS Academy – Cloud Architecting',
    issuer: 'Amazon Web Services',
    description: 'Comprehensive training on AWS cloud architecture, best practices, and designing scalable solutions.',
  },
  {
    title: 'Red Hat Academy – RHEL Program Learner',
    issuer: 'Red Hat',
    description: 'Training on Red Hat Enterprise Linux system administration and management.',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Card */}
          <div className="glass-card p-8 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-foreground">{education.degree}</h4>
                <p className="text-primary font-medium">{education.field}</p>
              </div>
              
              <p className="text-muted-foreground">{education.institution}, {education.location}</p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={14} />
                  Graduated: {education.year}
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                  GPA: {education.gpa}
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
            </div>

            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h4>
                <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
