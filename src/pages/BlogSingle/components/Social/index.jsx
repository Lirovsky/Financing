import { FaTwitter, FaFacebook, FaPinterest } from "react-icons/fa6";

export default function Social() {
  return (
    <div className="sticky top-0 order-2 w-full pb-5 lg:order-1 lg:w-2/12">
      <h3 className="mb-3 text-center text-xl">Share</h3>
      <ul className="flex flex-row items-center justify-center gap-5 lg:flex-col">
        <li>
          <a href="#">
            <FaFacebook
              size={50}
              className="rounded-full border border-black p-3 hover:border-blue-700 hover:text-blue-700"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter
              size={50}
              className="rounded-full border border-black p-3 hover:border-blue-700 hover:text-blue-700"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FaPinterest
              size={50}
              className="rounded-full border border-black p-3 hover:border-blue-700 hover:text-blue-700"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
