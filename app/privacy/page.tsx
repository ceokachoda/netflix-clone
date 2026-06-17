import Link from "next/link";
import PageShell from "@/components/PageShell";

const sections = [
  {
    title: "Data Collection",
    body: "We collect the minimum account data needed to authenticate users, remember sessions, and personalize the experience.",
  },
  {
    title: "Cookies",
    body: "Cookies are used for authentication, session persistence, and route protection. We do not rely on them for ad tracking.",
  },
  {
    title: "Security",
    body: "Sessions are managed with Supabase and protected routes to reduce unauthorized access.",
  },
  {
    title: "User Rights",
    body: "You can access, update, or request deletion of your account data by contacting support.",
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-white/10 bg-black/55 p-5 shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-500">Privacy Policy</p>
          <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">Privacy and data use</h1>
          <div className="mt-6 grid gap-4">
            {sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8">
                <h2 className="text-lg font-bold text-white">{section.title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{section.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-zinc-400">
            Contact information: karanmalakar55@gmail.com
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-sm bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-zinc-200">
              Contact
            </Link>
            <Link href="/terms" className="rounded-sm border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5">
              Terms
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
