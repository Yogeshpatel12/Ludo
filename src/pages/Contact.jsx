import { Link } from "react-router-dom"
import Container from "../components/ui/Container"
import Heading from "../components/ui/Heading"
import { useEffect } from "react"

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="bg-[#070210]">
      <Container>
        <div className="w-full max-w-screen-2xl mx-auto">
          <div className="w-full">
            <Heading title="Contact Us" />
          </div>
          <div className="text-white mt-8">
            <h3 className="font-bold text-2xl lg:text-3xl">Welcome to contact us page of ludovijayta.com</h3>
            {/* <h3 className="font-bold text-2xl lg:text-3xl">Ludo Vijayta Customer Support: Reach Out, We&#39;re Here to Help</h3> */}
            <div className="space-y-4 my-8 text-left text-sm mb-10">
              <p>
                Welcome to Ludo Vijayta&#39;s Contact Us hub—a place where your voice matters. At Ludo Vijayta, your feedback, inquiries, and suggestions are invaluable to us. We&#39;re dedicated to providing you with comprehensive assistance and listening to your needs.
              </p>
              <p>
                Email Ludo Vijayta Support Have something specific to discuss? Feel free to drop us an email at <span className="font-bold">care@ludovijayta.com</span> Our inbox is open to assist you with any queries or feedback you might have.
              </p>
            </div>
            <h3 className="font-bold text-2xl lg:text-3xl mb-4">Connect with Us</h3>
            <div className="space-y-4 text-left text-sm mb-10">
              <p>Legal Name - Eirupskills infotech llp</p>
              <p>
                Address - Rk Dhawai Gudli Near Power House Girwa Bhesra Kalan Udaipur Rajasthan - 313024
              </p>
              <p>Mail - care@ludovijayta.com</p>

            </div>
            <div className="space-y-4 text-left text-sm mb-10">
              <p>
                To check the frequently asked questions on our games, visit <Link to="/faq" className="text-blue-600 hover:text-blue-800 duration-200 transition-all"> Ludo Vijayta FAQ page</Link>.
              </p>
              <p>
                We strive to provide prompt and meaningful responses, aiming to enhance your experience on Lodi Vijayta. Your input is instrumental in shaping our platform and services.
              </p>
            </div>
            <h3 className="font-bold text-2xl lg:text-3xl mb-4">Whatsapp</h3>
            <div className="space-y-6 text-left text-sm">
              <p>7851039232</p>
              <p>Thank you for choosing Ludo Vijayta-we eagerly anticipate connecting with you and ensuring your experience with us is nothing short of excellent!</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact