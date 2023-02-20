import { LitElement } from "lit";
import { IUser } from "../feed/user-info.model";
export declare class UserCard extends LitElement {
    static styles: import("lit").CSSResult;
    profileImage: string;
    header: string;
    subHeader: string;
    body: IUser;
    footer: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'user-card': UserCard;
    }
}
//# sourceMappingURL=user-card.d.ts.map