export default class Player {
    constructor(
        public firstName :string,
        public secondName :string
    ) {}

    get fullName() :string {
        return `${this.firstName} ${this.secondName}`;
    }
}
