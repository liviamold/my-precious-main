'use client'
import Image from 'next/image'
import Input from '@/components/Input' 
import user from '@/public/User.svg'
import { Button } from 'react-daisyui'

const Register = () => {
  return (
    <div className="flex w-full max-w max-h h-screen bg-black rounded-lg overflow-hidden shadow-lg">
      <div className="w-1/2 hidden md:block">
        <Image 
            className="rounded-1-lg" 
            src='/capa.svg'
            alt= "Foto de capa"
            width={650}
            height={500}
            layout
            ='responsive'
                
        />
      </div>
      <div className="w-1/2 flex flex-col pl-12 py-20 justify-start">
        <h1  className="text-[51px] whitespace-nowrap text-white">
          Create Account 
        </h1>
        <h2 className='text-[20px] py-6 mr-32 text-white text-2xl '>
          Welcome! enter your details and start creating, collecting and selling G.I.Joes.
        </h2>
        <div className='space-y-6'>
          <Input 
            className='text-black gap-2 bg-white'
            size='medium'
            type={'text'}
            placeholder={'Username'}
            iconSrc='/user.svg'        
            />
            <Input 
            className='text-black bg-white'
            size='medium'
            type={'text'}
            placeholder={'Email'}
            iconSrc='/email.svg'        
            />
            <Input 
            className='text-black bg-white'
            size='medium'
            type={'password'}
            placeholder={'Password'}
            iconSrc='/locker.svg'        
            />
             <Input 
            className='text-black bg-white'
            size='medium'
            type={'password'}
            placeholder={'Confirm Password'}
            iconSrc='/locker.svg'        
            />
             <div className='space-y-12'>
                <Button
                type="button"
                variant="outline"
                onClick={() => console.log('Button clicked')}
                className='mx-auto w-72 h-8 bg-blue-500 rounded-full text-white'
                >
                  Get started
                </Button>
        </div>
        </div>    
       
      </div>
    </div>
  )
}

export default Register
