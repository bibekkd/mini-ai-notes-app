import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
        <div className='w-96 border rounded-md p-8'>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                <p className='text-center text-gray-500 mt-2'>Create your account to get started</p>
            </div>
            <div className='space-y-6'>
                <div className='space-y-2'>
                    <label className='text-sm font-medium'>Email</label>
                    <Input 
                        type="email" 
                        className='w-full' 
                        placeholder='Enter your email'
                    />
                </div>
                
                <div className='space-y-2'>
                    <label className='text-sm font-medium'>Password</label>
                    <Input 
                        type="password" 
                        className='w-full' 
                        placeholder='Create a password'
                    />
                </div>

                <Button className='w-full py-2 text-base font-medium'>
                    Create Account
                </Button>

                <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                        <span className='w-full border-t'></span>
                    </div>
                    <div className='relative flex justify-center text-sm'>
                        <span className='px-2 text-gray-500'>Or continue with</span>
                    </div>
                </div>

                <Button className='w-full flex items-center justify-center gap-2' variant="outline">
                    <FcGoogle className='h-5 w-5'/> 
                    Google
                </Button>

                <p className='text-center text-sm text-gray-500'>
                    Already have an account?{' '}
                    <a href="/login" className='font-medium text-blue-600 hover:underline'>
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default page