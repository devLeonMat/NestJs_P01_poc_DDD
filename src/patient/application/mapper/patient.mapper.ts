import {CreatePatientDto} from "../dto/request/createPatient.dto";
import {Patients} from "../../persistence/schemas/patients";
import {PatientResponseDto} from "../dto/response/patientResponse.dto";

export class PatientMapper {

    static toPatient(createPatient: CreatePatientDto) {
        const patient = new Patients();
        patient.first_name = createPatient.firstName;
        patient.last_name = createPatient.lastName;
        patient.email = createPatient.email;
        patient.gender = createPatient.gender;
        patient.age = createPatient.age;
        patient.height = createPatient.height;
        return patient;
    }

    static fromPatient(patient: Patients){
        const patientResponseDto = new PatientResponseDto();
        patientResponseDto.id = patient._id.toString();
        patientResponseDto.firstName = patient.first_name;
        patientResponseDto.lastName = patient.last_name;
        patientResponseDto.email = patient.email;
        patientResponseDto.gender = patient.gender;
        patientResponseDto.age = patient.age;
        patientResponseDto.height = patient.height;
        return patientResponseDto;
    }
}