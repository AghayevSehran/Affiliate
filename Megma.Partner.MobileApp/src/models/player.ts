export class Player {
    constructor(
        public Id: number,
        public Partner ?: any,
        public Gender ?: any,
        public Name ?: any,
        public Surname ?: any,
        public Email ?: any,
        public Gsm ?: any,
        public Username ?: any,
        public Password ?: any,
        public Language ?: any,
        public CountryId ?: any,
        public Country ?: any,
        public Active ?: boolean,
        public BirthDate ?: Date,
        public Currency ?: any,
        public Balance ?: number,
    ){}
}