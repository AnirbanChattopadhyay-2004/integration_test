-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "a" INTEGER NOT NULL DEFAULT 0,
    "b" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
