import FlexSection from "./styled/FlexContainerSection"
import LazyLoad from "react-lazyload"

const HeroSection = () => {



    return (
        <FlexSection 
        $isEqualWidth="true"
        > 
        <div>
          <h1>Откройте мир с нами!</h1>
          <p>Россия полна удивительных городов с богатой историей и культурой. Путешествуйте, открывайте новое и наслаждайтесь красотой нашей страны.</p>
        </div>
        <LazyLoad>
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player. Never Gonna Give You Up"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe> */}
        </LazyLoad>
      </FlexSection>
    )
}
export default HeroSection