import {Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res} from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import {CreatePatientDto} from "../dto/request/createPatient.dto";
import {PatientService} from "../../service/patient.service";
import {PatientResponseDto} from "../dto/response/patientResponse.dto";
import {ApiBody, ApiParam, ApiQuery, ApiResponse} from "@nestjs/swagger";

@Controller('patients')
export class PatientController {
  constructor(private patientService: PatientService){}

  @Post()
  @ApiBody({ type: CreatePatientDto })
  @ApiResponse({ type: PatientResponseDto, status: 200, description: 'Return a new created patient' })
  create(@Body() patient: CreatePatientDto): Promise<PatientResponseDto> {
    return this.patientService.create(patient);
  }

  @Get()
  @ApiResponse({ type: PatientResponseDto, status: 200, description: 'Return all patients' })
  async findAll(): Promise<PatientResponseDto[]> {
    return this.patientService.findAll();
  }

  @Get('/:id')
  @ApiParam( { name: 'id', required: true,})
  @ApiResponse({ type: PatientResponseDto, status: 200, description: 'Return a patient with a specific id' })
  async getPatient(@Param('id') patientId): Promise<PatientResponseDto> {
    return this.patientService.getPatient(patientId);
  }

  @Delete('/')
  @ApiQuery({ name: 'id', required: true})
  @ApiResponse({ type: PatientResponseDto, status: 200, description: 'Return deleted patient' })
  async deletePatient(@Query('id') patientId): Promise<PatientResponseDto> {
    return this.patientService.deletePatient(patientId);
  }

  @Put('/')
  @ApiQuery({ name: 'id', required: true})
  @ApiBody({ type: CreatePatientDto })
  @ApiResponse({ type: PatientResponseDto, status: 200, description: 'Return updated patient' })
  async updatePatient(@Query('id') patientId, @Body() createUserDto: CreatePatientDto): Promise<PatientResponseDto> {
    return this.patientService.updatePatient(patientId, createUserDto);
  }

}
