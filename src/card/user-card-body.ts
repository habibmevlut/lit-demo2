import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IUser } from "../feed/user-info.model";

@customElement('user-card-body')
export class UserCardBody extends LitElement {
    static override styles = css`
      :host {
        flex-grow: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--medium-body-color);
      }
    `;

    @property()
    body: IUser = {};

    override render() {
        return html`
            <span><b>Age</b>: ${this.body.age}</span><br>
            <span><b>Email Address</b>: ${this.body.email}</span><br>
            <span><b>Phone</b>: ${this.body.phone}</span><br>
            <span><b>Hair Color</b>: ${this.body.hair?.color}</span>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'user-card-body': UserCardBody;
    }
}
