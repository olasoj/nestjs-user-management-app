import { UserCreationRequestBuilder } from './model/builder/user.creation.request.builder';
import { UserBuilder } from './model/user.builder';
import { User } from './model/entity/user.entity';
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { UserCreationRequest } from "./model/request/user.creation.request";
import { InjectRepository } from '@nestjs/typeorm';

import initData from './init/user_init.data';


@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getAllUsersBt(): Promise<User[]> {
        const query = this.userRepository.createQueryBuilder("user");
        query.where("user._id = :_id", { _id: "012c8081-6d90-4baf-8633-ad07a63447d2" });

        const user = await query.getMany();
        console.log(user)
        return user;
    }



    async getUser(id: string) {
        const user = await this.userRepository.findOne({ where: { id: id } });
        return user;
    }

    async updateUser(id: string, product: User) {
        const user = await this.userRepository.update({ id }, product);
        return user;
    }

    async deleteUser(id: string) {
        const user = await this.userRepository.delete({ id });
        return user;
    }

    async initializeUserTable() {
        if (this.userTableIsEmpty())
            for (const userCreationRequest of this.getInitUserData())
                this.createUser(userCreationRequest)
    }

    async createUser(userCreationRequest: UserCreationRequest) {
        const newUser = this.getNewUserFromUserCreationRequest(userCreationRequest)
        const user = await this.userRepository.create(newUser);
        await this.userRepository.save(user);
        return user;
    }

    private getNewUserFromUserCreationRequest(userCreationRequest: UserCreationRequest): User {
        return new UserBuilder()
            .email(userCreationRequest.email)
            .fullName(userCreationRequest.fullName)
            .username(userCreationRequest.username)
            .interest(userCreationRequest.interest)
            .workCategory(userCreationRequest.workCategory)
            .yearsOfExperience(userCreationRequest.yearsOfExperience)
            .build();
    }

    private getInitUserData() {
        return initData.map(userInitData => new UserCreationRequestBuilder()
            .email(userInitData.email)
            .fullName(userInitData.fullName)
            .username(userInitData.username)
            .interest(userInitData.interest)
            .workCategory(userInitData.workCategory)
            .yearsOfExperience(userInitData.yearsOfExperience)
            .build()

        );
    }


    async getAllUsers() {
        return this.userRepository.find();
    }


    async userTableIsEmpty() {
        if ((await this.getAllUsers()).length == 0) return true;
        return false;
    }

}