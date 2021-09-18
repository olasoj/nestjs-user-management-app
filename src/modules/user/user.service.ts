import { UserCreationRequestBuilder } from './model/builder/request/user.creation.request.builder';
import { UserBuilder } from './model/builder/entity/user.builder';
import { User } from './model/entity/user.entity';
import { Repository, SelectQueryBuilder } from "typeorm";
import { HttpException, Injectable } from "@nestjs/common";
import { UserCreationRequest } from "./model/request/user.creation.request";
import { InjectRepository } from '@nestjs/typeorm';
import { UserPaginateRequest } from './model/request/pagination/user.pagination.request'

import initData from './init/user_init.data';
import { UserPageRequest } from './model/request/pagination/user.page request';
import { UserFilterRequest } from './model/request/pagination/user.filter request';
import { UserPaginationResponseBuilder } from './model/builder/response/pagination/user.pagination.details.response.builder'
import { UserResponseBuilder } from './model/builder/response/user.response.builder';
import { UserPaginationDetailsResponse } from './model/response/pagination/user.pagination.details.response';
import { UserResponse } from './model/response/user.response';


@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getPaginatedUsersDetails(userPaginateRequest: UserPaginateRequest): Promise<UserPaginationDetailsResponse> {
        const queryBuilder = this.getQueryBuilder();
        const { userPageRequest, userFilterRequest } = this.resolveUserPaginationRequest(userPaginateRequest);

        this.filterUserList(queryBuilder, userFilterRequest);
        this.paginateUserResult(queryBuilder, userPageRequest);

        const [users, totalUsers] = await queryBuilder.getManyAndCount();
        return this.getUsersPaginationDetailsResponse(totalUsers, this.getUsersResponse(users), userPageRequest)
    }

    async getDistinctUserFieldValue(): Promise<any> {
        const queryBuilder = this.getQueryBuilder();
        const distinctInterests = await this.getDistinctInterest(queryBuilder)
        const distinctWorkCategories = await this.getDistinctWorkCategory(queryBuilder)
        return { distinctWorkCategories: [...(distinctWorkCategories)], distinctInterests: [...distinctInterests] };
    }

    async initializeUserTable() {
        for (const userCreationRequest of this.getInitUserData()) this.createUser(userCreationRequest)
    }

    async createUser(userCreationRequest: UserCreationRequest) {
        const newUser = this.getNewUserFromUserCreationRequest(userCreationRequest)
        const user = this.userRepository.create(newUser);
        await this.userRepository.save(user);
        return "User created";
    }

    async deleteUser(id: string) {
        await this.getUser(id);
        await this.userRepository.delete(id);
        return "User deleted";
    }

    async getUser(id: string) {
        const user = await this.userRepository.findOne(id);
        if (!user) throw new HttpException("User not found", 404);
        return this.getUserResponse(user);
    }

    private filterUserList(queryBuilder: SelectQueryBuilder<User>, userFilterRequest: UserFilterRequest) {
        const { workCategory, interest } = userFilterRequest;
        if (workCategory) queryBuilder.where("user._workCategory = :workCategory", { workCategory });
        if (interest) queryBuilder.andWhere("user._interest = :interest", { interest });
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

    private getQueryBuilder() {
        return this.userRepository.createQueryBuilder("user");
    }


    private getUsersPaginationDetailsResponse(totalUsers: number, userResponseDTO: UserResponse[], userPageRequest: UserPageRequest): UserPaginationDetailsResponse | PromiseLike<UserPaginationDetailsResponse> {
        return new UserPaginationResponseBuilder()
            .totalNumberOfUser(totalUsers)
            .totalUsersOnPage(userResponseDTO.length)
            .pageNumber(userPageRequest.pageNumber)
            .totalPages(Math.ceil(totalUsers / userPageRequest.pageSize))
            .pageSize(userPageRequest.pageSize)
            .users(userResponseDTO)
            .build();
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

    private getUsersResponse(users: User[]) {
        return users.map(user => this.getUserResponse(user));
    }

    private getUserResponse(user: User): UserResponse {
        return new UserResponseBuilder()
            .id(user.id)
            .email(user.email)
            .fullName(user.fullName)
            .interest(user.interest)
            .username(user.username)
            .workCategory(user.workCategory)
            .yearsOfExperience(user.yearsOfExperience)
            .build();
    }

    private async getDistinctWorkCategory(queryBuilder: SelectQueryBuilder<User>) {
        const distinctWorkCategory = await queryBuilder
            .select('work_category')
            .distinct(true)
            .getRawMany();

        return distinctWorkCategory.map(distinctWorkCategory => distinctWorkCategory.work_category)
    }

    private async getDistinctInterest(queryBuilder: SelectQueryBuilder<User>) {
        const distinctInterest = await queryBuilder
            .select('interest')
            .distinct(true)
            .getRawMany();

        return distinctInterest.map(distinctInterest => distinctInterest.interest);
    }

}