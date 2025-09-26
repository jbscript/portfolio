import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import resumeData from "@/data/resume.json";
import { getImagePath } from "@/lib/image-path";

export default function StackPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Header */}
      <header className="w-full ">
        <div className="mx-auto flex h-16 w-full max-w-[680px] items-center justify-between px-4  border-l border-r border-border/50">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <p className="font-mono text-xs text-muted-foreground">
              Kannur, Kerala
            </p>
          </div>
          <a
            href={getImagePath("/resume-ats.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-foreground bg-background border border-border/50 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ExternalLink className="h-3 w-3" />
            Download Resume
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[680px]  border-l border-r border-border/50 ">
        {/* Hero Section */}
        <section className="flex flex-col items-center pt-8 pb-12 text-center border-t border-border/50 ">
          <Image
            src={getImagePath(resumeData.profile.image)}
            alt="Profile Image"
            width={80}
            height={80}
            className="rounded-full object-cover"
            priority
          />
          <div className="mt-6">
            <h1 className="text-4xl font-bold text-foreground">
              {resumeData.profile.name}
            </h1>
            <h2 className="mt-2 text-lg font-normal text-muted-foreground">
              {resumeData.profile.title}
            </h2>
          </div>
        </section>

        <div className="flex flex-col gap-12 pb-16">
          {/* About */}
          <section className="flex flex-col gap-6 border-t border-border/50 pt-12 px-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
              About
            </h3>
            <p className="text-sm text-muted-foreground leading-normal">
              {resumeData.profile.about}
            </p>
          </section>

          {/* ExperienceSection  */}
          <section className="border-t border-border/50 pt-12 px-4">
            <div className="pb-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                Experience
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="block">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Image
                          src={getImagePath(exp.logo)}
                          alt={`${exp.company} Logo`}
                          width={24}
                          height={24}
                          className="rounded"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-base font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <p>{exp.company}</p>
                          <span>·</span>
                          <p>{exp.period}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground leading-normal space-y-1 ml-12">
                      {exp.achievements.map((achievement, achIndex) => (
                        <p key={achIndex}>• {achievement}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EducationSection  */}
          <section className="border-t border-border/50 pt-12 px-4">
            <div className="pt-6">
              <div className="pb-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                  Education
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {resumeData.education.map((item, index) => (
                  <div key={index} className="block">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-base font-semibold text-foreground">
                          {item.degree}
                        </h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <p>{item.institution}</p>
                          <span>·</span>
                          <p>{item.years}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CertificationsSection  */}
          <section className="border-t border-border/50 pt-12 px-4">
            <div className="pb-6">
              <div className="pb-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                  Certifications
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {resumeData.certifications.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-start justify-between">
                          <h4 className="text-base font-semibold text-foreground pr-4">
                            {cert.title}
                          </h4>
                          <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <p>{cert.issuer}</p>
                          <span>·</span>
                          <p>{cert.year}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-normal">
                        {cert.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ToolsSection */}
          <section className="border-t border-border/50 pt-12 px-4">
            <div className="pb-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                Skills / Stack
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
                <Badge key={skill.name} variant="secondary">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </section>

          {/* LanguagesSection  */}
          <section className="border-t border-border/50 pt-12 px-4">
            <div className="pb-6">
              <h3 className="text-section-header">LANGUAGES</h3>
              <div className="mt-8 space-y-3">
                {resumeData.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between"
                  >
                    <p className="text-body text-foreground">{lang.name}</p>
                    <p className="text-body">{lang.proficiency}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ContactSection */}
          <section className="border-t border-border/50 pt-12 px-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">
              CONTACT
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href={`mailto:${resumeData.contact.email}`}
                  className="text-sm text-foreground hover:underline"
                >
                  {resumeData.contact.email}
                </a>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:underline"
                >
                  /in/jbscript
                </a>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">GitHub</p>
                <a
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:underline"
                >
                  github.com/jbscript
                </a>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Phone</p>
                <a
                  href={`tel:${resumeData.contact.phone}`}
                  className="text-sm text-foreground hover:underline"
                >
                  {resumeData.contact.phone}
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
