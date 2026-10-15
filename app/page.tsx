import { projects } from "@/data/projects";
import { certifications, education, experience } from "@/data/experience";
import { techStack } from "@/data/tech-stack";
import { contactPhoneDisplay, contactPhoneHref } from "@/data/contact";
import ContactForm from "./contact-form";
import MobileNavigation from "./mobile-navigation";
import ProjectPreview from "./project-preview";
import Reveal from "./reveal";
import { SocialLinks, WhatsAppLink } from "./social-links";
import StaggeredList from "./staggered-list";
import ThemeToggle from "./theme-toggle";

function hasContent(
  value: string | readonly string[] | null | undefined,
): boolean {
  if (typeof value === "string") {
    const text = value.trim();
    return text.length > 0 && !text.startsWith("TODO");
  }

  return (
    value !== null &&
    value !== undefined &&
    value.length > 0 &&
    value.every((item) => {
      const text = item.trim();
      return text.length > 0 && !text.startsWith("TODO");
    })
  );
}

function DetailList({
  title,
  details,
  className = "",
}: {
  title: string;
  details: string[];
  className?: string;
}) {
  if (!hasContent(details)) {
    return null;
  }

  return (
    <section className={`project-detail-card ${className}`}>
      <h5>{title}</h5>
      <ul>
        {details.map((detail, index) => (
          <li key={`${title}-${index}`}>{detail}</li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top">
            <span aria-hidden="true" className="brand-mark">
              +
            </span>
            Wisdom Ogedengbe
          </a>
          <nav aria-label="Main navigation" className="site-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <MobileNavigation />
            <a className="header-cta" href="#contact">
              Let&apos;s talk <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="site-main">
        <Reveal as="section" aria-labelledby="hero-title" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" /> Full-stack Developer
            </p>
            <h1 id="hero-title">
              I build reliable
              <br />
              digital products<span className="accent-period">.</span>
            </h1>
            <p className="hero-role">Wisdom Ogedengbe / Full-stack Developer</p>
            <p className="hero-intro">
              Driven by a passion for innovation, I leverage software to solve
              real-world problems, creating impactful, intuitive and
              user-friendly digital experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <span aria-hidden="true">→</span>
              </a>
              <a
                className="button button-secondary"
                download
                href="/wisdomogedengbe_Full_Stack_resume.pdf"
              >
                Download Resume
              </a>
            </div>
            {/* <div aria-label="Portfolio highlights" className="hero-facts">
              <div>
                <strong>06</strong>
                <span>Core skills</span>
              </div>
              <div>
                <strong>{String(projects.length).padStart(2, "0")}</strong>
                <span>Featured projects</span>
              </div>
            </div> */}
          </div>

          <div className="hero-art">
            <ProjectPreview
              image={{ slug: "wisdom-ogedengbe", alt: "Wisdom Ogedengbe" }}
              priority={true}
            />
            {/* <div aria-hidden="true" className="browser-bar">
              <i />
              <i />
              <i />
              <span>Full-stack development / Abuja, Nigeria</span>
            </div>
            <div className="hero-image-placeholder">
              <div aria-hidden="true" className="monogram-ring">
                WO
              </div>
              <div className="hero-art-caption">
                <span>Currently building</span>
                <strong>From data models to polished interfaces.</strong>
                <small>Building reliable products from end to end.</small>
              </div>
            </div>
            <div className="status-card">
              <span aria-hidden="true" className="status-check">
                ✓
              </span>
              <span>
                <strong>Build status</strong>
                <small>Open to opportunities</small>
              </span>
            </div> */}
          </div>
        </Reveal>

        <Reveal
          as="section"
          aria-labelledby="tech-stack-title"
          className="tech-stack-section content-section"
          id="skills"
        >
          <p className="section-kicker">01 / Skills</p>
          <h2 id="tech-stack-title">Tech Stack</h2>
          <StaggeredList
            className="tech-stack-list"
            itemClassName="tech-stack-row"
          >
            {techStack.map(({ category, items }) => (
              <div key={category}>
                <h3>{category}</h3>
                <StaggeredList
                  as="ul"
                  className="tech-stack-chips"
                  itemClassName="tech-stack-chip"
                >
                  {items}
                </StaggeredList>
              </div>
            ))}
          </StaggeredList>
        </Reveal>

        <Reveal
          as="section"
          aria-labelledby="about-title"
          className="about-section content-section"
          id="about"
        >
          <Reveal className="about-copy">
            <p className="section-kicker">02 / About</p>
            <h2 id="about-title">
              Good software starts
              <br />
              with understanding.
            </h2>
            <p className="body-copy">
              I turn ideas into working products, from designing databases and
              building APIs to shipping polished interfaces. With 2+ years of
              hands-on experience, I care about clean code, solving real
              problems, and taking ownership from start to finish.
            </p>
          </Reveal>
          <div className="experience-history" id="experience">
            <h3 id="experience-title">Professional experience</h3>
            <StaggeredList
              className="experience-list"
              itemClassName="experience-item"
            >
              {experience.map((position) => (
                <article
                  aria-labelledby={`experience-${position.company
                    .toLowerCase()
                    .replaceAll(/[^a-z0-9]+/g, "-")}`}
                  key={position.company}
                >
                  <div className="experience-item-heading">
                    <h4
                      id={`experience-${position.company
                        .toLowerCase()
                        .replaceAll(/[^a-z0-9]+/g, "-")}`}
                    >
                      {position.company}
                    </h4>
                    <span>{position.period}</span>
                  </div>
                  <p className="experience-role">{position.role}</p>
                  <ul>
                    {position.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </StaggeredList>
          </div>
          <div className="experience-credentials">
            <section
              aria-labelledby="education-title"
              className="experience-item"
            >
              <h3 id="education-title">Education</h3>
              <h4>{education.institution}</h4>
              <p className="education-details">
                {education.qualification} · {education.result}
              </p>
            </section>
            <section
              aria-labelledby="certifications-title"
              className="experience-item"
            >
              <h3 id="certifications-title">Certifications</h3>
              <ul>
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </section>
          </div>
        </Reveal>

        <section
          aria-labelledby="projects-title"
          className="projects-section content-section"
          id="projects"
        >
          <Reveal className="projects-heading">
            <div>
              <p className="section-kicker">03 / Selected work</p>
              <h2 id="projects-title">Projects</h2>
            </div>
          </Reveal>

          <StaggeredList
            className="case-study-list"
            itemClassName="case-study-item"
          >
            {projects.map((project, index) => (
              <article
                aria-labelledby={`${project.id}-title`}
                className="case-study"
                key={project.id}
              >
                <div
                  className={`case-study-top${project.image ? "" : " case-study-top--no-preview"}`}
                >
                  <ProjectPreview
                    priority={index === 0}
                    image={project.image}
                  />

                  <div className="case-study-summary">
                    <div className="case-study-labels">
                      <span className="case-study-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {hasContent(project.category) && (
                        <span className="category-pill">
                          {project.category}
                        </span>
                      )}
                    </div>
                    <h3 id={`${project.id}-title`}>{project.name}</h3>
                    {hasContent(project.description) && (
                      <p className="case-study-description">
                        {project.description}
                      </p>
                    )}
                    {(hasContent(project.role) ||
                      hasContent(project.timeframe) ||
                      hasContent(project.technologies)) && (
                      <dl className="project-meta">
                        {hasContent(project.role) && (
                          <div>
                            <dt>My role</dt>
                            <dd>{project.role}</dd>
                          </div>
                        )}
                        {hasContent(project.timeframe) && (
                          <div>
                            <dt>Timeframe</dt>
                            <dd>{project.timeframe}</dd>
                          </div>
                        )}
                        {hasContent(project.technologies) && (
                          <div>
                            <dt>Stack</dt>
                            <dd>{project.technologies.join(" · ")}</dd>
                          </div>
                        )}
                      </dl>
                    )}
                    {(hasContent(project.problem) ||
                      hasContent(project.contribution)) && (
                      <div className="project-intro-details">
                        {hasContent(project.problem) && (
                          <section>
                            <h4>The problem</h4>
                            <p>{project.problem}</p>
                          </section>
                        )}
                        {hasContent(project.contribution) && (
                          <section>
                            <h4>What I did</h4>
                            <p>{project.contribution}</p>
                          </section>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {(hasContent(project.technicalDecisions) ||
                  hasContent(project.challenges) ||
                  hasContent(project.tradeoffs) ||
                  hasContent(project.outcome) ||
                  hasContent(project.reflection) ||
                  hasContent(project.liveProjectUrl) ||
                  hasContent(project.sourceCodeUrl)) && (
                  <div className="project-engineering">
                    {(hasContent(project.technicalDecisions) ||
                      hasContent(project.challenges) ||
                      hasContent(project.tradeoffs)) && (
                      <>
                        <p className="section-kicker">Engineering notes</p>
                        <h4 className="engineering-title">
                          Decisions, challenges &amp; trade-offs
                        </h4>
                        <StaggeredList
                          className="engineering-grid"
                          itemClassName="engineering-stagger-item"
                        >
                          <DetailList
                            className="technical-decisions"
                            details={project.technicalDecisions}
                            title="Technical decisions"
                          />
                          <DetailList
                            className="challenges"
                            details={project.challenges}
                            title="Challenges"
                          />
                          <DetailList
                            className="tradeoffs"
                            details={project.tradeoffs}
                            title="Trade-offs"
                          />
                        </StaggeredList>
                      </>
                    )}
                    {hasContent(project.outcome) && (
                      <section className="project-outcome">
                        <h4>Outcome</h4>
                        <p>{project.outcome}</p>
                      </section>
                    )}
                    {hasContent(project.reflection) && (
                      <blockquote className="project-reflection">
                        <span aria-hidden="true">“</span>
                        <p>{project.reflection}</p>
                      </blockquote>
                    )}
                    {(hasContent(project.liveProjectUrl) ||
                      hasContent(project.sourceCodeUrl)) && (
                      <div className="case-study-links">
                        {hasContent(project.liveProjectUrl) && (
                          <a
                            href={project.liveProjectUrl ?? undefined}
                            rel="noreferrer"
                            target="_blank"
                          >
                            View live project <span aria-hidden="true">↗</span>
                          </a>
                        )}
                        {hasContent(project.sourceCodeUrl) && (
                          <a
                            href={project.sourceCodeUrl ?? undefined}
                            rel="noreferrer"
                            target="_blank"
                          >
                            View source code <span aria-hidden="true">↗</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}
          </StaggeredList>
        </section>

        <Reveal
          as="section"
          aria-labelledby="contact-title"
          className="contact-section"
          id="contact"
        >
          <div className="contact-copy">
            <p className="contact-availability">
              <span aria-hidden="true" />
              Open to opportunities · Abuja, Nigeria
            </p>
            <p className="section-kicker">Let&apos;s build something good</p>
            <h2 id="contact-title">Have a project in mind?</h2>
            <p className="contact-intro">
              I&apos;m always interested in solving thoughtful problems and
              building useful digital products. Tell me a little about what
              you&apos;re working on.
            </p>
            <div className="contact-action-links">
              <a className="button button-secondary" href={contactPhoneHref}>
                Call {contactPhoneDisplay}
              </a>
              <WhatsAppLink className="button button-secondary contact-whatsapp" />
              <a
                className="button button-primary"
                href="mailto:ogedengbewisdom123456@gmail.com"
              >
                Email me
              </a>
            </div>
            <SocialLinks className="contact-social-links" />
            {/* <div className="contact-resources">
              <a
                className="button button-secondary"
                download
                href="/wisdom-ogedengbe-resume.pdf"
              >
                Full-stack CV
              </a>
              <a
                className="button button-secondary"
                download
                href="/wisdom-ogedengbe-frontend-resume.pdf"
              >
                Frontend CV
              </a>
              <a
                className="button button-secondary"
                download
                href="/wisdom-ogedengbe-backend-resume.pdf"
              >
                Backend CV
              </a>
            </div> */}
          </div>
          <ContactForm />
        </Reveal>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-about">
            <a className="footer-brand" href="#top">
              Wisdom Ogedengbe
            </a>
            <p>Full-stack developer building reliable digital products.</p>
            <a href="mailto:ogedengbewisdom123456@gmail.com">
              ogedengbewisdom123456@gmail.com
            </a>
          </div>
          <nav aria-label="Footer sections" className="footer-nav">
            <h2>Explore</h2>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <nav aria-label="Code links" className="footer-nav">
            <h2>Code</h2>
            <a
              href="https://github.com/ogedengbewisdom"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </nav>
          <div className="footer-social">
            <SocialLinks className="footer-social-links" iconOnly />
            <WhatsAppLink className="footer-whatsapp" />
            <a className="back-to-top" href="#top">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
        <div className="site-footer-bottom">
          <span>
            {/* Built with React, TypeScript, Vinext, Tailwind CSS, and Cloudflare
            Workers. */}
          </span>
          <span>© 2026 Wisdom Ogedengbe</span>
        </div>
      </footer>
    </>
  );
}
