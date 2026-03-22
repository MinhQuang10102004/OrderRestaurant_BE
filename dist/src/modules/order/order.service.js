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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_repository_1 = require("./order.repository");
let OrderService = class OrderService {
    orderRepository;
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async create(createOrderDto) {
        const { items, ...orderData } = createOrderDto;
        const createData = {
            ...orderData,
            order_items: {
                create: items.map(item => ({
                    dish_id: item.dish_id,
                    quantity: item.quantity,
                    price_at_order: item.price_at_order,
                    status: 'PENDING'
                }))
            }
        };
        return this.orderRepository.create(createData);
    }
    async findAll() {
        return this.orderRepository.findAll();
    }
    async findOne(id) {
        const orderInfo = await this.orderRepository.findById(id);
        if (!orderInfo) {
            throw new common_1.NotFoundException('Order not found');
        }
        return orderInfo;
    }
    async update(id, updateOrderDto) {
        await this.findOne(id);
        return this.orderRepository.update(id, updateOrderDto);
    }
    async remove(id) {
        await this.findOne(id);
        return this.orderRepository.delete(id);
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository])
], OrderService);
//# sourceMappingURL=order.service.js.map