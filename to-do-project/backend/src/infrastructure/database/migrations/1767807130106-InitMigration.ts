import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1767807130106 implements MigrationInterface {
    name = 'InitMigration1767807130106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks_entity" ("id" SERIAL NOT NULL, "task" character varying NOT NULL, "description" character varying NOT NULL, "status" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_b27d5ab3487c9d60383845f1c08" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tasks_entity"`);
    }

}
