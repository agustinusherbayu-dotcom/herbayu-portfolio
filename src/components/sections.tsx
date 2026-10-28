"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { labEntries } from "@/data/lab";
import { projectCategories, projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function EngineeringDrawing() {
  return (
    <div className="hero-drawing">
      <svg viewBox="0 0 520 520" role="img" aria-labelledby="drawing-title">
        <title id="drawing-title">Abstract engineering and systems illustration</title>
        <defs>
          <pattern id="drawing-grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M 26 0 L 0 0 0 26" className="drawing-grid-line" fill="none" />
          </pattern>
        </defs>
        <circle cx="260" cy="260" r="220" className="drawing-orbit" />
        <circle cx="260" cy="260" r="176" className="drawing-orbit drawing-orbit-dashed" />
        <circle cx="260" cy="260" r="126" className="drawing-orbit" />
        <circle cx="260" cy="260" r="210" fill="url(#drawing-grid)" />
        <path d="M78 260h364M260 78v364M131 131l258 258M389 131 131 389" className="drawing-axis" />
        <path d="M145 345V216h66v129m98 0V174h66v171M211 259h98m-98 43h98" className="drawing-form" />
        <path d="M145 367h230M120 345h25m230 0h25M260 112v62m0 172v62" className="drawing-measure" />
        <circle cx="260" cy="260" r="7" className="drawing-node" />
        <circle cx="145" cy="216" r="5" className="drawing-node" />
        <circle cx="375" cy="174" r="5" className="drawing-node" />
      </svg>
      <span className="drawing-caption">Engineering / systems / possibility</span>
      <span className="drawing-index">01 — 03</span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-layout page-wrap">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker">
            Industrial engineering <span>×</span> digital automation <span>×</span> business innovation
          </p>
          <h1>
            Engineering Ideas.
            <span className="serif-line">Creating What Matters.</span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <p className="hero-descriptor">{profile.role}</p>
          <div className="hero-actions">
            <Link href="#projects" className="button button-primary">
              Explore my work <ArrowDown size={15} aria-hidden="true" />
            </Link>
            <Link href="#contact" className="button button-secondary">
              Let&apos;s collaborate <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-cue-line" />
            Scroll to explore
          </a>
        </div>
        <Reveal className="hero-art-wrap" delay={0.12}>
          <EngineeringDrawing />
        </Reveal>
      </div>
      <div className="hero-foot page-wrap">
        <span>Personal portfolio</span>
        <span>Based on the work and information shared</span>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-block about-section">
      <div className="page-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="A little about me"
            title="A practical mindset, shaped by engineering."
            description="I’m interested in making complex work clearer—connecting thoughtful process design with useful digital tools and business context."
          />
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-story">
            <p className="about-lead">{profile.bio}</p>
            <div className="education-note">
              <span className="eyebrow">Education</span>
              <h3>{profile.education.degree}</h3>
              <p>{profile.education.institution}</p>
            </div>
          </Reveal>
          <Reveal className="profile-panel" delay={0.08}>
            <div className="profile-panel-top">
              <span className="eyebrow">Areas of interest</span>
              <span className="profile-mark" aria-hidden="true">H.</span>
            </div>
            <ul className="interest-list">
              {profile.interests.map((interest, index) => (
                <li key={interest}>
                  <span className="interest-number">0{index + 1}</span>
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <Reveal className="project-card-wrap" delay={(index % 3) * 0.06}>
      <article className="project-card">
        <div className={`project-art project-art-${index + 1}`} aria-hidden="true">
          <span className="project-art-label">Project theme</span>
          <div className="project-art-lines">
            <span />
            <span />
            <span />
          </div>
          <span className="project-art-index">0{index + 1}</span>
        </div>
        <div className="project-card-content">
          <div className="project-meta">
            <span>{project.category}</span>
            <span className="status-label">{project.status}</span>
          </div>
          <h3>{project.name}</h3>
          <p>{project.shortDescription}</p>
          <details className="project-disclosure">
            <summary>
              Expand project notes <span aria-hidden="true">+</span>
            </summary>
            <div className="disclosure-copy">
              <p>{project.description}</p>
              <p className="evidence-note">
                Screenshots and verified contribution details have not been supplied.
              </p>
            </div>
          </details>
          <Link className="text-link" href={`/projects/${project.slug}`}>
            View case study <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-block projects-section">
      <div className="page-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Ideas and work across disciplines."
            description="A growing collection of project themes. Status and contribution details will be updated as they are verified."
          />
        </Reveal>
        <div className="filter-row" aria-label="Filter projects by category">
          {["All", ...projectCategories].map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-button ${activeCategory === category ? "is-active" : ""}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-grid" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-block journey-section">
      <div className="page-wrap journey-layout">
        <Reveal className="journey-intro">
          <SectionHeading
            eyebrow="Professional journey"
            title="Learning through people, process, and practice."
          />
          <p className="journey-note">
            A concise record of the education, organizational experience, and work shared to date.
          </p>
        </Reveal>
        <div className="timeline">
          {profile.experience.map((item, index) => (
            <Reveal key={`${item.period}-${item.institution}`} delay={index * 0.035}>
              <article className="timeline-entry">
                <span className="timeline-period">{item.period}</span>
                <div className="timeline-copy">
                  <h3>{item.institution}</h3>
                  <p>{item.title}</p>
                  {item.description && <p className="timeline-description">{item.description}</p>}
                </div>
                <span className="timeline-dot" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InnovationLabSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const categories = ["All", ...new Set(labEntries.map((entry) => entry.category))];
  const statuses = ["All", ...new Set(labEntries.map((entry) => entry.status))];
  const visibleEntries = labEntries.filter(
    (entry) =>
      (activeCategory === "All" || entry.category === activeCategory) &&
      (activeStatus === "All" || entry.status === activeStatus),
  );

  return (
    <section id="innovation-lab" className="section-block lab-section">
      <div className="page-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Innovation lab"
            title="A space for what comes next."
            description="Experiments and prototype ideas will live here as they take shape. Live demos are intentionally not enabled."
          />
        </Reveal>
        <div className="lab-filters">
          <div className="filter-group" aria-label="Filter Innovation Lab by category">
            <span className="filter-caption">Category</span>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-button ${activeCategory === category ? "is-active" : ""}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="filter-group" aria-label="Filter Innovation Lab by status">
            <span className="filter-caption">Status</span>
            {statuses.map((status) => (
              <button
                key={status}
                type="button"
                className={`filter-button ${activeStatus === status ? "is-active" : ""}`}
                aria-pressed={activeStatus === status}
                onClick={() => setActiveStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
        <div className="lab-grid" aria-live="polite">
          {visibleEntries.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 0.05}>
              <article className="lab-card">
                <div className="lab-card-top">
                  <span className="eyebrow">{entry.category}</span>
                  <span className="status-label">{entry.status}</span>
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.summary}</p>
                <div className="tag-row">
                  {entry.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <p className="lab-coming-soon">
                  <span aria-hidden="true" /> Coming in a future release
                </p>
              </article>
            </Reveal>
          ))}
          {visibleEntries.length === 0 && (
            <p className="empty-filter-state">No items match these filters yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-block skills-section">
      <div className="page-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="A connected view of engineering and innovation."
            description="Areas of focus, presented without unverified proficiency levels or certifications."
          />
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={(index % 3) * 0.05}>
              <article className="skill-group">
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item.name}>{item.name}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const socialLinks = [
    { label: "LinkedIn", href: profile.contact.linkedin },
    { label: "GitHub", href: profile.contact.github },
  ].filter((link) => link.href);

  return (
    <section id="contact" className="section-block contact-section">
      <div className="page-wrap">
        <Reveal className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">Let&apos;s collaborate</p>
            <h2>Have a thoughtful challenge in mind?</h2>
            <p>
              I&apos;m open to conversations around industrial engineering, digital automation, and business innovation.
            </p>
          </div>
          <div className="contact-details">
            {profile.contact.email ? (
              <a className="contact-email" href={`mailto:${profile.contact.email}`}>
                {profile.contact.email} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : (
              <p className="contact-unavailable">
                Professional email is not configured for publication yet.
              </p>
            )}
            {socialLinks.length > 0 && (
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label} <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
            <p className="form-note">
              An inquiry form will be added when a delivery service is configured. No submissions are collected by this site yet.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
