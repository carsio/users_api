import ViaCepGateway from "../gateway/ViaCepGateway";


export default interface GatewayFactory {
    createViaCepGateway(): ViaCepGateway;
}