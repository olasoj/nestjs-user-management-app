import { UserResponse } from "../user.response";

export class UserPaginationDetailsResponse {

    private _userResponse: UserResponse[];

    private _totalPages: number;

    private _numberOfRecordsOnPage: number;

    private _totalNumberOfUser: number;

    private _pageNumber: number;

    private _pageSize: number;


    public get userResponse(): UserResponse[] {
        return this._userResponse;
    }
    public set userResponse(userResponse: UserResponse[]) {
        this._userResponse = userResponse;
    }

    public get totalPages(): number {
        return this._totalPages;
    }
    public set totalPages(totalPages: number) {
        this._totalPages = totalPages;
    }

    public get numberOfRecordsOnPage(): number {
        return this._numberOfRecordsOnPage;
    }
    public set numberOfRecordsOnPage(numberOfRecordsOnPage: number) {
        this._numberOfRecordsOnPage = numberOfRecordsOnPage;
    }

    public get totalNumberOfUser(): number {
        return this._totalNumberOfUser;
    }
    public set totalNumberOfUser(totalNumberOfUser: number) {
        this._totalNumberOfUser = totalNumberOfUser;
    }

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
