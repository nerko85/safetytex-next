import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }
  render() {
    return (
      <Html className="scroll-smooth antialiased">
        <Head>
          <meta
            name="google-site-verification"
            content="PTdUajuX9ViNWmdqLTIaVfAmLWNu4Y1HkSKNjarEdPQ"
          />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
        `}
          </Script>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
      `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
