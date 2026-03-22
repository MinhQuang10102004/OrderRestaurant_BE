import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class CategoryRepository {
  private readonly prisma = new PrismaService();

  async findAll() {
    return this.prisma.category.findMany()
  }

  async findById(id: bigint) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.prisma.category.create({ data });
  }

  async update(id: bigint, data: any) {
    return this.prisma.category.update({ where: { id }, data });
  }

  async delete(id: bigint) {
    return this.prisma.category.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }
}
