"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Folder, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/fade-in";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Production-grade systems built with modern engineering practices"
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full overflow-hidden group hover:border-primary/30 hover:shadow-glow transition-all duration-300">
                  <div
                    className={cn(
                      "relative h-48 bg-gradient-to-br border-b border-border flex items-center justify-center",
                      project.gradient,
                    )}
                  >
                    <Folder className="h-16 w-16 text-white/20 group-hover:text-white/40 transition-colors" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 gap-3">
                    {project.github && (
                      <Button variant="secondary" size="sm" asChild>
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
