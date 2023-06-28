
export default class Address {
    constructor(
        public id: number | undefined = undefined,
        public street: string,
        public number: number | undefined = undefined,
        public complement: string,
        public city: string,
        public state: string,
        public zipCode: string,
        public userId: number | undefined = undefined,
    ) {}
        
    get isFromAmazonas(): boolean {
        return this.state === 'AM';
    }
}