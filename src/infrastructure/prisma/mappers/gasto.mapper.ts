import { Gasto as PrismaGasto } from '@prisma/client';
import { Gasto } from 'src/domain/entities/gasto.entity';

export class GastoMapper {
  static toDomain(prismaGasto: PrismaGasto): Gasto {
    return new Gasto(
      prismaGasto.userId,
      prismaGasto.descricao,
      prismaGasto.valor,
      prismaGasto.data,
      prismaGasto.id,
    );
  }
}
