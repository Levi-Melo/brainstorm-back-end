import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class usersClasses1636763351624 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_answers",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
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
        ],
        foreignKeys: [
          {
            name: "FK_USERCLASSES_USER",
            referencedTableName: "classes",
            referencedColumnNames: ["id"],
            columnNames: ["user"],
          },
          {
            name: "FK_USERclasses_classes",
            referencedTableName: "classes",
            referencedColumnNames: ["id"],
            columnNames: ["class"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users_answers");
  }
}
