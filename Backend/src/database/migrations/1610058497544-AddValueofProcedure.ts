import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddValueofProcedure1610058497544 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('procedures',
            new TableColumn(
                {
                    name: 'value',
                    type: 'integer',
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('procedures', 'value')
    }

}
