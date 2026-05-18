"use client";

import { useState } from "react";
import { ActionButton } from "@/components/Button";
import { KidneyAnimation } from "@/components/KidneyAnimation";

const prompts = [
  {
    title: "What can you do with 20 more years of life?",
    helper:
      "Think about family, work, community, travel, ordinary routines, or the moments you want more time for."
  },
  {
    title: "Film or write a day in your life.",
    helper:
      "Describe a normal day. What is harder because of kidney disease? What still brings comfort or joy?"
  },
  {
    title: "Share anything.",
    helper:
      "Add anything you want people to understand. You can keep this private, edit it later, or skip it."
  }
];

const privacyOptions = [
  {
    title: "First name",
    description: "Use only my first name."
  },
  {
    title: "Age range",
    description: "Share an age range instead of exact age."
  },
  {
    title: "Photo",
    description: "Include a patient-approved photo."
  },
  {
    title: "Family details",
    description: "Mention family, caregiving, or future hopes."
  },
  {
    title: "Diagnosis journey",
    description: "Share basic health story details."
  },
  {
    title: "Dialysis experience",
    description: "Include how treatment affects daily life."
  },
  {
    title: "Location or community",
    description: "Mention city, church, school, workplace, or group."
  },
  {
    title: "Transplant center",
    description: "Show official contact information for questions."
  }
];

const approvalChecklist = [
  "I reviewed every word",
  "I chose who can see it",
  "I know I can keep it private",
  "Donation education stays pressure-free"
];

