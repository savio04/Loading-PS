import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('procedures')
class Procedure{

@PrimaryGeneratedColumn('uuid')
id:string

@Column()
name:string

@Column()
description:string

@Column()
avatar:string

@CreateDateColumn()
created_at:string

@UpdateDateColumn()
update_at:string
}

export default Procedure