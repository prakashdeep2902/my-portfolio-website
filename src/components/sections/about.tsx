"use client";

import { Calendar, FolderKanban, Layers, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  FadeIn,
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/fade-in";
import { aboutStats } from "@/lib/data";

const statIcons = {
  calendar: Calendar,
  "folder-kanban": FolderKanban,
  layers: Layers,
};

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Engineering with Purpose"
          description="Passionate about building products that scale"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
              <div className="relative h-full w-full rounded-2xl border border-border bg-card/80 backdrop-blur-xl flex flex-col items-center justify-center gap-4 overflow-hidden">
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <User className="h-16 w-16 text-white" />
                </div>
                <p className="text-sm text-muted font-mono">Professional Photo</p>
                <p className="text-xs text-muted/60">Replace with your image</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted leading-relaxed">
                Passionate Full Stack Engineer with experience building scalable
                SaaS platforms, AI-powered applications, automation systems,
                payment integrations, and cloud-native solutions.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Specialized in creating high-performance applications using
                React, Next.js, Node.js, TypeScript, MongoDB, and modern software
                architecture principles.
              </p>
            </div>
          </FadeIn>
        </div>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6 mt-16">
          {aboutStats.map((stat) => {
            const Icon =
              statIcons[stat.icon as keyof typeof statIcons] ?? Layers;
            return (
              <StaggerItem key={stat.label}>
                <Card className="group hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
