import { assets } from "../assets/frontend_assets/assets";

function Polices() {
  return (
    <section className="text-center text-xs sm:text-sm md:text-base text-gray-700 py-20">
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 ">
        {/* Exchange */}
        <div>
          <img
            className="w-12 m-auto mb-5"
            src={assets.exchange_icon}
            alt="Exchange Policy"
          />
          <p className="font-semibold">Easy Returns</p>
          <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>

        {/* Return */}
        <div>
          <img
            className="w-12 m-auto mb-5"
            src={assets.quality_icon}
            alt="7 days Return"
          />
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-400">We provides 7 days free return</p>
        </div>

        {/* Support */}
        <div>
          <img
            className="w-12 m-auto mb-5"
            src={assets.support_img}
            alt="24x7 Support"
          />
          <p className="font-semibold">Best Customer Support</p>
          <p className="text-gray-400">We provide 24x7 customer support</p>
        </div>
      </div>
    </section>
  );
}

export default Polices;
