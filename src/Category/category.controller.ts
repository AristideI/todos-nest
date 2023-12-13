/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('/cat')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  getAll() {
    return this.categoryService.sample();
  }
}
