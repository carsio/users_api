import UserRepository from "../../application/repository/UserRepository";
import User from "../../domain/entity/User";
import DatabaseConnection from "../database/DatabaseConnection";

export default class DatabaseUserRepository implements UserRepository {
    constructor(private readonly connection: DatabaseConnection) { }

    save(): Promise<void> {
        throw new Error("Method not implemented.");
    }
  
    get(): Promise<User> {
        throw new Error("Method not implemented.");
    }

    getById(id: number): Promise<User> {
        throw new Error("Method not implemented.");
    }

    getAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
    delete(email: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
}