import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

import User from './Users'

@Entity('requests')
class Requests{

@PrimaryGeneratedColumn('uuid')
id:string

@Column()
user_id:string

@Column()
procedure_id:string

@ManyToOne(() => User)
@JoinColumn({name: 'user_id'})
user: User

@CreateDateColumn()
created_at:string

@UpdateDateColumn()
update_at:string
}

export default Requests