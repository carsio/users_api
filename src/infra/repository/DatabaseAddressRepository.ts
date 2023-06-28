import AddressRepository from "../../application/repository/AddressRepository";
import Address from "../../domain/entity/Address";
import DatabaseConnection from "../database/DatabaseConnection";


export default class DatabaseAddressRepository implements AddressRepository {
    constructor(private connection: DatabaseConnection) { } 

    save(address: Address): void {
        console.log("Saving address on database");
    }
    update(address: Address): void {
        console.log("Updating address on database");
    }
    delete(address: Address): void {
        console.log("Deleting address on database");
    }
    get(id: number): Address {
        console.log("Finding address on database");
        return new Address();
    }
}