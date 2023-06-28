import User from "../../domain/entity/User";
import RepositoryFactory from "../factory/RepositoryFactory";
import UserRepository from "../repository/UserRepository";

export default class GetUsers {
    private readonly userRepository: UserRepository;

    constructor(
        repositoryFactory: RepositoryFactory,
    ) {
        this.userRepository = repositoryFactory.createUserRepository();
    }

    async execute(): Promise<User[]> {
        return await this.userRepository.getAll();
    }
}