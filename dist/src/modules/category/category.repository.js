"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let CategoryRepository = class CategoryRepository {
    prisma = new prisma_service_1.PrismaService();
    async findAll() {
        return this.prisma.category.findMany();
    }
    async findById(id) {
        return this.prisma.category.findUnique({ where: { id } });
    }
    async create(data) {
        return this.prisma.category.create({ data });
    }
    async update(id, data) {
        return this.prisma.category.update({ where: { id }, data });
    }
    async delete(id) {
        return this.prisma.category.update({
            where: { id },
            data: { deleted_at: new Date() },
        });
    }
};
exports.CategoryRepository = CategoryRepository;
exports.CategoryRepository = CategoryRepository = __decorate([
    (0, common_1.Injectable)()
], CategoryRepository);
//# sourceMappingURL=category.repository.js.map