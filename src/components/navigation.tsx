"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Innovation Lab", href: "#innovation-lab" },
  { label: "Contact", href: "#contact" },
];

export function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-20% 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="site-nav page-wrap" aria-label="Main navigation">
        <Link href="#top" className="wordmark" onClick={() => setIsOpen(false)}>
          <span className="wordmark-symbol" aria-hidden="true">H</span>
          <span>HERBAYU</span>
        </Link>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={activeSection === item.href ? "active" : ""}
              aria-current={activeSection === item.href ? "location" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="#contact" className="nav-cta">
          Let&apos;s collaborate <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isOpen && (
        <div className="mobile-nav-panel" id="mobile-navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={activeSection === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <Link className="mobile-nav-cta" href="#contact" onClick={() => setIsOpen(false)}>
            Let&apos;s collaborate <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      )}
    </header>
  );
}
