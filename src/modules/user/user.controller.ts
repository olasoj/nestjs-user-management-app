import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, RequestMapping, RequestMethod, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreationRequest } from "./model/request/user.creation.request";
import { UserPaginateRequest } from './model/request/pagination/user.pagination.request'
import { UserPaginationDetailsResponse } from "./model/response/pagination/user.pagination.details.response";

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/populate-table')
    async populateUsersTable(): Promise<void> {
        this.userService.initializeUserTable();
    }

    @Post('/create-user')
    @UsePipes(new ValidationPipe())
    async createUser(@Body() userCreationRequest: UserCreationRequest, @Res() res): Promise<any> {
        const message = await this.userService.createUser(userCreationRequest);
        return res.status(201).json({ message });
    }

    @RequestMapping({ path: "/", method: RequestMethod.POST })
    async paginatedUsers(@Body() userPaginateRequest: UserPaginateRequest, @Res() res): Promise<UserPaginationDetailsResponse> {
        return res.status(200).json(await this.userService.getPaginatedUsersDetails(userPaginateRequest));
    }


    @Get('/distinct-value')
    async distinct(): Promise<any> {
        return await this.userService.getDistinctUserFieldValue();
    }

    @Delete('/:userId')
    async removeUser(@Param("userId", new ParseUUIDPipe()) userId: string, @Res() res): Promise<any> {
        const message = await this.userService.deleteUser(userId);
        return res.status(200).json({ message });
    }


}