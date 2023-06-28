import RepositoryFactory from "../../application/factory/RepositoryFactory";
import AddressRepository from "../../application/repository/AddressRepository";
import UserRepository from "../../application/repository/UserRepository";
import InMemoryAddressRepository from "../repository/InMemoryAddressRepository";
import InMemoryUserRepository from "../repository/InMemoryUserRepository";

export default class InMemoryRepositoryFactory implements RepositoryFactory {
    private static addressRepository: AddressRepository;
    private static userRepository: UserRepository;


    createAddressRepository(): AddressRepository {
        if (!InMemoryRepositoryFactory.addressRepository)
            InMemoryRepositoryFactory.addressRepository = new InMemoryAddressRepository();
        return InMemoryRepositoryFactory.addressRepository;
    }

    createUserRepository(): UserRepository {
        if (!InMemoryRepositoryFactory.userRepository)
            InMemoryRepositoryFactory.userRepository = new InMemoryUserRepository();
        return InMemoryRepositoryFactory.userRepository;
    }
}