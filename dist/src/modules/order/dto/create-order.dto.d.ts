declare class CreateOrderItemDto {
    dish_id: bigint;
    quantity: number;
    price_at_order: number;
}
export declare class CreateOrderDto {
    customer_id?: bigint;
    staff_id?: bigint;
    table_id?: bigint;
    total_amount: number;
    discount_amount?: number;
    final_amount: number;
    status: string;
    items: CreateOrderItemDto[];
}
export {};
