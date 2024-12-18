export default function Subscribe() {
  return (
    <div className="sticky top-0 order-3 mb-5 w-full rounded-lg bg-white lg:order-3 lg:w-3/12">
      <div className="flex flex-col justify-between p-5">
        <h3 className="text-2xl font-bold">Subscribe to Newsletter</h3>
        <p className="py-3">Far far away behind the word mountains far from.</p>
        <form>
          <input
            type="email"
            className="w-full rounded-md border p-2"
            placeholder="Enter email"
            required
          />
          <button
            type="submit"
            className="mt-3 rounded-md border bg-blue-700 px-4 py-3 font-bold text-white hover:bg-transparent hover:text-blue-700"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
}
