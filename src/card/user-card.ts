import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IUser } from "../feed/user-info.model";

@customElement('user-card')
export class UserCard extends LitElement {
    static override styles = css`
      :host {
        display: flex;
        background-color: var(--user-info-card-background-color);
        border: var(--user-info-card-border);
        border-radius: var(--user-info-card-border-radius);
      }

      .right {
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `;

    @property()
    profileImage = '';

    @property()
    header = '';

    @property()
    subHeader = '';

    @property()
    body: IUser = {};

    @property()
    footer = '';

    override render() {
        return html`
            <div class="left">
                <user-card-profile .src="${this.profileImage}"></user-card-profile>
            </div>

            <div class="right">
                <user-card-header .header="${this.header}" .subHeader="${this.subHeader}"></user-card-header>
                <user-card-body .body="${this.body}"></user-card-body>
                <user-card-footer .footer="${this.footer}"></user-card-footer>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        // @ts-ignore
        'user-card': UserCard;
    }
}

