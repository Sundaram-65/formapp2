import { useState } from 'react';
import './index.css';

function App() {

  const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",country:"India",streetAdd:"",city:"",state:"",postalcode:"",comments:false,candidates:false,offers:false,pushNoti:""})
  
  
  function changeHandler(event){
    const {name ,type,checked,value}=event.target;
    setFormData({...formData,[name]: type==="checkbox" ? checked : value})
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className='flex flex-col items-center justify-center mt-2 '>
      <form onSubmit={submitHandler}>
       <label htmlFor='firstName'>First name</label>
       <br/>
       <input 
       type='text'
       id='firstName' 
       name='firstName'
       placeholder='Pranay'
       value={formData.firstName}
       onChange={changeHandler}
       className='border-2 border-blue-200 rounded-sm'
       />
       <br/>

       <label htmlFor='lastName'>Last name</label>
       <br/>
       <input 
       type='text'
       id='lastName'
       name='lastName'
       placeholder='Gupta'
       value={formData.lastName}
       onChange={changeHandler}
        className='border-2 border-blue-200 rounded-sm'
       />
       <br/>

       <label htmlFor='email'>Email</label>
       <br/>
       <input 
       type='email'
       id='email'
       name='email'
       placeholder='sg@gmail.com'
       value={formData.email}
       onChange={changeHandler}
        className='border-2 border-blue-200 rounded-sm'
       />
       <br/>

      <label htmlFor='country'>Country</label>
      <br/>
      <select name='country' id='country' onChange={changeHandler} value={formData.country} className='border-2 border-blue-200 rounded-sm'>
        <option value="India">India</option>
        <option value="Australia">Australia</option>
        <option value="Australia">Nepal</option>
      </select>
      <br/>

      <label htmlFor='streetAdd'>Street Address</label>
       <br/>
       <input 
       type='text'
       id='streetAdd'
       name='streetAdd'
       placeholder='H-41 Fort Enclave Colony'
       value={formData.streetAdd}
       onChange={changeHandler}
        className='border-2 border-blue-200 rounded-sm'
       />
       <br/>
      
      <label htmlFor='city'>City</label>
       <br/>
       <input 
       type='text'
       id='city'
       name='city'
       placeholder='Gwalior'
       value={formData.city}
       onChange={changeHandler}
        className='border-2 border-blue-200 rounded-sm'
       />
       <br/>
      
      <label htmlFor='state'>State</label>
       <br/>
       <input 
       type='text'
       id='state'
       name='state'
       placeholder='MP'
       value={formData.state}
       onChange={changeHandler}
        className='border-2 border-blue-200 rounded-sm'
       />
       <br/>

       <label htmlFor='postalcode'>Postal Code</label>
       <br/>
       <input 
       type='text'
       id='postalcode'
       name='postalcode'
       placeholder='475673'
       value={formData.postalcode}
       onChange={changeHandler}
        className='border-2 border-blue-200 rounded-sm'
       />
       <br/>
      <br/>
       
      <fieldset className='flex flex-col'>
          <legend>By Email</legend>
          
          <div className='flex'>

            <input type='checkbox' id='comments' name='comments' checked={formData.comments} onChange={changeHandler}></input>

            <div>
            <label htmlFor='comments'> Comments </label>
            <p>Get notified</p>
            </div>
          </div>

          <div className='flex'>

            <input type='checkbox' id='candidates' name='candidates' checked={formData.candidates} onChange={changeHandler}></input>

            <div>
            <label htmlFor='candidates'> Candidates </label>
            <p>Get notified</p>
            </div>
          </div>

          <div className='flex'>

             <input type='checkbox' id='offers' name='offers' checked={formData.offers} onChange={changeHandler}></input>

            <div>
            <label htmlFor='candidates'> Offers </label>
            <p>Get notified</p>
            </div>
          </div>

      </fieldset>
      
       <br/>
      <br/>
      <fieldset>
          <legend>Push Notifications</legend>
          <p> Hello ji kaise ho</p>
          
     
          <input type='radio'
           name='pushNoti'
           id='everything'
           value="Everything"
           onChange={changeHandler}
           />
           <label htmlFor='everything'> Everything</label>
          <br/>

          
          <input type='radio'
           name='pushNoti'
           id='sameasemail'
           value="Same as email"
           onChange={changeHandler}
           />
           <label htmlFor='sameasemail'> Same as email</label>
           <br/>

       
          <input type='radio'
           name='pushNoti'
           id='nopush'
           value="No push notification"
           onChange={changeHandler}
           />
           <label htmlFor='nopush'> No push notification</label>
  
      </fieldset>
      <button className='bg-blue-400 border-2 rounded-md px-2'>Save</button>

      </form>
    </div>
  );
}

export default App;
