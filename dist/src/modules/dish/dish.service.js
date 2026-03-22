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
exports.DishService = void 0;
const common_1 = require("@nestjs/common");
const dish_repository_1 = require("./dish.repository");
let DishService = class DishService {
    dishRepository;
    constructor(dishRepository) {
        this.dishRepository = dishRepository;
    }
    async create(createDishDto) {
        return this.dishRepository.create(createDishDto);
    }
    async findAll() {
        return this.dishRepository.findAll();
    }
    async findOne(id) {
        const dish = await this.dishRepository.findById(id);
        if (!dish) {
            throw new common_1.NotFoundException('Dish not found');
        }
        return dish;
    }
    async update(id, updateDishDto) {
        await this.findOne(id);
        return this.dishRepository.update(id, updateDishDto);
    }
    async remove(id) {
        await this.findOne(id);
        return this.dishRepository.delete(id);
    }
};
exports.DishService = DishService;
exports.DishService = DishService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dish_repository_1.DishRepository])
], DishService);
//# sourceMappingURL=dish.service.js.map