import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class UserRepository {
  private readonly prisma = new PrismaService();

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findById(id: bigint) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: any) {
    return this.prisma.user.create({ data });
  }

  async update(id: bigint, data: any) {
    return this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: bigint) {
    return this.prisma.user.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }
}
