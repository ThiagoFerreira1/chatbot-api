import { IUserRepository } from "src/domain/repositories/user.repository";
import { PrismaService } from "../prisma.service";
import { User } from "src/domain/entities/user.entity";
import { UserMapper } from "../mappers/user.mapper";

export class PrismaUserRepository implements IUserRepository {
    constructor(private prisma: PrismaService) {}

    async create(entity: User): Promise<User | null> {
        const created = await this.prisma.user.create({
            data: {
                nome: entity.nome,
                telefone: entity.telefone,
                email: entity.email
            }
        });

        return this.findById(created.id);
    }

    async delete(id: string): Promise<void> {
        
    }

    async findAll(): Promise<User[]> {
        
    }

    async findById(id: string): Promise<User | null> {
        const result = await this.prisma.user.findUnique({
            where: { id: id }
        });

        return result ? UserMapper.toDomain(result) : null
    }

    async update(id: string, entity: Partial<User>): Promise<User | null> {
        
    }
}