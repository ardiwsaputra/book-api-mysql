## Starter Express API Template with Sequilize CLI, Auth, and Role Access

## CLI:
#### Start with Nodemon
```
npm start
```
#### DB
- Create DB:
```
npm run db-create
```
- Drop DB:
```
npm run db-drop
```
- Migrate DB (Based On Reference Seed & Migration):
```
npm run db-migrate
```
- Seed DB (Based On Reference Seed & Migration):
```
npm run db-seed
```
#### Model
- Create Model & Migration (Based On Reference Seed & Migration):
```
npx sequelize-cli model:generate --name CategoryProduct --attributes title:string,description:string
```

## REFERENCE:
#### Auth:
- https://www.bezkoder.com/node-js-jwt-authentication-mysql/
#### Data Types Sequelize
- https://sequelize.org/master/manual/model-basics.html#data-types
#### Generate OTP Email:
- https://stackoverflow.com/questions/39092822/how-to-confirm-email-address-using-express-node
#### Seed & Migration
- https://sequelize.org/master/manual/migrations.html