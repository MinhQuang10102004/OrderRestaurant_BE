import { DishService } from './dish.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
export declare class DishController {
    private readonly dishService;
    constructor(dishService: DishService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateDishDto: UpdateDishDto): Promise<{
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
    remove(id: string): Promise<{
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
