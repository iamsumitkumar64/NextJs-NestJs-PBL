import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class MembersMigration1767807130300 implements MigrationInterface {
    name = 'MemberMigration1767807130109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "members",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment", },
                    { name: "user_id", type: "int" },
                    { name: "conversation_id", type: "int", },
                    { name: "created_at", type: "timestamp", default: "now()", },
                    { name: "updated_at", type: "timestamp", default: "now()", isNullable: true, },
                    { name: "deleted_at", type: "timestamp", isNullable: true, },
                ],
            }), true
        );

        await queryRunner.createForeignKey("members",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                name: "MEMBER_USER_TABLE_REFERENCE"
            })
        );

        await queryRunner.createForeignKey("members",
            new TableForeignKey({
                columnNames: ["conversation_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "conversations",
                name: "MEMBER_CONVERSATIONS_TABLE_REFERENCE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("members", "USER_TABLE_REFERENCE");
        await queryRunner.dropForeignKey("members", "CONVERSATIONS_TABLE_REFERENCE");
        await queryRunner.dropTable("members", true);
    }
}
