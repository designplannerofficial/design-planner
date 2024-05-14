import { PartialType } from '@nestjs/mapped-types';
import { CreateDbDto } from './create-db.dto';

export class UpdateDbDto extends PartialType(CreateDbDto) {}
