/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryDto } from './category.dto';
import db from 'src/db';

@Injectable()
export class CategoryService {
  async getAll() {
    try {
      return await db.getData('/categories');
    } catch (error) {
      return [];
    }
  }

  async createCategory(createCategoryDto: CategoryDto) {
    await db.push('/categories[]', createCategoryDto).then(() => {
      return {
        id: createCategoryDto.id,
        message: 'Category was successfullt created',
      };
    });
  }

  async deleteCategory(id: string) {
    try {
      const index = await db.getIndex('/categories', id);
      await db.delete(`/categories[${index}]`).then(() => {
        return { message: 'category deleted' };
      });
    } catch (err) {
      throw new NotFoundException();
    }
  }
}
