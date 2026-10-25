import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { createPageMetadata } from "../seo";
import "./training.css";

const description = "Hands-on Generative AI training with real-time projects at RV IT Consulting. Explore AI foundations, prompting, RAG, AI applications, and responsible AI practices.";
const baseMetadata = createPageMetadata("Generative AI Training with Real-Time Projects", description, "/generative-ai-training");
export const metadata = {
  ...baseMetadata,
  openGraph: { ...baseMetadata.openGraph, images: [{ url: "/assets/media/gen-ai-training-poster.png", width: 1536, height: 1024, alt: "RV IT Consulting Generative AI Training" }] },
  twitter: { ...baseMetadata.twitter, images: ["/assets/media/gen-ai-training-poster.png"] },
};

const modules = [
  ["AI & LLM foundations", "Understand generative AI, language models, capabilities, limitations, and how to choose an appropriate use case."],
  ["Prompt engineering", "Practice clear instructions, context, examples, structured outputs, and iterative improvements."],
  ["Building AI applications", "Explore model APIs, application workflows, error handling, and the basics of connecting AI to software."],
  ["RAG & document intelligence", "Learn how document preparation, embeddings, retrieval, and source references support knowledge-based assistants."],
  ["AI workflows & agents", "Explore tool use, multi-step tasks, human approval, and the boundaries of automation."],
  ["Evaluation & responsible use", "Check output quality, handle sensitive information, recognize unreliable answers, and consider cost and latency."],
];
const projects = [
  ["Document Q&A assistant", "Build a prototype that answers questions from sample documents and points users to supporting sources.", "Practice: document preparation, retrieval, grounded responses."],
  ["Customer-support copilot", "Create a workflow that categorizes sample enquiries and drafts responses for human review.", "Practice: prompt design, structured output, approval steps."],
  ["Business workflow assistant", "Turn sample meeting notes into summaries, action items, and draft follow-ups, then evaluate the results.", "Practice: multi-step workflows, evaluation, useful outputs."],
];
const faqs = [
  ["Who is this training for?", "Professionals, developers, analysts, and corporate teams who want to apply generative AI to practical work. The learning plan is adapted to the audience and its goals."],
  ["Do I need coding experience?", "Foundations and business-use topics can be approached without coding. Application-building and RAG projects benefit from basic Python or JavaScript and familiarity with APIs. We discuss prerequisites before planning your training."],
  ["What does real-time project training include?", "Hands-on work through realistic scenarios: define a problem, build a prototype, test the outputs, and review improvements. The examples above illustrate possible projects; the final project scope is agreed for your program. Exercises can use sample or approved data rather than confidential production data."],
  ["What are the duration, fees, and schedule?", "These depend on your starting level, selected topics, project scope, and team size. Contact RV IT for a proposed learning plan, current availability, delivery options, and a quotation."],
  ["Which tools will we use?", "Tools and model platforms are selected to match the agreed learning objectives. Required accounts, software, and any paid API access will be discussed before the program starts."],
  ["Can the program be tailored to our company?", "Yes. Share your team’s roles, existing skills, technology stack, and priority use cases so we can discuss relevant modules and project exercises."],
];

export default function GenerativeAITrainingPage() {
  return (
    <div className="ai-course">
      <section className="site-container ai-course-hero">
        <div><Link className="ai-course-back" href="/corporate-trainings">Learning / Generative AI</Link><p className="ai-course-label">LEARN. BUILD. APPLY.</p>
          <h1>Generative AI training.<br /><em>Real-time projects.</em></h1>
          <p className="ai-course-lead">Build practical AI skills through hands-on learning and real-time projects. Move from understanding the concepts to building, testing, and improving useful applications.</p>
          <Link className="ai-course-button" href="/contactus?service=generative-ai-training">Enquire about training <ArrowUpRight size={19} aria-hidden /></Link>
        </div>
        <Image src="/assets/media/gen-ai-training-poster.webp" width={1536} height={1024} alt="RV IT Consulting Generative AI Training. Practical skills for professionals and teams. AI foundations, prompting, and real-world applications." priority sizes="(max-width: 900px) 100vw, 45vw" />
      </section>
      <nav className="site-container ai-course-nav" aria-label="Training page sections"><a href="#curriculum">What you’ll learn</a><a href="#projects">Real-time projects</a><a href="#approach">How training works</a><a href="#questions">FAQs</a></nav>
      <section className="site-container ai-course-section" id="curriculum">
        <p className="ai-course-label">THE LEARNING PLAN</p><h2>From foundations to application.</h2><p className="ai-course-intro">A flexible curriculum for business and technical audiences. Topics and depth are selected around your experience and goals.</p>
        <div className="ai-course-grid">{modules.map(([title, body], i) => <article key={title}><span className="ai-course-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className="ai-course-projects" id="projects"><div className="site-container ai-course-section">
        <p className="ai-course-label">LEARNING THROUGH DOING</p><h2>Real-time projects.<br /><em>Practical experience.</em></h2><p className="ai-course-intro">Apply what you learn to a working prototype. Project examples can be adapted to your role, skill level, and agreed training scope.</p>
        <div className="ai-course-grid">{projects.map(([title, body, skills]) => <article key={title}><h3>{title}</h3><p>{body}</p><p className="ai-course-skills">{skills}</p></article>)}</div>
      </div></section>
      <section className="site-container ai-course-section" id="approach"><p className="ai-course-label">YOUR PATH TO PRACTICE</p><h2>A clear journey from idea to prototype.</h2>
        <ol className="ai-course-steps">{[["Align", "Discuss your experience, goals, and use cases."], ["Learn", "Build the foundations through guided concepts and exercises."], ["Build", "Apply the learning to an agreed project scenario."], ["Review", "Evaluate results, identify limitations, and plan improvements."]].map(([title, body]) => <li key={title}><h3>{title}</h3><p>{body}</p></li>)}</ol>
      </section>
      <section className="site-container ai-course-section ai-course-faq" id="questions"><h2>Before you get started.</h2>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
      <section className="site-container ai-course-contact"><div><h2>Let’s plan your Gen AI training.</h2><p>Tell us your experience, team size, and what you’d like to build.</p></div><Link className="ai-course-button" href="/contactus?service=generative-ai-training">Request training details <ArrowUpRight size={19} aria-hidden /></Link></section>
    </div>
  );
}
