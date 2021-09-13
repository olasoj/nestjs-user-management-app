import { UserCreationRequest } from "../../request/user.creation.request";
import { UserResponse } from "../../response/user.response";


export class UserResponseBuilder {
    private readonly _userResponse: UserResponse;

    constructor() {
        this._userResponse = new UserResponse();
    }


    public email(email: string): UserResponseBuilder {
        this._userResponse.email = email;
        return this;
    }

    public fullName(fullName: string): UserResponseBuilder {
        this._userResponse.fullName = fullName;
        return this;
    }


    public username(username: string): UserResponseBuilder {
        this._userResponse.username = username;
        return this;
    }

    public workCategory(workCategory: string): UserResponseBuilder {
        this._userResponse.workCategory = workCategory;
        return this
    }


    public yearsOfExperience(yearsOfExperience: number): UserResponseBuilder {
        this._userResponse.yearsOfExperience = yearsOfExperience;
        return this;
    }


    public interest(interest: string): UserResponseBuilder {
        this._userResponse.interest = interest;
        return this;
    }

    build(): UserResponse {
        return this._userResponse;
    }
}