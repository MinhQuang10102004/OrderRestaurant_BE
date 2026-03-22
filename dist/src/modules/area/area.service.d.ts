import { AreaRepository } from './area.repository';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
export declare class AreaService {
    private readonly areaRepository;
    constructor(areaRepository: AreaRepository);
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
    findOne(id: bigint): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
    update(id: bigint, updateAreaDto: UpdateAreaDto): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
    remove(id: bigint): Promise<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
}
