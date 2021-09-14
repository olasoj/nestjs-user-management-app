import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreationRequest } from "./model/request/user.creation.request";
import { User } from "./model/entity/user.entity";
import { UserPaginateRequest } from './model/request/pagination/user.pagination.request'
import { UserPaginationDetailsResponse } from "./model/response/pagination/user.pagination.details.response";

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/')
    async newUser(@Body() userCreationRequest: UserCreationRequest): Promise<void> {
        console.log(userCreationRequest)
        this.userService.initializeUserTable();
    }

    @Get('/')
    async paginatedUsers(@Body() userPaginateRequest: UserPaginateRequest): Promise<UserPaginationDetailsResponse> {
        return await this.userService.getPaginatedUsers(userPaginateRequest);
    }


    @Get('/distinct-value')
    async distinct(): Promise<any> {
        return await this.userService.getUserDistinctValue();
    }


}