export default function StartPage() {
  const [promptModes, setPromptModes] = useState<("idle" | "type" | "record")[]>(
    prompts.map(() => "idle")
  );
  const [readingPrompt, setReadingPrompt] = useState<number | null>(null);
  const [recordingPrompt, setRecordingPrompt] = useState<number | null>(null);
  const [selectedPrivacy, setSelectedPrivacy] = useState<string[]>([
    "First name",
    "Family details",
    "Transplant center"
  ]);

  function togglePrivacy(option: string) {
    setSelectedPrivacy((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
    );
  }

  function readPrompt(index: number) {
    const prompt = prompts[index];
    setReadingPrompt(index);

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(
        `${prompt.title}. ${prompt.helper}`
      );
      utterance.rate = 0.86;
      utterance.onend = () => setReadingPrompt(null);
      utterance.onerror = () => setReadingPrompt(null);
      window.speechSynthesis.speak(utterance);
      return;
    }

    globalThis.setTimeout(() => setReadingPrompt(null), 1600);
  }

  function toggleRecording(index: number) {
    setPromptModes((current) =>
      current.map((mode, modeIndex) =>
        modeIndex === index
          ? recordingPrompt === index
            ? "idle"
            : "record"
          : modeIndex === recordingPrompt
            ? "idle"
            : mode
      )
    );
    setRecordingPrompt((current) => (current === index ? null : index));
  }

  function chooseTyping(index: number) {
    setRecordingPrompt((current) => (current === index ? null : current));
    setPromptModes((current) =>
      current.map((mode, modeIndex) => (modeIndex === index ? "type" : mode))
    );
  }

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-spruce shadow-soft">
              Private draft space
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-tight text-ink sm:text-6xl">
              Tell the story at your pace.
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-9 text-ink/68">
              Three prompts. One calm workspace. You decide what stays private
              and what becomes shareable.
            </p>
          </div>
          <div className="hidden lg:block">
            <KidneyAnimation />
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-spruce/10 bg-white/88 p-5 shadow-soft sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-clay">
                Step 1
              </p>
              <h2 className="mt-2 text-3xl font-bold text-spruce">
                Pick what is okay to include.
              </h2>
              <p className="mt-1 text-base leading-7 text-ink/62">
                Pick only the details you are comfortable sharing. Everything
                can be changed before approval.
              </p>
            </div>
            <div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {privacyOptions.map((choice) => (
                  <label
                    key={choice.title}
                    className={`focus-ring flex cursor-pointer gap-3 rounded-2xl border px-4 py-4 transition ${
                      selectedPrivacy.includes(choice.title)
                        ? "border-clay bg-blush shadow-soft"
                        : "border-spruce/10 bg-cream/80 hover:bg-sage"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="mt-1 h-5 w-5 rounded border-spruce/30 accent-clay"
                      checked={selectedPrivacy.includes(choice.title)}
                      onChange={() => togglePrivacy(choice.title)}
                    />
                    <span>
                      <span className="block text-base font-bold text-ink">
                        {choice.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-ink/62">
                        {choice.description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5">
          {prompts.map((prompt, index) => (
            <article
              key={prompt.title}
              className="rounded-[2rem] border border-spruce/10 bg-white/82 p-5 shadow-soft sm:p-6"
            >
              <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
                <div className="min-w-0">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-clay">
                    Prompt {index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-spruce sm:text-3xl">
                    {prompt.title}
                  </h2>
                  <p className="mt-3 text-lg leading-8 text-ink/62">
                    {prompt.helper}
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-3 lg:w-[25rem]">
                  <button
                    type="button"
                    onClick={() => readPrompt(index)}
                    className={`focus-ring rounded-full px-4 py-3 text-base font-bold transition ${
                      readingPrompt === index
                        ? "bg-blush text-ink"
                        : "bg-cream text-spruce hover:bg-sage"
                    }`}
                  >
                    {readingPrompt === index ? "Reading prompt..." : "Read prompt"}
                  </button>
                  <button
                    type="button"
                    onClick={() => chooseTyping(index)}
                    className={`focus-ring rounded-full px-4 py-3 text-base font-bold transition ${
                      promptModes[index] === "type"
                        ? "bg-blush text-ink"
                        : "bg-cream text-spruce hover:bg-sage"
                    }`}
                  >
                    Type
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleRecording(index)}
                    className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-bold transition ${
                      promptModes[index] === "record"
                        ? "bg-clay text-white"
                        : "bg-spruce text-white hover:bg-teal"
                    }`}
                    aria-pressed={promptModes[index] === "record"}
                  >
                    <span
                      className={`h-3 w-3 rounded-full ${
                        promptModes[index] === "record" ? "animate-pulse bg-white" : "bg-blush"
                      }`}
                    />
                    {promptModes[index] === "record" ? "Recording" : "Record"}
                  </button>
                </div>
              </div>

              {promptModes[index] === "type" ? (
                <div className="mt-5">
                  <textarea
                    className="min-h-36 w-full rounded-[1.5rem] border border-spruce/10 bg-cream/80 p-5 text-lg leading-8 text-ink outline-none transition focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/15"
                    placeholder="Start typing your answer here..."
                  />
                </div>
              ) : null}

              {promptModes[index] === "record" ? (
                <div className="mt-5 rounded-2xl border border-clay/25 bg-blush px-5 py-4 text-base font-bold text-ink">
                  Recording is active for this prompt. Tap Record again to stop.
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <section className="mt-8 rounded-[2rem] bg-spruce p-6 text-white shadow-glow sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">
                Approval
              </p>
              <h2 className="mt-3 text-3xl font-bold">Ready when you are.</h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-white/78">
                This draft can stay private, be edited again, or become a
                patient-approved story link for trusted people.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-lg font-bold">Before sharing</p>
              <div className="mt-4 grid gap-3">
                {approvalChecklist.map((item) => (
                  <label key={item} className="flex items-center gap-3 text-white/88">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-white/40 accent-amber"
                      defaultChecked
                    />
                    <span className="text-base font-semibold">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <ActionButton type="button" variant="secondary">
                Approve
              </ActionButton>
              <ActionButton type="button" variant="outline">
                Keep private
              </ActionButton>
              <ActionButton type="button" variant="ghost" className="text-white hover:bg-white/10">
                Edit more
              </ActionButton>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
