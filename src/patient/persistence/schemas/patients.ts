import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import {Document} from "mongoose";
import * as mongoose from "mongoose";

export type PatientDocument = Patients & Document;

@Schema()
export class Patients {

    _id: mongoose.Types.ObjectId;
    @Prop()
    first_name: string
    @Prop()
    last_name: string
    @Prop()
    email: string
    @Prop()
    gender: string
    @Prop()
    age: number
    @Prop()
    height: number

}

export const PatientSchema = SchemaFactory.createForClass(Patients);
