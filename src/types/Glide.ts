import { User } from "./User";

export interface Glide {
    id:string;
    content:string;
    user:User;
    likeCount:number;
    subglidesCount:number;
    date: Date;
    
}
