"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

/** Netlify Forms with Next.js must POST to the static HTML file, not "/". */
const NETLIFY_FORM_ACTION = "/netlify-forms.html";

export function QuoteForm() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const formData = new FormData(e.target as HTMLFormElement);

      const response = await fetch(NETLIFY_FORM_ACTION, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(Array.from(formData.entries()) as [string, string][]).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      router.push("/thank-you");
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="quote-request"
      method="POST"
      action={NETLIFY_FORM_ACTION}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="quote-form"
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="quote-form-grid">
        <div className="quote-field">
          <label className="quote-field-label" htmlFor="quote-name">
            Name
          </label>
          <input
            className="quote-field-input"
            type="text"
            id="quote-name"
            name="name"
            placeholder="Your name"
            required
            autoComplete="name"
          />
        </div>

        <div className="quote-field">
          <label className="quote-field-label" htmlFor="quote-email">
            Email
          </label>
          <input
            className="quote-field-input"
            type="email"
            id="quote-email"
            name="email"
            placeholder="Where to send your quote"
            required
            autoComplete="email"
          />
        </div>

        <div className="quote-field">
          <label className="quote-field-label" htmlFor="quote-location">
            Location
          </label>
          <input
            className="quote-field-input"
            type="text"
            id="quote-location"
            name="location"
            placeholder="City, State/Province, Country"
            required
            autoComplete="address-level2"
          />
        </div>

        <div className="quote-field">
          <label className="quote-field-label" htmlFor="quote-decks">
            Number of Decks
          </label>
          <select
            className="quote-field-input quote-field-select"
            id="quote-decks"
            name="number-of-decks"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose quantity
            </option>
            <option value="50-99">50 – 99 decks</option>
            <option value="100-249">100 – 249 decks</option>
            <option value="250-499">250 – 499 decks</option>
            <option value="500+">500+ decks</option>
          </select>
        </div>

        <div className="quote-field">
          <label className="quote-field-label" htmlFor="quote-cards">
            Cards Per Deck
          </label>
          <input
            className="quote-field-input"
            type="number"
            id="quote-cards"
            name="cards-per-deck"
            placeholder="e.g. 78"
            min={1}
            max={200}
            required
          />
        </div>

        <div className="quote-field quote-field-full">
          <label className="quote-field-label" htmlFor="quote-message">
            Message / Project Details
          </label>
          <textarea
            className="quote-field-input quote-field-textarea"
            id="quote-message"
            name="message"
            placeholder="Tell us about your deck — theme, artwork status, timeline, tuck box artwork…"
            rows={5}
          />
        </div>
      </div>

      <button type="submit" className="quote-form-submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Request a Quote"}
      </button>

      {error && (
        <p className="quote-form-error" role="alert">
          Something went wrong. Please try again or email hello@tarotdeckprinting.com.
        </p>
      )}
    </form>
  );
}
