export class lab{
    id(id:any){
        throw new Error('Method not implemented.');
    }
    constructor(
        public pcNumber:string,
        public roomNumber:string,
        public assignedTask:string,
        public allottedTime:string
    ){}
}