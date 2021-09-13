import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreationRequest } from "./model/request/user.creation.request";
import { User } from "./model/entity/user.entity";

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/')
    async newUser(@Body() userCreationRequest: UserCreationRequest): Promise<void> {
        console.log(userCreationRequest)
        this.userService.initializeUserTable();
    }

    @Get('/')
    async getUsers(@Body() userCreationRequest: UserCreationRequest): Promise<User[]> {
        const users = await this.userService.getAllUsersBt();
        console.log(users)
        return users;
    }
}