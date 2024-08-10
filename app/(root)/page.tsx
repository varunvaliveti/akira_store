import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";


export default function Home() {
  return (
    <>
      <video src="/video_banner.mp4" autoPlay loop muted className="w-screen" />
      
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";