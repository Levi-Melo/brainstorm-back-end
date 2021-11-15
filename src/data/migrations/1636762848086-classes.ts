import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class classes1636762848086 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "classes",
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
            name: "link",
            type: "varchar",
          },
          {
            name: "course",
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
            name: "FK_course_classes",
            referencedTableName: "courses",
            referencedColumnNames: ["id"],
            columnNames: ["course"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("classes");
  }
}
