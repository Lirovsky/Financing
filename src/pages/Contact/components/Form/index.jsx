import {
  BsFillGeoAltFill,
  BsClockFill,
  BsEnvelopeFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./consts";

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-white md:px-10">
      <div className="mx-auto flex flex-col justify-center gap-20 px-10 py-20 md:px-0 lg:flex-row">
        <div className="flex flex-col gap-5 text-gray-500">
          <div className="flex items-center gap-5">
            <BsFillGeoAltFill
              size={50}
              className="rounded-full bg-blue-700 p-3 text-blue-100"
            />
            <div>
              <h5 className="pb-2 text-xl">Location</h5>
              <p>43 Raymouth Rd. Baltemoer,</p>
              <p>London 3910</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <BsClockFill
              size={50}
              className="rounded-full bg-blue-700 p-3 text-blue-100"
            />
            <div>
              <h5 className="pb-2 text-xl">Open Hours:</h5>
              <p>Sunday-Friday:</p>
              <p>11:00 AM - 2300 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <BsEnvelopeFill
              size={50}
              className="rounded-full bg-blue-700 p-3 text-blue-100"
            />
            <div>
              <h5 className="pb-2 text-xl">Email:</h5>
              <p>info@Untree.com</p>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-5">
            <BsFillTelephoneFill
              size={50}
              className="rounded-full bg-blue-700 p-3 text-blue-100"
            />
            <div>
              <h5 className="pb-2 text-xl">Call:</h5>
              <p>+1 1234 55488 55</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="flex w-full flex-col">
                <input
                  {...register("firstName")}
                  type="text"
                  className="w-full rounded-md border p-2"
                  placeholder="Your Name"
                />
                <p className="text-red-500">{errors.firstName?.message}</p>
              </div>
              <div className="flex w-full flex-col">
                <input
                  {...register("lastName")}
                  type="text"
                  className="w-full rounded-md border p-2"
                  placeholder="Your Last Name"
                />
                <p className="text-red-500">{errors.lastName?.message}</p>
              </div>
            </div>
            <input
              {...register("email")}
              type="email"
              className="w-full rounded-md border p-2"
              placeholder="Your Email"
            />
            <p className="text-red-500">{errors.email?.message}</p>
            <input
              {...register("subject")}
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="Subject"
            />
            <p className="text-red-500">{errors.subject?.message}</p>
            <textarea
              {...register("message")}
              type="text"
              className="h-32 w-full resize-none rounded-md border p-2"
              placeholder="Message"
            />
            <p className="text-red-500">{errors.message?.message}</p>

            <button
              type="submit"
              className="w-56 rounded-lg border bg-blue-700 px-4 py-4 font-bold text-white hover:bg-transparent hover:text-blue-700"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
