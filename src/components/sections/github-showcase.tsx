"use client";

import { useMemo } from "react";
import {
  Folder,
  GitCommit,
  GitPullRequest,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FadeIn,
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/fade-in";
import { githubStats, topTechnologies } from "@/lib/data";

const statIconMap = {
  folder: Folder,
  star: Star,
  "git-commit": GitCommit,
  "git-pull-request": GitPullRequest,
};

function contributionColor(i: number): string {
  const v = (Math.sin(i * 12.9898) * 43758.5453) % 1;
  const n = v < 0 ? v + 1 : v;
  if (n > 0.7) return "rgba(20, 184, 166, 0.9)";
  if (n > 0.5) return "rgba(59, 130, 246, 0.7)";
  if (n > 0.3) return "rgba(59, 130, 246, 0.35)";
  return "rgba(255,255,255,0.05)";
}

export function GitHubShowcase() {
  const cells = useMemo(
    () => Array.from({ length: 52 * 7 }, (_, i) => contributionColor(i)),
    []
  );

  return (
    <section id="github" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="GitHub"
          title="Open Source Activity"
          description="Consistent contributions and collaborative development"
        />

        <FadeIn>
          <Card className="mb-12 overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 border-b border-border">
                <h3 className="font-semibold text-foreground mb-1">
                  Contribution Activity
                </h3>
                <p className="text-sm text-muted">
                  Connect GitHub API for live contribution graph
                </p>
              </div>
              <div className="p-6 grid grid-cols-[repeat(52,minmax(0,1fr))] gap-[3px] max-w-full overflow-x-auto">
                {cells.map((color, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-sm min-w-[8px]"
                    style={{ backgroundColor: color }}
                    aria-hidden
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {githubStats.map((stat) => {
            const Icon =
              statIconMap[stat.icon as keyof typeof statIconMap] ?? Folder;
            return (
              <StaggerItem key={stat.label}>
                <Card className="text-center hover:border-primary/30 transition-all hover:shadow-glow group">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted mt-1">{stat.label}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Most Used Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {topTechnologies.map((tech, i) => (
                  <Badge
                    key={tech}
                    variant={i % 2 === 0 ? "default" : "secondary"}
                    className="text-sm px-4 py-1.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
