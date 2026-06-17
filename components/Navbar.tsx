import { createSupabaseServerClient } from "@/lib/supabase/server";
import NavbarClient from "@/components/NavbarClient";

export default async function Navbar() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <NavbarClient isSignedIn={Boolean(user)} />;
}
