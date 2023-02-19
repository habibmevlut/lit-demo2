var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
let UserCardBody = class UserCardBody extends LitElement {
    constructor() {
        super(...arguments);
        this.body = {};
    }
    render() {
        var _a;
        return html `
            <span><b>Age</b>: ${this.body.age}</span><br>
            <span><b>Email Address</b>: ${this.body.email}</span><br>
            <span><b>Phone</b>: ${this.body.phone}</span><br>
            <span><b>Hair Color</b>: ${(_a = this.body.hair) === null || _a === void 0 ? void 0 : _a.color}</span>
        `;
    }
};
UserCardBody.styles = css `
      :host {
        flex-grow: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--medium-body-color);
      }
    `;
__decorate([
    property()
], UserCardBody.prototype, "body", void 0);
UserCardBody = __decorate([
    customElement('user-card-body')
], UserCardBody);
export { UserCardBody };
//# sourceMappingURL=user-card-body.js.map