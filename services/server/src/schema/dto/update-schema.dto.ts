import { PartialType } from '@nestjs/mapped-types';
import { CreateSchemaDto } from './create-schema.dto';

export class UpdateSchemaDto extends PartialType(CreateSchemaDto) {}
