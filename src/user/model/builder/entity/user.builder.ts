
import { User } from "../../entity/user.entity";

export class UserBuilder {
    private readonly _user: User;

    constructor() {
        this._user = new User();
    }


    public email(email: string): UserBuilder {
        this._user.email = email;
        return this;
    }

    public fullName(fullName: string): UserBuilder {
        this._user.fullName = fullName;
        return this;
    }


    public username(username: string): UserBuilder {
        this._user.username = username;
        return this;
    }

    public workCategory(workCategory: string): UserBuilder {
        this._user.workCategory = workCategory;
        return this
    }


    public yearsOfExperience(yearsOfExperience: number): UserBuilder {
        this._user.yearsOfExperience = yearsOfExperience;
        return this;
    }


    public interest(interest: string): UserBuilder {
        this._user.interest = interest;
        return this;
    }

    build(): User {
        return this._user;
    }
}