
import Hero from "./components/pages/home/Hero";
import Partners from "./components/pages/home/Partners";
import Solutions from "./components/pages/home/Solutions";

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <Hero></Hero>
      <Solutions></Solutions>
      <Partners></Partners>
    </main>
  );
}
