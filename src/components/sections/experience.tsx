"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn, SectionHeading } from "@/components/effects/fade-in";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Building impactful software across diverse engineering roles"
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {experience.map((item, index) => (
            <FadeIn key={item.title + item.period} delay={index * 0.15}>
              <div
                className={`relative flex gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <motion.div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-primary shadow-glow z-10"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Briefcase className="h-4 w-4 text-primary" />
                </motion.div>

                <div className="ml-16 md:ml-0 md:w-1/2">
                  <motion.div
                    className="rounded-xl border border-border bg-card/80 backdrop-blur-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
                    whileHover={{ x: index % 2 === 0 ? 4 : -4 }}
                  >
                    <span className="text-xs font-mono text-secondary mb-2 block">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {item.company}
                    </p>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
