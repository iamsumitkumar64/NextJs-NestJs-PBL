import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class MessagesMigration1767807130400 implements MigrationInterface {
    name = 'MessagesMigration1767807130110'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment", },
                    { name: "sender_id", type: "int", },
                    { name: "message", type: "varchar", },
                    { name: "conversation_id", type: "int", },
                    { name: "created_at", type: "timestamp", default: "now()", },
                    { name: "updated_at", type: "timestamp", default: "now()", isNullable: true, },
                    { name: "deleted_at", type: "timestamp", isNullable: true, },
                ],
            }), true
        );

        await queryRunner.createForeignKey("messages",
            new TableForeignKey({
                columnNames: ["sender_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                name: "MESSAGE_USER_TABLE_REFERENCE"
            })
        );

        await queryRunner.createForeignKey("messages",
            new TableForeignKey({
                columnNames: ["conversation_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "conversations",
                name: "MESSAGE_CONVERSATIONS_TABLE_REFERENCE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("messages", "USER_TABLE_REFERENCE");
        await queryRunner.dropForeignKey("messages", "CONVERSATIONS_TABLE_REFERENCE");
        await queryRunner.dropTable("messages", true);
    }
}
