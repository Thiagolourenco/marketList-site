import { Brand } from "./ui";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="identity">
          <Brand />
          <p>
            Mais organização nas compras.
            <br />
            Mais possibilidades na cozinha.
          </p>
        </div>
        <div className="sitemap">
          <div>
            <strong>Conheça o MarketList</strong>
            <a href="/#listas">Listas de compras</a>
            <a href="/#planejamento">Planejamento semanal</a>
            <a href="/#receitas">Receitas práticas</a>
          </div>
          <div>
            <strong>Saiba mais</strong>
            <a href="/#como-funciona">Como começar</a>
            <a href="/#perguntas">Perguntas frequentes</a>
            <a href="/privacy">Privacidade</a>
            <a href="/terms">Termos de uso</a>
          </div>
        </div>
      </div>
      <div className="credits">
        <p>© 2026 MarketList. Todos os direitos reservados.</p>
        <p>Português brasileiro</p>
      </div>
    </footer>
  );
}
