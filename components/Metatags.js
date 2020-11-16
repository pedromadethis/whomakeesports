export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Who Makes Esports" />
      <meta
        name="description"
        content="If you know a Esports professional whose work or voice is valuable to the esports industry, please share with us."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://brazilianswho.design" />
      <meta property="og:title" content="Who Makes Esports" />
      <meta
        property="og:description"
        content="If you know a Esports professional whose work or voice is valuable to the esports industry, please share with us.A repository to celebrate the work of talented Brazilian designers and showcase it to the world."
      />
      <meta
        property="og:image"
        content="http://brazilianswho.design/img/preview.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://brazilianswho.design" />
      <meta property="twitter:title" content="Who Makes Esports" />
      <meta
        property="twitter:description"
        content="If you know a Esports professional whose work or voice is valuable to the esports industry, please share with us."
      />
      <meta
        property="twitter:image"
        content="https://i.imgur.com/a4wj4KV.png"
      />
    </>
  );
}
