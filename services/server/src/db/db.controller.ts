import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DbService } from './db.service';
import { CreateDbDto } from './dto/create-db.dto';
import { UpdateDbDto } from './dto/update-db.dto';

@Controller('db')
export class DbController {
  constructor(private readonly dbService: DbService) {}

  @Post()
  create(@Body() createDbDto: CreateDbDto) {
    return this.dbService.create(createDbDto);
  }

  @Get()
  findAll() {
    return this.dbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDbDto: UpdateDbDto) {
    return this.dbService.update(+id, updateDbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dbService.remove(+id);
  }
}
