"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaService = void 0;
const common_1 = require("@nestjs/common");
const area_repository_1 = require("./area.repository");
let AreaService = class AreaService {
    areaRepository;
    constructor(areaRepository) {
        this.areaRepository = areaRepository;
    }
    async create(createAreaDto) {
        return this.areaRepository.create(createAreaDto);
    }
    async findAll() {
        return this.areaRepository.findAll();
    }
    async findOne(id) {
        const areaInfo = await this.areaRepository.findById(id);
        if (!areaInfo) {
            throw new common_1.NotFoundException('Area not found');
        }
        return areaInfo;
    }
    async update(id, updateAreaDto) {
        await this.findOne(id);
        return this.areaRepository.update(id, updateAreaDto);
    }
    async remove(id) {
        await this.findOne(id);
        return this.areaRepository.delete(id);
    }
};
exports.AreaService = AreaService;
exports.AreaService = AreaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [area_repository_1.AreaRepository])
], AreaService);
//# sourceMappingURL=area.service.js.map