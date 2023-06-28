import InMemoryRepositoryFactory from "../../infra/factory/InMemoryRepositoryFactory";
import GetUsers from "../../application/usecase/GetUsers";
import RepositoryFactory from "../../application/factory/RepositoryFactory";
import User from "../../domain/entity/User";

const users = <User[]>[
    {
        name: "John Doe",
        email: "test@test.com",
        password: "123456",
        birthDate: new Date(),
        cpf: "12345678910",
    },
    {
        name: "John Doe2",
        email: "test2@test2.com",
        password: "123456",
        birthDate: new Date(),
        cpf: "12345678912",
    },
];

let inMemoryRepositoryFactory: RepositoryFactory;

beforeEach(async () => {
    inMemoryRepositoryFactory = new InMemoryRepositoryFactory();
    users.forEach((user) => inMemoryRepositoryFactory.createUserRepository().save(user));
});

test('GetUsers', async () => {
    const getUsers = new GetUsers(inMemoryRepositoryFactory);
    const users = await getUsers.execute();
    console.log(users);
    
    expect(users).toHaveLength(2);
    users.forEach((user) => {
        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("email");
        expect(user).toHaveProperty("password");
        expect(user).toHaveProperty("birthDate");
        expect(user).toHaveProperty("cpf");
    });
});