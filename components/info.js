import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
const Info = ({ heading, buttonText,bgColor, buttonColor, description }) => {
  return (
    <Card className={bgColor}>
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <p>{description}</p>
        <Button variant={buttonColor}>{buttonText}</Button>
      </CardContent>
    </Card>
  )
}
export default Info
