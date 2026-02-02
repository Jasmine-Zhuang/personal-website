"use client";

import { useMemo, useState } from "react";
import { projects, projectTags } from "@/content/data/projects";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { AnchorButton } from "@/components/AnchorButton";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  locale: "en" | "zh";
  allLabel: string;
  githubLabel: string;
  demoLabel: string;
}

export function ProjectsGrid({
  locale,
  allLabel,
  githubLabel,
  demoLabel
}: ProjectsGridProps) {
  const [activeTag, setActiveTag] = useState<string>("all");

  const tagOptions = useMemo(() => {
    return [
      { key: "all", label: allLabel },
      ...projectTags.map((tag) => ({ key: tag.key, label: tag.label[locale] }))
    ];
  }, [allLabel, locale]);

  const filteredProjects = useMemo(() => {
    if (activeTag === "all") return projects;
    return projects.filter((project) => project.tagKeys.includes(activeTag));
  }, [activeTag]);

  return (
    <section className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        {tagOptions.map((tag) => (
          <button
            key={tag.key}
            onClick={() => setActiveTag(tag.key)}
            type="button"
            className={cn(
              "transition",
              activeTag === tag.key ? "" : "hover:-translate-y-0.5"
            )}
          >
            <Tag active={activeTag === tag.key}>{tag.label}</Tag>
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="flex h-full flex-col">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[var(--text)]">
                {project.title[locale]}
              </h3>
              <p
                className="text-sm leading-relaxed text-[var(--muted)]"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                }}
              >
                {project.description[locale]}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tagKeys.map((key) => {
                  const tag = projectTags.find((item) => item.key === key);
                  return <Tag key={key}>{tag?.label[locale]}</Tag>;
                })}
              </div>
            </div>
            {project.demoUrl || project.githubUrl ? (
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {project.demoUrl ? (
                  <AnchorButton href={project.demoUrl}>
                    <span className="flex items-center gap-2">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 3h7v7" />
                        <path d="M10 14L21 3" />
                        <path d="M21 14v7h-7" />
                        <path d="M3 10V3h7" />
                        <path d="M3 3l8 8" />
                      </svg>
                      {demoLabel}
                    </span>
                  </AnchorButton>
                ) : null}
                {project.githubUrl ? (
                  <AnchorButton href={project.githubUrl} variant="outline">
                    <span className="flex items-center gap-2">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-2c-3 .7-3.6-1.4-3.6-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.5-.6 1.9-1-.9-.1-1.9-.5-1.9-2.2 0-.5.2-1 .6-1.4-.1-.2-.3-.9.1-1.7 0 0 .5-.2 1.7.6.5-.1 1-.2 1.5-.2s1 .1 1.5.2c1.2-.8 1.7-.6 1.7-.6.4.8.2 1.5.1 1.7.4.4.6.9.6 1.4 0 1.7-1 2.1-1.9 2.2.2.2.4.6.4 1.2v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
                      </svg>
                      {githubLabel}
                    </span>
                  </AnchorButton>
                ) : null}
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
