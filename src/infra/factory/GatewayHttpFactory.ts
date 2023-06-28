import GatewayFactory from "../../application/factory/GatewayFactory";
import ViaCepGateway from "../../application/gateway/ViaCepGateway";
import ViaCepHttpGateway from "../gateway/ViaCepHttpGateway";
import HttpClient from "../http/HttpClient";

export default class GatewayHttpFactory implements GatewayFactory {
    constructor(private readonly httpClient: HttpClient) { }

    createViaCepGateway(): ViaCepGateway {
        return new ViaCepHttpGateway(this.httpClient);
    }
}