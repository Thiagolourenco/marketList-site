"use client";

import { useState } from "react";
import { Brand, Cta } from "./ui";

const links = [
  { href: "#recursos", label: "Recursos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#perguntas", label: "Perguntas frequentes" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <Brand />
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
      </button>
      <nav className={open ? "nav open" : "nav"}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <Cta href="#baixar">Conhecer o MarketList</Cta>
      </nav>
    </header>
  );
}
