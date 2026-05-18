import { LinkButton } from "@/components/Button";
import { KidneyAnimation } from "@/components/KidneyAnimation";

const prompts = ["20 more years", "A day in your life", "Share anything"];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-spruce shadow-soft">
              A calm story workspace for transplant patients
            </p>
            <h1 className="mt-7 text-5xl font-bold leading-[1.04] text-ink sm:text-6xl lg:text-7xl">
              A gentler way to shape your story.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-ink/70 sm:text-2xl sm:leading-10">
              Kindle gives kidney transplant candidates three thoughtful
              prompts, a private draft space, and a clear approval step before
              anything is shared.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/start">Start My Story</LinkButton>
              <a
                href="#prompts"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-spruce transition hover:bg-white/70"
              >
                View prompts
              </a>
            </div>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink/55">
              Nothing is stored in this MVP. Nothing is shared without approval.
            </p>
            <div className="mt-8 rounded-[2rem] border border-spruce/10 bg-white/78 p-5 shadow-soft">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-clay">
                Built for easier storytelling
              </p>
              <p className="mt-2 text-xl font-bold leading-8 text-spruce">
                Prompts can be read aloud, and patients can record an answer
                with one click.
              </p>
            </div>
          </div>

          <div>
            <KidneyAnimation />
          </div>
        </div>
      </section>

      <section id="prompts" className="pb-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="rounded-[2rem] bg-white/80 p-5 shadow-soft sm:p-7">
            <div className="grid gap-4 md:grid-cols-3">
              {prompts.map((prompt, index) => (
                <article key={prompt} className="rounded-3xl bg-cream p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-clay">
                    Prompt {index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-spruce">{prompt}</h2>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Keep it private until ready",
              "Hear each prompt aloud",
              "Record an answer with one click",
              "Approve before sharing"
            ].map((item) => (
              <article key={item} className="rounded-3xl border border-spruce/10 bg-white/70 p-6">
                <p className="text-lg font-bold leading-7 text-ink">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
