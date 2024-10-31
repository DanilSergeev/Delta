import { Button } from "react-bootstrap"
import GridWrapper from "./styled/GridWrapper"
import Section from "./styled/Section"
import FlexWrapper from "./styled/FlexWrapper"
import Link from "next/link"

const PopularCitiesSection = () => {
    return (
        <Section>
            <FlexWrapper
                flex="column"
                align="center"
            >
                <h2>Популярные русские города</h2>
                <GridWrapper
                    mt="6vh"
                    gap="3rem 6rem"
                    templateColumns='1fr 1fr 1fr'
                >
                    <article><h4>Москва</h4><p>Столица России, известная своими историческими памятниками, такими как Кремль и Красная площадь.</p></article>
                    <article><h4>Санкт-Петербург</h4><p>Город на Неве, знаменитый своими каналами, Эрмитажем и белыми ночами.</p></article>
                    <article><h4>Казань</h4><p>Культурная столица Татарстана, известная своей уникальной архитектурой и многонациональностью.</p></article>
                    <article><h4>Сочи</h4><p>Популярный курорт на Черном море, известный своими пляжами и олимпийскими объектами.</p></article>
                    <article><h4>Нижний Новгород</h4><p>Город с богатой историей, красивыми набережными и уникальной архитектурой.</p></article>
                    <article><h4>Екатеринбург</h4><p>Город на Урале, известный своей историей, культурой и как центр Урало-Сибирского региона.</p></article>
                </GridWrapper>
                <Link href="/contacts">
                    <Button aria-label="Contact us" variant="info" className="mt-3" >Связаться с нами</Button>
                </Link>
            </FlexWrapper>
        </Section>
    )
}
export default PopularCitiesSection