import React from "react";
import card1 from "../../images/card_1.svg";
import card2 from "../../images/card_2.svg";
import card3 from "../../images/card_3.svg";
import card4 from "../../images/card_4.svg";
import logo from "../../images/logo.svg";
import Container from "../container/Container";


const Footer = () => {
  return (
    <div className="footer py-20 bg-blue-200 ">
      <Container>
        <div className="flex justify-between">
        <div className="flex flex-col gap-2 max-w-[220px] items-start mb-[200px]">
          <div className="flex items-center justify-center gap-1">
            <img src={logo} alt="" />

          </div>
          <span className=" text-zinc-800 text-sm font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </span>
        </div>

        <div className="flex flex-col gap-4 max-w-[220px] items-start">
          <span className="text-zinc-800 text-lg font-medium ">Follow Us</span>
          <span className=" text-zinc-800 text-sm font-normal ">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </span>
          <div className="flex items-center gap-5">
            <svg
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.284599 8.67812H1.9426V15.5061C1.9426 15.5708 1.96831 15.6329 2.01407 15.6787C2.05983 15.7244 2.12189 15.7501 2.1866 15.7501H4.9986C5.06331 15.7501 5.12537 15.7244 5.17113 15.6787C5.21689 15.6329 5.2426 15.5708 5.2426 15.5061V8.71012H7.1496C7.20939 8.71002 7.26708 8.68797 7.31169 8.64815C7.3563 8.60833 7.38474 8.55352 7.3916 8.49412L7.68159 5.98012C7.68554 5.94597 7.68223 5.91138 7.67188 5.8786C7.66152 5.84583 7.64435 5.81561 7.62151 5.78993C7.59866 5.76425 7.57064 5.74369 7.53929 5.72959C7.50794 5.71549 7.47396 5.70817 7.43959 5.70812H5.23959V4.13312C5.23959 3.65812 5.4956 3.41712 5.9996 3.41712H7.43559C7.50031 3.41712 7.56237 3.39141 7.60812 3.34565C7.65388 3.29989 7.6796 3.23783 7.6796 3.17312V0.866117C7.68013 0.801746 7.65521 0.739771 7.61026 0.693694C7.56531 0.647616 7.50396 0.62117 7.43959 0.620117H5.4586H5.3676C4.45538 0.623336 3.5749 0.955294 2.8876 1.55512C2.56329 1.83854 2.31445 2.19809 2.16347 2.60146C2.01249 3.00484 1.96408 3.4394 2.0226 3.86612V5.70912H0.281593C0.216881 5.70912 0.154821 5.73482 0.109062 5.78058C0.0633033 5.82634 0.0375977 5.8884 0.0375977 5.95312V8.43412C0.0375952 8.46641 0.0440006 8.49839 0.0564499 8.52819C0.0688992 8.55799 0.0871465 8.58502 0.110123 8.60772C0.133099 8.63042 0.160349 8.64833 0.1903 8.66041C0.220251 8.6725 0.252305 8.67851 0.284599 8.67812Z"
                fill="#385C8E"
              />
            </svg>
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6013 2.02699C15.051 2.26711 14.469 2.42675 13.8733 2.50099C14.5014 2.12852 14.971 1.53859 15.1933 0.842986C14.6059 1.19135 13.9633 1.43688 13.2933 1.56899C12.8821 1.12895 12.348 0.822843 11.7605 0.690509C11.1729 0.558175 10.5592 0.605735 9.99905 0.827003C9.43892 1.04827 8.95836 1.433 8.61989 1.93113C8.28141 2.42927 8.1007 3.01774 8.10126 3.61999C8.09907 3.84988 8.12255 4.0793 8.17126 4.30398C6.97788 4.24539 5.81031 3.93561 4.74486 3.39487C3.67941 2.85413 2.74007 2.09462 1.98826 1.16599C1.60216 1.82589 1.48257 2.6083 1.65393 3.3534C1.82529 4.0985 2.27467 4.75006 2.91026 5.17499C2.43555 5.16239 1.97082 5.03583 1.55526 4.80599V4.83899C1.5559 5.53126 1.79484 6.2022 2.2319 6.73906C2.66896 7.27592 3.27751 7.64596 3.95526 7.78699C3.69853 7.85508 3.43387 7.88871 3.16826 7.88698C2.97765 7.89045 2.78721 7.87335 2.60026 7.83599C2.79386 8.43095 3.16701 8.95133 3.6684 9.32558C4.1698 9.69983 4.77481 9.90958 5.40026 9.92599C4.33966 10.7547 3.03222 11.2046 1.68626 11.204C1.4463 11.2057 1.20647 11.192 0.968262 11.163C2.33943 12.0465 3.93712 12.514 5.56826 12.509C6.69151 12.5168 7.80512 12.3014 8.8444 11.8752C9.88369 11.4491 10.8279 10.8206 11.6223 10.0265C12.4167 9.23227 13.0453 8.28817 13.4717 7.24898C13.8982 6.20979 14.1138 5.09623 14.1063 3.97299C14.1063 3.83999 14.1063 3.71199 14.0953 3.58499C14.6879 3.16163 15.1983 2.63364 15.6013 2.02699Z"
                fill="#03A9F4"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[220px] items-start">
          <span className="text-zinc-800 text-lg font-medium ">Contact Us</span>
          <span className=" text-zinc-800 text-sm font-normal ">
            E-Comm , 4578 Marmora Road, Glasgow D04 89GR
          </span>
        </div>
        </div>
        <div className="container border-t-2 border-t-zinc-50  flex items-center justify-between">
          <span className=" text-sm font-normal ">

            © 2018 Ecommerce theme by www.bisenbaev.com
          </span>
          <div className="flex items-center justify-center gap-5 my-6">
            <button>
              <img src={card1} alt="card" />
            </button>
            <button>
              <img src={card2} alt="card" />
            </button>
            <button>
              <img src={card3} alt="card" />
            </button>
            <button>
              <img src={card4} alt="card" />
            </button>
          </div>
        </div>
       
      </Container>
    </div>
  );
};

export default Footer;
