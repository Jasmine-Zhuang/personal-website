"use client";

import { useState } from "react";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/Button";

interface ContactFormProps {
  labels: {
    formTitle: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    errorRequired: string;
    errorEmail: string;
  };
}

export function ContactForm({ labels }: ContactFormProps) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: { [key: string]: string } = {};

    if (!values.name.trim()) nextErrors.name = labels.errorRequired;
    if (!values.email.trim()) {
      nextErrors.email = labels.errorRequired;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      nextErrors.email = labels.errorEmail;
    }
    if (!values.message.trim()) nextErrors.message = labels.errorRequired;

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const updateField = (field: "name" | "email" | "message", value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    if (submitted) setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold text-[var(--text)] dark:text-[var(--text)]">
        {labels.formTitle}
      </h3>
      <div className="space-y-2">
        <label className="text-xs font-medium text-[var(--muted-2)]" htmlFor="name">
          {labels.name}
        </label>
        <Input
          id="name"
          name="name"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="text-xs text-red-500">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label className="text-xs font-medium text-[var(--muted-2)]" htmlFor="email">
          {labels.email}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="text-xs text-red-500">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label className="text-xs font-medium text-[var(--muted-2)]" htmlFor="message">
          {labels.message}
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-red-500">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="flex items-center gap-4">
        <Button type="submit">{labels.submit}</Button>
        {submitted ? (
          <p className="text-sm text-[var(--accent)]">{labels.success}</p>
        ) : null}
      </div>
    </form>
  );
}
