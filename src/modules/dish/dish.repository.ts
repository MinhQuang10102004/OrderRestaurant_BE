import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class DishRepository {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return this.prisma.dish.findMany({ include: { category: true } });
  }

  async findById(id: bigint) {
    return this.prisma.dish.findUnique({ where: { id }, include: { category: true } });
  }

  async create(data: any) {
    return this.prisma.dish.create({ data });
  }

  async update(id: bigint, data: any) {
    return this.prisma.dish.update({ where: { id }, data });
  }

  async delete(id: bigint) {
    return this.prisma.dish.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }
}
