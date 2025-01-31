import Footer from "@/components/layouts/footer/Footer";
import SliderModule from "@/components/layouts/hero/Slider";
import Navbar from "@/components/layouts/navbar/Navbar";
import Choice from "@/components/template/choice/Choice";
import Vector from "@/components/template/vector-page/Vector";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <SliderModule />
      <Vector />
      <Choice />
      <Footer/>
    </main>
  );
}
