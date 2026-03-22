"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let DishRepository = class DishRepository {
    prisma = new prisma_service_1.PrismaService();
    async findAll() {
        return this.prisma.dish.findMany({ include: { category: true } });
    }
    async findById(id) {
        return this.prisma.dish.findUnique({ where: { id }, include: { category: true } });
    }
    async create(data) {
        return this.prisma.dish.create({ data });
    }
    async update(id, data) {
        return this.prisma.dish.update({ where: { id }, data });
    }
    async delete(id) {
        return this.prisma.dish.update({
            where: { id },
            data: { deleted_at: new Date() },
        });
    }
};
exports.DishRepository = DishRepository;
exports.DishRepository = DishRepository = __decorate([
    (0, common_1.Injectable)()
], DishRepository);
//# sourceMappingURL=dish.repository.js.map