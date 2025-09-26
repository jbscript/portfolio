import { ArrowRight, Clock, FramerIcon, MapPin } from "lucide-react";
import Image from "next/image";

export default function StackPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="w-full">
        <div className="mx-auto flex h-16 w-full max-w-[680px] items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <p className="font-mono text-xs text-muted-foreground">
              Barcelona, Spain
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <p className="font-mono text-xs text-muted-foreground">8:55 CDT</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[680px] px-4">
        {/* Hero Section */}
        <section className="flex flex-col items-center pt-8 pb-12 text-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4ee7ac05-ec2c-4851-9baa-15af717f3308-mateo-cv-framer-website/assets/images/kreJQL49X52hV3lm0eho5rR13jI-1.jpg?"
            alt="Profile Image"
            width={80}
            height={80}
            className="rounded-full object-cover"
            priority
          />
          <div className="mt-6">
            <h1 className="text-4xl font-bold text-foreground">Mateo Rivas</h1>
            <h2 className="mt-2 text-lg font-normal text-muted-foreground">
              Design Engineer at Typeform
            </h2>
          </div>
        </section>

        <div className="flex flex-col gap-12 pb-16">
          {/* About */}
          <section id="about" className="flex flex-col gap-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
              About
            </h3>
            <p className="text-sm text-muted-foreground leading-normal">
              I’m a Design Engineer focused on crafting meaningful digital
              experiences where design meets code. With a strong front-end
              development and UX design background, I build scalable UI systems
              and contribute to user-centered products from concept to
              deployment.
            </p>
          </section>
          {/* ExperienceSection  */}
          <section className="flex flex-col gap-6">
            {/* SECTION TITLE */}
            <div>
              <h3 className="text-section-header">Experience</h3>
            </div>

            {/* TYPEFORM EXPERIENCE GROUP */}
            <div className="flex gap-4">
              {/* Logo */}
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4ee7ac05-ec2c-4851-9baa-15af717f3308-mateo-cv-framer-website/assets/icons/kmS22jhgzkBTCjOUczQiXifIyM-1.png?"
                  alt="Typeform logo"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Positions */}
              <div className="flex flex-grow flex-col gap-6">
                {/* Design Engineer */}
                <div>
                  <h4 className="text-job-title">Design Engineer</h4>
                  <div className="flex items-center gap-1 text-company-date mt-1">
                    <p className="uppercase">TYPEFORM</p>
                    <span>·</span>
                    <p>2024-NOW</p>
                  </div>
                  <p className="text-body mt-2">
                    Spearheaded the revamp of Typeform’s Design System, working
                    closely with both design and engineering teams.
                  </p>
                </div>

                {/* Frontend Developer */}
                <div>
                  <h4 className="text-job-title">Frontend Developer</h4>
                  <div className="flex items-center gap-1 text-company-date mt-1">
                    <p>Typeform</p>
                    <span>·</span>
                    <p>2022-2024</p>
                  </div>
                  <ul className="text-body mt-2 list-disc pl-5 space-y-1">
                    <li>
                      Introduced a token-based styling architecture integrated
                      with Figma and Storybook.
                    </li>
                    <li>
                      Collaborated with product squads to deliver high-impact
                      user experiences across web platforms.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SPOTIFY EXPERIENCE GROUP */}
            <div className="flex gap-4">
              {/* Logo */}
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4ee7ac05-ec2c-4851-9baa-15af717f3308-mateo-cv-framer-website/assets/icons/StxJ2mhq4FmFFJDdOXwHrapvSPA-2.png?"
                  alt="Spotify logo"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Position */}
              <div className="flex-grow">
                <div>
                  <h4 className="text-job-title">Frontend Intern</h4>
                  <div className="flex items-center gap-1 text-company-date mt-1">
                    <p>Spotify</p>
                    <span>·</span>
                    <p>2021-2022</p>
                  </div>
                  <p className="text-body mt-2">
                    Joined the Premium team as a frontend intern, supporting UI
                    development with React and CSS. Collaborated with designers
                    to implement responsive components and participated in
                    accessibility testing. This was my first hands-on experience
                    bridging design and code in a global tech environment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* EducationSection  */}
          <section className="pt-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-section-header mb-6">EDUCATION</h3>
              <div className="flex flex-col gap-6">
                {educationData.map((item, index) => (
                  <div key={index}>
                    <div>
                      <h4 className="text-job-title">{item.degree}</h4>
                      <div className="mt-1 flex flex-row items-center gap-1.5 text-company-date">
                        <span>{item.institution}</span>
                        <span>·</span>
                        <span>{item.years}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-body">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CertificationsSection  */}
          <section className="pt-12">
            <div className="border-b border-border pb-6">
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
          <section>
            <div className="border-b border-border pb-12">
              <h3 className="text-section-header">LANGUAGES</h3>
              <div className="mt-8 space-y-3">
                {[
                  { name: "Spanish", proficiency: "Native" },
                  { name: "English", proficiency: "Fluent" },
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
          <section className="border-t border-border pt-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">
              CONTACT
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:antonio96perez@gmail.com"
                  className="text-sm text-foreground hover:underline"
                >
                  mateorivas@email.com
                </a>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/antonioperez96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:underline"
                >
                  /in/mateorivas
                </a>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">X/Twitter</p>
                <a
                  href="https://x.com/antperez_design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:underline"
                >
                  @mateorivas
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
    degree: "Postgraduate in User Experience Design",
    institution: "Elisava",
    years: "2020-2021",
    description:
      "Specialized in UX strategy, user research, and prototyping. The program deepened my ability to design user-centered products and aligned perfectly with my transition into frontend and design engineering roles.",
  },
  {
    degree: "Bachelor's Degree in Multimedia Design",
    institution: "Universitat Ramon Llull",
    years: "2016-2020",
    description:
      "Focused on interaction design, web development, and digital interfaces. This program gave me the foundation to understand both the visual and technical aspects of digital products.",
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
    title: "Advanced Front-End Web Development with React",
    issuer: "Coursera",
    year: "2025",
    description:
      "An in-depth certification covering React 18+. Next.js, TypeScript, GraphQL, performance optimizatio, accessibility standards (WCAG 2.2), and Core Web Vitals for production-ready interfaces.",
    url: "https://www.coursera.org/",
  },
  {
    title: "UX Design for Accessibility",
    issuer: "Interaction Design Foundation",
    year: "2024",
    description:
      "Specialized course on designing inclusive digital experiences, focusing on WCAG compliance, semantic structure, keyboard navigation, screen reader testing, and inclusive UX research methodologies.",
    url: "https://www.coursera.org/",
  },
];

const SkillPill = ({ skill }: { skill: string }) => (
  <div className="flex items-center justify-center rounded-[20px] border border-border bg-secondary px-3 py-1.5">
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
    name: "Framer",
    href: "https://www.framer.com/",
    bgColorClass: "bg-black",
    child: <span className="font-semibold text-lg text-white">F</span>,
  },
  {
    name: "Figma",
    href: "https://figma.com/",
    bgColorClass: "bg-pink-500",
    child: <span className="font-semibold text-lg text-white">f</span>,
  },
  {
    name: "Arc",
    href: "http://arc.net/",
    bgColorClass: "bg-purple-500",
    child: <span className="font-semibold text-lg text-white">A</span>,
  },
  {
    name: "Raycast",
    href: "http://raycast.com/",
    bgColorClass: "bg-red-500",
    child: <span className="font-semibold text-lg text-white">R</span>,
  },
  {
    name: "Cursor",
    href: "https://www.cursor.com/",
    bgColorClass: "bg-black",
    child: <span className="font-semibold text-lg text-white">C</span>,
  },
  {
    name: "ChatGPT",
    href: "https://openai.com/",
    bgColorClass: "bg-black",
    child: <span className="font-semibold text-lg text-white">G</span>,
  },
  {
    name: "Github",
    href: "https://github.com/",
    bgColorClass: "bg-black",
    child: <span className="font-semibold text-lg text-white">G</span>,
  },
  {
    name: "Stripe",
    href: "http://stripe.com/",
    bgColorClass: "bg-purple-600",
    child: <span className="font-semibold text-lg text-white">S</span>,
  },
  {
    name: "Superhuman",
    href: "https://superhuman.com/",
    bgColorClass: "bg-black",
    child: <span className="font-semibold text-lg text-white">S</span>,
  },
  {
    name: "Spotify",
    href: "http://spotify.com/",
    bgColorClass: "bg-spotify-green",
    child: <span className="font-semibold text-lg text-black">S</span>,
  },
];

const skills = [
  "React",
  "Typescript",
  "Next.js",
  "Tailwind CSS",
  "GraphQL",
  "WCAG 2.2",
];

const ToolsSection = () => {
  return (
    <section>
      <div className="flex flex-col gap-6 border-t border-border py-10 pt-12">
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
