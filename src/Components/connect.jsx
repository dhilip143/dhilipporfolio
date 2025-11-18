

export default function ConnectButton() {
  return (
    <div className="w-full flex items-center justify-center bg-black h-[600px]">
      <a
        href="https://www.linkedin.com/in/dhilip-k-frountend-developer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="
            w-[700px] h-[298px]
            rounded-full 
            text-[120px] font-medium 
            bg-white
            text-black
              transform
            -rotate-15
            shadow-[0_0_25px_5px_rgba(255,0,128,0.55)] 
            border border-gray-200
            transition 
            hover:scale-105 
            hover:shadow-[0_0_35px_10px_rgba(255,0,128,0.7)]
          "
        >
          Connect
        </button>
      </a>
    </div>
  );
}