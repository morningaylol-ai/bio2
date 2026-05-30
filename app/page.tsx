import { Cursor } from "@/components/Cursor";
import { Dashboard } from "@/components/Dashboard";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { Particles } from "@/components/Particles";
import { Preloader } from "@/components/Preloader";
import { Services } from "@/components/Services";
import { StackWall } from "@/components/StackWall";
import { Terminal } from "@/components/Terminal";
import { Workflow } from "@/components/Workflow";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040406] text-white">
      <Preloader />
      <Cursor />
      <Particles />

      <div className="relative z-10">
        <Hero />
        <Services />
        <Terminal />
        <Dashboard />
        <Workflow />
        <StackWall />
        <FinalCTA />
      </div>
    </main>
  );
}
