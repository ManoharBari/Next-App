import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Image component - */}
      <Image
        src="/cartoon.jpeg"
        alt="cartoon Logo"
        width={400}
        height={400}
      />
    </div>
  );
}
