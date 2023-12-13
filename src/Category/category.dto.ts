/* eslint-disable prettier/prettier */
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CategoryDto {
  @IsOptional()
  @IsUUID()
  id?: string;
  @IsString()
  name: string;
}
