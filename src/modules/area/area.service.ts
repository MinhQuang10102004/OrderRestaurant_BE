import { Injectable, NotFoundException } from '@nestjs/common';
import { AreaRepository } from './area.repository';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreaService {
  constructor(private readonly areaRepository: AreaRepository) {}

  async create(createAreaDto: CreateAreaDto) {
    return this.areaRepository.create(createAreaDto);
  }

  async findAll() {
    return this.areaRepository.findAll();
  }

  async findOne(id: bigint) {
    const areaInfo = await this.areaRepository.findById(id);
    if (!areaInfo) {
      throw new NotFoundException('Area not found');
    }
    return areaInfo;
  }

  async update(id: bigint, updateAreaDto: UpdateAreaDto) {
    await this.findOne(id);
    return this.areaRepository.update(id, updateAreaDto);
  }

  async remove(id: bigint) {
    await this.findOne(id);
    return this.areaRepository.delete(id);
  }
}
