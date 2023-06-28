import User from "../../domain/entity/User";
import RepositoryFactory from "../factory/RepositoryFactory";
import UserRepository from "../repository/UserRepository";


export default class UpdateUser {
    private readonly userRepository: UserRepository;

    constructor(
        repositoryFactory: RepositoryFactory,
    ) {
        this.userRepository = repositoryFactory.createUserRepository();
    }

    async execute(request: UpdateUserRequest): Promise<User> {
        const user = await this.userRepository.getById(request.id);
        user.name = request.name;
        user.cpf = request.cpf;
        return await this.userRepository.update(user);
    }
}

type UpdateUserRequest = {
    id: number;
    name: string;
    cpf: string;
};
