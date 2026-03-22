"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let AreaRepository = class AreaRepository {
    prisma = new prisma_service_1.PrismaService();
    async findAll() {
        return this.prisma.area.findMany();
    }
    async findById(id) {
        return this.prisma.area.findUnique({ where: { id } });
    }
    async create(data) {
        return this.prisma.area.create({ data });
    }
    async update(id, data) {
        return this.prisma.area.update({ where: { id }, data });
    }
    async delete(id) {
        return this.prisma.area.update({
            where: { id },
            data: { deleted_at: new Date() },
        });
    }
};
exports.AreaRepository = AreaRepository;
exports.AreaRepository = AreaRepository = __decorate([
    (0, common_1.Injectable)()
], AreaRepository);
//# sourceMappingURL=area.repository.js.map