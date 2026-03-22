import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
export declare class TableController {
    private readonly tableService;
    constructor(tableService: TableService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateTableDto: UpdateTableDto): Promise<{
        id: bigint;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        table_number: string;
        capacity: number;
        status: string;
        area_id: bigint;
    }>;
    remove(id: string): Promise<{
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
