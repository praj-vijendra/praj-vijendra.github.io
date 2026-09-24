import React from "react";
import "./App.css";

const areas = [
  {
    number: "01",
    title: "Personalization",
    description:
      "Learning from preferences, behavior, and feedback to adapt how AI responds to each person.",
  },
  {
    number: "02",
    title: "Memory & context",
    description:
      "Persistent memory, entity resolution, and context management for agents that work across conversations and longer tasks.",
  },
  {
    number: "03",
    title: "Evaluation",
    description:
      "Measuring agent behavior, learning from production feedback, and comparing quality, latency, and cost.",
  },
  {
    number: "04",
    title: "Retrieval & grounding",
    description:
      "Hybrid search, reranking, and source attribution to connect generated answers to relevant evidence.",
  },
  {
    number: "05",
    title: "Agent systems",
    description:
      "Agent architecture, tool use, orchestration, and recovery across multi-step workflows.",
  },
  {
    number: "06",
    title: "Model training & fine-tuning",
    description:
      "Adapting models to specific tasks, along with the data pipelines, training workflows, and monitoring that support them.",
  },
];
const experience = [
  {
    company: "Sybill",
    role: "Staff AI Engineer",
    dates: "Aug 2025 — Present",
    current: true,
    description:
      "Agent architecture, evaluations, retrieval, personalization, and task automation.",
  },
  {
    company: "Clarify Health",
    role: "Staff Data Scientist · ML & Gen AI",
    dates: "Jun 2022 — Aug 2025",
    description:
      "Generative AI, healthcare modeling, and large-scale ML pipelines.",
  },
  {
    company: "Wells Fargo",
    role: "Quantitative Analytics Specialist · ML",
    dates: "Jul 2020 — May 2022",
    description:
      "Predictive modeling, feature engineering, and data drift monitoring.",
  },
  {
    company: "Carta Healthcare",
    role: "Data Science Intern",
    dates: "Jun 2019 — Aug 2019",
    description:
      "Clinical text processing, knowledge graphs, and patient registry automation.",
  },
];
function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}
function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header shell" id="top">
        <a className="wordmark" href="#top" aria-label="Prajwal Vijendra, home">
          pv<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="main">
        <section className="hero shell" aria-labelledby="intro-heading">
          <div className="hero-copy">
            <h1 id="intro-heading">
              Prajwal
              <br />
              <em>Vijendra.</em>
            </h1>
            <p className="hero-intro">
              I build AI agents and the systems behind them.
            </p>
            <p className="hero-description">
              Currently at{" "}
              <a href="https://www.sybill.ai/" target="_blank" rel="noreferrer">
                Sybill
              </a>
              , working on agents, memory, and evaluation. Previously, machine
              learning and AI at Clarify Health and Wells Fargo.
            </p>
            <a className="text-link hero-link" href="#work">
              Areas of work <span aria-hidden="true">↓</span>
            </a>
          </div>
          <figure className="portrait">
            <div className="portrait-frame">
              <img
                src={`${process.env.PUBLIC_URL}/praj.jpg`}
                alt="Prajwal Vijendra"
                width="1440"
                height="960"
                fetchpriority="high"
              />
            </div>
            <figcaption>
              <span>Prajwal Vijendra</span>
              <span>SF, CA</span>
            </figcaption>
          </figure>
        </section>
        <section
          className="work-section shell section"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <h2 id="work-heading">Areas I’ve worked in</h2>
            <span className="section-note">
              Across AI engineering and machine learning
            </span>
          </div>
          <div className="areas-grid">
            {areas.map((area) => (
              <article className="area" key={area.number}>
                <span className="area-number" aria-hidden="true">
                  {area.number}
                </span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="about-section shell section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="about-intro">
            <p className="eyebrow">A bit about me</p>
            <h2 id="about-heading">
              An engineer,
              <br />
              with a data science
              <br />
              <em>background.</em>
            </h2>
            <p>
              I’ve worked across healthcare, finance, and now AI for sales
              teams. My work spans the underlying data pipelines, the models,
              and the product people actually use.
            </p>
            <p>Outside work: chess, tennis, and Formula 1.</p>
          </div>
          <div className="background">
            <h3 className="eyebrow">Experience</h3>
            <ol className="experience-list">
              {experience.map((job) => (
                <li key={job.company}>
                  <div className="job-heading">
                    <h4>{job.company}</h4>
                    {job.current && (
                      <span className="current-label">Current</span>
                    )}
                  </div>
                  <p className="job-role">{job.role}</p>
                  <p className="job-dates">{job.dates}</p>
                  <p className="job-description">{job.description}</p>
                </li>
              ))}
            </ol>
            <p className="earlier-experience">
              Earlier: software engineering at Oracle Health (formerly Cerner)
              and Tata Consultancy Services, 2015–2018.
            </p>
            <div className="education">
              <h3 className="eyebrow">Education</h3>
              <p>
                <strong>Duke University</strong>
                <br />
                MS, Data Science · 2020
              </p>
              <p>
                <strong>Dr. Ambedkar Institute of Technology</strong>
                <br />
                BS, Mechanical Engineering · 2014
              </p>
            </div>
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="shell contact-inner">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 id="contact-heading">Say hello.</h2>
            </div>
            <div className="contact-links">
              <a
                className="email-link"
                href="mailto:prajwal.vijendra@gmail.com"
              >
                prajwal.vijendra@gmail.com <Arrow />
              </a>
              <div className="social-links">
                <a
                  href="https://linkedin.com/in/prajwal-vijendra"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Arrow />
                </a>
                <a
                  href="https://github.com/praj-vijendra"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <span>© {new Date().getFullYear()} Prajwal Vijendra</span>
        <span>San Francisco, California</span>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
export default App;
