import React from 'react'
import { useState , useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'; 

import { EarthCanvas } from './canvas'
import { SectionWrapper  } from '../hoc'
import { slideIn } from '../utils/motion'
import { styles } from '../styles'


const Contact = () => {
 const formRef = useRef();
const [form , setForm ] = useState({ 
  name : "",
  email : "",
  message : "",
});
 
const [loading, setLoading] = useState(false);

const handleChange = (e) =>{
    const { name , value } = e.target;

    setForm({ ...form , [name]: value })
}

const handleSubmit = (e) =>{ 

         e.preventDefault();

// template_o0kyhjm
// 
// zBv6BwoyaAfsb-7os
         emailjs.send(
          'service_iv9d9xf',
          'template_o0kyhjm',
          {
            from_name : form.name,
            to_name : 'Barry',
            customer_email : form.email,
            from_email : 'zubairzafar596@gmail.com',
            to_email : form.email,
            message : form.message,

          },
          'zBv6BwoyaAfsb-7os'
         )
         .then(()=>{
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name : '',
            email : '',
            message : "",          })
         } , (error)=>{
             setLoading(false)

             console.log(error);

             alert('Something went wrong.')
         }
        )
}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden' >
<motion.div variants={slideIn('left' , "tween", 0.2 , 1 )}
className='flex-[0.75] bg-black-100 p-8 rounded-2xl '
>
<p className={styles.sectionSubText}>Get in Touch</p>
<h3 className={styles.sectionHeadText}>Contact.</h3>

<form action="" ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8' >

<label htmlFor="" className='flex flex-col ' >
  <span className='text-white font-medium mb-4 ' > Your Name </span>
  <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" 
  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
</label>
<label htmlFor="" className='flex flex-col ' >
  <span className='text-white font-medium mb-4 ' > Your Email </span>
  <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" 
  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
</label>
<label htmlFor="" className='flex flex-col ' >
  <span className='text-white font-medium mb-4 ' > Your Message</span>
  <textarea rows='7'  name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" 
  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
</label>
 
<button type='submit' className='bg-tertiary py-8 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ' >
{loading ? 'Sending...' : 'Send' }
</button>
  
</form>

</motion.div>
<motion.div 
variants={slideIn ('right' , "tween" , 0.2 , )}
className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] '
>
<EarthCanvas/>
</motion.div>


    </div>
  )
}

export default SectionWrapper(Contact , "")