import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './Category/category.module';
import { TaskModule } from './Tasks/task.module';

@Module({
  imports: [CategoryModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
