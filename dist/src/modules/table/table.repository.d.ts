export declare class TableRepository {
    private readonly prisma;
    findAll(): Promise<({
        area: {
            id: bigint;
            name: string;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
        };
    } & {
        id: bigint;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        table_number: string;
        capacity: number;
        status: string;
        area_id: bigint;
    })[]>;
    findById(id: bigint): Promise<({
        area: {
            id: bigint;
            name: string;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
        };
    } & {
        id: bigint;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        table_number: string;
        capacity: number;
        status: string;
        area_id: bigint;
    }) | null>;
    create(data: any): Promise<{
        id: bigint;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        table_number: string;
        capacity: number;
        status: string;
        area_id: bigint;
    }>;
    update(id: bigint, data: any): Promise<{
        id: bigint;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        table_number: string;
        capacity: number;
        status: string;
        area_id: bigint;
    }>;
    delete(id: bigint): Promise<{
        id: bigint;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        table_number: string;
        capacity: number;
        status: string;
        area_id: bigint;
    }>;
}
