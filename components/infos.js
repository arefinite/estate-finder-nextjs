import Info from './info'

const Infos = () => {
  return (
    <section className='flex flex-col md:flex-row gap-4'>
      <Info
        heading='For Renters'
        description='Find your desired property, save properties and contact owners.'
        buttonText='Browse Properties'
        buttonColor='secondary'
      ></Info>
      <Info
        heading='For Owner'
        description='List out your properties and reach your potential tenants soon'
        buttonText='Add Property'
        bgColor='bg-secondary'
      ></Info>
    </section>
  )
}
export default Infos
