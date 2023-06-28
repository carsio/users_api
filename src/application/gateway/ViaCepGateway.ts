import Address from "../../domain/entity/Address";

export default interface ViaCepGateway {
    getAddressByCep(cep: string): Promise<Address>;
}