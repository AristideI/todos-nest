/* eslint-disable prettier/prettier */
import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';

export enum Status {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  OPEN = 'OPEN',
}

export class TaskDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  title: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsString()
  description: string;

  @IsUUID()
  catId: string;
}
