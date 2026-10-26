import { contact } from "./site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: { name?: string; email?: string; message?: string };
  values?: { name: string; email: string; message: string };
  token: number;
};

export const INITIAL_CONTACT_STATE: ContactState = { status: "idle", token: 0 };

export const CONTACT_SUCCESS =
  "Thanks — your message is in. I'll reply within a couple of days.";

const CONTACT_FAILED =
  "Couldn't send your message. Please try again, or email me directly.";

export const MAX_MESSAGE = 5000;

const MAX_NAME = 100;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactState["values"] & {}): ContactState["errors"] {
  const errors: ContactState["errors"] = {};

  if (!values.name) errors.name = "Name is required";
  else if (values.name.length > MAX_NAME) errors.name = "Name is too long";

  if (!values.email) errors.email = "Email is required";
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = "Invalid email address";

  if (!values.message) errors.message = "Message is required";
  else if (values.message.length > MAX_MESSAGE) errors.message = "Message is too long";

  return errors;
}

export async function submitMessage(
  prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim().toLowerCase(),
    message: String(formData.get("message") ?? "").trim(),
  };

  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success", message: CONTACT_SUCCESS, token: prev.token + 1 };
  }

  const errors = validate(values);
  if (errors && Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Have a look at the fields below.",
      errors,
      values,
      token: prev.token,
    };
  }

  try {
    const response = await fetch(contact.leadsEndpoint, {
      method: "POST",
      body: JSON.stringify(values),
    });
    const result: { ok?: boolean } = await response.json();
    if (!result.ok) throw new Error("Lead was not saved");
  } catch {
    return { status: "error", message: CONTACT_FAILED, values, token: prev.token };
  }

  return { status: "success", message: CONTACT_SUCCESS, token: prev.token + 1 };
}
