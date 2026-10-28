import Link from "next/link";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  InnovationLabSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/sections";
import { SiteNavigation } from "@/components/navigation";
import { CopyrightYear } from "@/components/copyright-year";
import { profile } from "@/data/profile";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Innovation Lab", href: "#innovation-lab" },
  { label: "Contact", href: "#contact" },
];

export default function HomePage() {
  return (
    <>
      <SiteNavigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <InnovationLabSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="footer-inner page-wrap">
          <div>
            <Link href="#top" className="footer-brand">{profile.brand}</Link>
            <p className="footer-tagline">{profile.tagline}</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
          <CopyrightYear />
        </div>
      </footer>
    </>
  );
}
