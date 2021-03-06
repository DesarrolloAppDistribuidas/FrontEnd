export class Reservation{
    email?:string;
    id_room?:string;
    number_adults?:number;
    number_children?:number;
    date_in?:Date;
    date_out?:Date;
    payment?:number;

    constructor(date_in:string, date_out:string, number_adults:number,number_children:number){
        this.date_in=new Date(date_in);
        this.date_out = new Date(date_out);
        this.number_adults=number_adults;
        this.number_children=number_children;
    }
}