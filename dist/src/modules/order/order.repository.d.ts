export declare class OrderRepository {
    private readonly prisma;
    findAll(): Promise<({
        table: {
            id: bigint;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            table_number: string;
            capacity: number;
            status: string;
            area_id: bigint;
        } | null;
        order_items: {
            id: bigint;
            status: string;
            notes: string | null;
            order_id: bigint;
            dish_id: bigint;
            quantity: number;
            price_at_order: import("@prisma/client-runtime-utils").Decimal;
        }[];
        customer: {
            id: bigint;
            full_name: string;
            email: string;
            password: string;
            phone: string | null;
            role_id: bigint;
            points: number;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
        } | null;
    } & {
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
    })[]>;
    findById(id: bigint): Promise<({
        table: {
            id: bigint;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            table_number: string;
            capacity: number;
            status: string;
            area_id: bigint;
        } | null;
        order_items: {
            id: bigint;
            status: string;
            notes: string | null;
            order_id: bigint;
            dish_id: bigint;
            quantity: number;
            price_at_order: import("@prisma/client-runtime-utils").Decimal;
        }[];
        customer: {
            id: bigint;
            full_name: string;
            email: string;
            password: string;
            phone: string | null;
            role_id: bigint;
            points: number;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
        } | null;
    } & {
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
    }) | null>;
    create(data: any): Promise<{
        order_items: {
            id: bigint;
            status: string;
            notes: string | null;
            order_id: bigint;
            dish_id: bigint;
            quantity: number;
            price_at_order: import("@prisma/client-runtime-utils").Decimal;
        }[];
    } & {
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
    }>;
    update(id: bigint, data: any): Promise<{
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
    }>;
    delete(id: bigint): Promise<{
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
    }>;
}
