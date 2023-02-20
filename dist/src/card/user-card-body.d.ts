import { LitElement } from "lit";
import { IUser } from "../feed/user-info.model";
export declare class UserCardBody extends LitElement {
    static styles: import("lit").CSSResult;
    body: IUser;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'user-card-body': UserCardBody;
    }
}
//# sourceMappingURL=user-card-body.d.ts.map