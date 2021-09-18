import { UserCreationRequest } from "../../request/user.creation.request";


export class UserCreationRequestBuilder {
    private readonly _userCreationRequest: UserCreationRequest;

    constructor() {
        this._userCreationRequest = new UserCreationRequest();
    }


    public email(email: string): UserCreationRequestBuilder {
        this._userCreationRequest.email = email;
        return this;
    }

    public fullName(fullName: string): UserCreationRequestBuilder {
        this._userCreationRequest.fullName = fullName;
        return this;
    }


    public username(username: string): UserCreationRequestBuilder {
        this._userCreationRequest.username = username;
        return this;
    }

    public workCategory(workCategory: string): UserCreationRequestBuilder {
        this._userCreationRequest.workCategory = workCategory;
        return this
    }


    public yearsOfExperience(yearsOfExperience: number): UserCreationRequestBuilder {
        this._userCreationRequest.yearsOfExperience = yearsOfExperience;
        return this;
    }


    public interest(interest: string): UserCreationRequestBuilder {
        this._userCreationRequest.interest = interest;
        return this;
    }

    build(): UserCreationRequest {
        return this._userCreationRequest;
    }
}