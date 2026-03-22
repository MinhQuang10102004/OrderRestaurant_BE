import { TableRepository } from './table.repository';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
export declare class TableService {
    private readonly tableRepository;
    constructor(tableRepository: TableRepository);
    create(createTableDto: CreateTableDto): Promise<{
        id: bigint;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        table_number: string;
        capacity: number;
        status: string;
        area_id: bigint;
    }>;
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
    findOne(id: bigint): Promise<{
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
    }>;
    update(id: bigint, updateTableDto: UpdateTableDto): Promise<{
        id: bigint;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        table_number: string;
        capacity: number;
        status: string;
        area_id: bigint;
    }>;
    remove(id: bigint): Promise<{
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
