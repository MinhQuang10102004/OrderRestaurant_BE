export declare class DishRepository {
    private readonly prisma;
    findAll(): Promise<({
        category: {
            id: bigint;
            name: string;
            description: string | null;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            image_url: string | null;
        };
    } & {
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
        price: import("@prisma/client-runtime-utils").Decimal;
        category_id: bigint;
        is_available: boolean;
    })[]>;
    findById(id: bigint): Promise<({
        category: {
            id: bigint;
            name: string;
            description: string | null;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            image_url: string | null;
        };
    } & {
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
        price: import("@prisma/client-runtime-utils").Decimal;
        category_id: bigint;
        is_available: boolean;
    }) | null>;
    create(data: any): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
        price: import("@prisma/client-runtime-utils").Decimal;
        category_id: bigint;
        is_available: boolean;
    }>;
    update(id: bigint, data: any): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
        price: import("@prisma/client-runtime-utils").Decimal;
        category_id: bigint;
        is_available: boolean;
    }>;
    delete(id: bigint): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
        price: import("@prisma/client-runtime-utils").Decimal;
        category_id: bigint;
        is_available: boolean;
    }>;
}
