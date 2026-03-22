import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
    }>;
    findAll(): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
    }>;
    remove(id: string): Promise<{
        id: bigint;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        image_url: string | null;
    }>;
}
