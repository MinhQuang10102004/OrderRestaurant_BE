import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    create(createPaymentDto: CreatePaymentDto): Promise<{
        id: bigint;
        status: string;
        order_id: bigint;
        amount: import("@prisma/client-runtime-utils").Decimal;
        method: string;
        transaction_id: string | null;
        payment_date: Date;
    }>;
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
    findOne(id: string): Promise<{
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
    }>;
    update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<{
        id: bigint;
        status: string;
        order_id: bigint;
        amount: import("@prisma/client-runtime-utils").Decimal;
        method: string;
        transaction_id: string | null;
        payment_date: Date;
    }>;
}
