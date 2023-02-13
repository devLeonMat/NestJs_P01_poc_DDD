import { IsNumber, IsString } from "class-validator";

export class PatientResponseDto {

    id: string;
    firstName: string
    lastName: string
    email: string
    gender: string
    age: number
    height: number
}