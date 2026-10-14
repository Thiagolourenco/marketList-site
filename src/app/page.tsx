import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Benefits, Download, Finale, Hero, Lists, Pantry, Planning, Recipes, Start } from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Benefits />
        <Lists />
        <Planning />
        <Recipes />
        <Pantry />
        <Start />
        <Faq />
        <Finale />
        <Download />
      </main>
      <Footer />
    </>
  );
}
