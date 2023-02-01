import Link from "next/link";

export default function Home() {
  return (
    <>
      <span>Olá mundo</span>
      <br />
      <Link href="/about">Sobre</Link>
    </>
  )
}
