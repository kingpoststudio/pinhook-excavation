import { LitElement, html, css, unsafeCSS } from "lit";
import { property, state, queryAssignedElements } from "lit/decorators.js";
import { createRef, ref } from "lit-html/directives/ref.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

export type Width = "no-max" | "full" | "wide" | "snug" | "narrow" | "tight";

export type Padding =
  | "none"
  | "sm"
  | "base"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type Gap =
  | "none"
  | "sm"
  | "base"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type Alignment = "center" | "start" | "end";

declare global {
  interface Window {
    Lit: {
      LitElement: typeof LitElement;
      html: typeof html;
      css: typeof css;
      property: typeof property;
      state: typeof state;
      queryAssignedElements: typeof queryAssignedElements;
      unsafeCSS: typeof unsafeCSS;
      unsafeHTML: typeof unsafeHTML;
      createRef: typeof createRef;
      ref: typeof ref;
      ifDefined: typeof ifDefined;
      styleMap: typeof styleMap;
    };
  }
}

window.Lit = {
  LitElement,
  html,
  css,
  unsafeCSS,
  property,
  state,
  queryAssignedElements,
  unsafeHTML,
  createRef,
  ref,
  ifDefined,
  styleMap,
};
