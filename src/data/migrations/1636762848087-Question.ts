import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Question1636762848087 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "questions",
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
            name: "class",
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
          {
            name: "FK_class_answers",
            referencedTableName: "classes",
            referencedColumnNames: ["id"],
            columnNames: ["class_id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("questions");
  }
}
