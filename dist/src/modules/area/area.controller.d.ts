import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
export declare class AreaController {
    private readonly areaService;
    constructor(areaService: AreaService);
    create(createAreaDto: CreateAreaDto): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
    findAll(): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
    update(id: string, updateAreaDto: UpdateAreaDto): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
    remove(id: string): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
}
