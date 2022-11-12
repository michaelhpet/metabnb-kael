# MetaBnB | HNG9 Project 3

A pixel perfect implementation of the design below, mobile responsiveness at developer's discretion.

## Design

[Figma file](https://www.figma.com/file/atc36d5Cj9xJNupZALp9Tg/Metabnb-for-frontend?node-id=1%3A1658)

## Technologies used

- Reactjs
- Material UI

## Project structure

- `index.html` - Root document
- /public - static assets like favicon
- /src - source codes
  - `main.jsx` - [app entry point](https://github.com/michael-peter/metabnb-kael/blob/main/src/main.jsx)
  - ./components - [UI components](https://github.com/michael-peter/metabnb-kael/tree/main/src/components)
    - ./brand - [brand components](https://github.com/michael-peter/metabnb-kael/tree/main/src/components/brand) like logo link
    - ./display - [display components](https://github.com/michael-peter/metabnb-kael/tree/main/src/components/display) e.g hero, card
    - ./icons - [SVG icons](https://github.com/michael-peter/metabnb-kael/tree/main/src/components/icons) (as JSX components)
    - ./input - [input components](https://github.com/michael-peter/metabnb-kael/tree/main/src/components/input) such as Button
    - ./layout - [layout components](https://github.com/michael-peter/metabnb-kael/tree/main/src/components/layout) e.g NavBar, Footer
    - ./modals - [modals or popups](https://github.com/michael-peter/metabnb-kael/tree/main/src/components/modals) e.g MenuModal
  - ./images - [image assets](https://github.com/michael-peter/metabnb-kael/tree/main/src/images)
    - ./common - [common images](https://github.com/michael-peter/metabnb-kael/tree/main/src/images/common) like hero image
    - ./metaplaces - [images](https://github.com/michael-peter/metabnb-kael/tree/main/src/images/metaplaces) used for meta place cards
  - ./routes - [app routes](https://github.com/michael-peter/metabnb-kael/tree/main/src/routes) or pages
  - ./utils - [various utilities](https://github.com/michael-peter/metabnb-kael/tree/main/src/utils) - utilities
    - ./assets - [asset compositions](https://github.com/michael-peter/metabnb-kael/tree/main/src/utils/assets) like image getters, link getters
    - ./hooks - [custom hooks](https://github.com/michael-peter/metabnb-kael/tree/main/src/utils/hooks), e.g, `useScroll`, `useImages`

## Deployment

Deployed with [Vercel](https://vercel.com/)
[https://metabnb-kael.vercel.app/](https://metabnb-kael.vercel.app/)
