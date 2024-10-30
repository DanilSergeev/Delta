import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import PopularCitiesSection from "@/components/PopularCitiesSection";
import MainContainer from "@/components/styled/MainContainer";

export default function Home() {
  return (
    <MainContainer
      keywords={`путешествия, Россия, русские города, культура, история, 
        Москва, Санкт-Петербург, Казань, Сочи, Нижний Новгород, Екатеринбург, 
        туристические направления, достопримечательности, путешествия по России, 
        отдых в России, туризм в России`}
      description="Это главная страница о путешествиях по русским городам. 
        Узнайте о культуре и истории самых популярных городов России."
    >
      <>
        {/* <HeroSection />
        <PopularCitiesSection />
        <ContactSection /> */}
      </>
    </MainContainer>
  );
}
