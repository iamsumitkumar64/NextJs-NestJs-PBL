import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class ConversationsMigration1767807130200 implements MigrationInterface {
    name = 'ConversationMigration1767807130108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "conversations",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment", },
                    { name: "creator_id", type: "int", },
                    { name: "is_group", type: "bool", default: false },
                    { name: "dual_user_ids", type: "varchar", isNullable: true },
                    { name: "created_at", type: "timestamp", default: "now()", },
                    { name: "updated_at", type: "timestamp", default: "now()", isNullable: true, },
                    { name: "deleted_at", type: "timestamp", isNullable: true, },
                ],
            }), true
        );

        await queryRunner.createForeignKey("conversations",
            new TableForeignKey({
                columnNames: ["creator_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                name: "CONVERSATION_USER_TABLE_REFERENCE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("conversations", "CONVERSATION_USER_TABLE_REFERENCE");
        await queryRunner.dropTable("conversations", true);
    }
}