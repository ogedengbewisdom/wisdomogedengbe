import MobileNavigationDialog from "./mobile-navigation-dialog";

const links = [
  { number: "01", label: "About", href: "#about" },
  { number: "03", label: "Skills", href: "#skills" },
  { number: "04", label: "Projects", href: "#projects" },
  { number: "05", label: "Contact", href: "#contact" },
];

export default function MobileNavigation() {
  return (
    <MobileNavigationDialog>
      <nav aria-label="Mobile navigation" className="mobile-menu-links">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            <span>{link.number}</span>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="mobile-menu-cta" href="#contact">
        Hire me <span aria-hidden="true">→</span>
      </a>

      <div className="mobile-menu-extra">
        <div className="mobile-menu-current">
          <span>Currently</span>
          <strong>Full-stack Developer</strong>
        </div>
        <p className="mobile-menu-availability">
          <span aria-hidden="true" />
          Open to opportunities
        </p>
        <p className="mobile-menu-name">Wisdom Ogedengbe</p>
      </div>
    </MobileNavigationDialog>
  );
}
