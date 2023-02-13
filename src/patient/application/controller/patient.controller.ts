import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import {CreatePatientDto} from "../dto/request/createPatient.dto";
import {PatientService} from "../../service/patient.service";
import {PatientResponseDto} from "../dto/response/patientResponse.dto";

@Controller('patients')
export class PatientController {
    constructor(private patientService: PatientService){}

    @Post()
    create(@Body() patient: CreatePatientDto): Promise<PatientResponseDto> {
        return this.patientService.create(patient);
    }

    @Get()
    async findAll(): Promise<PatientResponseDto[]> {
        return this.patientService.findAll();
    }
}