import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('user-card-profile')
export class UserCardProfile extends LitElement {
    static override styles = css`
      :host {
        display: flex;
      }

      img {
        height: var(--user-profile-height, 220px);
        width: var(--user-profile-width, 330px);
        border-top-left-radius: var(--user-profile-border-left-radius);
        border-bottom-left-radius: var(--user-profile-border-left-radius);
        border-top-right-radius: var(--user-profile-border-right-radius);
        border-bottom-right-radius: var(--user-profile-border-right-radius);
        object-fit: cover;
      }
    `;
    @property()
    src = '';

    protected override render(): unknown {
        return html`<img src="${this.src}" alt="">`
    }
}

declare global {
    interface HTMLElementTagNameMap {
        // @ts-ignore
        'user-card-profile': UserCardProfile;
    }
}
