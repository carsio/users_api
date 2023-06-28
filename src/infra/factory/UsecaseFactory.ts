import GatewayFactory from "../../application/factory/GatewayFactory";
import RepositoryFactory from "../../application/factory/RepositoryFactory";
import GetUsers from "../../application/usecase/GetUsers";
import Signup from "../../application/usecase/Signup";
import UpdateUser from "../../application/usecase/UpdateUser";

export default class UsecaseFactory {
    constructor(
        private readonly repositoryFactory: RepositoryFactory,
        private readonly gatewayFactory: GatewayFactory,
    ) { }

    createSignUpUsecase() {
        return new Signup(
            this.repositoryFactory,
            this.gatewayFactory,
        );
    }

    createUpdateUserUsecase() {
        return new UpdateUser(
            this.repositoryFactory,
        );
    }

    createGetUserUsecase() {
        return new GetUsers(
            this.repositoryFactory,
        );
    }
}