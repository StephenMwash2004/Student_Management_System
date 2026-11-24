import { Module } from '@nestjs/common';
import { LecturerController } from './lecturer.controller.js';
import { LecturerService } from './lecturer.service.js';

@Module({
  controllers: [LecturerController],
  providers: [LecturerService]
})
export class LecturerModule {}
