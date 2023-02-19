import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('user-card-footer')
export class UserCardFooter extends LitElement {
    static override styles = css`
      :host {
        color: var(--user-card-footer-color, lightgray);
      }
    `;

    @property()
    footer = '';

    override render() {
        return html`${this.footer}`;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'user-card-footer': UserCardFooter;
    }
}
