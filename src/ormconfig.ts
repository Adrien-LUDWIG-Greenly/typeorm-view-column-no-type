import "reflect-metadata"
import { DataSource } from "typeorm"
import { User, UserView } from "./entity/User.js"

export const AppDataSource = new DataSource({
    type: "sqljs",
    synchronize: true,
    logging: true,
    entities: [User, UserView],
})
