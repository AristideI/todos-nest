/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { TaskService } from './task.service';
import { Status, TaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAll();
  }

  @Get(':id')
  getOneTask(@Param('id') id: string) {
    return this.taskService.getOne(id);
  }

  @Post()
  createTask(@Body() body: TaskDto) {
    const newTask: TaskDto = { ...body, id: uuidv4(), status: Status.OPEN };
    return this.taskService.createTask(newTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
