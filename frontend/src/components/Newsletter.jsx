import Container from "@/components/ui/Container";

export default function Newsletter() {
  return (
    <div className="relative overflow-hidden">
      <img
        src="https://migogkbh.dk/wp-content/uploads/2023/01/Skaermbillede-2023-01-26-kl.-10.12.43-1200x686.png"
        alt=""
        className="absolute h-full w-full object-cover brightness-50"
      />
      <Container className="relative flex flex-col py-24 md:flex-row md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Get the latest news and updates
          </p>
        </div>
        <div className="mt-6 flex overflow-hidden rounded-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-12 w-full border-none bg-black/50 px-4 text-white focus:outline-none"
          />
          <button className="h-12 whitespace-nowrap bg-black px-4 text-white">
            Sign Up
          </button>
        </div>
      </Container>
    </div>
  );
}
