import {IsNumber, IsString} from "class-validator";

export class CreatePatientDto {

    @IsString()
    id: string;
    @IsString()
    firstName: string
    @IsString()
    lastName: string
    @IsString()
    email: string
    @IsString()
    gender: string
    @IsNumber()
    age: number
    @IsNumber()
    height: number

}