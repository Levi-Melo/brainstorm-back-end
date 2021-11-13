import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class courses1636762643602 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "courses",
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
            name: "description",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "category",
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
            name: "FK_course_USER",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user"],
          },
          {
            name: "FK_category_course",
            referencedTableName: "categories",
            referencedColumnNames: ["id"],
            columnNames: ["category"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("courses");
  }
}
