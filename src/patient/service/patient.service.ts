import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose';
import {Patients, PatientDocument} from "../persistence/schemas/patients";
import {CreatePatientDto} from "../application/dto/request/createPatient.dto";
import {PatientMapper} from "../application/mapper/patient.mapper";
import {PatientResponseDto} from "../application/dto/response/patientResponse.dto";


@Injectable()
export class PatientService {

    constructor(
        @InjectModel(Patients.name) private readonly patientModel: Model<PatientDocument>,
    ) {
    }

    async create(createUserDto: CreatePatientDto): Promise<PatientResponseDto> {
        console.log("[PatientService:create]: CreatePatientDto {}", createUserDto)
        const patientResponse = await this.patientModel.create(PatientMapper.toPatient(createUserDto));
        return PatientMapper.fromPatient(patientResponse);
    }

    async findAll(): Promise<PatientResponseDto[]> {
        const patients = await this.patientModel.find();
        return patients.map((patient) => PatientMapper.fromPatient(patient));
    }

}