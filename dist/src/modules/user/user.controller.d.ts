import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
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
    findAll(): string;
    findOne(id: string): Promise<{
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
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
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
    remove(id: string): Promise<{
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
