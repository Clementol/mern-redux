// import {ApolloServer, gql} from 'apollo-server-micro';
// import {makeExecutableSchema} from 'graphql-tools';
// import mongoose from 'mongoose'
// import {default as chalk} from 'chalk'
// import {default as configure} from '../../config'
// // import dbConnect from '../../utils/dbConnect';
// import {MongoClient} from 'mongodb'
// const Item = require('../../backend/models/item.model')

// const uri = configure.ATLAS_URI
// mongoose.connect(uri, { useNewUrlParser: true,  useCreateIndex: true, useUnifiedTopology: true} )
//     .then( () => console.log(chalk.bgWhite.blue("MongoDB database connection established successfully")) )
//     .catch( err => console.log(chalk.bgRed.white(err)) )


// export default async (req, res) => {
//     const {method} = req;
//     switch (method) {
//         case "GET":
//             try {
//                 const items = await Item.find()
//                 res.status(200).json({success: true, data: items})
//             } catch (error) {
//                 res.status(400).json({success: false})
//             }
//             break;
//         case "POST":
//             try {
//                 const item = Item.create(req.body)
//                 res.status(201).json({success: true, data: item})
//             } catch (error) {
//                 res.status(400).json({success: false})

//             }
//             break;
//         default: 
//             res.status(400).json({success: false})
//             break;
//     }
 
// }


