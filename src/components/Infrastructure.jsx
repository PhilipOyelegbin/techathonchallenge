import phones from '../assets/illustration-phones.svg';
const Infrastructure = () => {
  return (
    <section className="bg-gradient-to-bl from-Gradient-dark-blue to-Gradient-dark-gray-blue text-White rounded-tr-[52px] rounded-bl-[52px] px-[100px] py-20">
        <div className="flex items-center">
            <div className="w-1/2 relative">
                <img src={phones} className="h-[450px] absolute -top-52 -left-10" alt="" />
            </div>
            <div className="w-1/2">
                <h2 className='mb-10'>State of the Art Infrastructure</h2>
                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
            </div>
        </div>
    </section>
  )
}

export default Infrastructure