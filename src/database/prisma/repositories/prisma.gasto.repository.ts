import { gastoEntity } from 'src/domain/entities/gasto.entity';
import { PrismaService } from '../prisma.service';
import { GastoMapper } from '../mappers/gasto.mapper';

export class PrismaGastoRepository {
  constructor(private prisma: PrismaService) {}

  async create(entity: gastoEntity): Promise<gastoEntity | null> {
    const created = await this.prisma.gastos.create({
      data: {
        valor: entity.props.valor,
        descricao: entity.props.descricao,
        usuarioID: entity.props.usuarioID,
        data: entity.props.data,
      },
    });

    return this.findById(created.id);
  }

  async findById(id: number): Promise<gastoEntity | null> {
    const result = await this.prisma.gastos.findUnique({
      where: { id: id },
    });

    return result ? GastoMapper.toDomain(result) : null;
  }

  async delete(id: number): Promise<void> {
    const deleted = await this.prisma.gastos.delete({
      where: { id: id },
    });
  }

  async findAll(): Promise<gastoEntity[]> {
    const result = await this.prisma.gastos.findMany();

    return result.map(GastoMapper.toDomain);
  }

  async findByUserId(usuarioID: number): Promise<gastoEntity[] | null> {
    const result = await this.prisma.gastos.findMany({
      where: { usuarioID: usuarioID },
    });

    return result.map(GastoMapper.toDomain);
  }

  async update(id: number, entity: gastoEntity): Promise<gastoEntity | null> {
    const updated = await this.prisma.gastos.update({
      where: { id: id },
      data: {
        usuarioID: entity.props.usuarioID,
        descricao: entity.props.descricao,
        valor: entity.props.valor,
        data: entity.props.data,
      },
    });

    return this.findById(updated.id);
  }
}
