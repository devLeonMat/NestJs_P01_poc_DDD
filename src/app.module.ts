import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {PatientModule} from "./patient/patient.module";
import {PatientSchema} from "./patient/persistence/schemas/patients";


@Module({
    imports: [
        MongooseModule.forRoot('mongodb://root:123456@localhost:27017/?authMechanism=DEFAULT',{dbName: 'POC-AUNA'}),
        MongooseModule.forFeature([{ name: 'patients', schema: PatientSchema }]),
        PatientModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
