import UsecaseFactory from "../../infra/factory/UsecaseFactory";
import HttpServer from "../../infra/http/HttpServer";


export default class UserController {
    constructor (httpServer: HttpServer, usecaseFactory: UsecaseFactory) {
		httpServer.on("get", "/users", async function (params: any, body: any, headers: any) {
			const getUsers = usecaseFactory.createGetUserUsecase();
			return await getUsers.execute();
		});

        httpServer.on("post", "/users", async function (params: any, body: any, headers: any) {
            const signup = usecaseFactory.createSignUpUsecase();
            return await signup.execute(body);
        });

        httpServer.on("put", "/users/:id", async function (params: any, body: any, headers: any) {
            body.id = params.id;
            const updateUser = usecaseFactory.createUpdateUserUsecase();
            return await updateUser.execute(body);
        });
	}
}