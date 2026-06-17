import { Suspense } from "react";
import AuthCard from "@/components/AuthCard";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function SignupPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-[#050505] px-4 pt-24 text-white sm:px-6">
      <Suspense
        fallback={
          <div className="mx-auto max-w-md rounded border border-white/10 bg-black/60 p-6 text-zinc-300">
            Loading signup...
          </div>
        }
      >
        <AuthCard mode="signup" />
      </Suspense>
    </div>
  );
}
