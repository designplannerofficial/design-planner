import { Injectable } from '@nestjs/common';
import { CreateDbDto } from './dto/create-db.dto';
import { UpdateDbDto } from './dto/update-db.dto';

@Injectable()
export class DbService {
  create(createDbDto: CreateDbDto) {
    return 'This action adds a new db';
  }

  findAll() {
    return `This action returns all db`;
  }

  findOne(id: number) {
    return `This action returns a #${id} db`;
  }

  update(id: number, updateDbDto: UpdateDbDto) {
    return `This action updates a #${id} db`;
  }

  remove(id: number) {
    return `This action removes a #${id} db`;
  }
}
