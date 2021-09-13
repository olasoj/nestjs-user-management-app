import { UserPaginationDetailsResponse } from "../../../response/pagination/user.pagination.details.response";
import { UserResponse } from "../../../response/user.response";


export class UserResponseBuilder {
    private readonly _userPaginationDetailsResponse: UserPaginationDetailsResponse;

    constructor() {
        this._userPaginationDetailsResponse = new UserPaginationDetailsResponse();
    }


    public userResponse(userResponse: UserResponse): UserResponseBuilder {
        this._userPaginationDetailsResponse.userResponse = userResponse;
        return this;
    }

    public totalPages(totalPages: number): UserResponseBuilder {
        this._userPaginationDetailsResponse.totalPages = totalPages;
        return this;
    }


    public numberOfRecordsOnPage(numberOfRecordsOnPage: number): UserResponseBuilder {
        this._userPaginationDetailsResponse.numberOfRecordsOnPage = numberOfRecordsOnPage;
        return this;
    }

    public pageSize(pageSize: number): UserResponseBuilder {
        this._userPaginationDetailsResponse.pageSize = pageSize;
        return this
    }


    public pageNumber(pageNumber: number): UserResponseBuilder {
        this._userPaginationDetailsResponse.pageNumber = pageNumber;
        return this;
    }

    build(): UserPaginationDetailsResponse {
        return this._userPaginationDetailsResponse;
    }
}