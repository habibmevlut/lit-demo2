import { LitElement } from "lit";
export declare class UserInfo extends LitElement {
    static styles: import("lit").CSSResult;
    url: string;
    private _state;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private fetchUserData;
}
declare global {
    interface HTMLElementTagNameMap {
        'user-info': UserInfo;
    }
}
//# sourceMappingURL=user-info.d.ts.map