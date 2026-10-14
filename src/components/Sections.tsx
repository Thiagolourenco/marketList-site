import { Icon, Point, Cta } from "./ui";
import { AiScreen, HomeScreen, RecipeScreen, ShoppingListScreen, WeekPlanScreen } from "./screens";

export function Hero() {
  return (
    <section className="hero">
      <div className="promise">
        <p className="eyebrow">
          <Icon src="/assets/leaf.svg" />
          Uma rotina mais leve começa na cozinha
        </p>
        <h1>
          Menos improviso.
          <br />
          <em>
            Mais sabor no
            <br />
            seu dia a dia.
          </em>
        </h1>
        <p className="lede">
          Organize suas listas de compras, planeje as refeições da semana e descubra o que cozinhar com o que você já tem.
        </p>
        <div className="actions">
          <Cta href="#baixar">Conhecer o MarketList</Cta>
          <Cta href="#como-funciona" variant="ghost">
            Veja como funciona
          </Cta>
        </div>
        <div className="checks">
          <p className="check-line">
            <Icon src="/assets/check.svg" />
            Listas organizadas
          </p>
          <p className="check-line">
            <Icon src="/assets/check.svg" />
            Refeições planejadas
          </p>
        </div>
      </div>
      <div className="stage-wrap" aria-hidden="true">
        <div className="stage">
          <img className="blob" src="/assets/circle.svg" alt="" />
          <img className="orbit" src="/assets/orbit.svg" alt="" />
          <HomeScreen />
          <ShoppingListScreen hero />
          <div className="float-note">
            <Icon src="/assets/sprout.svg" />
            Da lista ao prato.
          </div>
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="benefits" id="recursos">
      <div className="center">
        <p className="kicker-green">Para a vida de todo dia</p>
        <h2>Sua cozinha, com menos complicação.</h2>
      </div>
      <div className="cards">
        <article className="benefit">
          <div className="symbol">
            <Icon src="/assets/list-checks-benefit.svg" />
          </div>
          <h3>Compras com mais clareza</h3>
          <p>Tudo o que você precisa, separado por categorias. Confira os itens enquanto faz suas compras.</p>
        </article>
        <article className="benefit">
          <div className="symbol">
            <Icon src="/assets/calendar-benefit.svg" />
          </div>
          <h3>Uma semana mais tranquila</h3>
          <p>Tenha suas refeições em um só lugar e tire o “o que vamos comer?” da lista de preocupações.</p>
        </article>
        <article className="benefit">
          <div className="symbol">
            <Icon src="/assets/pot.svg" />
          </div>
          <h3>Mais ideias para cozinhar</h3>
          <p>Encontre receitas práticas e novas possibilidades para aproveitar os ingredientes da sua cozinha.</p>
        </article>
      </div>
    </section>
  );
}

export function Lists() {
  return (
    <section className="feature" id="listas">
      <div className="demo mint">
        <ShoppingListScreen />
        <aside className="note top">
          <Icon src="/assets/list-filter.svg" />
          <div>
            <h3>Cada item no seu lugar</h3>
            <p>Organização por categorias</p>
          </div>
        </aside>
        <aside className="chip">
          <Icon src="/assets/circle-check.svg" />
          Pegou? É só marcar.
        </aside>
      </div>
      <div className="copy">
        <p className="kicker-green">Listas de compras</p>
        <h2>Vá ao mercado com tudo em mente. E na lista.</h2>
        <p className="body">
          Da compra da semana à reposição do que acabou: reúna os itens em uma lista fácil de consultar e acompanhe o que já foi para o carrinho.
        </p>
        <div className="points">
          <Point>Itens separados por categorias</Point>
          <Point>Quantidades sempre à vista</Point>
          <Point>Itens marcados e progresso da compra</Point>
        </div>
        <p className="aside">Uma lista clara para comprar com mais intenção.</p>
      </div>
    </section>
  );
}

export function Planning() {
  return (
    <section className="feature flip" id="planejamento">
      <div className="copy">
        <p className="kicker-green">Planejamento de refeições</p>
        <h2>A semana muda. Seu plano acompanha.</h2>
        <p className="body">
          Enxergue suas refeições com antecedência e encontre inspiração para o próximo preparo. O MarketList conecta o que você compra ao que vai para a mesa.
        </p>
        <Point>Um lugar para acompanhar o plano da semana</Point>
        <Point>Inspiração por IA a partir dos seus ingredientes</Point>
        <div className="hint">
          <Icon src="/assets/sparkles.svg" />
          <p>Uma ajuda para sair do óbvio, sem tirar de você a escolha do que cozinhar.</p>
        </div>
      </div>
      <div className="demo leaf">
        <div className="week-stage">
          <WeekPlanScreen />
          <AiScreen />
          <div className="ai-pill">
            <Icon src="/assets/sparkles-sm.svg" />
            Ideias para a sua semana
          </div>
        </div>
      </div>
    </section>
  );
}

