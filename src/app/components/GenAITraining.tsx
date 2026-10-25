import Link from "next/link";
import { ArrowUpRight, BookOpen, Code2, Compass, Layers3 } from "lucide-react";
import "./gen-ai-training.css";

const paths = [
  { icon: BookOpen, audience: "For business professionals", title: "Work smarter with AI", description: "Build confidence with generative AI, write clearer prompts, and review outputs before putting them to work.", topics: "AI foundations · Prompting · Everyday workflows" },
  { icon: Code2, audience: "For developers & technical teams", title: "Turn ideas into applications", description: "Explore language models, retrieval-augmented generation, and the evaluation practices behind useful AI applications.", topics: "LLM fundamentals · RAG · Evaluation" },
  { icon: Compass, audience: "For leaders & decision-makers", title: "Lead informed AI adoption", description: "Identify relevant use cases, understand limitations, and plan adoption with responsible use and human oversight in mind.", topics: "Use-case discovery · Responsible AI · Adoption planning" },
];

export default function GenAITraining({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className={`genai-section${detailed ? " genai-section--detailed" : ""}`} id="generative-ai" aria-labelledby="genai-heading">
      <div className="site-container">
        <div className="genai-feature">
          <div className="genai-copy">
            <p className="genai-eyebrow"><span /> RV IT LEARNING / GENERATIVE AI</p>
            <h2 id="genai-heading">Understand AI.<br />Build with it.<br /><em>Make it matter.</em></h2>
            <p className="genai-description">Move from curiosity to practical capability. Generative AI training shaped around your people, their roles, and the work ahead.</p>
            <div className="genai-actions">
              <Link className="genai-primary" href="/generative-ai-training">View full training details<ArrowUpRight size={19} aria-hidden /></Link>
              <Link className="genai-secondary" href={detailed ? "#programs" : "/contactus?service=generative-ai-training"}>{detailed ? "Browse all training" : "Talk to our team"}<ArrowUpRight size={17} aria-hidden /></Link>
            </div>
          </div>
          <div className="genai-journey" aria-label="A practical learning journey">
            <div className="genai-journey-label"><Layers3 size={20} aria-hidden /><span>FROM UNDERSTANDING TO APPLICATION</span></div>
            <ol>
              <li><span className="genai-step">01</span><div><h3>Learn the foundations</h3><p>Models, prompts, and their limitations.</p></div></li>
              <li><span className="genai-step">02</span><div><h3>Practice with purpose</h3><p>Explore realistic tasks and use cases.</p></div></li>
              <li><span className="genai-step">03</span><div><h3>Apply with confidence</h3><p>Evaluate results. Keep people in control.</p></div></li>
            </ol>
            <p className="genai-journey-footer">Human judgment. AI capability. Better together.</p>
          </div>
        </div>
        {detailed && (
          <div className="genai-pathways">
            <div className="genai-pathways-heading"><h3>A starting point for every role.</h3><p>Discuss the right mix of topics for your team’s experience and goals.</p></div>
            <div className="genai-path-grid">
              {paths.map(({ icon: Icon, audience, title, description, topics }) => (
                <article className="genai-path" key={title}>
                  <Icon size={25} aria-hidden /><p className="genai-audience">{audience}</p><h4>{title}</h4><p>{description}</p><p className="genai-topics">{topics}</p>
                  <Link href="/contactus?service=generative-ai-training">Discuss this learning path <ArrowUpRight size={17} aria-hidden /></Link>
                </article>
              ))}
            </div>
            <div className="genai-tailored"><div><h3>Your team. Your context. Your learning plan.</h3><p>Tell us your team size, current experience, and priority use cases. We’ll discuss the scope, format, and schedule with you.</p></div><Link href="/contactus?service=generative-ai-training">Start a conversation <ArrowUpRight size={19} aria-hidden /></Link></div>
          </div>
        )}
      </div>
    </section>
  );
}
