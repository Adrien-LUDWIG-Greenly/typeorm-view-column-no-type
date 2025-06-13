import { AppDataSource } from "./ormconfig.js";
import { User, UserView } from "./entity/User.js";

async function main() {
  try {
    const dataSource = await AppDataSource.initialize();
    console.log("Database initialized");

    const entityMetadatas = dataSource.entityMetadatas;

    const userTableMetadata = entityMetadatas.find(
      (entity) => entity.name === "User",
    );
    const userTableColumnId = userTableMetadata?.columns[0];
    console.log(
      `Column ${userTableColumnId?.propertyName} from User (table) has type: ${userTableColumnId?.type}`,
    );
    // Column id from User (table) has type: function Number() { [native code] }

    const userViewMetadata = entityMetadatas.find(
      (entity) => entity.name === "UserView",
    );
    const userViewColumnId = userViewMetadata?.columns[0];
    console.log(
      `Column ${userViewColumnId?.propertyName} from UserView has type: ${userViewColumnId?.type}`,
    );
    // Column id from UserView has type: function Number() { [native code] }

    const userViewColumnFoo = userViewMetadata?.columns[1];
    console.log(
      `Column ${userViewColumnFoo?.propertyName} from UserView has type: ${userViewColumnFoo?.type}`,
    );
    // Column foo from UserView has type: undefined

    await AppDataSource.destroy();
  } catch (error) {
    console.error("Error during Data Source initialization:", error);
    process.exit(1);
  }
}

await main();
