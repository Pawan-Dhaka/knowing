import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="text-xl text-center pt-80">
  This domain has been parked{" "}
  <Link
    href="https://pawandhaka.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl hover:text-blue-600 transition-colors"
  >
    ↗ Pawan Dhaka
  </Link>
  .
</div>
    </>
  );
}
