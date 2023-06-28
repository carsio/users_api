import AxiosAdpter from "../../infra/http/AxiosAdpter";
import Signup from "../../application/usecase/Signup";
import InMemoryRepositoryFactory from "../../infra/factory/InMemoryRepositoryFactory";
import GatewayHttpFactory from "../../infra/factory/GatewayHttpFactory";
import RepositoryFactory from "../../application/factory/RepositoryFactory";
import HttpClient from "../../infra/http/HttpClient";
import GatewayFactory from "../../application/factory/GatewayFactory";

let inMemoryRepositoryFactory: RepositoryFactory;
let axiosAdpter: HttpClient;
let gatewayHttpFactory: GatewayFactory;
let signup: Signup;

beforeEach(() => {
    inMemoryRepositoryFactory = new InMemoryRepositoryFactory();
    axiosAdpter = new AxiosAdpter();
    gatewayHttpFactory = new GatewayHttpFactory(axiosAdpter);
    signup = new Signup(inMemoryRepositoryFactory, gatewayHttpFactory);
});

test("Should not signup if not off legal age", async () => {
    const signupPayload = {
        name: "John Doe",
        email: "test@test.com",
        password: "123456",
        birthDate: new Date(),
        cpf: "12345678910",
        cep: "01001000",
    };
    await expect(signup.execute(signupPayload)).rejects.toThrow("User is not of legal age");
});

test("Should not signup if not from Amazonas", async () => {
    const signupPayload = {
        name: "John Doe",
        email: "test@test.com",
        password: "123456",
        birthDate: new Date("1990-01-01"),
        cpf: "12345678910",
        cep: "01001000",
    };
    await expect(signup.execute(signupPayload)).rejects.toThrow("User is not from Amazonas");
});

test("Should signup", async () => {
    const signupPayload = {
        name: "John Doe",
        email: "test@test.com",
        password: "123456",
        birthDate: new Date("1990-01-01"),
        cpf: "12345678910",
        cep: "69067628",
    };
    await expect(signup.execute(signupPayload)).resolves.toBeUndefined();
});