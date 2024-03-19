export default function Form() {
  return (
    <div>
      <form className="w-full">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <input
              type="text"
              className="bg-[#f5f5f5] rounded p-2 h-12 w-full"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              type="email"
              className="bg-[#f5f5f5] rounded p-2 h-12 w-full"
              placeholder="Your Email"
            />
          </div>
          <div>
            <input
              type="tel"
              className="bg-[#f5f5f5] rounded p-2 h-12 w-full"
              placeholder="Your Phone"
            />
          </div>
        </div>
        <div className="mb-6">
          <textarea
            rows={8}
            className="w-full bg-[#f5f5f5] rounded p-2 resize-none"
          ></textarea>
        </div>
        <div className="flex items-center justify-end">
          <button className="h-14 px-6 py-2 bg-crimson text-white text-[0.9rem] rounded">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
