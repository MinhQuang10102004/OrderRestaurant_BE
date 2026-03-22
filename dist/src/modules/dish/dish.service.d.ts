import { DishRepository } from './dish.repository';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
export declare class DishService {
    private readonly dishRepository;
    constructor(dishRepository: DishRepository);
    create(createDishDto: CreateDishDto): Promise<{
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
    findOne(id: bigint): Promise<{
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
    }>;
    update(id: bigint, updateDishDto: UpdateDishDto): Promise<{
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
    remove(id: bigint): Promise<{
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
