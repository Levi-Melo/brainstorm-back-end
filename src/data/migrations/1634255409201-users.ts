import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class users1634255409201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "rg",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "active",
            type: "boolean",
          },
          {
            name: "confirmation_code",
            type: "varchar",
          },
          {
            name: "confirmed_account",
            type: "boolean",
          },
          {
            name: "role_id",
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
            name: "FK_USER_ROLE",
            referencedTableName: "roles",
            referencedColumnNames: ["id"],
            columnNames: ["role_id"],
          },
        ],
        uniques: [
          {
            name: "cpf",
            columnNames: ["cpf"],
          },
          {
            name: "rg",
            columnNames: ["rg"],
          },
          {
            name: "email",
            columnNames: ["email"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
