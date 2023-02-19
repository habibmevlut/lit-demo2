var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
let UserCardProfile = class UserCardProfile extends LitElement {
    constructor() {
        super(...arguments);
        this.src = '';
    }
    render() {
        return html `<img src="${this.src}" alt="">`;
    }
};
UserCardProfile.styles = css `
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
__decorate([
    property()
], UserCardProfile.prototype, "src", void 0);
UserCardProfile = __decorate([
    customElement('user-card-profile')
], UserCardProfile);
export { UserCardProfile };
//# sourceMappingURL=user-card-profile.js.map