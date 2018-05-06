# 🧚 Hobkin

Hobkin is an experimental static site generator for interactive articles in [MDX](https://github.com/mdx-js/mdx). It's really just a proof of concept at the moment.

**Install** with:

```sh
npm install -g hobkin
```

**Build** with:

```sh
hob doggos.md
```

That will create a `public` folder with the whole site ready to go.

## Features

* 0-config setup.
* No database, no node server, spits out HTML/CSS/JS for easy distribution.
* Renders default JSX on build time for speed and SEO.

## What's MDX?

MDX is markdown + React style JSX. With MDX, you can write articles in markdown but embed JSX for easy interactive content.

```jsx
import CutenessGraph from './super-legit-cuteness-graph.js'

# Relative Cuteness of Pomeranians Puppies

By the chart below, we can see that Pomeranian cuteness spiked around 1990
and dropped after the dot com bust in 2000. However, we have recently 
seen a potential revival.

<CutenessGraph/>
```

## Roadmap
- [x] Build proof of concept
- [ ] Add some default CSS so it's not so ugly looking
- [ ] Allow more than one file to be rendered into an HTML page. 
- [ ] Add hobkin.config.js that lets you extend the webpack config a la nextjs
- [ ] Figure out how themes should work
