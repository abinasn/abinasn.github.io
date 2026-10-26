import { LoaderCircle } from "lucide-react";
import { useActionState, useState } from "react";

import { buttonBase, buttonVariants } from "@/components/ui/ButtonLink";
import {
  INITIAL_CONTACT_STATE,
  MAX_MESSAGE,
  submitMessage,
  type ContactState,
} from "@/lib/contact";
import { contact, contactSection } from "@/lib/site";

const LABEL =
  "text-ink-muted font-mono text-[10.5px] tracking-[1.2px] uppercase";

const FIELD =
  "border-line bg-paper placeholder:text-placeholder focus:border-accent focus:ring-accent/25 w-full rounded-[10px] border px-4 py-3 text-[15px] transition-colors focus:ring-2 focus:outline-none aria-[invalid=true]:border-hard";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitMessage,
    INITIAL_CONTACT_STATE,
  );
  const errors = pending ? undefined : state.errors;

  return (
    <form key={state.token} action={formAction} noValidate className="mt-9">
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          name="name"
          label="Name"
          placeholder="Your name"
          autoComplete="name"
          defaultValue={state.values?.name}
          error={errors?.name}
        />
        <Field
          name="email"
          label="Email"
          type="email"
          placeholder="name@company.com"
          autoComplete="email"
          defaultValue={state.values?.email}
          error={errors?.email}
        />
        <MessageField
          defaultValue={state.values?.message}
          error={errors?.message}
        />
      </div>

      <div className="mt-7 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          aria-busy={pending}
          className={`${buttonBase} ${buttonVariants.solid} inline-flex items-center gap-2 disabled:pointer-events-none disabled:opacity-60`}
        >
          {pending && (
            <LoaderCircle size={15} aria-hidden className="animate-spin" />
          )}
          {pending ? "Sending…" : contactSection.submit}
        </button>

        <a
          href={`mailto:${contact.email}`}
          className="text-ink-muted hover:text-accent font-mono text-[12px] transition-colors"
        >
          {contact.email}
        </a>
      </div>

      {!pending && <StatusLine state={state} />}
    </form>
  );
}

function Field({
  name,
  label,
  error,
  ...input
}: {
  name: string;
  label: string;
  error?: string;
} & React.ComponentProps<"input">) {
  return (
    <div>
      <label htmlFor={name} className={LABEL}>
        {label}
      </label>
      <input
        {...input}
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${FIELD} mt-2.5`}
      />
      <FieldError name={name} error={error} />
    </div>
  );
}

function MessageField({
  defaultValue = "",
  error,
}: {
  defaultValue?: string;
  error?: string;
}) {
  const [length, setLength] = useState(defaultValue.length);

  return (
    <div className="md:col-span-2">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor="message" className={LABEL}>
          Message
        </label>
        <span className="text-ink-muted font-mono text-[10.5px]">
          {length} / {MAX_MESSAGE}
        </span>
      </div>
      <textarea
        id="message"
        name="message"
        rows={5}
        maxLength={MAX_MESSAGE}
        placeholder="What's on your mind?"
        defaultValue={defaultValue}
        onChange={(e) => setLength(e.target.value.length)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? "message-error" : undefined}
        className={`${FIELD} mt-2.5 resize-y`}
      />
      <FieldError name="message" error={error} />
    </div>
  );
}

function FieldError({ name, error }: { name: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${name}-error`} className="text-hard mt-1.5 text-[12.5px]">
      {error}
    </p>
  );
}

function StatusLine({ state }: { state: ContactState }) {
  const failed = state.status === "error";

  return (
    <p
      role={failed ? "alert" : "status"}
      aria-live={failed ? "assertive" : "polite"}
      className={`mt-4 text-[13.5px] empty:mt-0 ${failed ? "text-hard" : "text-accent"}`}
    >
      {state.status === "idle" ? "" : state.message}
    </p>
  );
}
