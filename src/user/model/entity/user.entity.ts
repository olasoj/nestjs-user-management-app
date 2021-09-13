import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import { v4 } from 'uuid';

@Entity({ name: "user" })
export class User {

    @PrimaryColumn('uuid')
    private _id: string;

    @CreateDateColumn({ name: "created_date", nullable: false })
    private _createdDate: Date;

    @UpdateDateColumn({ name: "updated_date", nullable: true })
    private _updatedDate: Date;

    @Column({ type: "varchar", length: 255, unique: true, name: "email", nullable: false })
    private _email: string;

    @Column({ name: "full_name", nullable: false })
    private _fullName: string;

    @Column({ name: "Username", nullable: false })
    private _username: string;

    @Column({ name: "years_of_experience", nullable: false })
    private _yearsOfExperience: Number;

    @Column({ name: "interest", nullable: false })
    private _interest: string;

    @Column({ name: "work_category", nullable: true })
    private _workCategory: string;


    @BeforeInsert()
    addId() {
        this._id = v4();
    }




    public get id(): string {
        return this._id;
    }
    public set id(id: string) {
        this._id = id;
    }

    public get email(): string {
        return this._email;
    }
    public set email(email: string) {
        this._email = email;
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

    public get createdDate(): Date {
        return this._createdDate;
    }
    public set createdDate(createdDate: Date) {
        this._createdDate = createdDate;
    }

    public get updatedDate(): Date {
        return this._updatedDate;
    }
    public set updatedDate(updatedDate: Date) {
        this._updatedDate = updatedDate;
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
    public set yearsOfExperience(yearsOfExperience: Number) {
        this._yearsOfExperience = yearsOfExperience;
    }

    public get interest(): string {
        return this._interest;
    }
    public set interest(interest: string) {
        this._interest = interest;
    }
}