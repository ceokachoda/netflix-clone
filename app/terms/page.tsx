import Link from "next/link";
import PageShell from "@/components/PageShell";

const sections = [
  {
    title: "Service Usage",
    body: "This app is a Netflix-inspired demo built for browsing, account access, and profile management.",
  },
  {
    title: "User Responsibilities",
    body: "Users should keep their credentials private, respect the platform, and avoid misuse of authentication features.",
  },
  {
    title: "Disclaimer",
    body: "Content, trailer embeds, and images are for demo purposes. Availability and third-party availability may change.",
  },
  {
    title: "Contact Information",
    body: "Questions about terms can be sent to karanmalakar55@gmail.com or through the contact page.",
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-white/10 bg-black/55 p-5 shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-500">Terms of Service</p>
          <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">Terms and usage</h1>
          <div className="mt-6 grid gap-4">
            {sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8">
                <h2 className="text-lg font-bold text-white">{section.title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{section.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-sm bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-700">
              Contact
            </Link>
            <Link href="/privacy" className="rounded-sm border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5">
              Privacy
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
