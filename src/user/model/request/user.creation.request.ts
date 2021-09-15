import { IsEmail, IsNotEmpty, IsString, IsNumber, } from 'class-validator';

export class UserCreationRequest {

    @IsEmail()
    @IsNotEmpty()
    private _email: string;

    @IsNotEmpty()
    @IsString()
    private _fullName: string;

    @IsNotEmpty()
    @IsString()
    private _username: string;

    @IsNotEmpty()
    @IsNumber()
    private _yearsOfExperience: number;

    @IsNotEmpty()
    @IsString()
    private _workCategory: string;

    @IsNotEmpty()
    @IsString()
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
