import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import Galeria from "./components/galeria";

const userLang = navigator.language || navigator.userLanguage;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <IntlProvider
    locale={userLang}
    messages={userLang.includes("es") ? localeEsMessages : localeEnMessages}
  >
    <Galeria></Galeria>
  </IntlProvider>
);

