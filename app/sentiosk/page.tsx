import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"

const pillars = [
  {
    title: "Point of Sale",
    description:
      "Fast and reliable checkout software designed for retail counters, quick-service environments, and customer-first operations.",
  },
  {
    title: "Inventory & Operations",
    description:
      "Unified tools for stock visibility, product control, and daily operational workflows that keep teams aligned in real time.",
  },
  {
    title: "Business Intelligence",
    description:
      "Clear reporting across sales, product movement, and customer behavior so owners can make smarter day-to-day decisions.",
  },
]

export default function SentioskPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <section className="relative py-32 px-8 md:px-12 md:py-24 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">SENTIOSK</p>
            <Link
              href="/"
              className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
            >
              ← BACK HOME
            </Link>
          </div>

          <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            Sentiosk is a modern <span className="italic">Point of Sale company</span> building practical software for
            businesses that move fast.
          </h1>

          <p className="max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed">
            We focus on clean interfaces, reliable transaction flow, and connected operations from checkout to reporting.
            Sentiosk is designed to support teams that need speed at the counter and clarity in the back office.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                <h2 className="font-sans text-xl md:text-2xl font-light tracking-tight mb-3">{pillar.title}</h2>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
