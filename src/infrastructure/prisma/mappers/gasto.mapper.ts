import { Gastos as PrismaGasto } from '@prisma/client';
import { Gasto, gastoEntity } from 'src/domain/entities/gasto.entity';

export class GastoMapper {
  static toDomain(prismaGasto: PrismaGasto): gastoEntity {
    const data = {
      ...prismaGasto
    };

    return new gastoEntity(data, prismaGasto.id);
  }
}
