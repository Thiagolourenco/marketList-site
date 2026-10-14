import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacidade — MarketList",
  description: "Como o MarketList trata os dados da sua conta, das suas listas e do planejamento de refeições.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal">
        <article className="legal-card">
          <p className="kicker-green">Privacidade</p>
          <h1>Política de privacidade</h1>
          <p>Última atualização: 14 de outubro de 2026.</p>
          <p>
            O MarketList organiza listas de compras, planejamento de refeições e receitas. Esta página descreve quais dados o aplicativo usa e para quê.
          </p>
          <h2>Dados da conta</h2>
          <p>
            Para entrar, você pode usar e-mail e senha ou o login com Google ou Apple. Guardamos o identificador da conta, o nome e o e-mail para manter a sessão e o perfil.
          </p>
          <h2>O que você cria no app</h2>
          <p>
            Listas, itens, preferências alimentares, planos da semana e receitas ficam associados à sua conta para que você continue de onde parou.
          </p>
          <h2>Serviços usados</h2>
          <p>
            A conta e os dados do app ficam no Supabase. Assinaturas passam pela App Store e pelo RevenueCat. Sugestões de receitas podem ser geradas com um serviço de IA a partir dos ingredientes e das preferências que você informa.
          </p>
          <h2>Seus controles</h2>
          <p>
            Você pode editar o perfil, as preferências e o conteúdo das listas dentro do aplicativo. Para pedir a exclusão da conta ou tirar uma dúvida sobre estes dados, escreva para o suporte do MarketList.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
