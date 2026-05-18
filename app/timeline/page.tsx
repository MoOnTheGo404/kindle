import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "A simple timeline showing how Kindle connects a patient story with a trained team, approved sharing, and private donor education."
};

const timelineSteps = [
  {
    label: "1",
    title: "Draft the story",
    description:
      "The patient answers three prompts and chooses what details are okay to include.",
    note: "Private first"
  },
  {
    label: "2",
    title: "Connect with a Story Studio team",
    description:
      "A trained team helps shape the draft into simple materials, such as a short story page, caption, or flyer text.",
    note: "Support with boundaries"
  },
  {
    label: "3",
    title: "Review and approve",
    description:
      "The patient checks the wording, privacy choices, and audience before anything is shared.",
    note: "Patient decides"
  },
  {
    label: "4",
    title: "Share with trusted circles",
    description:
      "The approved story can be shared with family, friends, or a community group.",
    note: "Warm sharing"
  },
  {
    label: "5",
    title: "Curious donors learn privately",
    description:
      "Anyone who wants to learn more is routed to pressure-free education and transplant-center contact information.",
    note: "No pressure"
  }
];

export default function TimelinePage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-spruce shadow-soft">
            Connection timeline
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-tight text-ink sm:text-6xl">
            The MVP connection flow.
          </h1>
          <p className="mt-5 text-xl leading-9 text-ink/68">
            A shorter view of how Kindle moves from patient story to
            supported sharing while keeping approval visible.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] bg-white/85 p-5 shadow-soft sm:p-8">
          <div className="relative">
            <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-clay/30 md:block" />
            <div className="grid gap-5">
              {timelineSteps.map((step) => (
                <article
                  key={step.title}
                  className="relative grid gap-4 rounded-[1.5rem] border border-spruce/10 bg-cream/80 p-5 md:grid-cols-[4rem_1fr_auto] md:items-center"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-blush text-xl font-bold text-spruce shadow-soft">
                    {step.label}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-spruce">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-ink/68">
                      {step.description}
                    </p>
                  </div>
                  <p className="rounded-full bg-white px-4 py-2 text-sm font-bold text-clay md:whitespace-nowrap">
                    {step.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] bg-spruce p-7 text-white shadow-glow sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold">The key idea</h2>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-white/78">
                Kindle keeps the patient in control while helping the story
                move from private draft to approved sharing.
              </p>
            </div>
            <LinkButton href="/start" variant="secondary">
              Start My Story
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
