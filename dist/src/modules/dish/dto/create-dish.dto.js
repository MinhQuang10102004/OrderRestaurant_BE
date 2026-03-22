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
exports.CreateDishDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateDishDto {
    name;
    description;
    price;
    image_url;
    category_id;
    is_available;
}
exports.CreateDishDto = CreateDishDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Spaghetti Bolognese', description: 'Dish name' }),
    __metadata("design:type", String)
], CreateDishDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Classic Italian pasta', description: 'Dish description', required: false }),
    __metadata("design:type", String)
], CreateDishDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12.99, description: 'Price' }),
    __metadata("design:type", Number)
], CreateDishDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'http://example.com/dish.png', description: 'Image URL', required: false }),
    __metadata("design:type", String)
], CreateDishDto.prototype, "image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Category ID' }),
    __metadata("design:type", BigInt)
], CreateDishDto.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Is available or out of stock', required: false, default: true }),
    __metadata("design:type", Boolean)
], CreateDishDto.prototype, "is_available", void 0);
//# sourceMappingURL=create-dish.dto.js.map