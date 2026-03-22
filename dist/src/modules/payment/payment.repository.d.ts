export declare class PaymentRepository {
    private readonly prisma;
    findAll(): Promise<({
        order: {
            id: bigint;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            status: string;
            customer_id: bigint | null;
            staff_id: bigint | null;
            table_id: bigint | null;
            total_amount: import("@prisma/client-runtime-utils").Decimal;
            discount_amount: import("@prisma/client-runtime-utils").Decimal;
            final_amount: import("@prisma/client-runtime-utils").Decimal;
            notes: string | null;
            voucher_id: bigint | null;
        };
    } & {
        id: bigint;
        status: string;
        order_id: bigint;
        amount: import("@prisma/client-runtime-utils").Decimal;
        method: string;
        transaction_id: string | null;
        payment_date: Date;
    })[]>;
    findById(id: bigint): Promise<({
        order: {
            id: bigint;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            status: string;
            customer_id: bigint | null;
            staff_id: bigint | null;
            table_id: bigint | null;
            total_amount: import("@prisma/client-runtime-utils").Decimal;
            discount_amount: import("@prisma/client-runtime-utils").Decimal;
            final_amount: import("@prisma/client-runtime-utils").Decimal;
            notes: string | null;
            voucher_id: bigint | null;
        };
    } & {
        id: bigint;
        status: string;
        order_id: bigint;
        amount: import("@prisma/client-runtime-utils").Decimal;
        method: string;
        transaction_id: string | null;
        payment_date: Date;
    }) | null>;
    create(data: any): Promise<{
        id: bigint;
        status: string;
        order_id: bigint;
        amount: import("@prisma/client-runtime-utils").Decimal;
        method: string;
        transaction_id: string | null;
        payment_date: Date;
    }>;
    update(id: bigint, data: any): Promise<{
        id: bigint;
        status: string;
        order_id: bigint;
        amount: import("@prisma/client-runtime-utils").Decimal;
        method: string;
        transaction_id: string | null;
        payment_date: Date;
    }>;
}
