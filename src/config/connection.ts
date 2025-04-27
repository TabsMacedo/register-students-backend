import mongoose from 'mongoose';

class Database {
  public async mongooseConnect() {
    await mongoose.connect(`${process.env.DATABASE_URI}`)
      .then(() => {
        if (process.env.NODE_ENV === 'production') {
          console.log('Server connected to MongoDatabase: production');
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('Server connected to MongoDatabase: development');
        }

        if (process.env.NODE_ENV === 'local') {
          console.log('Server connected to MongoDatabase: local');
        }
      })
      .catch((err) => {
        console.log(`Error connecting to MongoDatabase: ${err}`);
      });
  }
}

export default Database;
