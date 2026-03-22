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
exports.CreateOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateOrderItemDto {
    dish_id;
    quantity;
    price_at_order;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Dish ID' }),
    __metadata("design:type", BigInt)
], CreateOrderItemDto.prototype, "dish_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Quantity' }),
    __metadata("design:type", Number)
], CreateOrderItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12.99, description: 'Price at order time' }),
    __metadata("design:type", Number)
], CreateOrderItemDto.prototype, "price_at_order", void 0);
class CreateOrderDto {
    customer_id;
    staff_id;
    table_id;
    total_amount;
    discount_amount;
    final_amount;
    status;
    items;
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Customer ID', required: false }),
    __metadata("design:type", BigInt)
], CreateOrderDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Staff ID', required: false }),
    __metadata("design:type", BigInt)
], CreateOrderDto.prototype, "staff_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Table ID', required: false }),
    __metadata("design:type", BigInt)
], CreateOrderDto.prototype, "table_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 25.98, description: 'Total amount' }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "total_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0, description: 'Discount amount', required: false }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "discount_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 25.98, description: 'Final amount' }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "final_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PENDING', description: 'Order Status' }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CreateOrderItemDto], description: 'List of ordered items' }),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "items", void 0);
//# sourceMappingURL=create-order.dto.js.map