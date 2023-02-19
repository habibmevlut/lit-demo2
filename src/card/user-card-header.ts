import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement('user-card-header')
export class UserCardHeader extends LitElement {

    static override styles = css`
      :host {
        flex-grow: 1;
        color: var(--medium-header-color);
      }

      h2, h3 {
        margin: 0;
      }
    `;

    @property()
    header = '';
    @property()
    subHeader = '';

    override render() {
        return html`
            <h2>${this.header}</h2>
            <h3>${this.subHeader}</h3>
        `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'user-card-header': UserCardHeader;
    }
}
