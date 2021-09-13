export class UserCreationRequest {

    private _email: string;

    private _fullName: string;

    private _username: string;

    private _yearsOfExperience: number;

    private _workCategory: string;

    private _interest: string;


    public get email(): string {
        return this._email;
    }
    public set email(email: string) {
        this._email = email;
    }

    public get interest(): string {
        return this._interest;
    }
    public set interest(interest: string) {
        this._interest = interest;
    }

    public get fullName(): string {
        return this._fullName;
    }
    public set fullName(fullName: string) {
        this._fullName = fullName;
    }

    public get username() {
        return this._username;
    }
    public set username(username: string) {
        this._username = username;
    }

    public get workCategory() {
        return this._workCategory;
    }
    public set workCategory(workCategory: string) {
        this._workCategory = workCategory;
    }

    public get yearsOfExperience() {
        return this._yearsOfExperience;
    }
    public set yearsOfExperience(yearsOfExperience: number) {
        this._yearsOfExperience = yearsOfExperience;
    }



}
