import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class TaskMigration1767807130108 implements MigrationInterface {
    name = 'TaskMigration1767807130108';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."TaskStatusEnum" AS ENUM('1','2','3')`);

        await queryRunner.createTable(
            new Table({
                name: "tasks",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment", },
                    { name: "task", type: "varchar", },
                    { name: "description", type: "varchar", },
                    { name: "status", type: "enum", enumName: "TaskStatusEnum" },
                    { name: "user_id", type: "int", isNullable: true },
                    { name: "created_at", type: "timestamp", default: "now()", },
                    { name: "updated_at", type: "timestamp", default: "now()", },
                    { name: "deleted_at", type: "timestamp", isNullable: true, },
                ],
            }),
            true
        );

        await queryRunner.createForeignKey("tasks",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                name: "USER_TABLE_REFERENCE"
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("tasks", "USER_TABLE_REFERENCE");
        await queryRunner.dropTable("tasks", true);
        await queryRunner.query(`DROP TYPE "public"."TaskStatusEnum"`);
    }
}
