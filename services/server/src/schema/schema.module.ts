import { Module } from '@nestjs/common';
import { SchemaService } from './schema.service';
import { SchemaController } from './schema.controller';

@Module({
  controllers: [SchemaController],
  providers: [SchemaService],
})
export class SchemaModule {}
