import { ArrowRight, Clock, FramerIcon, MapPin } from "lucide-react";
import Image from "next/image";

export default function StackPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Header */}
      <header className="w-full ">
        <div className="mx-auto flex h-16 w-full max-w-[680px] items-center justify-between px-4  border-l border-r border-border/50">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <p className="font-mono text-xs text-muted-foreground">
              Trivandrum, Kerala
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <p className="font-mono text-xs text-muted-foreground">8:55 CDT</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[680px]  border-l border-r border-border/50 ">
        {/* Hero Section */}
        <section className="flex flex-col items-center pt-8 pb-12 text-center border-t border-border/50 ">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4ee7ac05-ec2c-4851-9baa-15af717f3308-mateo-cv-framer-website/assets/images/kreJQL49X52hV3lm0eho5rR13jI-1.jpg?"
            alt="Profile Image"
            width={80}
            height={80}
            className="rounded-full object-cover"
            priority
          />
          <div className="mt-6">
            <h1 className="text-4xl font-bold text-foreground">Jabir Jaleel</h1>
            <h2 className="mt-2 text-lg font-normal text-muted-foreground">
              Senior Software Engineer at AssureQA
            </h2>
          </div>
        </section>

        <div className="flex flex-col gap-12 pb-16">
          {/* About */}
          <section
            id="about"
            className="flex flex-col gap-6 border-t border-border/50 pt-12 px-4"
          >
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
              About
            </h3>
            <p className="text-sm text-muted-foreground leading-normal">
              Full-stack Software Engineer with 4.5 years of experience building
              scalable web apps and SaaS products. Skilled in React, Next.js,
              FastAPI, and AI-driven automation. Passionate about solving
              real-world problems through clean architecture, user-focused
              design, and innovative solutions.
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
              {/* ASSUREQA EXPERIENCE */}
              <div className="block">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded flex items-center justify-center">
                      <Image
                        src="/assure-qa.png"
                        alt="AssureQA Logo"
                        width={40}
                        height={40}
                        className="rounded"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-base font-semibold text-foreground">
                        Senior Software Engineer
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <p>AssureQA</p>
                        <span>·</span>
                        <p>2022-Present</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground leading-normal space-y-1 ml-12">
                    <p>
                      • Building TestGenix, an AI-powered test automation
                      platform that generates end-to-end test cases using LLMs.
                    </p>
                    <p>
                      • Developed a Chrome Extension to record and replay
                      browser events for automated web testing.
                    </p>
                    <p>
                      • Built an API testing tool (Postman alternative) with
                      request chaining, validations, and automated workflows.
                    </p>
                    <p>
                      • Designed a visual Flow Builder for testers to create,
                      schedule, and manage test scenarios.
                    </p>
                  </div>
                </div>
              </div>

              {/* MAX STACK LABS EXPERIENCE */}
              <div className="block">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded flex items-center justify-center">
                      <Image
                        src="/msl.png"
                        alt="Max Stack Labs Logo"
                        width={40}
                        height={40}
                        className="rounded"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-base font-semibold text-foreground">
                        Software Engineer
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <p>Max Stack Labs Technologies</p>
                        <span>·</span>
                        <p>2020-2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground leading-normal space-y-1 ml-12">
                    <p>
                      • Engineered a hybrid automation framework (Java +
                      Selenium) boosted test reusability and significantly cut
                      execution time.
                    </p>
                    <p>
                      • Built React-based frontends for internal tools,
                      streamlining workflows and improving user experience for
                      engineering teams.
                    </p>
                    <p>
                      • Played a key role in developing Poivaa, a travel
                      application, contributing both to feature delivery and
                      robust automated test coverage for high reliability.
                    </p>
                  </div>
                </div>
              </div>
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
                {educationData.map((item, index) => (
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
                {certificationsData.map((cert) => (
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
          <ToolsSection />

          {/* LanguagesSection  */}
          <section className="border-t border-border/50 pt-12 px-4">
            <div className="pb-6">
              <h3 className="text-section-header">LANGUAGES</h3>
              <div className="mt-8 space-y-3">
                {[
                  { name: "English", proficiency: "Fluent" },
                  { name: "Malayalam", proficiency: "Native" },
                  { name: "Hindi", proficiency: "Conversational" },
                ].map((lang) => (
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
                  href="mailto:jabirjaleel97@gmail.com"
                  className="text-sm text-foreground hover:underline"
                >
                  jabirjaleel97@gmail.com
                </a>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/jbscript"
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
                  href="https://github.com/jbscript"
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
                  href="tel:+918075156814"
                  className="text-sm text-foreground hover:underline"
                >
                  +91 8075156814
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "APJ Abdul Kalam Technological University",
    years: "2016-2020",
    description:
      "Graduated with a GPA of 6.99/10. Focused on software engineering, algorithms, and web development fundamentals that provided the foundation for my career in full-stack development.",
  },
];

interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  url: string;
}

const certificationsData: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    description:
      "Foundational certification covering AWS cloud concepts, services, security, architecture, pricing, and support to validate cloud fluency and foundational AWS knowledge.",
    url: "https://aws.amazon.com/certification/",
  },
  {
    title: "Foundation: Introduction to LangGraph",
    issuer: "LangChain Academy",
    year: "2024",
    description:
      "Comprehensive course on building AI agents and workflows using LangGraph, focusing on multi-agent systems, state management, and complex AI application development.",
    url: "https://academy.langchain.com/",
  },
  {
    title: "Python",
    issuer: "Kaggle",
    year: "2023",
    description:
      "Certification demonstrating proficiency in Python programming, data manipulation, and machine learning fundamentals through practical exercises and projects.",
    url: "https://www.kaggle.com/learn/python",
  },
];

const SkillPill = ({ skill }: { skill: string }) => (
  <div className="flex items-center justify-center rounded-[20px] bg-secondary px-3 py-1.5">
    <p className="text-sm text-muted-foreground">{skill}</p>
  </div>
);

const ToolIcon = ({
  href,
  name,
  bgColorClass,
  children,
}: {
  href: string;
  name: string;
  bgColorClass: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex h-10 w-10 items-center justify-center rounded-full ${bgColorClass}`}
    aria-label={name}
  >
    {children}
  </a>
);

const tools = [
  {
    name: "React",
    href: "https://react.dev/",
    bgColorClass: "bg-blue-500",
    child: <span className="font-semibold text-lg text-white">R</span>,
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    bgColorClass: "bg-black",
    child: <span className="font-semibold text-lg text-white">N</span>,
  },
  {
    name: "Python",
    href: "https://python.org/",
    bgColorClass: "bg-yellow-500",
    child: <span className="font-semibold text-lg text-black">P</span>,
  },
  {
    name: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    bgColorClass: "bg-green-500",
    child: <span className="font-semibold text-lg text-white">F</span>,
  },
  {
    name: "Docker",
    href: "https://docker.com/",
    bgColorClass: "bg-blue-600",
    child: <span className="font-semibold text-lg text-white">D</span>,
  },
  {
    name: "AWS",
    href: "https://aws.amazon.com/",
    bgColorClass: "bg-orange-500",
    child: <span className="font-semibold text-lg text-white">A</span>,
  },
  {
    name: "PostgreSQL",
    href: "https://postgresql.org/",
    bgColorClass: "bg-blue-700",
    child: <span className="font-semibold text-lg text-white">P</span>,
  },
  {
    name: "MongoDB",
    href: "https://mongodb.com/",
    bgColorClass: "bg-green-600",
    child: <span className="font-semibold text-lg text-white">M</span>,
  },
  {
    name: "Github",
    href: "https://github.com/jbscript",
    bgColorClass: "bg-black",
    child: <span className="font-semibold text-lg text-white">G</span>,
  },
  {
    name: "LangChain",
    href: "https://langchain.com/",
    bgColorClass: "bg-purple-600",
    child: <span className="font-semibold text-lg text-white">L</span>,
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "LangChain",
  "Docker",
  "AWS",
];

const ToolsSection = () => {
  return (
    <section className="border-t border-border/50 pt-12 px-4">
      <div className="flex flex-col gap-6 py-10">
        <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
          Skills / Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillPill key={skill} skill={skill} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <ToolIcon
              key={tool.name}
              href={tool.href}
              name={tool.name}
              bgColorClass={tool.bgColorClass}
            >
              {tool.child}
            </ToolIcon>
          ))}
        </div>
      </div>
    </section>
  );
};
