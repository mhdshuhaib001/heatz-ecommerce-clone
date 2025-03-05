import React from "react";
import NavBar from "../Components/NavbarComponents/NavBar";
import Hero from "../Components/Hero";
import PromoSlider from "../Components/AdvetismentComponent/PromoSlider";
import Footer from "../Components/Footer";
import ProductSlider from "../Components/ProductComponent/ProductSlider";
import Advertisement from "../Components/AdvetismentComponent/Advertisement";
import VideoSlider from "../Components/AdvetismentComponent/AnimationGalary";
const promoSlides = [
  {
    image: "/PromoProduct/PromoSlider.jpeg",
    title: "Boost up your Audio experience.",
    buttonText: "Learn more"
  },
  {
    image: "/PromoProduct/PromoSlider2.jpeg",
    title: "Enhance your Gaming Setup.",
    buttonText: "Explore Now"
  },
  {
    image: "/PromoProduct/PromoSlider3.jpeg",
    title: "Upgrade Your Tech Lifestyle.",
    buttonText: "Shop Now"
  }
];

const products = [
  {
    id: "1",
    name: "Wireless Over-Ear Headphones",
    description:
      "Premium noise-cancelling headphones with exceptional sound quality and comfort for extended listening sessions. Features 40 hours of battery life and quick charging.",
    price: 2599,
    image: "/Product/Watche1 (3).jpeg",
    category: "Headset",
    badge: "Best Buy",
    label: "Best Buy",
    colors: ["#000000", "#3b82f6", "#10b981"]
  },
  {
    id: "2",
    name: "Studio Pro Headphones",
    description:
      "Professional studio headphones for audio production with high-resolution sound and premium materials for comfort during long sessions.",
    price: 2599,
    image: "/Product/keybord.png",
    category: "Headset",
    badge: "Best Buy",
    label: "Best Buy"
  },
  {
    id: "3",
    name: "True Wireless Earbuds",
    description:
      "Compact wireless earbuds with charging case, active noise cancellation, and water resistance for workouts and everyday use.",
    price: 2599,
    image: "/Product/Watche1 (4).jpeg",
    category: "Headset",
    badge: "Best Buy",
    label: "Best Buy"
  },
  {
    id: "4",
    name: "Premium Wired Headphones",
    description:
      "High-fidelity wired headphones for audiophiles with premium drivers and balanced sound profile for the most discerning listeners.",
    price: 2599,
    image: "/Product/Watche1 (2).jpeg",
    category: "Headset",
    badge: "Trending",
    label: "Trending",
    colors: ["#064e3b", "#a3e635", "#000000"]
  },
  {
    id: "5",
    name: "Gaming Headset Pro",
    description:
      "Immersive gaming headset with surround sound, detachable microphone, and RGB lighting for the ultimate gaming experience.",
    price: 2599,
    image: "/Product/Watche1 (3).jpeg",
    category: "Headset",
    badge: "New",
    label: "New"
  },
  {
    id: "6",
    name: "Wireless Over-Ear Headphones",
    description:
      "Premium noise-cancelling headphones with exceptional sound quality and comfort for extended listening sessions. Features 40 hours of battery life and quick charging.",
    price: 2599,
    image: "/Product/headphone (1).jpg",
    category: "Headset",
    badge: "Best Buy",
    label: "Best Buy",
    colors: ["#000000", "#3b82f6", "#10b981"]
  },
  {
    id: "7",
    name: "Wireless Over-Ear Headphones",
    description:
      "Premium noise-cancelling headphones with exceptional sound quality and comfort for extended listening sessions. Features 40 hours of battery life and quick charging.",
    price: 2599,
    image: "/Product/Watche1 (3).jpeg",
    category: "Headset",
    badge: "Best Buy",
    label: "Best Buy",
    colors: ["#000000", "#3b82f6", "#10b981"]
  },
  {
    id: "8",
    name: "Wireless Over-Ear Headphones",
    description:
      "Premium noise-cancelling headphones with exceptional sound quality and comfort for extended listening sessions. Features 40 hours of battery life and quick charging.",
    price: 2599,
    image: "/Product/Watche1 (3).jpeg",
    category: "Headset",
    badge: "Best Buy",
    label: "Best Buy",
    colors: ["#000000", "#3b82f6", "#10b981"]
  }
];

const categories = [
  { id: "headset", name: "Headset" },
  { id: "mouse", name: "Mouse" },
  { id: "keyboard", name: "Keyboard" },
  { id: "offers", name: "10% Offers" }
];

const videos = [
  "/Animation/Hero-Video.mp4",
  "/Animation/Hero-Video.mp4",
  "/Animation/Promo (2).mp4",
  "/Animation/Hero-Video.mp4",
  "/Animation/Promo (1).mp4"
];

function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <NavBar />
      <Hero />
      <div className="mx-12 xl:block h-full z-10">
        <div className="my-12">
          <PromoSlider slides={promoSlides} />
        </div>
        <div className="my-12">
          <ProductSlider
            products={products}
            categories={categories}
            viewAllLink="/products"
          />
        </div>
        <Advertisement
          imageSource="/PromoProduct/PromoSlider.jpeg"
          videoSource="/Animation/Hero-Video.mp4"
        />
        <div className="my-12">
          <PromoSlider slides={promoSlides} />
        </div>
        <div className="my-12">
          <ProductSlider
            products={products}
            categories={categories}
            viewAllLink="/products"
          />
        </div>
        <Advertisement
          imageSource="/PromoProduct/PromoSlider.jpeg"
          videoSource="/Animation/Hero-Video.mp4"
        />
        <div className="p-2 sm:p-4 m-0">
          <VideoSlider
            videos={videos}
            title="Trending Products."
            description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
