import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";

export default function PageShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      {children}
      <SiteFooter />
    </div>
  );
}
