
import About from "./components/pages/home/About";
import Hero from "./components/pages/home/Hero";
import Partners from "./components/pages/home/Partners";
import Solutions from "./components/pages/home/Solutions";
import Years from "./components/pages/home/Years";

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <Hero></Hero>
      <Solutions></Solutions>
      <Partners></Partners>
      <Years></Years>
      <About></About>
    </main>
  );
}
