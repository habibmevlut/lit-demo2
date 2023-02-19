var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
let UserCardFooter = class UserCardFooter extends LitElement {
    constructor() {
        super(...arguments);
        this.footer = '';
    }
    render() {
        return html `${this.footer}`;
    }
};
UserCardFooter.styles = css `
      :host {
        color: var(--user-card-footer-color, lightgray);
      }
    `;
__decorate([
    property()
], UserCardFooter.prototype, "footer", void 0);
UserCardFooter = __decorate([
    customElement('user-card-footer')
], UserCardFooter);
export { UserCardFooter };
//# sourceMappingURL=user-card-footer.js.map