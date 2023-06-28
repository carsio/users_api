import ViaCepGateway from "../../application/gateway/ViaCepGateway";
import Address from "../../domain/entity/Address";
import HttpClient from "../http/HttpClient";

export default class ViaCepHttpGateway implements ViaCepGateway {
    constructor(private readonly httpClient: HttpClient) { }

    async getAddressByCep(cep: string): Promise<Address> {
        const response = await this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`);
        return new Address(
            undefined,
            response.logradouro,
            undefined,
            response.complemento,
            response.localidade,
            response.uf,
            response.cep,
            undefined,
        );
    }
}