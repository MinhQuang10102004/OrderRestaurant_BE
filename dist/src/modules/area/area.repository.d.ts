export declare class AreaRepository {
    private readonly prisma;
    findAll(): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }[]>;
    findById(id: bigint): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    } | null>;
    create(data: any): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
    update(id: bigint, data: any): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
    delete(id: bigint): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
}
