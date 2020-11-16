# Who Make Esports

![](https://previews.dropbox.com/p/thumb/AA9aJ2AgROZVxzwe5noT-pW4g_LE12TMjDIzzf74SBtV88nvLrV7oxr2zE2-LPDqx1s8NewoVhJ_f3UngkllO9g-szUCjaB70v7zwWO3peMIZ20zA_Tw2MeHhQNhS7jf-4n7njkFzfAWBsa5gc4KBFKniDTiWf7C3nV_f5HO2NjMliKGww7HyuDGrA8gFY4PywV2BVq1gIgS64xCKLY4JdP5v_suuimBJoRFqQC5zpJuhAusL0Nd7B0PpK7Wg8lqlXiT1359evRsOWmBPEoxmE3b46An5mPMgCYWUl9A1wdRRmQXfeVwlKkPYEJlbgi9a5CE-LXTiDgINU1QNZQWe8uVaLTwC37hbeNBaonvoruxkg/p.jpeg?fv_content=true&size_mode=5)

The website is built using Google Spreedsheet, [Next.js](https://nextjs.org/) and deployed at [Vercel](https://vercel.com/).

## Forking this project

We encourage you to create your directory featured a list of any professionals you think is relevant. The code is open source, and these instructions will help you running on your local machine to get started.

### Link your spreedsheet

1. Duplicate [this spreedhsheet template](https://docs.google.com/spreadsheets/d/12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI/edit)
2. Go to File > Publish to the Web > Publish
3. Copy the id between /spreadsheets/ and /edit in the url: 
	> [https://docs.google.com/spreadsheets/d/__12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI__/edit](https://docs.google.com/spreadsheets/d/12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI/edit)
4. Paste the ID in the file [`pages/api/designers.js`](https://github.com/zehfernandes/brazilianswhodesign/blob/main/pages/api/designers.js)

### Install the dependencies

Making sure you're in the correct project folder and install the dependencies:

```
yarn install
```

### Run the project locally

To start the development server run:

```
yarn dev
```

In your browser, open `localhost:3000`.


### Deploy at vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/pedromadethis/whomakeesports)


