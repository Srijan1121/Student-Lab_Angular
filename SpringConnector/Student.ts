import { lab } from "src/app/lab";
export class student{
    labs: lab[] = [];
    id(id:any){
        throw new Error('Method not implemented.')
    }

    constructor(
       
        public name:string,
        public email:string,
        public phoneNumber:string,
        public course:string,
       
        
        // public lab :[
        //     pcNumber:string,
        //     roomNumber:string,
        //     assignedTask:string,
        //     allottedTime:string
        // ]
    ){}
}

