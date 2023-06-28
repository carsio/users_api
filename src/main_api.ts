import GatewayHttpFactory from "./infra/factory/GatewayHttpFactory";
import InMemoryRepositoryFactory from "./infra/factory/InMemoryRepositoryFactory";
import UsecaseFactory from "./infra/factory/UsecaseFactory";
import AxiosAdapter from "./infra/http/AxiosAdapter";
import ExpressAdapter from "./infra/http/ExpressAdpter";
import InMemoryAddressRepository from "./infra/repository/InMemoryAddressRepository";
import UserController from "./presentation/controllers/UserController";


async function main() {
	const repositoryFactory = new InMemoryRepositoryFactory();
	const httpClient = new AxiosAdapter();
	const gatewayFactory = new GatewayHttpFactory(httpClient);
	const usecaseFactory = new UsecaseFactory(repositoryFactory, gatewayFactory);
	const httpServer = new ExpressAdapter();
	new UserController(httpServer, usecaseFactory);
	httpServer.listen(3000);
}

main();