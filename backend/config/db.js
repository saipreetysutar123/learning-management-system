import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb://saipreetysutar2315_db_user:Saipreetysutar@ac-n9qx57s-shard-00-00.9gjo9xc.mongodb.net:27017,ac-n9qx57s-shard-00-01.9gjo9xc.mongodb.net:27017,ac-n9qx57s-shard-00-02.9gjo9xc.mongodb.net:27017/?ssl=true&replicaSet=atlas-auz1eh-shard-0&authSource=admin&appName=Cluster0')
        .then(() => { console.log("DB Connected") })
}