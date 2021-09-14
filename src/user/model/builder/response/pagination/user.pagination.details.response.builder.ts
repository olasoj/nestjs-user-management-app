import { UserPaginationDetailsResponse } from "../../../response/pagination/user.pagination.details.response";
import { UserResponse } from "../../../response/user.response";


export class UserPaginationResponseBuilder {
    private readonly _userPaginationDetailsResponse: UserPaginationDetailsResponse;

    constructor() {
        this._userPaginationDetailsResponse = new UserPaginationDetailsResponse();
    }


    public users(users: UserResponse[]): UserPaginationResponseBuilder {
        this._userPaginationDetailsResponse.userResponse = users;
        return this;
    }

    public totalPages(totalPages: number): UserPaginationResponseBuilder {
        this._userPaginationDetailsResponse.totalPages = totalPages;
        return this;
    }


    public numberOfRecordsOnPage(numberOfRecordsOnPage: number): UserPaginationResponseBuilder {
        this._userPaginationDetailsResponse.numberOfRecordsOnPage = numberOfRecordsOnPage;
        return this;
    }

    public pageSize(pageSize: number): UserPaginationResponseBuilder {
        this._userPaginationDetailsResponse.pageSize = pageSize;
        return this
    }


    public pageNumber(pageNumber: number): UserPaginationResponseBuilder {
        this._userPaginationDetailsResponse.pageNumber = pageNumber;
        return this;
    }

    build(): UserPaginationDetailsResponse {
        return this._userPaginationDetailsResponse;
    }
}