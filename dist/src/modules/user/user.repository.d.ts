export declare class UserRepository {
    private readonly prisma;
    findAll(): Promise<{
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
    }[]>;
    findById(id: bigint): Promise<{
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
    } | null>;
    findByEmail(email: string): Promise<{
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
    } | null>;
    create(data: any): Promise<{
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
    }>;
    update(id: bigint, data: any): Promise<{
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
    }>;
    delete(id: bigint): Promise<{
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
    }>;
}
