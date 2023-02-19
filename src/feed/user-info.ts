import { html, css, LitElement } from "lit";
import { customElement, property, state } from 'lit/decorators.js';
import { IUser } from "./user-info.model";

@customElement('user-info')
export class UserInfo extends LitElement {
    static override styles = css`
      :host {
        display: flex;
        flex-direction: column;
      }

      user-card {
        cursor: pointer;
        --user-card-height: var(--user-card-height);
        --user-card-border: var(--user-card-border);
        --user-card-border-radius: var(--user-card-border-radius);
        --user-card-background-color: var(--user-card-background-color);
        --user-card-header-color: var(--user-card-header-color);
        --user-card-body-color: var(--user-card-body-color);
        --user-card-footer-color: var(--user-card-footer-color);
      }
    `;
    @property()
    url = '';


    @state()
    private _state: { posts: IUser[] } = {posts: []};

    override connectedCallback() {
        super.connectedCallback();
        this.fetchUserData();
    }

    override render() {
        return html`${this._state.posts
                .map(user => {
                    const profileImage = user.image;
                    const header = user.firstName + ' ' + user.lastName;
                    const subHeader = user.university;
                    const footer = 'The ' + user?.firstName + '  ' + user?.lastName + "is living in " + user?.address?.city + ' city and the detail address is ' + user?.address?.address
                    return html`
                        <user-card
                                .header="${header}"
                                .subHeader="${subHeader}"
                                .profileImage="${profileImage}"
                                .body="${user}"
                                .footer="${footer}">
                        </user-card>
                        <br>
                    `;
                })}
        `;
    }

    private async fetchUserData() {
        const url = this.url;
        const response = await fetch(url);
        const json = (await response.json()) as UserResponse;
        const posts = json.users;
        this._state = {posts};
    }
}

interface UserResponse {
    users: IUser[];
}

declare global {
    interface HTMLElementTagNameMap {
        // @ts-ignore
        'user-info': UserInfo;
    }
}
