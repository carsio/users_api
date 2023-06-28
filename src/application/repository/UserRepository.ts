import User from "../../domain/entity/User";


export default interface UserRepository {
	save (user: User): Promise<void>;
	get (email: string): Promise<User>;
	getById (id: number): Promise<User>;
	getAll (): Promise<User[]>;
	delete (email: string): Promise<void>;
	update (user: User): Promise<User>;
}
