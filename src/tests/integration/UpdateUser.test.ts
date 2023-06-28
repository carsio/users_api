import RepositoryFactory from "../../application/factory/RepositoryFactory";
import User from "../../domain/entity/User";
import InMemoryRepositoryFactory from "../../infra/factory/InMemoryRepositoryFactory";
import UpdateUser from "../../application/usecase/UpdateUser";

test("UpdateUser", async () => {
    const user = <User>{
        name: "John Doe",
        email: "test@test.com",
        password: "123456",
        birthDate: new Date(),
        cpf: "12345678910",
    }

    const inMemoryRepositoryFactory = new InMemoryRepositoryFactory();
    await inMemoryRepositoryFactory.createUserRepository().save(user);

    const updateUser = new UpdateUser(inMemoryRepositoryFactory);
    const updatedUser = await updateUser.execute({
        id: 1,
        name: "John Doe Updated",
        cpf: "11111111111",
    });

    expect(updatedUser).toHaveProperty("name", "John Doe Updated");
    expect(updatedUser).toHaveProperty("cpf", "11111111111");
});
