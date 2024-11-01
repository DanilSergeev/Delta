import LazyLoad from "react-lazyload"
import Section from "./styled/Section"
import FlexWrapper from "./styled/FlexWrapper"
import IframeContainer from "./styled/IframeContainer"


const HeroSection = () => {
  
  return (
    <Section
      bg="#f4f3f5"
      pt="7vh"
      pb="7vh"
    >
      <FlexWrapper
        $isEqualWidth="true"
        gap="5rem"
      >
        <div>
          <h1>Откройте мир с нами!</h1>
          <p>Россия полна удивительных городов с богатой историей и культурой. Путешествуйте, открывайте новое и наслаждайтесь красотой нашей страны. Каждое путешествие — это уникальная возможность погрузиться в атмосферу местных традиций, попробовать национальную кухню и познакомиться с дружелюбными людьми.</p>
        </div>
        <LazyLoad>
          <IframeContainer>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player. Never Gonna Give You Up"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              aria-label="Видеоплеер YouTube: Never Gonna Give You Up"
              aria-describedby="videoDescription" 
              loading="lazy" 
            ></iframe>
          </IframeContainer>
        </LazyLoad>
      </FlexWrapper>
    </Section>
  )
}
export default HeroSection