import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import Requests from './Requests';


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

@Column()
value:number

@OneToMany(() => Requests, requests => requests.procedure)
requests:Requests

@CreateDateColumn()
created_at:string

@UpdateDateColumn()
update_at:string
}

export default Procedure