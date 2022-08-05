import { useEffect, useState } from 'react';
import { db } from './Firebase-config'
import { collection, doc, getDocs } from 'firebase/firestore';
function App() {
  let [user, setuser] = useState([]);
  let adress = collection(db, 'user');

  useEffect(() => {
    let userStore = async () => {
      let userinfo = await getDocs(adress);
      // console.log(userinfo.docs);
      // userinfo.docs.map((doc) => {
      //   console.log(doc.data())
      // })
      setuser(userinfo.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      // extract user id;
      userinfo.docs.map(doc => {
        console.log({ ...doc.data(), id: doc.id })

      })

    }
    // console.log(user)

    userStore();
  }, [])


  return (

    <>
      <div className="div">

        <h1>
          {user.map((info) => { return info.id })}
          <br />
          {user.map((info) => { return info.Name })}
          <br />
          {user.map((info) => { return info.Age })}
          <br />
          {user.map((info) => { return info.Gender })}
          <br />
          {user.map((info) => { return info.District })}


        </h1>

      </div>
    </>

  );
}

export default App;
