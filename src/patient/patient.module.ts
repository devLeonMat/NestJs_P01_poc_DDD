import {Module} from "@nestjs/common";
import {PatientController} from "./application/controller/patient.controller";
import {PatientService} from "./service/patient.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Patients, PatientSchema} from "./persistence/schemas/patients";


@Module({
    imports:[MongooseModule.forFeature([{ name: Patients.name, schema: PatientSchema }]),],
    controllers:[PatientController],
    providers:[PatientService]
})
export class PatientModule {

}