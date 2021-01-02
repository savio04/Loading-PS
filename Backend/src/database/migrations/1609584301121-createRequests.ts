import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createRequests1609584301121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'requests',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'procedure_id',
                        type: 'uuid'
                    },
                    {
                        name: 'user_id',
                        type: 'uuid'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'update_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'requests',
            new TableForeignKey({
                name: 'KeyUsers',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        )


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('requests')
        await queryRunner.dropForeignKey('requests','KeyUsers')
    }

}
