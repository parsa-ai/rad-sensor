import Container from "../components/ui/Container"

function page() {
  return (
    <main className="w-full py-32">
      <Container className='flex flex-col gap-16 items-center'>
        <h2 className="text-center text-5xl font-semibold">Shape Tomorrow’s Solutions Today</h2>
        <article className="w-full flex flex-col items-center ">
          <div className="bg-[url('/images/Contact/Halo.png')] w-full h-[200px] bg-top" />
          <span className="text-xl font-medium">Fill out the form below and our team ensures your connection.</span>
          <form className="bg-[#1D1A2614] w-[682px] h-[384px] shadow-[0px_4px_10px_0px_#0000001A] mt-5 relative border border-white/20 rounded-2xl overflow-hidden flex justify-center items-center ">
            <div className="w-full h-1/2 bg-[#0E70A15E] blur-[135px] absolute -bottom-14"></div>
            <div className="w-full p-16 flex flex-col gap-5">
              <div className="flex gap-5 justify-between w-full ">
                <Input label='First Name' id='First Name' />
                <Input label='Last Name' id='LastName' />
              </div>
              <div className="flex gap-5 justify-between w-full ">
                <Input label='Email' id='Email' type="email" />
                <Input label='Company' id='Company' />
              </div>
              <div className="mt-2">
                <button className="w-28 h-10 border border-white bg-[#36475D] rounded-lg">Submit</button>
                <p className="text-[#BDBDBD] text-sm mt-2">By submitting this form, you agree to our Privacy Policy and Terms of Use.</p>
              </div>
            </div>
          </form>
        </article>
        <article className="flex flex-col items-center justify-center gap-16 mt-20">
          <h2 className="text-center text-5xl font-semibold">Find Our Location and Contact Us</h2>
          <img src="/images/Contact/map.png" alt="" />
        </article>

      </Container>
    </main>
  )
}

export default page


function Input({ label, id, type = 'text', divClassName, labelClassName, inputClassName }) {
  return (
    <div className={`flex flex-col flex-1 gap-4 ${divClassName ? divClassName : ''}`}>
      <label htmlFor={id} className={`${labelClassName ? labelClassName : ''}`}>{label}</label>
      <input type={type} name={id} id={id} className={`border border-white rounded-lg h-10 px-3.5 ${inputClassName ? inputClassName : ''}`} />
    </div>
  )
}

