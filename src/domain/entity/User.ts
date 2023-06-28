
export default class User {
    constructor(
        public id: number | undefined = undefined,
        public name: string,
        public email: string,
        public password: string,
        public birthDate: Date,
        public cpf: string,
    ) {}        

    get isOfLegalAge(): boolean {
        const now = new Date();
        let age = now.getFullYear() - this.birthDate.getFullYear();
        const month = now.getMonth() - this.birthDate.getMonth();
        if (month < 0 || (month === 0 && now.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age >= 18;
    }
}

    