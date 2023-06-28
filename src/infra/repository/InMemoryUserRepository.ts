import UserRepository from "../../application/repository/UserRepository";
import User from "../../domain/entity/User";

export default class InMemoryUserRepository implements UserRepository {
    private userSequence = 0;
    private readonly users: User[] = [];

    save(user: User): Promise<void> {
        return new Promise((resolve, reject) => {
            user.id = this.userSequence + 1;
            this.userSequence++;
            this.users.push(user);
            resolve();
        });
    }

    get(email: string): Promise<User> {
        return new Promise((resolve, reject) => {
            const user = this.users.find((user) => user.email === email);
            if (!user) {
                reject(new Error("User not found"));
            }
            resolve(user!);
        });
    }

    getById(id: number): Promise<User> {
        return new Promise((resolve, reject) => {
            const user = this.users.find((user) => user.id === id);
            if (!user) {
                reject(new Error("User not found"));
            }
            resolve(user!);
        });
    }

    getAll(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            resolve(this.users);
        });
    }

    delete(email: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const index = this.users.findIndex(
                (userToFind) => userToFind.email === email
            );
            if (index === -1) {
                reject(new Error("User not found"));
            }
            this.users.splice(index, 1);
            resolve();
        });
    
    }

    update(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            const index = this.users.findIndex(
                (userToFind) => userToFind.id === user.id
            );
            if (index === -1) {
                reject(new Error("User not found"));
            }
            this.users[index] = user;
            resolve(user);
        });        
    }
}
