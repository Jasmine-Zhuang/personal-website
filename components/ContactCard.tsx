"use client";

import { useState } from "react";

const iconClasses = "h-4 w-4 text-[var(--accent)]";

function MapPinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={iconClasses}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={iconClasses}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={iconClasses}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-2.9 19 19 0 0 1-5.9-5.9A19 19 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.6 2.6a2 2 0 0 1-.6 1.9l-1.3 1.3a16 16 0 0 0 6.6 6.6l1.3-1.3a2 2 0 0 1 1.9-.6l2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={iconClasses}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 7l-1.5 1.5" />
      <path d="M14 11a5 5 0 0 1 0 7l-2 2a5 5 0 0 1-7-7L6.5 11" />
    </svg>
  );
}

type ContactLabels = {
  reachOut: string;
  links: string;
  copyEmail: string;
  copied: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
};

type ContactCardProps = {
  labels: ContactLabels;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  ctaEmail: string;
};

export function ContactCard({
  labels,
  location,
  email,
  phone,
  github,
  linkedin,
  ctaEmail
}: ContactCardProps) {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1600);
    } catch {
      setEmailCopied(false);
    }
  };

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition backdrop-blur hover:-translate-y-0.5 hover:shadow-md dark:border-[var(--border)] dark:bg-[var(--surface)]">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-2)]">
              {labels.reachOut}
            </p>
            <div className="mt-3 space-y-3 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <MailIcon />
                <span className="font-medium text-[var(--text)]">
                  {labels.email}
                </span>
                <a className="transition hover:text-[var(--accent)]" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <span className="font-medium text-[var(--text)]">
                  {labels.phone}
                </span>
                <a className="transition hover:text-[var(--accent)]" href={`tel:${phone}`}>
                  {phone}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex h-10 items-center justify-center rounded-xl bg-[var(--primary)] px-5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            >
              {ctaEmail}
            </a>
            <button
              type="button"
              onClick={() => handleCopy(email)}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-[var(--chip-border)] bg-[var(--chip-bg)] px-5 text-sm font-medium text-[var(--chip-text)] transition hover:-translate-y-0.5 hover:bg-[var(--chip-border)] dark:border-[var(--chip-border)]"
            >
              {labels.copyEmail}
            </button>
            {emailCopied ? (
              <span className="text-xs font-medium text-[var(--accent)]">{labels.copied}</span>
            ) : null}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-2)]">
            {labels.links}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2 rounded-xl p-3 text-sm text-[var(--muted)] transition hover:bg-[var(--accent-soft)]">
              <MapPinIcon />
              <span className="font-medium text-[var(--text)]">
                {labels.location}
              </span>
              <span>{location}</span>
            </div>
            <a
              className="flex items-center justify-between rounded-xl p-3 text-sm text-[var(--muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex items-center gap-2">
                <LinkIcon />
                <span className="font-medium text-[var(--text)]">
                  {labels.github}
                </span>
              </span>
              <span className="text-xs text-[var(--muted-2)]">
                {github.replace("https://", "")}
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-xl p-3 text-sm text-[var(--muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex items-center gap-2">
                <LinkIcon />
                <span className="font-medium text-[var(--text)]">
                  {labels.linkedin}
                </span>
              </span>
              <span className="text-xs text-[var(--muted-2)]">
                {linkedin.replace("https://", "")}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
