import LazyLoad from "react-lazyload"
import Wrapper from "./styled/Wrapper"
import Section from "./styled/Section"
import FlexWrapper from "./styled/FlexWrapper"

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
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player. Never Gonna Give You Up"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
        </LazyLoad>
      </FlexWrapper>
    </Section>
  )
}
export default HeroSection