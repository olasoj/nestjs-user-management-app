import { UserCreationRequestBuilder } from './model/builder/request/user.creation.request.builder';
import { UserBuilder } from './model/builder/entity/user.builder';
import { User } from './model/entity/user.entity';
import { Repository, SelectQueryBuilder } from "typeorm";
import { Injectable } from "@nestjs/common";
import { UserCreationRequest } from "./model/request/user.creation.request";
import { InjectRepository } from '@nestjs/typeorm';
import { UserPaginateRequest } from './model/request/pagination/user.pagination.request'

import initData from './init/user_init.data';
import { UserPageRequest } from './model/request/pagination/user.page request';
import { UserFilterRequest } from './model/request/pagination/user.filter request';
import { UserPaginationResponseBuilder } from './model/builder/response/pagination/user.pagination.details.response.builder'
import { UserResponseBuilder } from './model/builder/response/user.response.builder';
import { UserPaginationDetailsResponse } from './model/response/pagination/user.pagination.details.response';


@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getPaginatedUsers(userPaginateRequest: UserPaginateRequest): Promise<UserPaginationDetailsResponse> {
        const queryBuilder = this.getQueryBuilder();
        const { userPageRequest, userFilterRequest } = this.resolveUserPaginationRequest(userPaginateRequest);

        this.filterUserList(queryBuilder, userFilterRequest);
        this.paginateUserResult(queryBuilder, userPageRequest);

        const [users, totalUsers] = await queryBuilder.getManyAndCount();
        const userResponseDTO = this.getUserResponse(users);

        return new UserPaginationResponseBuilder()
            .numberOfRecordsOnPage(userResponseDTO.length)
            .pageNumber(userPageRequest.pageNumber)
            .totalPages(Math.ceil(totalUsers / userPageRequest.pageSize))
            .pageSize(userPageRequest.pageSize)
            .users(userResponseDTO)
            .build()
    }

    async getUserDistinctValue(): Promise<any> {
        const queryBuilder = this.getQueryBuilder();

        const distinctInterests = (await this.getDistinctInterest(queryBuilder)).map(distinctInterest => distinctInterest.interest);
        const distinctWorkCategories = (await this.getDistinctWorkCategory(queryBuilder)).map(distinctWorkCategory => distinctWorkCategory.work_category);

        return { distinctWorkCategories: [...distinctWorkCategories], distinctInterests: [...distinctInterests] };
    }

    async getUser(id: string) {
        const user = await this.userRepository.findOne({ where: { id: id } });
        return user;
    }


    async initializeUserTable() {
        for (const userCreationRequest of this.getInitUserData())
            this.createUser(userCreationRequest)
    }

    async createUser(userCreationRequest: UserCreationRequest) {
        const newUser = this.getNewUserFromUserCreationRequest(userCreationRequest)
        const user = this.userRepository.create(newUser);
        await this.userRepository.save(user);
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


    private filterUserList(queryBuilder: SelectQueryBuilder<User>, userFilterRequest: UserFilterRequest) {
        const { workCategory, interest } = userFilterRequest;
        console.log(workCategory)
        if (workCategory) queryBuilder.where("user._workCategory = :workCategory", { workCategory });
        if (interest) queryBuilder.where("user._interest = :interest", { interest });
    }

    private paginateUserResult(queryBuilder: SelectQueryBuilder<User>, userPageRequest: UserPageRequest) {
        const { pageNumber, pageSize } = userPageRequest;
        queryBuilder.skip((pageNumber - 1) * pageSize);
        queryBuilder.take(pageSize);
    }

    private resolveUserPaginationRequest(userPaginateRequest: UserPaginateRequest) {
        return (userPaginateRequest.userPageRequest === undefined || userPaginateRequest.userPageRequest === null || userPaginateRequest.userFilterRequest === undefined)
            ? new UserPaginateRequest() : userPaginateRequest;
    }

    async getAllUsers() {
        return this.userRepository.find();
    }

    async userTableIsEmpty() {
        if ((await this.getAllUsers()).length == 0) return true;
        return false;
    }


    private getQueryBuilder() {
        return this.userRepository.createQueryBuilder("user");
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

    private getUserResponse(users: User[]) {
        return users.map(user => new UserResponseBuilder()
            .email(user.email)
            .fullName(user.fullName)
            .interest(user.interest)
            .username(user.username)
            .workCategory(user.workCategory)
            .yearsOfExperience(user.yearsOfExperience)
            .build());
    }

    private async getDistinctWorkCategory(queryBuilder: SelectQueryBuilder<User>) {
        return await queryBuilder
            .select('work_category')
            .distinct(true)
            .getRawMany();
    }

    private async getDistinctInterest(queryBuilder: SelectQueryBuilder<User>) {
        return await queryBuilder
            .select('interest')
            .distinct(true)
            .getRawMany();
    }

}