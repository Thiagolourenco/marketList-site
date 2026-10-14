"use client";

import { useState } from "react";
import { Icon } from "./ui";

const questions = [
  {
    q: "O que posso organizar no MarketList?",
    a: "Suas listas de compras, o planejamento das refeições da semana e as receitas que você quer preparar. Tudo pensado para conectar as compras à rotina da cozinha.",
  },
  {
    q: "Como as listas de compras ficam organizadas?",
    a: "Os itens entram separados por categorias, com a quantidade ao lado de cada um. Enquanto você compra, marca o que já pegou e acompanha o progresso da lista.",
  },
  {
    q: "A IA pode ajudar a decidir o que cozinhar?",
    a: "Sim. A inspiração por IA parte dos ingredientes que você já tem e sugere ideias para a semana. A escolha do que cozinhar continua sendo sua.",
  },
  {
    q: "Preciso saber cozinhar para usar as receitas?",
    a: "Não. Cada receita traz ingredientes, tempo de preparo e um modo de preparo para acompanhar na cozinha, inclusive opções para quem está começando.",
  },
  {
    q: "Onde encontro informações sobre os planos?",
    a: "Os detalhes dos planos ficam no aplicativo, na área de assinatura. Lá você vê o que está incluído e escolhe o que faz sentido para a sua rotina.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="perguntas">
      <div className="faq-intro">
        <p className="kicker-green">Perguntas frequentes</p>
        <h2>Antes de começar.</h2>
        <p>Respostas para conhecer o MarketList e entender como ele pode fazer parte da sua rotina.</p>
      </div>
      <div className="questions">
        {questions.map((item, index) => {
          const isOpen = open === index;
          return (
            <article className={isOpen ? "faq-item open" : "faq-item"} key={item.q}>
              <button
                className="faq-q"
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                {item.q}
                <Icon src={isOpen ? "/assets/minus.svg" : "/assets/plus.svg"} />
              </button>
              {isOpen ? <p className="faq-a">{item.a}</p> : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
