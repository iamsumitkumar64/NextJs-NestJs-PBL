import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserMigration1767807130107 implements MigrationInterface {
    name = 'UserMigration1767807130107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment", },
                    { name: "username", type: "varchar", },
                    { name: "email", type: "varchar", },
                    { name: "password", type: "varchar", },
                    { name: "is_active", type: "boolean", default: "true", },
                    { name: "is_online", type: "boolean", default: "true", },
                    { name: "last_seen_at", type: "timestamp", isNullable: true, },
                    { name: "created_at", type: "timestamp", default: "now()", },
                    { name: "updated_at", type: "timestamp", default: "now()", isNullable: true, },
                    { name: "deleted_at", type: "timestamp", isNullable: true, },
                ],
            }), true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users", true)
    }

}
