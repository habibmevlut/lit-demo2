import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IUser } from "../feed/user-info.model";

@customElement('user-card')
export class UserCard extends LitElement {
    static override styles = css`
      :host {
        display: flex;
        background-color: var(--user-card-background-color, white);
        border: var(--user-card-border, solid 1px lightgray);
        border-radius: var(--user-card-border-radius, 3px);
      }

      .right {
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      user-card-profile {
        --medium-profile-height: var(--user-card-height);
        --medium-profile-border-left-radius: var(--user-card-border-radius);
      }

      user-card-header {
        --medium-header-color: var(--user-card-header-color);
      }

      user-card-body {
        --medium-body-color: var(--user-card-body-color);
      }

      user-card-footer {
        --medium-footer-color: var(--user-card-footer-color);
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
        'user-card': UserCard;
    }
}

