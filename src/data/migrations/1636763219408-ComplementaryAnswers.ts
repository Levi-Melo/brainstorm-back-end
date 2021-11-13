import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ComplementaryAnswers1636763219408 implements MigrationInterface {
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
            name: "answer",
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
            name: "FK_user_complementary_answer",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user"],
          },
          {
            name: "FK_complementary_answer_answers",
            referencedTableName: "answers",
            referencedColumnNames: ["id"],
            columnNames: ["answer"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("answers");
  }
}
