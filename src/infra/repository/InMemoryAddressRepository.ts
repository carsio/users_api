import AddressRepository from "../../application/repository/AddressRepository";
import Address from "../../domain/entity/Address";


export default class InMemoryAddressRepository implements AddressRepository {
    private addressSequence = 0;
    private readonly addresses: Address[] = [];

    async save(address: Address): Promise<void> {
        return new Promise((resolve, reject) => {
            address.id = this.addressSequence + 1;
            this.addressSequence++;
            this.addresses.push(address);
            resolve();
        });
    }


    get(id: number): Promise<Address> {
        return new Promise((resolve, reject) => {
            const address = this.addresses.find((address) => address.id === id);
            if (!address) {
                reject(new Error("Address not found"));
            }
            resolve(address!);
        });
    }

    delete(address: Address): Promise<void> {
        return new Promise((resolve, reject) => {
            const index = this.addresses.findIndex(
                (addressToFind) => addressToFind.id === address.id
            );
            if (index === -1) {
                reject(new Error("Address not found"));
            }
            this.addresses.splice(index, 1);
            resolve();
        });
    }

    update(address: Address): Promise<void> {
        return new Promise((resolve, reject) => {
            const index = this.addresses.findIndex(
                (addressToFind) => addressToFind.id === address.id
            );
            if (index === -1) {
                reject(new Error("Address not found"));
            }
            this.addresses[index] = address;
            resolve();
        });
    }
}