import { ReferButton } from "./ReferButton";

export function Hero() {
  return (
    <>
      <div className="relative hidden md:flex items-center justify-center w-full max-w-7xl mx-auto">
        <img
          src="./hero.svg"
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-16 -translate-y-1/2 flex flex-col items-start p-4 gap-6 w-1/3">
          <h1 className="text-5xl lg:text-7xl font-bold">Let's Learn & Earn</h1>
          <p className="text-xl">
            Get the chance to win up to{" "}
            <span className="font-bold text-primary text-2xl">Rs. 15,000</span>
          </p>
          <ReferButton>Refer Now</ReferButton>
        </div>
      </div>
      <div className="md:hidden">
        <HeroMobile />
      </div>
    </>
  );
}

function HeroMobile() {
  return (
    <div className="relative">
      <img
        src="./heroMobile.svg"
        alt="hero"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let's Learn & Earn
        </h1>
        <div className="flex flex-col items-center mb-6">
          <p className="text-lg">Get the chance to win up to</p>
          <span className="text-2xl font-bold text-primary">Rs. 15,000</span>
        </div>
        <ReferButton>
          Refer Now
        </ReferButton>
      </div>
    </div>
  );
}
