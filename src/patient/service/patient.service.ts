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
    // const patientResponse = await this.patientModel.create(PatientMapper.toPatient(createUserDto));
    // return PatientMapper.fromPatient(patientResponse);

    const patient = new this.patientModel(PatientMapper.toPatient(createUserDto));
    return PatientMapper.fromPatient(await patient.save());
  }

  async findAll(): Promise<PatientResponseDto[]> {
    const patients = await this.patientModel.find();
    return patients.map((patient) => PatientMapper.fromPatient(patient));
  }

  async getPatient(patientId): Promise<PatientResponseDto> {
    return PatientMapper.fromPatient(await this.patientModel.findById(patientId));
  }

  async deletePatient(patientId): Promise<PatientResponseDto> {
    return PatientMapper.fromPatient(await this.patientModel.findByIdAndDelete(patientId));
  }

  async updatePatient(patientId, createUserDto: CreatePatientDto): Promise<PatientResponseDto> {
    return PatientMapper.fromPatient( await this.patientModel.findByIdAndUpdate(patientId, createUserDto, {new: true}));
  }

}
