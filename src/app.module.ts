import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { StudentModule } from './student/student.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { LecturerModule } from './lecturer/lecturer.module.js';
import { DepartmentModule } from './department/department.module.js';
import { AuthModule } from './auth/auth.module.js';
import { RolesModule } from './roles/roles.module.js';
import { UsersModule } from './users/users.module.js';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com,
    // then run `npx @nestjs/observe link` to write your key pair into .env.
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'school_management_system',
    }),
    StudentModule,
    PrismaModule,
    LecturerModule,
    DepartmentModule,
    AuthModule,
    RolesModule,
    UsersModule,
  ],
  
})
export class AppModule {}