export function Recipes() {
  return (
    <section className="feature" id="receitas">
      <div className="demo sand">
        <RecipeScreen />
        <aside className="recipe-card">
          <p className="tag">
            <Icon src="/assets/chef-hat.svg" />
            DO APP PARA A MESA
          </p>
          <h3>Frango assado com limão e ervas</h3>
          <p>45 min • Para começar</p>
        </aside>
      </div>
      <div className="copy">
        <p className="kicker-green">Receitas práticas</p>
        <h2>Do “o que fazer?” ao “ficou uma delícia”.</h2>
        <p className="body">
          Ingredientes, tempo de preparo e instruções em um só lugar. Encontre uma receita para o seu dia e acompanhe cada etapa com mais confiança.
        </p>
        <Point>Ingredientes e quantidades bem definidos</Point>
        <Point>Modo de preparo para acompanhar na cozinha</Point>
        <Point>Dicas de IA para aproveitar o que você tem</Point>
        <p className="emphasis">Menos dúvida. Mais vontade de cozinhar.</p>
      </div>
    </section>
  );
}

export function Pantry() {
  return (
    <section className="pantry">
      <div className="pantry-card">
        <img className="table" src="/assets/table.png" alt="Mesa com salada e um caderno de planejamento da semana" />
        <div className="pantry-copy">
          <p className="kicker-green">Aproveite o que já tem</p>
          <h2>A próxima boa ideia pode estar na sua geladeira.</h2>
          <p className="body">
            Olhe para os ingredientes de um jeito novo. Use a inspiração por IA e as dicas das receitas para combinar o que você já tem e evitar compras desnecessárias.
          </p>
          <div className="flow">
            <span>Ingredientes</span>
            <Icon src="/assets/arrow-green.svg" />
            <span>Inspiração</span>
            <Icon src="/assets/arrow-green.svg" />
            <span>Receita</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Comece pela sua lista", "Dê um nome à compra e adicione os ingredientes e as quantidades de que precisa."],
  ["02", "Pense nas refeições", "Acompanhe seu planejamento e explore ideias para cozinhar durante a semana."],
  ["03", "Leve o plano para a cozinha", "Escolha uma receita, confira os ingredientes e siga o modo de preparo."],
];

export function Start() {
  return (
    <section className="start" id="como-funciona">
      <div className="center">
        <p className="kicker-green">Como começar</p>
        <h2>Uma rotina nova. Um passo de cada vez.</h2>
      </div>
      <div className="guide">
        <div className="vision">
          <img src="/assets/composition.png" alt="Telas do MarketList com listas, plano semanal e receita" />
          <p>Listas, planejamento e receitas: uma visão do MarketList.</p>
        </div>
        <div className="steps">
          {steps.map(([n, title, text]) => (
            <article className="step" key={n}>
              <div className="num">{n}</div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Finale() {
  return (
    <section className="finale">
      <div className="invite">
        <div className="invite-copy">
          <p className="kicker-green">DA COMPRA À PRIMEIRA GARFADA</p>
          <h2>Dê mais leveza à sua próxima semana.</h2>
          <p className="body">Sua lista, suas refeições e novas ideias. Tudo começa com o MarketList.</p>
          <Cta href="#baixar">Conhecer o MarketList</Cta>
        </div>
        <div className="routine" aria-hidden="true">
          <Icon src="/assets/pot-lg.svg" />
          <div className="routine-badge">
            <Icon src="/assets/check-lg.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}

const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL;

export function Download() {
  return (
    <section className="download" id="baixar">
      <div className="center">
        <p className="kicker-green">Baixe agora</p>
        <h2>Leve o MarketList para a sua rotina.</h2>
        <p className="body">
          Baixe o aplicativo e organize suas compras, planeje as refeições e encontre receitas práticas em um só lugar.
        </p>
      </div>
      <a className="store" href={appStoreUrl || "#baixar"}>
        <span className="apple">
          <Icon src="/assets/apple.svg" />
        </span>
        Baixar na App Store
      </a>
    </section>
  );
}
