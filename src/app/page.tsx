import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import HowToBuy from "@/components/HowToBuy";
import Vote from "@/components/Vote";
import Biography from "@/components/Biography";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-custom-deep-dark">
      <Header />
      <Hero />
      <Vote />
      <HowToBuy />
      <Socials />
      <Biography />
      <Footer />
    </main>
  );
}
