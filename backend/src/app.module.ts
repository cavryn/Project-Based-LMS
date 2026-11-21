import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { CoursesModule } from './modules/courses/courses.module.js';
import { GroupsModule } from './modules/groups/groups.module.js';
import { MilestonesModule } from './modules/milestones/milestones.module.js';
import { RubricsModule } from './modules/rubrics/rubrics.module.js';
import { AssessmentsModule } from './modules/assessments/assessments.module.js';
import { GradesModule } from './modules/grades/grades.module.js';
import { DiscussionsModule } from './modules/discussions/discussions.module.js';
import { ExportsModule } from './modules/exports/exports.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    AuthModule,
    UsersModule,
    CoursesModule,
    GroupsModule,
    MilestonesModule,
    RubricsModule,
    AssessmentsModule,
    GradesModule,
    DiscussionsModule,
    ExportsModule,
  ],
})
export class AppModule {}
