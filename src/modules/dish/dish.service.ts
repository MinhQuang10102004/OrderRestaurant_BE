import { Injectable, NotFoundException } from '@nestjs/common';
import { DishRepository } from './dish.repository';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Injectable()
export class DishService {
  constructor(private readonly dishRepository: DishRepository) {}

  async create(createDishDto: CreateDishDto) {
    return this.dishRepository.create(createDishDto);
  }

  async findAll() {
    return this.dishRepository.findAll();
  }

  async findOne(id: bigint) {
    const dish = await this.dishRepository.findById(id);
    if (!dish) {
      throw new NotFoundException('Dish not found');
    }
    return dish;
  }

  async update(id: bigint, updateDishDto: UpdateDishDto) {
    await this.findOne(id);
    return this.dishRepository.update(id, updateDishDto);
  }

  async remove(id: bigint) {
    await this.findOne(id);
    return this.dishRepository.delete(id);
  }
}
