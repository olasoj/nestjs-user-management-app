import { UserFilterRequest } from "./user.filter request";
import { UserPageRequest } from "./user.page request";

export class UserPaginateRequest {

    constructor() {
        this._userFilterRequest = new UserFilterRequest()
        this._userPageRequest = new UserPageRequest()
    }

    private _userPageRequest: UserPageRequest;

    private _userFilterRequest: UserFilterRequest;

    public get userFilterRequest(): UserFilterRequest {
        return this._userFilterRequest;
    }
    public set userFilterRequest(userFilterRequest: UserFilterRequest) {
        this._userFilterRequest = userFilterRequest;
    }

    public get userPageRequest(): UserPageRequest {
        return this._userPageRequest
    }
    public set userPageRequest(userPageRequest: UserPageRequest) {
        this._userPageRequest = userPageRequest;
    }
}