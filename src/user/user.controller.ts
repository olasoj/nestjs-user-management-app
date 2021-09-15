import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, RequestMapping, RequestMethod, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreationRequest } from "./model/request/user.creation.request";
import { UserPaginateRequest } from './model/request/pagination/user.pagination.request'
import { UserPaginationDetailsResponse } from "./model/response/pagination/user.pagination.details.response";

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/populate-table')
    async newUser(): Promise<void> {
        this.userService.initializeUserTable();
    }

    @Post('/create-user')
    @UsePipes(new ValidationPipe())
    //async
    createUser(@Body() userCreationRequest: UserCreationRequest): any {//Promise<void> {
        console.log(userCreationRequest)
        // this.userService.createUser(userCreationRequest);
    }

    @RequestMapping({ path: "/", method: RequestMethod.POST })
    async paginatedUsers(@Body() userPaginateRequest: UserPaginateRequest, @Res() res): Promise<UserPaginationDetailsResponse> {
        return res.status(200).json(await this.userService.getPaginatedUsers(userPaginateRequest));
    }


    @Get('/distinct-value')
    async distinct(): Promise<any> {
        return await this.userService.getUserDistinctValue();
    }

    @Delete('/:userId')
    async removeUser(@Param("userId", new ParseUUIDPipe()) userId: string): Promise<any> {
        return await this.userService.deleteUser(userId);

    }


}