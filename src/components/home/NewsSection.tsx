import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const articles = [
  { date: "Mar 2026", title: "New Citation CJ4 Added to Training Fleet", excerpt: "Expanding our jet training capabilities with the latest Cessna Citation CJ4." },
  { date: "Feb 2026", title: "FAA Approves Advanced Upset Recovery Program", excerpt: "Our pioneering upset recovery training program receives full FAA certification." },
  { date: "Jan 2026", title: "2025 Graduates Achieve 98% Pass Rate", excerpt: "Another record-breaking year for our commercial pilot license candidates." },
];

const NewsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Journal" title="Aviation News" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-sm p-6 hover:border-stratosphere/30 transition-all duration-500 cursor-pointer group"
            >
              <span className="text-stratosphere text-xs tracking-[0.2em]">{article.date}</span>
              <h3 className="font-display text-sm text-foreground mt-3 mb-3 group-hover:text-stratosphere transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
              <span className="text-stratosphere text-xs tracking-wider inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                READ MORE <ArrowRight className="w-3 h-3" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
