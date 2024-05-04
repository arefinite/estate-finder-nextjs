'use client'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from './ui/button'
import Infos from './infos'

const Banner = () => {
  return (
    <div className='container mx-auto py-8 flex flex-col md:flex-row justify-between gap-4'>
      <div className='md:hidden mb-4'>
        <h1 className='text-2xl font-bold'>Find Your Next Stay</h1>
        <p>
          Explore and discover the comfortable and elegant property that match
          your desire.
        </p>
      </div>
      <div>
        <Card className='min-w-[300px]'>
          <CardHeader>
            <CardTitle>Search Property</CardTitle>
            <CardDescription>Search your next stay</CardDescription>
          </CardHeader>
          <CardContent>
            <form className='flex gap-4 flex-col'>
              <Input placeholder='Enter location (City, State, Zip...)' />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='All' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='light'>Light</SelectItem>
                  <SelectItem value='dark'>Dark</SelectItem>
                  <SelectItem value='system'>System</SelectItem>
                </SelectContent>
              </Select>
              <Button role='submit'>Search</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className='flex justify-center flex-col gap-4'>
        <div className='hidden md:block space-y-4'>
          <h1 className='text-2xl font-bold'>Find Your Next Stay</h1>
          <p>
            Explore and discover the comfortable and elegant property that match
            your desire.
          </p>
        </div>
        <Infos />
      </div>
    </div>
  )
}
export default Banner
