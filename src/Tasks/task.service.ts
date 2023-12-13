/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import db from 'src/db';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  async getAll() {
    try {
      return await db.getData('/task');
    } catch (err) {
      return [];
    }
  }

  async getOne(id: string) {
    const allData = await this.getAll();
    return allData[await db.getIndex('/task', id)];
  }

  createTask(createTaskDto: TaskDto) {
    db.push('/task[]', createTaskDto).then(() => {
      return { id: createTaskDto.id, message: 'new task created' };
    });
  }

  async deleteTask(id: string) {
    try {
      const index = await db.getIndex('/task', id);
      db.delete(`/task[${index}]`).then(() => {
        return { message: 'task deleted' };
      });
    } catch (err) {
      throw new NotFoundException();
    }
  }
}
