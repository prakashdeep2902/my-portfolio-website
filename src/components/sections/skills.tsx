"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/effects/fade-in";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="A comprehensive toolkit for modern full stack development"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat, index) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeCategory === index
                  ? "bg-primary text-white shadow-glow"
                  : "bg-card/60 border border-border text-muted hover:text-foreground hover:bg-white/5"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="max-w-3xl mx-auto hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle className="text-center text-primary">
                  {skillCategories[activeCategory].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {skillCategories.map((cat) => (
            <Card
              key={cat.title}
              className="hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 border border-border text-muted"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
