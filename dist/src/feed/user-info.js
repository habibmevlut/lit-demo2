var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from "lit";
import { customElement, property, state } from 'lit/decorators.js';
let UserInfo = class UserInfo extends LitElement {
    constructor() {
        super(...arguments);
        this.url = '';
        this._state = { posts: [] };
    }
    connectedCallback() {
        super.connectedCallback();
        this.fetchUserData();
    }
    render() {
        return html `${this._state.posts
            .map(user => {
            var _a, _b;
            const profileImage = user.image;
            const header = user.firstName + ' ' + user.lastName;
            const subHeader = user.university;
            const footer = 'The ' + (user === null || user === void 0 ? void 0 : user.firstName) + '  ' + (user === null || user === void 0 ? void 0 : user.lastName) + "is living in " + ((_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.city) + ' city and the detail address is ' + ((_b = user === null || user === void 0 ? void 0 : user.address) === null || _b === void 0 ? void 0 : _b.address);
            return html `
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
    async fetchUserData() {
        const url = this.url;
        const response = await fetch(url);
        const json = (await response.json());
        const posts = json.users;
        this._state = { posts };
    }
};
UserInfo.styles = css `
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
__decorate([
    property()
], UserInfo.prototype, "url", void 0);
__decorate([
    state()
], UserInfo.prototype, "_state", void 0);
UserInfo = __decorate([
    customElement('user-info')
], UserInfo);
export { UserInfo };
//# sourceMappingURL=user-info.js.map