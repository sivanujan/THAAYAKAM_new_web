import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow w-full">
        <Hero />
        <Portfolio />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
