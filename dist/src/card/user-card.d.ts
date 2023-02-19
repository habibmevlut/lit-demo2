import { LitElement } from "lit";
export declare class UserCard extends LitElement {
    static styles: import("lit").CSSResult;
    profileImage: string;
    header: string;
    subheader: string;
    body: string;
    footer: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'user-card': UserCard;
    }
}
//# sourceMappingURL=user-card.d.ts.map