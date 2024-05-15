import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { DbModule } from './db/db.module';
import { SchemaModule } from './schema/schema.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dp'),
    UserModule,
    ProjectModule,
    DbModule,
    SchemaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
