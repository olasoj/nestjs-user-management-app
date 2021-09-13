import { UserService } from './../user.service';
import { Injectable } from "@nestjs/common";



@Injectable()
export class UserTablePopulation {

    constructor(private userService: UserService) { }

    async populateUserTableOnStartUp() {

    }
}