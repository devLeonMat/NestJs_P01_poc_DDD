import {IsNumber, IsString} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {

  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  firstName: string

  @ApiProperty()
  @IsString()
  lastName: string

  @ApiProperty()
  @IsString()
  email: string

  @ApiProperty()
  @IsString()
  gender: string

  @ApiProperty()
  @IsNumber()
  age: number

  @ApiProperty()
  @IsNumber()
  height: number

}
