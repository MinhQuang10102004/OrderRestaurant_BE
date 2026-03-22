import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class AreaRepository {
  private readonly prisma = new PrismaService();

  async findAll() {
    return this.prisma.area.findMany();
  }

  async findById(id: bigint) {
    return this.prisma.area.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.prisma.area.create({ data });
  }

  async update(id: bigint, data: any) {
    return this.prisma.area.update({ where: { id }, data });
  }

  async delete(id: bigint) {
    return this.prisma.area.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }
}
