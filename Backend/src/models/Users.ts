import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import Requests from './Requests'

@Entity('users')
class User{

@PrimaryGeneratedColumn('uuid')
id:string

@Column()
name:string

@Column()
email:string

@Column()
cellphone:string

@Column()
password:string

@Column()
profile:string

@CreateDateColumn()
created_at:Date

@UpdateDateColumn()
update_at:Date

}

export default User