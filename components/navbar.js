'use client'
import { Home, Mail, Menu } from 'lucide-react'
import { Button } from './ui/button'
import { ModeToggle } from './toggle-button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Fragment, useState } from 'react'
import userImage from '@/assets/images/user.png'
import Image from 'next/image'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <header className='shadow-lg'>
      <nav className='flex justify-between container mx-auto h-20 items-center '>
        <div className='flex items-center gap-2'>
          <Home className='font-bold' size={26} />
          <span className=' text-xl md:text-2xl font-bold '>Estate Finder</span>
          <div className='ml-8'>
            <ul className='hidden md:flex items-center space-x-6 cursor-pointer'>
              <li>Home</li>
              <li>All Properties</li>
              {isLoggedIn && <li>Add Property</li>}
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <ModeToggle />
          {!isLoggedIn && (
            <Button variant='secondary' className='hidden md:block '>
              Login/Register
            </Button>
          )}
          {isLoggedIn && (
            <div className='hidden md:flex items-center gap-6'>
              <Mail />
              <Image
                src={userImage}
                height={24}
                width={24}
                alt='profile-image'
              ></Image>
            </div>
          )}
          <Sheet>
            <SheetTrigger>
              <Menu className='md:hidden' />
            </SheetTrigger>
            <SheetContent className='w-[250px]'>
              <SheetHeader>
                <SheetDescription>
                  <ul className='space-y-3'>
                    <li>Home</li>
                    <li>All Properties</li>

                    {isLoggedIn && (
                      <>
                        <li>Add Property</li>
                        <li>Notification</li>
                        <li>Profile</li>
                      </>
                    )}

                    {!isLoggedIn && (
                      <li>
                        <Button variant='secondary'>Login/Register</Button>
                      </li>
                    )}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
