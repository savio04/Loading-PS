import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Procedure from './Procedures'

import User from './Users'

@Entity('requests')
class Requests{

@PrimaryGeneratedColumn('uuid')
id:string

@Column()
user_id:string

@Column()
procedure_id:string

@ManyToOne(() => User, user => user.requests, {eager : true})
@JoinColumn({name: 'user_id'})
user: User

@ManyToOne(() => Procedure, procedure => procedure.requests, {eager:true})
@JoinColumn({name: 'procedure_id'})
procedure:Procedure

@CreateDateColumn()
created_at:string

@UpdateDateColumn()
update_at:string
}

export default Requests