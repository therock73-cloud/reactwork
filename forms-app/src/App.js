import React,{useState} from 'react';

const App = () => {
  const [fullName,setFullName] = useState({
    fname: "",
    lname: "",
    email:"",
    phone:"",
  });
const inputEvent = (obj) =>{
     const {value,name} = obj.target;
     setFullName((prev)=>{



      return {
        ...prev,
        [name]:value,

      };
      // if(name === 'fname'){
      //   return{
      //   fname:value,
      //   lname:prev.lname,
      //   email:prev.email,
      //   phone:prev.phone,
      //   };
      // }
      // else if(name === 'lname')
      //   {
      //     return{
      //       fname:prev.fname,
      //       lname:value,
      //       email:prev.email,
      //       phone:prev.phone,
      //       };
      //   }
      //   else if(name === 'email')
      //   {
      //     return{
      //       fname:prev.fname,
      //       lname:prev.lname,
      //       email:value,
      //       phone:prev.phone,
      //       };
      //   }
      //   else if(name === 'phone')
      //   {
      //     return{
      //       fname:prev.fname,
      //       lname:prev.lname,
      //       email:prev.email,
      //       phone:value,
      //       };
      //   }

    });
  }
const onSubmits = (events) =>{
  events.preventDefault();
  alert('form submited');
};
return(
    <>
  <div className='main_div'>
  <form onSubmit={onSubmits} >
  <div>
  <h1>Hellow {fullName.fname} {fullName.lname}</h1>
  <p>{fullName.email}</p>
  <p>{fullName.phone}</p>
  <input 
  type='text'
  placeholder='Enter Your Name'
  name="fname"
  onChange={inputEvent}
  value={fullName.fname}
  />
  <input 
  type='text'
  placeholder='Enter Your Last Name'
  name="lname"
  onChange={inputEvent}
  value={fullName.lname}
  />
  <input 
  type='email'
  placeholder='Enter Your Email'
  name="email"
  onChange={inputEvent}
  value={fullName.email}
  />
  <input 
  type='number'
  placeholder='Enter Your Phone Number'
  name="phone"
  onChange={inputEvent}
  value={fullName.phone}
  />
<button type='submit'>Click Me 😃</button>
</div>
  </form>
  </div>
  </>
  )
}

export default App;
