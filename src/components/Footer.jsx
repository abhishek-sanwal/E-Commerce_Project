import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="Logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            libero excepturi reiciendis alias inventore soluta qui molestiae
            eveniet doloribus molestias laboriosam enim porro non, suscipit
            architecto earum, voluptatem omnis fugiat?
          </p>
        </div>

        <div>
          <p className="text-xl  font-medium mb-5 uppercase">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link>Home</Link>
            </li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 uppercase">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <a href="tel:+1-646-260-8685">
              <li>+1-646-260-8685</li>
            </a>
            <a href="mailto:contact@ecommerce.com">
              <li>contact@ecommerce.com</li>
            </a>
          </ul>
        </div>

        <div className="col-span-full">
          <hr className="text-gray-800" />
          <p className="py-5 text-center text-sm">
            Copyright 2024-25 @Forever.com -All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
