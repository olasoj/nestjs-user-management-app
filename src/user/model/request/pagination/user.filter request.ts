export class UserFilterRequest {

    constructor() { }

    private _workCategory: string = null;

    private _interest: string = null;

    public get interest(): string {
        return this._interest;
    }
    public set interest(interest: string) {
        this._interest = interest;
    }

    public get workCategory() {
        return this._workCategory;
    }
    public set workCategory(workCategory: string) {
        this._workCategory = workCategory;
    }
}
