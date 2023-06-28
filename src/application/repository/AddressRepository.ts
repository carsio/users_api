import Address from "../../domain/entity/Address";


export default interface AddressRepository {
    save(address: Address): Promise<void>;
    get(id: number): Promise<Address>;
    delete(address: Address): Promise<void>;
    update(address: Address): Promise<void>;
}