import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class answers1636762969804 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "answers",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "text",
            type: "varchar",
          },
          {
            name: "user",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "active",
            type: "boolean",
          },
        ],
        foreignKeys: [
          {
            name: "FK_user_answers",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("answers");
  }
}
