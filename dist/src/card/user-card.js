var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
let UserCard = class UserCard extends LitElement {
    constructor() {
        super(...arguments);
        this.profileImage = '';
        this.header = '';
        this.subHeader = '';
        this.body = {};
        this.footer = '';
    }
    render() {
        return html `
            <div class="left">
                <user-card-profile .src="${this.profileImage}"></user-card-profile>
            </div>

            <div class="right">
                <user-card-header .header="${this.header}" .subHeader="${this.subHeader}"></user-card-header>
                <user-card-body .body="${this.body}"></user-card-body>
                <user-card-footer .footer="${this.footer}"></user-card-footer>
            </div>
        `;
    }
};
UserCard.styles = css `
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
__decorate([
    property()
], UserCard.prototype, "profileImage", void 0);
__decorate([
    property()
], UserCard.prototype, "header", void 0);
__decorate([
    property()
], UserCard.prototype, "subHeader", void 0);
__decorate([
    property()
], UserCard.prototype, "body", void 0);
__decorate([
    property()
], UserCard.prototype, "footer", void 0);
UserCard = __decorate([
    customElement('user-card')
], UserCard);
export { UserCard };
//# sourceMappingURL=user-card.js.map