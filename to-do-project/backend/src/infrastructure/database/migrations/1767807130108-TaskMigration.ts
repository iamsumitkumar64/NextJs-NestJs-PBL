import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TaskMigration1767807130108 implements MigrationInterface {
    name = 'TaskMigration1767807130108';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tasks_entity",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment", },
                    { name: "task", type: "varchar", },
                    { name: "description", type: "varchar", },
                    { name: "status", type: "int", },
                    { name: "created_at", type: "timestamp", default: "now()", },
                    { name: "updated_at", type: "timestamp", default: "now()", },
                    { name: "deleted_at", type: "timestamp", isNullable: true, },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tasks_entity", true);
    }
}
