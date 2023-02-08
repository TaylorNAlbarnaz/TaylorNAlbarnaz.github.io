import Link from "next/link";

export default function Home() {
  return (
    <>
      <span>Página Inicial</span>
      <br />
      <Link href="/about">Sobre</Link>
    </>
  )
}
