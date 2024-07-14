import Container from "../../components/container/Container"
import servis_1 from "../../images/servis_1.svg"
import servis_2 from "../../images/servis_2.svg"
import servis_3 from "../../images/servis_3.svg"

const Servis = () => {
  return (
    <Container>
      <div className="flex justify-between items-center px-[60px] my-[250px] ">
        <div className="flex flex-col items-center max-w-[210px] ">
          <img src={servis_1} alt="servis" className="mb-[52px]" />
          <h4 className=" text-zinc-800 text-[27px] font-medium mb-3 ">FREE SHIPPING</h4>
          <span className=" text-center text-zinc-500 text-lg font-normal ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        </div>
        <div className="flex flex-col items-center max-w-[210px]">
          <img src={servis_2} alt="servis" className="mb-[42px]" />
          <h4 className=" text-zinc-800 text-[27px] font-medium mb-3 ">100% REFUND</h4>
          <p className=" text-center text-zinc-500 text-lg font-normal ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="flex flex-col items-center max-w-[210px]">
          <img src={servis_3} alt="servis" className="mb-[32px]" />
          <h4 className=" text-zinc-800 text-[27px] font-medium mb-3 ">24/7 SUPPORT</h4>
          <span className=" text-center text-zinc-500 text-lg font-normal ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        </div>
      </div>
    </Container>
  )
}

export default Servis
