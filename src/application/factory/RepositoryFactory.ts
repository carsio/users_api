import AddressRepository from "../repository/AddressRepository";
import UserRepository from "../repository/UserRepository";

export default interface RepositoryFactory {
    createUserRepository(): UserRepository;
    createAddressRepository(): AddressRepository;
}