var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
let UserCardHeader = class UserCardHeader extends LitElement {
    constructor() {
        super(...arguments);
        this.header = '';
        this.subHeader = '';
    }
    render() {
        return html `
            <h2>${this.header}</h2>
            <h3>${this.subHeader}</h3>
        `;
    }
};
UserCardHeader.styles = css `
      :host {
        flex-grow: 1;
        color: var(--medium-header-color);
      }

      h2, h3 {
        margin: 0;
      }
    `;
__decorate([
    property()
], UserCardHeader.prototype, "header", void 0);
__decorate([
    property()
], UserCardHeader.prototype, "subHeader", void 0);
UserCardHeader = __decorate([
    customElement('user-card-header')
], UserCardHeader);
export { UserCardHeader };
//# sourceMappingURL=user-card-header.js.map