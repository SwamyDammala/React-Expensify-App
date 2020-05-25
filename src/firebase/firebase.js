import * as firebase from 'firebase'


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  }

  firebase.initializeApp(config)
  
const database=firebase.database()

export {firebase , database as default}

// child_Removed
// database.ref('expenses').on('child_removed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })

// Child_Updated

// database.ref('expenses').on('child_changed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })

// Child-Added

// database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })

// database.ref('expenses').once('value').
//   then((snapshot)=>{
//     const newExpenses=[]
//       snapshot.forEach((childSnapshot)=>{
//         newExpenses.push({
//           id:childSnapshot.key,
//           ...childSnapshot.val()
//         })
//       })
//       console.log(newExpenses)
// })

// const onValueChange=database.ref('expenses').on('value',(snapshot)=>{
//   const newExpenses=[]
//       snapshot.forEach((childSnapshot)=>{
//         newExpenses.push({
//           id:childSnapshot.key,
//           ...childSnapshot.val()
//         })
//       })
//       console.log(newExpenses)
// })



// database.ref('expenses').push(expenses[0])
// database.ref('expenses').push(expenses[1])
// database.ref('expenses').push(expenses[2])

  
// Data writing
// database.ref().set({
//   name:'swamy',
//   age:27,
//   job:{
//     title:'Software Engineer',
//     location:'Chennai'
//   },
//   isMarried:false
// })

// database.ref('job/title').set('Software Developer')

// //Data deletion
// database.ref('isMarried').remove()
// .then(()=>{
//   console.log('Data has been removed!')
// }).catch((e)=>{
//   console.log(`Error : ${e}`)
// })

// //Data update
// database.ref().update({
//   name:'Dammala',
//   age:28,
//   'job/location':'Kakinada'
// }).then(()=>{
//   console.log('Data has been updaated')
// }).catch((e)=>{
//   console.log(`Error:${e}`)
// })





// Lets read the data
// const onValueChange=database.ref().on('value',(snapshot)=>{
//   console.log(snapshot.val())
// })

// setTimeout(()=>{
//   database.ref('age').set(29)
// },3500)

// setTimeout(()=>{
//   database.ref('age').set(30)
// },7000)

// setTimeout(()=>{
//   database.ref('age').set(31)
// },10500)

// setTimeout(()=>{
//   database.ref().off(onValueChange)
// },14000)

// setTimeout(()=>{
//   database.ref('age').set(32)
// },17500)

