import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { DishRepository } from './dish.repository';

@Module({
  controllers: [DishController],
  providers: [DishService, DishRepository],
  exports: [DishService],
})
export class DishModule {}
