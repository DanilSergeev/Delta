import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import { IMainContainerProps } from "@/models/IMainContainerProps";

const MainContainer: React.FC<IMainContainerProps> = ({ children, keywords, description }) => {
    return (
        <>
            <Head>
                <meta name="description" content={`${description ? `, ${description}` : ''}`} />
                <meta content={`${keywords ? `русские города, путешествия, туризм, ${keywords}` : ''}`}></meta>
                {/* Open Graph */}
                <meta property="og:title" content="Delta" />
                <meta property="og:description" content={description || ""} />
                <meta property="og:url" content={process.env.REACT_APP_CLIENT_URL} />
                <meta property="og:type" content="website" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Delta" />
                <meta name="twitter:description" content={description || ""} />
                <title>Delta</title>
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