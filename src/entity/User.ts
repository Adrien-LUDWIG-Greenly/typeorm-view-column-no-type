import { Entity, PrimaryGeneratedColumn, Column, ViewEntity, ViewColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number
}

@ViewEntity({
    expression: `SELECT * FROM user`
})
export class UserView extends User {
    @ViewColumn()
    foo: string = 'bar';
}
