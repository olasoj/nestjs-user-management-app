import { UserCreationRequestBuilder } from './model/builder/user.creation.request.builder';
import { UserBuilder } from './model/builder/user.builder';
import { User } from './model/entity/user.entity';
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { UserCreationRequest } from "./model/request/user.creation.request";
import { InjectRepository } from '@nestjs/typeorm';
import { UserPaginateRequest } from './model/request/pagination/user.pagination.request'

import initData from './init/user_init.data';
import { UserPageRequest } from './model/request/pagination/user.page request';
import { UserFilterRequest } from './model/request/pagination/user.filter request';


@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getAllUsersBt(userPaginateRequest: UserPaginateRequest): Promise<User[]> {
        const queryBuilder = this.getQueryBuilder();

        const resolvedUserPaginationRequest = this.resolveUserPaginationRequest(userPaginateRequest);

        this.filterUserList(queryBuilder, resolvedUserPaginationRequest.userFilterRequest);
        this.paginateUserResult(queryBuilder, resolvedUserPaginationRequest.userPageRequest);

        const [users, total] = await queryBuilder.getManyAndCount();
        return users;
    }

    private filterUserList(queryBuilder, userFilterRequest: UserFilterRequest) {
        const { workCategory, interest } = userFilterRequest;
        if (workCategory) queryBuilder.where("user._workCategory = :workCategory", { workCategory });
        if (interest) queryBuilder.where("user._interest = :interest", { interest });
    }

    private paginateUserResult(queryBuilder, userPageRequest: UserPageRequest) {
        const { pageNumber, pageSize } = userPageRequest;
        queryBuilder.skip((pageNumber - 1) * pageSize);
        queryBuilder.take(pageSize);
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

    private getQueryBuilder() {
        return this.userRepository.createQueryBuilder("user");
    }


    async userTableIsEmpty() {
        if ((await this.getAllUsers()).length == 0) return true;
        return false;
    }

    private resolveUserPaginationRequest(userPaginateRequest: UserPaginateRequest) {
        return (userPaginateRequest.userPageRequest === undefined || userPaginateRequest.userFilterRequest === null) ? new UserPaginateRequest() : userPaginateRequest;
    }

}