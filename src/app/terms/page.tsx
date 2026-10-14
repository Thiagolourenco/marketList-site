import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos de uso — MarketList",
  description: "Condições de uso do aplicativo MarketList.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="legal">
        <article className="legal-card">
          <p className="kicker-green">Termos</p>
          <h1>Termos de uso</h1>
          <p>Última atualização: 14 de outubro de 2026.</p>
          <p>
            Ao criar uma conta ou usar o MarketList, você concorda com estas condições. O aplicativo serve para organizar compras, planejar refeições e acompanhar receitas.
          </p>
          <h2>Uso da conta</h2>
          <p>
            A conta é pessoal. Você é responsável por manter o acesso seguro e pelo conteúdo que adiciona nas listas, preferências e receitas.
          </p>
          <h2>Assinatura</h2>
          <p>
            Recursos pagos, quando existirem, são contratados pela App Store. O preço, a renovação e o cancelamento seguem as regras da loja em que a compra foi feita.
          </p>
          <h2>Sugestões de receitas</h2>
          <p>
            Ideias geradas no aplicativo são um ponto de partida. Confira ingredientes, quantidades e o modo de preparo antes de cozinhar, principalmente se houver alergias ou restrições.
          </p>
          <h2>Disponibilidade</h2>
          <p>
            O MarketList pode receber ajustes, novas funções ou interrupções de manutenção. O uso do aplicativo não transfere a propriedade da marca, do visual ou do software.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
