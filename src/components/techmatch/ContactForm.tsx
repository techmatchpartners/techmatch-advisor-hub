import { useState, type FormEvent } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ArrowRightIcon, CheckIcon } from "./icons";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(100, "Name must be less than 100 characters."),
  company: z.string().trim().min(1, "Company is required.").max(120, "Company must be less than 120 characters."),
  email: z.string().trim().email("Enter a valid work email.").max(255, "Email must be less than 255 characters."),
  phone: z.string().trim().max(40, "Phone must be less than 40 characters.").optional(),
});

type FormValues = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status === "error") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const nextErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (typeof field === "string" && ["name", "company", "email", "phone"].includes(field)) {
          nextErrors[field as keyof FormValues] = issue.message;
        }
      });
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 500));
      setValues(initialValues);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="rounded-3xl border border-line bg-surface p-6 shadow-match sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          required
          value={values.name}
          error={errors.name}
          autoComplete="name"
          onChange={(value) => updateField("name", value)}
        />
        <Field
          id="company"
          label="Company"
          required
          value={values.company}
          error={errors.company}
          autoComplete="organization"
          onChange={(value) => updateField("company", value)}
        />
        <Field
          id="email"
          label="Work Email"
          required
          type="email"
          value={values.email}
          error={errors.email}
          autoComplete="email"
          onChange={(value) => updateField("email", value)}
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={values.phone ?? ""}
          error={errors.phone}
          autoComplete="tel"
          onChange={(value) => updateField("phone", value)}
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" variant="dark" size="xlPill" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Get a Match"}
          <ArrowRightIcon className="size-5" />
        </Button>
        <p className="text-sm text-foreground/60">A member of the TechMatch team will get in touch.</p>
      </div>

      {status === "success" ? (
        <div className="mt-5 flex gap-3 rounded-2xl border border-success/20 bg-success/10 p-4 text-sm text-success">
          <CheckIcon className="mt-0.5 size-4 shrink-0" />
          <p>Thanks. Your request is ready for the TechMatch team when a form backend is connected.</p>
        </div>
      ) : null}

      {status === "error" && Object.keys(errors).length > 0 ? (
        <p className="mt-5 rounded-2xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
          Please review the highlighted fields and try again.
        </p>
      ) : null}

      {status === "error" && Object.keys(errors).length === 0 ? (
        <p className="mt-5 rounded-2xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
          Something went wrong. Please email TechMatch directly and try again later.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  required = false,
  type = "text",
  value,
  error,
  autoComplete,
  onChange,
}: {
  id: keyof FormValues;
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  error?: string;
  autoComplete?: string;
  onChange: (value: string) => void;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label} {required ? <span className="text-accent">*</span> : <span className="text-foreground/45">optional</span>}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 h-12 rounded-2xl border-line bg-background px-4 text-base shadow-none"
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
