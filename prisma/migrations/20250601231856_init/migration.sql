-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "telefone" VARCHAR(15),
    "email" VARCHAR(100),
    "dataCriacao" TIMESTAMP(3) NOT NULL,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gastos" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "descricao" VARCHAR(255),
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioID" INTEGER NOT NULL,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gastos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_telefone_key" ON "Usuarios"("telefone");

-- AddForeignKey
ALTER TABLE "Gastos" ADD CONSTRAINT "Gastos_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
