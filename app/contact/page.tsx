import Link from "next/link";
import { Mail, Phone, User } from "lucide-react";
import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-white/10 bg-black/55 p-5 shadow-2xl shadow-black/20 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-500">Contact</p>
            <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">Get in touch</h1>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Reach out for support, feedback, or business inquiries.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-red-500" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Name</p>
                    <p className="font-semibold text-white">Karan Malakar</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-red-500" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Email</p>
                    <p className="font-semibold text-white">karanmalakar55@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-red-500" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Phone</p>
                    <p className="font-semibold text-white">6909211150</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/55 p-5 shadow-2xl shadow-black/20 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-500">Message</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Contact form</h2>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-red-500" placeholder="Your name" />
                <input className="rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-red-500" placeholder="Your email" type="email" />
              </div>
              <input className="rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-red-500" placeholder="Subject" />
              <textarea className="min-h-44 rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-red-500" placeholder="Write your message..." />
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-zinc-400">Success messages can be wired to your backend or form provider.</p>
                <button className="rounded-sm bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/profile" className="rounded-sm border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5">
            Profile
          </Link>
          <Link href="/privacy" className="rounded-sm border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5">
            Privacy
          </Link>
          <Link href="/terms" className="rounded-sm border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5">
            Terms
          </Link>
        </div>
      </main>
    </PageShell>
  );
}
