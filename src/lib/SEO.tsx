
import { Helmet } from "react-helmet-async";

type seoProps = {
    title: string
    description: string
    url: string
}

const SEO = ({ title, description, url }: seoProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
        </Helmet>
    );
};

export default SEO;