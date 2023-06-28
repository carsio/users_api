import User from "../../domain/entity/User";
import GatewayFactory from "../factory/GatewayFactory";
import RepositoryFactory from "../factory/RepositoryFactory";
import ViaCepGateway from "../gateway/ViaCepGateway";
import UserRepository from "../repository/UserRepository";

export default class Signup {
    private readonly userRepository: UserRepository;
    private readonly viaCepGateway: ViaCepGateway;

    constructor(
        repositoryFactory: RepositoryFactory,
        viaCepGateway: GatewayFactory,
    ) {
        this.userRepository = repositoryFactory.createUserRepository();
        this.viaCepGateway = viaCepGateway.createViaCepGateway();
    }

    async execute(request: SignUpRequest): Promise<void> {
        const user = new User(
            undefined,
            request.name,
            request.email,
            request.password,
            request.birthDate,
            request.cpf,
        );
        if (!user.isOfLegalAge)
            throw new Error("User is not of legal age");
        const address = await this.viaCepGateway.getAddressByCep(request.cep);
        if (!address.isFromAmazonas)
            throw new Error("User is not from Amazonas");
        await this.userRepository.save(user);
    }
}

type SignUpRequest = {
    name: string;
    email: string;
    password: string;
    birthDate: Date;
    cpf: string;
    cep: string;
};
