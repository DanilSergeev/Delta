import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

interface MainContainerProps {
    children: React.ReactNode;
    description?: string;
    keywords?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({ children, keywords, description }) => {
    return (
        <>
            <Head>
                <meta name="description" content={`${description ? `, ${description}` : ''}`} />
                <meta content={`${keywords ? `русские города, путешествия, туризм, ${keywords}` : ''}`}></meta>
                <title>CADEX</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MainContainer;