export declare class CreatePaymentDto {
    order_id: bigint;
    amount: number;
    method: string;
    status: string;
    transaction_id?: string;
}
