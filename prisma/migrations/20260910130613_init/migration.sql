-- CreateTable
CREATE TABLE "Drop" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "dropLink" TEXT NOT NULL,
    "accessedBy" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Drop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Drop_dropLink_key" ON "Drop"("dropLink");
