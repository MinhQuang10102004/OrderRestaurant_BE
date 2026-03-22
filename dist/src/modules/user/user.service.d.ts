import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
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
    findOne(id: bigint): Promise<{
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
    update(id: bigint, updateUserDto: UpdateUserDto): Promise<{
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
    remove(id: bigint): Promise<{
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
