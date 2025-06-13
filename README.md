# TypeORM view column has no type [Minimal reproducible example]

This is a minimal reproducible derived from [TypeORM playground sample](https://github.com/typeorm/typeorm/tree/42913b95d7fef864200841975ae01864b34be4e6/sample/playground).
It demonstrates that view columns have no [type](https://github.com/typeorm/typeorm/blob/42913b95d7fef864200841975ae01864b34be4e6/src/metadata/ColumnMetadata.ts#L55-L58)
defined in [DataSource.EntityMetadata.columns](https://github.com/typeorm/typeorm/blob/42913b95d7fef864200841975ae01864b34be4e6/src/metadata/EntityMetadata.ts#L230-L233).
See [./src/entity/User.ts](./src/entity/User.ts) for the table and view definition.
See [./src/index.ts](./src/index.ts) for the demonstration of the issue.

## Usage

Steps to run this project:

1. Run `npm i` command
2. Run `npm start` command

## Note

Since this project uses an in-memory database, all data is temporary and will be cleared when the application stops.
