import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Landing page</h1>
      <p className="text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos.
      </p>
      <Link href="/page/signin">Fazer login</Link>
    </div>
  );
}
