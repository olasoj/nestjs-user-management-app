export class UserPageRequest {
    constructor() { }


    private _pageNumber: number = 1;

    private _pageSize: number = 20;

    public get pageSize(): number {
        return this._pageSize;
    }
    public set pageSize(pageSize: number) {
        this._pageSize = pageSize;
    }

    public get pageNumber() {
        return this._pageNumber;
    }
    public set pageNumber(pageNumber: number) {
        this._pageNumber = pageNumber;
    }
}
