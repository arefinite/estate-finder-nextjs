const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='container text-sm mx-auto flex flex-col text-center md:flex-row md:justify-between mb-4'>
      <div>&copy; {currentYear} by Estate Finder | All Rights Reserved.</div>
      <div>Design and Developed by Adnan Arefin</div>
    </footer>
  )
}
export default Footer
