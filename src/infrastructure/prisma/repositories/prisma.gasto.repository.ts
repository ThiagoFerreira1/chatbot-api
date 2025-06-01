import { Gasto } from "src/domain/entities/gasto.entity";
import { IGastoRepository } from "src/domain/repositories/gasto.repository";
import { PrismaService } from "../prisma.service";
import { GastoMapper } from "../mappers/gasto.mapper";

export class PrismaGastoRepository implements IGastoRepository {
    constructor(private prisma: PrismaService) {}
   
    async findById(id: string): Promise<Gasto | null> {
        const result = await this.prisma.gasto.findUnique({
            where: { id: id }    
        });

        return result ? GastoMapper.toDomain(result) : null;
    }

    async create(entity: Gasto): Promise<Gasto | null> {
        const created = await this.prisma.gasto.create({
            data: {
                valor: entity.valor,
                descricao: entity.descricao,
                data: entity.data,
                userId: entity.usuarioId,
            },
        })

        return this.findById(created.id)
    }

    async delete(id: string): Promise<void> {
        const deleted = await this.prisma.gasto.delete({
            where: { id: id }
        });
    }

    async findAll(): Promise<Gasto[]> {
        const result = await this.prisma.gasto.findMany();

        return result.map(GastoMapper.toDomain);
    }


    async findByUserId(userId: string): Promise<Gasto[]> {
        const result = await this.prisma.gasto.findMany({
            where: {userId : userId}
        });

       return result.map(GastoMapper.toDomain); 
    }

    async update(id: string, entity: Partial<Gasto>): Promise<Gasto | null> {
        const updated = await this.prisma.gasto.update({
            where: { id: id },
            data: {
                data: entity.data,
                descricao: entity.descricao,
                valor: entity.valor,
                userId: entity.usuarioId
            }
        })

        return this.findById(updated.id)
    }
}