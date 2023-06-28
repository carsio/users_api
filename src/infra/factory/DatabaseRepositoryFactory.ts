import RepositoryFactory from "../../application/factory/RepositoryFactory";
import AddressRepository from "../../application/repository/AddressRepository";
import UserRepository from "../../application/repository/UserRepository";
import DatabaseConnection from "../database/DatabaseConnection";
import DatabaseAddressRepository from "../repository/DatabaseAddressRepository";
import DatabaseUserRepository from "../repository/DatabaseUserRepository";

export default class DatabaseRepositoryFactory implements RepositoryFactory {
    constructor(private readonly connection: DatabaseConnection) { }

    createUserRepository(): UserRepository {
        return new DatabaseUserRepository(this.connection);
    }
    createAddressRepository(): AddressRepository {
        return new DatabaseAddressRepository(this.connection);
    }
}
