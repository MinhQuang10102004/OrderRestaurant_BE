export declare class CategoryRepository {
    private readonly prisma;
    findAll(): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
    }[]>;
    findById(id: bigint): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
    } | null>;
    create(data: any): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
    }>;
    update(id: bigint, data: any): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
    }>;
    delete(id: bigint): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
    }>;
}
