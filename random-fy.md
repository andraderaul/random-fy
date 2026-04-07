This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose

This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format

The content is organized as follows:

1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
   a. A header with the file path (## File: path/to/file)
   b. The full contents of the file in a code block

## Usage Guidelines

- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes

- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure

```
.github/
  workflows/
    coverage.yml
    quality.yml
    release.yml
.husky/
  .gitignore
  commit-msg
  pre-commit
.jest/
  setup.ts
docs/
  arch/
    random-fy-arch.excalidraw
    random-fy-arch.png
  como-funciona.md
  how-it-works.md
public/
  img/
    bg.jpg
    icon-128.png
    icon-16.png
    icon-264.png
    icon-32.png
    icon-528.png
    icon-64.png
    Spotify_Icon_RGB_Black.png
    Spotify_Icon_RGB_Green.png
    Spotify_Icon_RGB_White.png
    Spotify_Logo_RGB_Black.png
    Spotify_Logo_RGB_Green.png
    Spotify_Logo_RGB_White.png
  locales/
    en/
      about.json
      common.json
      footer.json
      login.json
      logout.json
      search.json
    es/
      about.json
      common.json
      footer.json
      login.json
      logout.json
      search.json
    pt/
      about.json
      common.json
      footer.json
      login.json
      logout.json
      search.json
  screenshots/
    1.png
    2.png
  manifest.json
  sw.js
  workbox-588899ac.js
src/
  components/
    audio-player/
      audio-player.spec.tsx
      audio-player.tsx
      index.ts
    content/
      content.spec.tsx
      content.tsx
      index.ts
    footer/
      footer.spec.tsx
      footer.tsx
      index.ts
    generic-error/
      generic-error.spec.tsx
      generic-error.tsx
      index.ts
    grid/
      grid.spec.tsx
      grid.tsx
      index.ts
    header/
      header.spec.tsx
      header.tsx
      index.ts
    image-box/
      image-box.skeleton.tsx
      image-box.spec.tsx
      image-box.tsx
      index.ts
    input-search/
      index.ts
      input-search.spec.tsx
      input-search.tsx
    primary-button/
      index.ts
      primary-button.spec.tsx
      primary-button.tsx
    primary-text/
      index.ts
      primary-text.spec.tsx
      primary-text.tsx
    sub-title/
      index.ts
      sub-title.spec.tsx
      sub-title.tsx
    title/
      index.ts
      title.spec.tsx
      title.tsx
    index.ts
  constants/
    index.ts
    scopes.ts
    values.ts
  contexts/
    audio-context/
      audio-context.tsx
      index.ts
    index.ts
  features/
    festival/
      festival.tsx
      index.ts
    image-collage/
      image-collage.spec.tsx
      image-collage.tsx
      index.ts
    match/
      index.ts
      match.spec.tsx
      match.tsx
    playlist/
      index.ts
      playlist.spec.tsx
      playlist.tsx
    index.ts
  hook/
    use-component-to-image/
      index.ts
      use-component-to-image.spec.ts
      use-component-to-image.ts
    index.ts
  mock/
    builder/
      builder.ts
      index.ts
    fixtures/
      fixtures.ts
      index.ts
    server/
      handlers/
        handlers.ts
        index.ts
      utils/
        index.ts
        utils.ts
      index.ts
      server.ts
    wrappers/
      index.ts
      wrappers.tsx
    index.ts
  pages/
    api/
      callback.ts
      login.ts
      playlist.ts
      random-top-artist.ts
      recommendations.ts
      refresh-token.ts
      search-artists.ts
    _app.tsx
    _document.tsx
    about.tsx
    index.tsx
    logout.tsx
    search.tsx
  queries/
    use-playlist-mutation/
      index.ts
      use-playlist-mutation.spec.ts
      use-playlist-mutation.ts
    use-recommendation/
      index.ts
      use-recommendation.spec.ts
      use-recommendation.ts
    use-related-artists/
      index.ts
      use-related-artists.spec.ts
      use-related-artists.ts
    index.ts
  services/
    network/
      http/
        create-playlist/
          create-playlist.spec.ts
          create-playlist.ts
          index.ts
        get-random-artist/
          get-random-artist.spec.ts
          get-random-artist.ts
          index.ts
        get-recommendations/
          get-recommendations.spec.ts
          get-recommendations.ts
          index.ts
        get-related-artists/
          get-related-artists.spec.ts
          get-related-artists.ts
          index.ts
        refresh-token-service/
          index.ts
          refresh-token-service.spec.ts
          refresh-token-service.ts
        http.spec.ts
        http.ts
        index.ts
      spotify-api/
        index.ts
        spotify-api.ts
      index.ts
    index.ts
  styles/
    globals.css
  templates/
    home/
      home.tsx
      index.ts
    login/
      index.ts
      login.spec.tsx
      login.tsx
    search/
      index.ts
      search.tsx
    index.ts
  tests/
    pages/
      api/
        callback.spec.ts
        login.spec.ts
        playlist.spec.ts
        random-top-artist.spec.ts
        recommendations.spec.ts
        search-artists.spec.ts
      about.spec.tsx
      index.spec.tsx
      logout.spec.tsx
      search.spec.tsx
    readme.md
  types/
    artist.ts
    image.ts
    index.ts
    playlist.ts
    recommendation.ts
    refresh-token.ts
    track.ts
  utils/
    async-map/
      async-map.spec.ts
      async-map.ts
      index.ts
    cookies/
      cookies.spec.ts
      cookies.ts
      index.ts
    get-locale/
      get-locale.spec.ts
      get-locale.ts
      index.ts
    parse/
      index.ts
      parse.spec.ts
      parse.ts
    rnd/
      index.ts
      rnd.spec.ts
      rnd.ts
    routes-config/
      index.ts
      private-route.spec.ts
      private-route.ts
    index.ts
.eslintignore
.eslintrc.json
.gitignore
.prettierrc
.releaserc.json
CHANGELOG.md
commitlint.config.js
jest.config.js
LICENSE
lint-staged.config.js
next-env.d.ts
next-i18next.config.js
next.config.js
package.json
postcss.config.js
README.md
tailwind.config.js
tsconfig.json
```

# Files

## File: .github/workflows/coverage.yml

```yaml
name: Coverage

on:
  pull_request:
    branches: [main]

jobs:
  coverage:
    name: Get Coverage

    permissions:
      checks: write
      pull-requests: write

    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Get coverage report
        uses: ArtiomTr/jest-coverage-report-action@v2
```

## File: .github/workflows/quality.yml

```yaml
name: Quality

on:
  push:
    branches:
      - main
  pull_request:
    branches: [main]

jobs:
  quality:
    name: Code Quality

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: yarn install

      - name: Typechecker
        run: yarn typecheck

      - name: Lint
        run: yarn lint --fix

      - name: Coverage
        run: yarn test:coverage
```

## File: .github/workflows/release.yml

```yaml
name: Release
on:
  push:
    branches:
      - main

jobs:
  release:
    name: Release

    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: yarn install

      - name: Release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: yarn release
```

## File: .husky/.gitignore

```
_
```

## File: .husky/commit-msg

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

## File: .husky/pre-commit

```
#!/bin/sh
[ -n "$CI" ] && exit 0

. "$(dirname "$0")/_/husky.sh"

yarn typecheck
yarn lint --fix
```

## File: .jest/setup.ts

```typescript
import '@testing-library/jest-dom'
import { setLogger } from 'react-query'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { server } from '../src/mock'

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => null
})

// Enable API mocking before tests.
beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error'
  })
)

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

beforeEach(() => {
  window.HTMLMediaElement.prototype.play = jest.fn()
  window.HTMLMediaElement.prototype.pause = jest.fn()
})

// I18N
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {}
    }
  }
})
```

## File: docs/arch/random-fy-arch.excalidraw

```
{
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",
  "elements": [
    {
      "id": "1_eukReRy76Uqfto89OGT",
      "type": "rectangle",
      "x": 848.752427842882,
      "y": 3762.2928365071607,
      "width": 318.4984673394098,
      "height": 965.5653550889738,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 431689067,
      "version": 481,
      "versionNonce": 1861886507,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995294,
      "link": null
    },
    {
      "type": "rectangle",
      "version": 1598,
      "versionNonce": 1784949835,
      "isDeleted": false,
      "id": "o2K2IDS8vgWcMQ3UdZoBG",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 982.2674300024173,
      "y": 4186.14267451438,
      "strokeColor": "#000000",
      "backgroundColor": "#fd7e1488",
      "width": 64.46115236495699,
      "height": 64.39942473426015,
      "seed": 1495836645,
      "groupIds": [
        "DKLM06lPq2ptADVfOLHbO",
        "h9MKYuBE4nEWLFiI2E_aq"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "type": "arrow",
          "id": "EUHZ_sUolb_30DI6OzWP4"
        },
        {
          "id": "w54t_AXGp_5x3c15mbsd9",
          "type": "arrow"
        },
        {
          "id": "Um3mYrwd1-0KIGNcc0eoA",
          "type": "arrow"
        }
      ],
      "updated": 1647298995295,
      "link": null
    },
    {
      "type": "line",
      "version": 763,
      "versionNonce": 2122043877,
      "isDeleted": false,
      "id": "k8AlyhYp4wpqf2c_8uGXY",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 1007.2586375528647,
      "y": 4212.880140299478,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 19.307143399999998,
      "height": 26.897,
      "seed": 687994091,
      "groupIds": [
        "ppcDa-1qgJY-ZUSoO0B_M",
        "h9MKYuBE4nEWLFiI2E_aq"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995295,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          -12.730345799999998,
          25.466
        ],
        [
          -0.5178580999999962,
          26.897
        ],
        [
          6.576797599999999,
          13.180999999999997
        ],
        [
          0.8992804999999997,
          0.5640000000000001
        ]
      ]
    },
    {
      "type": "line",
      "version": 763,
      "versionNonce": 357460715,
      "isDeleted": false,
      "id": "4mJdQsyzhDK2lgT7sYomK",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 1031.7453577528645,
      "y": 4228.777140299479,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 34.863799400000005,
      "height": 44,
      "seed": 1475633989,
      "groupIds": [
        "ppcDa-1qgJY-ZUSoO0B_M",
        "h9MKYuBE4nEWLFiI2E_aq"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995295,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          -14.960123300000012,
          -32.42
        ],
        [
          -29.1743317,
          -33
        ],
        [
          -30.178179700000005,
          -23.001
        ],
        [
          -22.897294200000005,
          -22
        ],
        [
          -7.866463500000002,
          10.421999999999997
        ],
        [
          3.689738799999993,
          11
        ],
        [
          4.685619699999997,
          1.0000000000000002
        ],
        [
          3.6897387999999935,
          0
        ]
      ]
    },
    {
      "id": "bwcdyzW35P0Hreq1sheT8",
      "type": "text",
      "x": 937.4847954644099,
      "y": 4259.353101942273,
      "width": 158,
      "height": 50,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "hachure",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 130461035,
      "version": 561,
      "versionNonce": 1907873163,
      "isDeleted": false,
      "boundElements": [
        {
          "id": "jP6lVe05EGFt1lWFOP5CE",
          "type": "arrow"
        }
      ],
      "updated": 1647298995295,
      "link": null,
      "text": "recommendations\n",
      "fontSize": 20,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 43,
      "containerId": null,
      "originalText": "recommendations\n"
    },
    {
      "type": "rectangle",
      "version": 1919,
      "versionNonce": 109206693,
      "isDeleted": false,
      "id": "pQR7laov2TjYOr1_k_5yF",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 980.053589941653,
      "y": 4577.489889232013,
      "strokeColor": "#000000",
      "backgroundColor": "#fd7e1488",
      "width": 64.46115236495699,
      "height": 64.39942473426015,
      "seed": 1975446309,
      "groupIds": [
        "TG-_3Aitfdfox0e7nf_eR",
        "J3fUyjKnKNEAhHp9HN89B"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "type": "arrow",
          "id": "EUHZ_sUolb_30DI6OzWP4"
        },
        {
          "id": "N3NNKVjRyU_yO91AD2cE-",
          "type": "arrow"
        },
        {
          "id": "gK0Vap-ctqhoj9Rt_O1V6",
          "type": "arrow"
        }
      ],
      "updated": 1647298995295,
      "link": null
    },
    {
      "type": "line",
      "version": 1083,
      "versionNonce": 1591405611,
      "isDeleted": false,
      "id": "y2-S_RwByALmCpeTv01yr",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 1005.0447974921001,
      "y": 4604.227355017111,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 19.307143399999998,
      "height": 26.897,
      "seed": 2052359595,
      "groupIds": [
        "xD3ao4FKkHQqdqD71S5ZW",
        "J3fUyjKnKNEAhHp9HN89B"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995295,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          -12.730345799999998,
          25.466
        ],
        [
          -0.5178580999999962,
          26.897
        ],
        [
          6.576797599999999,
          13.180999999999997
        ],
        [
          0.8992804999999997,
          0.5640000000000001
        ]
      ]
    },
    {
      "type": "line",
      "version": 1083,
      "versionNonce": 1102675973,
      "isDeleted": false,
      "id": "szFDa9rYcQFFxxO0_yg3a",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 1029.5315176921006,
      "y": 4620.124355017112,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 34.863799400000005,
      "height": 44,
      "seed": 1734360709,
      "groupIds": [
        "xD3ao4FKkHQqdqD71S5ZW",
        "J3fUyjKnKNEAhHp9HN89B"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995295,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          -14.960123300000012,
          -32.42
        ],
        [
          -29.1743317,
          -33
        ],
        [
          -30.178179700000005,
          -23.001
        ],
        [
          -22.897294200000005,
          -22
        ],
        [
          -7.866463500000002,
          10.421999999999997
        ],
        [
          3.689738799999993,
          11
        ],
        [
          4.685619699999997,
          1.0000000000000002
        ],
        [
          3.6897387999999935,
          0
        ]
      ]
    },
    {
      "type": "text",
      "version": 1000,
      "versionNonce": 1889677003,
      "isDeleted": false,
      "id": "7SsfaQoGsx4LZ9Y84hdpt",
      "fillStyle": "hachure",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 978.6465386284715,
      "y": 4648.827859791418,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 71,
      "height": 25,
      "seed": 1823250507,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995295,
      "link": null,
      "fontSize": 20,
      "fontFamily": 1,
      "text": "playlist",
      "baseline": 18,
      "textAlign": "left",
      "verticalAlign": "top",
      "containerId": null,
      "originalText": "playlist"
    },
    {
      "type": "rectangle",
      "version": 1786,
      "versionNonce": 83179365,
      "isDeleted": false,
      "id": "Rn44M-yDwB3_y9UP6tMbF",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 983.2368174807159,
      "y": 4293.7054382771485,
      "strokeColor": "#000000",
      "backgroundColor": "#fd7e1488",
      "width": 64.46115236495699,
      "height": 64.39942473426015,
      "seed": 2136445477,
      "groupIds": [
        "FxCM-GuZCSO64Pkt4bgq0",
        "pxoyOPvVa376NlyirSju5"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "type": "arrow",
          "id": "EUHZ_sUolb_30DI6OzWP4"
        },
        {
          "id": "rVpSxtYUcAjRBgGo0Woyc",
          "type": "arrow"
        },
        {
          "id": "jP6lVe05EGFt1lWFOP5CE",
          "type": "arrow"
        }
      ],
      "updated": 1647298995295,
      "link": null
    },
    {
      "type": "line",
      "version": 949,
      "versionNonce": 1504189803,
      "isDeleted": false,
      "id": "4QvCgh8TMq1v2Nl2dvMuf",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 1008.228025031163,
      "y": 4320.442904062248,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 19.307143399999998,
      "height": 26.897,
      "seed": 1899876011,
      "groupIds": [
        "iPwsvtefR9KDyYS8EKWQc",
        "pxoyOPvVa376NlyirSju5"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995295,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          -12.730345799999998,
          25.466
        ],
        [
          -0.5178580999999962,
          26.897
        ],
        [
          6.576797599999999,
          13.180999999999997
        ],
        [
          0.8992804999999997,
          0.5640000000000001
        ]
      ]
    },
    {
      "type": "line",
      "version": 949,
      "versionNonce": 176358085,
      "isDeleted": false,
      "id": "SqWMKJU0U84XqXNsaa0yc",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 1032.7147452311635,
      "y": 4336.339904062249,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 34.863799400000005,
      "height": 44,
      "seed": 625739141,
      "groupIds": [
        "iPwsvtefR9KDyYS8EKWQc",
        "pxoyOPvVa376NlyirSju5"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995295,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          -14.960123300000012,
          -32.42
        ],
        [
          -29.1743317,
          -33
        ],
        [
          -30.178179700000005,
          -23.001
        ],
        [
          -22.897294200000005,
          -22
        ],
        [
          -7.866463500000002,
          10.421999999999997
        ],
        [
          3.689738799999993,
          11
        ],
        [
          4.685619699999997,
          1.0000000000000002
        ],
        [
          3.6897387999999935,
          0
        ]
      ]
    },
    {
      "type": "text",
      "version": 808,
      "versionNonce": 355940363,
      "isDeleted": false,
      "id": "1vLe_tO_8cmaIk6YKbqda",
      "fillStyle": "hachure",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 920.1685248480901,
      "y": 4385.081793168151,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 176,
      "height": 25,
      "seed": 696566091,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995295,
      "link": null,
      "fontSize": 20,
      "fontFamily": 1,
      "text": "random-top-artist",
      "baseline": 18,
      "textAlign": "left",
      "verticalAlign": "top",
      "containerId": null,
      "originalText": "random-top-artist"
    },
    {
      "type": "rectangle",
      "version": 1632,
      "versionNonce": 1728078373,
      "isDeleted": false,
      "id": "IQn_vsVySG9qqYFGuwK9P",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 976.4400374242925,
      "y": 3814.8686327215996,
      "strokeColor": "#000000",
      "backgroundColor": "#fd7e1488",
      "width": 64.46115236495699,
      "height": 64.39942473426015,
      "seed": 1217228523,
      "groupIds": [
        "ICt3uBVJlfuw7nULD_FWj",
        "cUr3bu0V2_FA-xKgre3xe"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "type": "arrow",
          "id": "EUHZ_sUolb_30DI6OzWP4"
        },
        {
          "id": "PNvIMn7OO6S2MQlimHNCh",
          "type": "arrow"
        },
        {
          "id": "Ne612d3ltcCJl7qNCCOtu",
          "type": "arrow"
        },
        {
          "id": "fLqsrNOvjB1ZFpr3Fpj-o",
          "type": "arrow"
        },
        {
          "id": "SPg_9fsIj_5Iy7p0770BQ",
          "type": "arrow"
        },
        {
          "id": "a_D9Erp2Ttcntof0vqUiS",
          "type": "arrow"
        },
        {
          "id": "d9Gj3kQ5SZ2696LftOnmx",
          "type": "arrow"
        }
      ],
      "updated": 1647298995295,
      "link": null
    },
    {
      "type": "line",
      "version": 790,
      "versionNonce": 1363803819,
      "isDeleted": false,
      "id": "dFK36lnqgNzssZ5VmRxQn",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 1001.4312449747397,
      "y": 3841.6060985066993,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 19.307143399999998,
      "height": 26.897,
      "seed": 1685424453,
      "groupIds": [
        "ydBXqZ4oRuts-3GJw3KCB",
        "cUr3bu0V2_FA-xKgre3xe"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995295,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          -12.730345799999998,
          25.466
        ],
        [
          -0.5178580999999962,
          26.897
        ],
        [
          6.576797599999999,
          13.180999999999997
        ],
        [
          0.8992804999999997,
          0.5640000000000001
        ]
      ]
    },
    {
      "type": "line",
      "version": 790,
      "versionNonce": 1062917509,
      "isDeleted": false,
      "id": "SERE_ytKQ1u5ROLIjGYan",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 1025.9179651747397,
      "y": 3857.5030985067,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 34.863799400000005,
      "height": 44,
      "seed": 1853249931,
      "groupIds": [
        "ydBXqZ4oRuts-3GJw3KCB",
        "cUr3bu0V2_FA-xKgre3xe"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995295,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          -14.960123300000012,
          -32.42
        ],
        [
          -29.1743317,
          -33
        ],
        [
          -30.178179700000005,
          -23.001
        ],
        [
          -22.897294200000005,
          -22
        ],
        [
          -7.866463500000002,
          10.421999999999997
        ],
        [
          3.689738799999993,
          11
        ],
        [
          4.685619699999997,
          1.0000000000000002
        ],
        [
          3.6897387999999935,
          0
        ]
      ]
    },
    {
      "type": "text",
      "version": 559,
      "versionNonce": 411758923,
      "isDeleted": false,
      "id": "GwNSSkwf_pclqj8tvSJQD",
      "fillStyle": "hachure",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 990.5726047092019,
      "y": 3888.499456742375,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 41,
      "height": 25,
      "seed": 501094565,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995295,
      "link": null,
      "fontSize": 20,
      "fontFamily": 1,
      "text": "login",
      "baseline": 18,
      "textAlign": "left",
      "verticalAlign": "top",
      "containerId": null,
      "originalText": "login"
    },
    {
      "type": "line",
      "version": 2154,
      "versionNonce": 1455322059,
      "isDeleted": false,
      "id": "wl1A6MUF29K10g6Howfu8",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 1622.2578886708086,
      "y": 4079.407966934868,
      "strokeColor": "#087f5b",
      "backgroundColor": "#82c91e",
      "width": 116.42036295658872,
      "height": 103.65107323746608,
      "seed": 931534187,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995296,
      "link": null,
      "startBinding": null,
      "endBinding": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          -62.44191743896485,
          19.19929080548739
        ],
        [
          -63.17668831316513,
          79.43840749607878
        ],
        [
          -7.618334228588694,
          103.65107323746608
        ],
        [
          51.963117173367294,
          79.15871076413049
        ],
        [
          53.24367464342358,
          21.28567723840068
        ],
        [
          0,
          0
        ]
      ]
    },
    {
      "id": "0Rj73r7PPj-XSrSKofQ13",
      "type": "text",
      "x": 1574.5632459852422,
      "y": 4115.999169243707,
      "width": 75.41162640115488,
      "height": 27.975280761718743,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "#82c91e",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 1419393099,
      "version": 407,
      "versionNonce": 1366016613,
      "isDeleted": false,
      "boundElements": [
        {
          "id": "Ne612d3ltcCJl7qNCCOtu",
          "type": "arrow"
        },
        {
          "id": "w54t_AXGp_5x3c15mbsd9",
          "type": "arrow"
        }
      ],
      "updated": 1647298995296,
      "link": null,
      "text": "Spotify",
      "fontSize": 24.32633109714673,
      "fontFamily": 2,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 21.975280761718743,
      "containerId": null,
      "originalText": "Spotify"
    },
    {
      "type": "rectangle",
      "version": 1954,
      "versionNonce": 414213035,
      "isDeleted": false,
      "id": "9IlaQLAzzc3lRtU9OI-V5",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 982.3807519425216,
      "y": 3956.366419224667,
      "strokeColor": "#000000",
      "backgroundColor": "#fd7e1488",
      "width": 64.46115236495699,
      "height": 64.39942473426015,
      "seed": 950954315,
      "groupIds": [
        "R5c6MbWW0jAi4Sf1foKwo",
        "yN2eSDmktKEn5xwOrDG54"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "type": "arrow",
          "id": "EUHZ_sUolb_30DI6OzWP4"
        },
        {
          "id": "PNvIMn7OO6S2MQlimHNCh",
          "type": "arrow"
        },
        {
          "id": "Ne612d3ltcCJl7qNCCOtu",
          "type": "arrow"
        },
        {
          "id": "fLqsrNOvjB1ZFpr3Fpj-o",
          "type": "arrow"
        },
        {
          "id": "kUV_pJAMWt0a6YWgXvlMS",
          "type": "arrow"
        },
        {
          "id": "ANQPgU-uUnqax8BGhrCnM",
          "type": "arrow"
        },
        {
          "id": "wCWWtSsZHN3Dj4cbPFWTk",
          "type": "arrow"
        }
      ],
      "updated": 1647298995296,
      "link": null
    },
    {
      "type": "line",
      "version": 1106,
      "versionNonce": 1404649605,
      "isDeleted": false,
      "id": "BcT6WeIJ5So8SBE5axxqi",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 1007.3719594929687,
      "y": 3983.1038850097666,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 19.307143399999998,
      "height": 26.897,
      "seed": 1052763365,
      "groupIds": [
        "vXIZMDpVYVosj2RDtMa9T",
        "yN2eSDmktKEn5xwOrDG54"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995296,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          -12.730345799999998,
          25.466
        ],
        [
          -0.5178580999999962,
          26.897
        ],
        [
          6.576797599999999,
          13.180999999999997
        ],
        [
          0.8992804999999997,
          0.5640000000000001
        ]
      ]
    },
    {
      "type": "line",
      "version": 1106,
      "versionNonce": 1339864651,
      "isDeleted": false,
      "id": "Xj2mJ6PHOIp_Q9X_frH16",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 0,
      "opacity": 100,
      "angle": 0,
      "x": 1031.8586796929692,
      "y": 3999.0008850097674,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 34.863799400000005,
      "height": 44,
      "seed": 2034829291,
      "groupIds": [
        "vXIZMDpVYVosj2RDtMa9T",
        "yN2eSDmktKEn5xwOrDG54"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995296,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          -14.960123300000012,
          -32.42
        ],
        [
          -29.1743317,
          -33
        ],
        [
          -30.178179700000005,
          -23.001
        ],
        [
          -22.897294200000005,
          -22
        ],
        [
          -7.866463500000002,
          10.421999999999997
        ],
        [
          3.689738799999993,
          11
        ],
        [
          4.685619699999997,
          1.0000000000000002
        ],
        [
          3.6897387999999935,
          0
        ]
      ]
    },
    {
      "id": "9m2fzMXGO0DCUpKnGmjQ6",
      "type": "text",
      "x": 971.4039306640627,
      "y": 4028.073313395182,
      "width": 78,
      "height": 25,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "#82c91e",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 1805454693,
      "version": 362,
      "versionNonce": 1761612171,
      "isDeleted": false,
      "boundElements": [
        {
          "id": "kUV_pJAMWt0a6YWgXvlMS",
          "type": "arrow"
        }
      ],
      "updated": 1647299355667,
      "link": null,
      "text": "callback",
      "fontSize": 20,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 18,
      "containerId": null,
      "originalText": "callback"
    },
    {
      "id": "mLl1CZI4X2DA2uGp8J7rI",
      "type": "text",
      "x": 954.1173502604166,
      "y": 3728.6783582899307,
      "width": 113.40798611111096,
      "height": 35.43999565972217,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 1468644805,
      "version": 119,
      "versionNonce": 1132917477,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995296,
      "link": null,
      "text": "Backend",
      "fontSize": 28.35199652777774,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 24.43999565972217,
      "containerId": null,
      "originalText": "Backend"
    },
    {
      "id": "a_D9Erp2Ttcntof0vqUiS",
      "type": "arrow",
      "x": 1051.3489990234375,
      "y": 3847.1572875976567,
      "width": 492.50194023144786,
      "height": 241.61488188666635,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "round",
      "seed": 628307301,
      "version": 179,
      "versionNonce": 1388435947,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995296,
      "link": null,
      "points": [
        [
          0,
          0
        ],
        [
          492.50194023144786,
          241.61488188666635
        ]
      ],
      "lastCommittedPoint": null,
      "startBinding": {
        "elementId": "IQn_vsVySG9qqYFGuwK9P",
        "focus": -0.4342388653103427,
        "gap": 10.447809234188071
      },
      "endBinding": null,
      "startArrowhead": null,
      "endArrowhead": "arrow"
    },
    {
      "id": "ANQPgU-uUnqax8BGhrCnM",
      "type": "arrow",
      "x": 1554.1116605761565,
      "y": 4124.851391537033,
      "width": 502.83909113171194,
      "height": 132.54260111819576,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "round",
      "seed": 1679162635,
      "version": 169,
      "versionNonce": 374427205,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995297,
      "link": null,
      "points": [
        [
          0,
          0
        ],
        [
          -502.83909113171194,
          -132.54260111819576
        ]
      ],
      "lastCommittedPoint": null,
      "startBinding": null,
      "endBinding": {
        "elementId": "9IlaQLAzzc3lRtU9OI-V5",
        "focus": -0.1454914841925399,
        "gap": 4.430665136966127
      },
      "startArrowhead": null,
      "endArrowhead": "arrow"
    },
    {
      "id": "rVpSxtYUcAjRBgGo0Woyc",
      "type": "arrow",
      "x": 1131.8311773336065,
      "y": 4281.42154117345,
      "width": 417.4958271522196,
      "height": 116.32535829391509,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "round",
      "seed": 1638640165,
      "version": 338,
      "versionNonce": 461282091,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995297,
      "link": null,
      "points": [
        [
          0,
          0
        ],
        [
          417.4958271522196,
          -116.32535829391509
        ]
      ],
      "lastCommittedPoint": null,
      "startBinding": {
        "elementId": "reqcwNlsqtyXLUB5nLUYV",
        "focus": 0.08439718784408955,
        "gap": 20.502964171713927
      },
      "endBinding": null,
      "startArrowhead": null,
      "endArrowhead": "arrow"
    },
    {
      "id": "N3NNKVjRyU_yO91AD2cE-",
      "type": "arrow",
      "x": 1058.833915938638,
      "y": 4597.751163356759,
      "width": 502.43971680043865,
      "height": 410.91113255952496,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "round",
      "seed": 1892366117,
      "version": 466,
      "versionNonce": 1567979237,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647299363919,
      "link": null,
      "points": [
        [
          0,
          0
        ],
        [
          502.43971680043865,
          -410.91113255952496
        ]
      ],
      "lastCommittedPoint": null,
      "startBinding": {
        "elementId": "pQR7laov2TjYOr1_k_5yF",
        "focus": 0.446241705592847,
        "gap": 14.319173632028196
      },
      "endBinding": null,
      "startArrowhead": null,
      "endArrowhead": "arrow"
    },
    {
      "id": "01Zdxd9rKadjhjoqUPnWC",
      "type": "rectangle",
      "x": 921.8699679904515,
      "y": 3795.022345648872,
      "width": 193.19627549913196,
      "height": 274.4147406684028,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 682612363,
      "version": 173,
      "versionNonce": 1860687973,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995297,
      "link": null
    },
    {
      "id": "vH22z2ZhL_u2RJPJyDIFw",
      "type": "text",
      "x": 992.6776936848958,
      "y": 3769.364274766711,
      "width": 47,
      "height": 25,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 433352747,
      "version": 63,
      "versionNonce": 913050731,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995297,
      "link": null,
      "text": "Auth",
      "fontSize": 20,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 18,
      "containerId": null,
      "originalText": "Auth"
    },
    {
      "type": "rectangle",
      "version": 314,
      "versionNonce": 1064928197,
      "isDeleted": false,
      "id": "reqcwNlsqtyXLUB5nLUYV",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 918.1319376627606,
      "y": 4162.990180121527,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 193.19627549913196,
      "height": 274.4147406684028,
      "seed": 79557061,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "id": "Um3mYrwd1-0KIGNcc0eoA",
          "type": "arrow"
        },
        {
          "id": "rVpSxtYUcAjRBgGo0Woyc",
          "type": "arrow"
        }
      ],
      "updated": 1647298995297,
      "link": null
    },
    {
      "id": "5SaW_BqUhtxYZVSetNCoo",
      "type": "text",
      "x": 979.6220567491321,
      "y": 4137.122097439235,
      "width": 61,
      "height": 25,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 1473669611,
      "version": 99,
      "versionNonce": 461292325,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995297,
      "link": null,
      "text": "Match",
      "fontSize": 20,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 18,
      "containerId": null,
      "originalText": "Match"
    },
    {
      "type": "rectangle",
      "version": 662,
      "versionNonce": 1575615973,
      "isDeleted": false,
      "id": "KyH6GEPS-vYPIYfhn1mg_",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 414.7351581523943,
      "y": 3762.916313886989,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 318.4984673394098,
      "height": 965.5653550889738,
      "seed": 699445035,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995297,
      "link": null
    },
    {
      "type": "rectangle",
      "version": 4394,
      "versionNonce": 1277755115,
      "isDeleted": false,
      "id": "GE71kgwWHNXx_6p8TORF-",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 527.4491931571013,
      "y": 3850.760624270749,
      "strokeColor": "#000000",
      "backgroundColor": "#228be6",
      "width": 70.67858069123133,
      "height": 107.25081879410921,
      "seed": 1697350533,
      "groupIds": [
        "yFy9iCtImW0ywpjYavV7J"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "type": "arrow",
          "id": "CFu0B4Mw_1wC1Hbgx8Fs0"
        },
        {
          "type": "arrow",
          "id": "XIl_NhaFtRO00pX5Pq6VU"
        },
        {
          "type": "arrow",
          "id": "EndiSTFlx1AT7vcBVjgve"
        },
        {
          "id": "d9Gj3kQ5SZ2696LftOnmx",
          "type": "arrow"
        }
      ],
      "updated": 1647298995297,
      "link": null
    },
    {
      "type": "rectangle",
      "version": 4442,
      "versionNonce": 639301957,
      "isDeleted": false,
      "id": "D5OaEFMSqg2_OE4BoYFDm",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 519.901760121387,
      "y": 3843.740534985035,
      "strokeColor": "#000000",
      "backgroundColor": "#228be6",
      "width": 70.67858069123133,
      "height": 107.25081879410921,
      "seed": 2011439947,
      "groupIds": [
        "j0pzMPFNyou33uo8kvrtQ",
        "yFy9iCtImW0ywpjYavV7J"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "type": "arrow",
          "id": "CFu0B4Mw_1wC1Hbgx8Fs0"
        },
        {
          "type": "arrow",
          "id": "XIl_NhaFtRO00pX5Pq6VU"
        },
        {
          "type": "arrow",
          "id": "EndiSTFlx1AT7vcBVjgve"
        }
      ],
      "updated": 1647298995297,
      "link": null
    },
    {
      "type": "rectangle",
      "version": 4540,
      "versionNonce": 404744587,
      "isDeleted": false,
      "id": "FZuiHL-0O9HTbS2OZy0l_",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 510.5066708356717,
      "y": 3835.486628735035,
      "strokeColor": "#000000",
      "backgroundColor": "#228be6",
      "width": 70.67858069123133,
      "height": 107.25081879410921,
      "seed": 39504613,
      "groupIds": [
        "yFy9iCtImW0ywpjYavV7J"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "type": "arrow",
          "id": "CFu0B4Mw_1wC1Hbgx8Fs0"
        },
        {
          "type": "arrow",
          "id": "XIl_NhaFtRO00pX5Pq6VU"
        },
        {
          "type": "arrow",
          "id": "EndiSTFlx1AT7vcBVjgve"
        }
      ],
      "updated": 1647298995297,
      "link": null
    },
    {
      "type": "line",
      "version": 3663,
      "versionNonce": 1767213221,
      "isDeleted": false,
      "id": "vZCYAuXse9RCvS4vZrYEk",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 522.4930974225827,
      "y": 3884.2338657823875,
      "strokeColor": "#000000",
      "backgroundColor": "#228be6",
      "width": 46.57983585730082,
      "height": 3.249953844290203,
      "seed": 2109178347,
      "groupIds": [
        "yFy9iCtImW0ywpjYavV7J"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995297,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          40.42449133807562,
          0.1573930526684746
        ],
        [
          46.57983585730082,
          -3.0925607916217284
        ]
      ]
    },
    {
      "type": "line",
      "version": 3689,
      "versionNonce": 656441387,
      "isDeleted": false,
      "id": "ihgnz5rTWiMzenjSCjxnE",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 524.348349660597,
      "y": 3852.7685784835494,
      "strokeColor": "#000000",
      "backgroundColor": "#228be6",
      "width": 45.567415680676426,
      "height": 2.8032978840147194,
      "seed": 2095720005,
      "groupIds": [
        "yFy9iCtImW0ywpjYavV7J"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995297,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          16.832548902953302,
          -2.8032978840147194
        ],
        [
          45.567415680676426,
          -0.3275477042019195
        ]
      ]
    },
    {
      "type": "line",
      "version": 3714,
      "versionNonce": 960965637,
      "isDeleted": false,
      "id": "X15fAPkpcMAwp69ApLMTO",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 524.2717501442276,
      "y": 3920.1629527539053,
      "strokeColor": "#000000",
      "backgroundColor": "#228be6",
      "width": 48.33668263438425,
      "height": 4.280657518731036,
      "seed": 988155019,
      "groupIds": [
        "yFy9iCtImW0ywpjYavV7J"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995297,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          26.41225578429045,
          -0.2552319773002338
        ],
        [
          37.62000339651456,
          2.3153712935189787
        ],
        [
          48.33668263438425,
          -1.9652862252120569
        ]
      ]
    },
    {
      "type": "line",
      "version": 3751,
      "versionNonce": 1125466827,
      "isDeleted": false,
      "id": "ocGqrQyzlZU7W4V4lCgmW",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 521.0877029626972,
      "y": 3931.4061011621843,
      "strokeColor": "#000000",
      "backgroundColor": "#228be6",
      "width": 54.40694982784246,
      "height": 2.9096445412231735,
      "seed": 1471616421,
      "groupIds": [
        "yFy9iCtImW0ywpjYavV7J"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995297,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          10.166093050596771,
          -1.166642430373031
        ],
        [
          16.130660965377448,
          -0.8422655250909383
        ],
        [
          46.26079588567538,
          0.6125567455206506
        ],
        [
          54.40694982784246,
          -2.297087795702523
        ]
      ]
    },
    {
      "type": "line",
      "version": 3716,
      "versionNonce": 367879013,
      "isDeleted": false,
      "id": "BseZg5r61Y0HOrOiv5XKp",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 521.372545858263,
      "y": 3867.8291800368106,
      "strokeColor": "#000000",
      "backgroundColor": "#228be6",
      "width": 46.92865289294453,
      "height": 2.4757501798128,
      "seed": 1932149547,
      "groupIds": [
        "yFy9iCtImW0ywpjYavV7J"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995297,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          18.193786115221407,
          -0.5912874140789839
        ],
        [
          46.92865289294453,
          1.884462765733816
        ]
      ]
    },
    {
      "type": "line",
      "version": 3731,
      "versionNonce": 345551211,
      "isDeleted": false,
      "id": "hYQ1i0azF6PMdBdzgqk-J",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 521.4800340544134,
      "y": 3902.31250907265,
      "strokeColor": "#000000",
      "backgroundColor": "#228be6",
      "width": 46.92865289294453,
      "height": 2.4757501798128,
      "seed": 1575950597,
      "groupIds": [
        "yFy9iCtImW0ywpjYavV7J"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995297,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          8.093938105125233,
          1.4279702913643746
        ],
        [
          18.193786115221407,
          -0.5912874140789839
        ],
        [
          46.92865289294453,
          1.884462765733816
        ]
      ]
    },
    {
      "id": "TtriDBr6xAsdpPpVnKHvp",
      "type": "text",
      "x": 477.51974861618373,
      "y": 3971.181311581215,
      "width": 163,
      "height": 25,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 716386059,
      "version": 55,
      "versionNonce": 551390757,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995297,
      "link": null,
      "text": "Unauthenticated",
      "fontSize": 20,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 18,
      "containerId": null,
      "originalText": "Unauthenticated"
    },
    {
      "type": "text",
      "version": 313,
      "versionNonce": 270897835,
      "isDeleted": false,
      "id": "3CHG9T1VwjSoyTStQvho-",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 488.09361859386263,
      "y": 3719.8539500050747,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "width": 119,
      "height": 36,
      "seed": 1459722757,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "boundElements": [],
      "updated": 1647298995297,
      "link": null,
      "fontSize": 28.35199652777774,
      "fontFamily": 1,
      "text": "Frontend",
      "baseline": 25,
      "textAlign": "center",
      "verticalAlign": "top",
      "containerId": null,
      "originalText": "Frontend"
    },
    {
      "id": "d9Gj3kQ5SZ2696LftOnmx",
      "type": "arrow",
      "x": 608.754652587538,
      "y": 3881.6927574115816,
      "width": 365.3130522228423,
      "height": 35.838780625387244,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "round",
      "seed": 633063877,
      "version": 49,
      "versionNonce": 481460613,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995297,
      "link": null,
      "points": [
        [
          0,
          0
        ],
        [
          365.3130522228423,
          -35.838780625387244
        ]
      ],
      "lastCommittedPoint": null,
      "startBinding": {
        "elementId": "GE71kgwWHNXx_6p8TORF-",
        "focus": -0.31840171795145966,
        "gap": 10.626878739205438
      },
      "endBinding": {
        "elementId": "IQn_vsVySG9qqYFGuwK9P",
        "focus": 0.1303406296012901,
        "gap": 2.372332613912249
      },
      "startArrowhead": null,
      "endArrowhead": "arrow"
    },
    {
      "type": "rectangle",
      "version": 4519,
      "versionNonce": 517211467,
      "isDeleted": false,
      "id": "0rWIUB4qN-Bl1f_P8TE0N",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 540.1948451288276,
      "y": 4096.769324686952,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "width": 70.67858069123133,
      "height": 107.25081879410921,
      "seed": 2036309867,
      "groupIds": [
        "MV2IRMQJ-QKCbPyEQ7Wlf"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "type": "arrow",
          "id": "CFu0B4Mw_1wC1Hbgx8Fs0"
        },
        {
          "type": "arrow",
          "id": "XIl_NhaFtRO00pX5Pq6VU"
        },
        {
          "type": "arrow",
          "id": "EndiSTFlx1AT7vcBVjgve"
        },
        {
          "id": "d9Gj3kQ5SZ2696LftOnmx",
          "type": "arrow"
        },
        {
          "id": "wCWWtSsZHN3Dj4cbPFWTk",
          "type": "arrow"
        },
        {
          "id": "Um3mYrwd1-0KIGNcc0eoA",
          "type": "arrow"
        }
      ],
      "updated": 1647298995297,
      "link": null
    },
    {
      "type": "rectangle",
      "version": 4568,
      "versionNonce": 1817315557,
      "isDeleted": false,
      "id": "AAYxLnWH6lwN3K4pNs-9x",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 532.6474120931134,
      "y": 4089.7492354012384,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "width": 70.67858069123133,
      "height": 107.25081879410921,
      "seed": 92053701,
      "groupIds": [
        "2PC2hba1lFpaYi3zDbPnd",
        "MV2IRMQJ-QKCbPyEQ7Wlf"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "type": "arrow",
          "id": "CFu0B4Mw_1wC1Hbgx8Fs0"
        },
        {
          "type": "arrow",
          "id": "XIl_NhaFtRO00pX5Pq6VU"
        },
        {
          "type": "arrow",
          "id": "EndiSTFlx1AT7vcBVjgve"
        },
        {
          "id": "gK0Vap-ctqhoj9Rt_O1V6",
          "type": "arrow"
        },
        {
          "id": "Um3mYrwd1-0KIGNcc0eoA",
          "type": "arrow"
        },
        {
          "id": "jP6lVe05EGFt1lWFOP5CE",
          "type": "arrow"
        }
      ],
      "updated": 1647298995297,
      "link": null
    },
    {
      "type": "rectangle",
      "version": 4663,
      "versionNonce": 1079714795,
      "isDeleted": false,
      "id": "1mGL3mAJu1f8zqv9MThT_",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 523.2523228073981,
      "y": 4081.495329151238,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "width": 70.67858069123133,
      "height": 107.25081879410921,
      "seed": 380533259,
      "groupIds": [
        "MV2IRMQJ-QKCbPyEQ7Wlf"
      ],
      "strokeSharpness": "sharp",
      "boundElements": [
        {
          "type": "arrow",
          "id": "CFu0B4Mw_1wC1Hbgx8Fs0"
        },
        {
          "type": "arrow",
          "id": "XIl_NhaFtRO00pX5Pq6VU"
        },
        {
          "type": "arrow",
          "id": "EndiSTFlx1AT7vcBVjgve"
        }
      ],
      "updated": 1647298995297,
      "link": null
    },
    {
      "type": "line",
      "version": 3785,
      "versionNonce": 1632216133,
      "isDeleted": false,
      "id": "pbc5x8clGkEbBkYSiL4Ca",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 535.238749394309,
      "y": 4130.242566198592,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "width": 46.57983585730082,
      "height": 3.249953844290203,
      "seed": 1293303845,
      "groupIds": [
        "MV2IRMQJ-QKCbPyEQ7Wlf"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995297,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          40.42449133807562,
          0.1573930526684746
        ],
        [
          46.57983585730082,
          -3.0925607916217284
        ]
      ]
    },
    {
      "type": "line",
      "version": 3811,
      "versionNonce": 1824878219,
      "isDeleted": false,
      "id": "xIotFEaHZfooP7-97vSk8",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 537.0940016323234,
      "y": 4098.777278899753,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "width": 45.567415680676426,
      "height": 2.8032978840147194,
      "seed": 1720254635,
      "groupIds": [
        "MV2IRMQJ-QKCbPyEQ7Wlf"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995298,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          16.832548902953302,
          -2.8032978840147194
        ],
        [
          45.567415680676426,
          -0.3275477042019195
        ]
      ]
    },
    {
      "type": "line",
      "version": 3836,
      "versionNonce": 1064752037,
      "isDeleted": false,
      "id": "2pva48eu-4FywJkEcZut9",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 537.0174021159539,
      "y": 4166.171653170109,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "width": 48.33668263438425,
      "height": 4.280657518731036,
      "seed": 1661268869,
      "groupIds": [
        "MV2IRMQJ-QKCbPyEQ7Wlf"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995298,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          26.41225578429045,
          -0.2552319773002338
        ],
        [
          37.62000339651456,
          2.3153712935189787
        ],
        [
          48.33668263438425,
          -1.9652862252120569
        ]
      ]
    },
    {
      "type": "line",
      "version": 3873,
      "versionNonce": 919430443,
      "isDeleted": false,
      "id": "OpxbQt4fgrQyjn-adwLoN",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 533.8333549344236,
      "y": 4177.414801578388,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "width": 54.40694982784246,
      "height": 2.9096445412231735,
      "seed": 1922675531,
      "groupIds": [
        "MV2IRMQJ-QKCbPyEQ7Wlf"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995298,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          10.166093050596771,
          -1.166642430373031
        ],
        [
          16.130660965377448,
          -0.8422655250909383
        ],
        [
          46.26079588567538,
          0.6125567455206506
        ],
        [
          54.40694982784246,
          -2.297087795702523
        ]
      ]
    },
    {
      "type": "line",
      "version": 3838,
      "versionNonce": 1929844485,
      "isDeleted": false,
      "id": "N5qmJoqNAbHsgElZDe2d0",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 534.1181978299894,
      "y": 4113.837880453014,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "width": 46.92865289294453,
      "height": 2.4757501798128,
      "seed": 1669741285,
      "groupIds": [
        "MV2IRMQJ-QKCbPyEQ7Wlf"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995298,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          18.193786115221407,
          -0.5912874140789839
        ],
        [
          46.92865289294453,
          1.884462765733816
        ]
      ]
    },
    {
      "type": "line",
      "version": 3853,
      "versionNonce": 1977452491,
      "isDeleted": false,
      "id": "D7hy5oXdViMOFXV073XpJ",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "angle": 0,
      "x": 534.2256860261398,
      "y": 4148.321209488854,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "width": 46.92865289294453,
      "height": 2.4757501798128,
      "seed": 725291499,
      "groupIds": [
        "MV2IRMQJ-QKCbPyEQ7Wlf"
      ],
      "strokeSharpness": "round",
      "boundElements": [],
      "updated": 1647298995298,
      "link": null,
      "lastCommittedPoint": null,
      "startArrowhead": null,
      "endArrowhead": null,
      "points": [
        [
          0,
          0
        ],
        [
          8.093938105125233,
          1.4279702913643746
        ],
        [
          18.193786115221407,
          -0.5912874140789839
        ],
        [
          46.92865289294453,
          1.884462765733816
        ]
      ]
    },
    {
      "id": "US6thVS-DJ07XE7QLyse1",
      "type": "text",
      "x": 501.7625813449781,
      "y": 4219.4191394271975,
      "width": 140,
      "height": 25,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 1609587883,
      "version": 188,
      "versionNonce": 108523109,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995298,
      "link": null,
      "text": "Authenticated",
      "fontSize": 20,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 18,
      "containerId": null,
      "originalText": "Authenticated"
    },
    {
      "id": "wCWWtSsZHN3Dj4cbPFWTk",
      "type": "arrow",
      "x": 975.318402355023,
      "y": 3987.2592537913406,
      "width": 354.21151297433016,
      "height": 162.71518248119446,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "round",
      "seed": 565582629,
      "version": 210,
      "versionNonce": 806377067,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995298,
      "link": null,
      "points": [
        [
          0,
          0
        ],
        [
          -354.21151297433016,
          162.71518248119446
        ]
      ],
      "lastCommittedPoint": null,
      "startBinding": {
        "elementId": "9IlaQLAzzc3lRtU9OI-V5",
        "focus": 0.4111559348581155,
        "gap": 7.062349587498602
      },
      "endBinding": {
        "elementId": "0rWIUB4qN-Bl1f_P8TE0N",
        "focus": 0.29365575077574785,
        "gap": 10.23346356063388
      },
      "startArrowhead": null,
      "endArrowhead": "arrow"
    },
    {
      "id": "Um3mYrwd1-0KIGNcc0eoA",
      "type": "arrow",
      "x": 620.567164213282,
      "y": 4162.581115832751,
      "width": 281.21514089543894,
      "height": 150.19457647534455,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "round",
      "seed": 1787961227,
      "version": 326,
      "versionNonce": 1486281157,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995298,
      "link": null,
      "points": [
        [
          0,
          0
        ],
        [
          281.21514089543894,
          150.19457647534455
        ]
      ],
      "lastCommittedPoint": null,
      "startBinding": {
        "elementId": "AAYxLnWH6lwN3K4pNs-9x",
        "focus": -0.12243201876338017,
        "gap": 17.24117142893732
      },
      "endBinding": {
        "elementId": "reqcwNlsqtyXLUB5nLUYV",
        "focus": -0.3861373092060085,
        "gap": 16.349632554039715
      },
      "startArrowhead": null,
      "endArrowhead": "arrow"
    },
    {
      "id": "gK0Vap-ctqhoj9Rt_O1V6",
      "type": "arrow",
      "x": 617.8422060659605,
      "y": 4192.802422769832,
      "width": 349.14578165704665,
      "height": 406.15388629995323,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "round",
      "seed": 1525802021,
      "version": 183,
      "versionNonce": 1144017163,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995298,
      "link": null,
      "points": [
        [
          0,
          0
        ],
        [
          349.14578165704665,
          406.15388629995323
        ]
      ],
      "lastCommittedPoint": null,
      "startBinding": {
        "elementId": "AAYxLnWH6lwN3K4pNs-9x",
        "focus": -0.09044266086533372,
        "gap": 14.516213281615762
      },
      "endBinding": {
        "elementId": "pQR7laov2TjYOr1_k_5yF",
        "focus": -0.6020529584625236,
        "gap": 13.065602218645836
      },
      "startArrowhead": null,
      "endArrowhead": "arrow"
    },
    {
      "id": "GIHmwZ4IrMu3peAiUz5gi",
      "type": "rectangle",
      "x": 285.5172723327016,
      "y": 3592.805757905156,
      "width": 1549.7131347656252,
      "height": 1216.6147940499445,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 1770381931,
      "version": 131,
      "versionNonce": 1404565419,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995298,
      "link": null
    },
    {
      "id": "RAkovg2BQa9c0Y9v0TH2g",
      "type": "text",
      "x": 320.787467993975,
      "y": 3498.3213785455023,
      "width": 300.2963500976553,
      "height": 82.49899727957563,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 200911787,
      "version": 141,
      "versionNonce": 1571089541,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995298,
      "link": null,
      "text": "Randomfy",
      "fontSize": 65.9991978236605,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 57.49899727957563,
      "containerId": null,
      "originalText": "Randomfy"
    },
    {
      "id": "owfiqnUfLGGB3L-8ZSx3i",
      "type": "text",
      "x": 739.3174235599108,
      "y": 4391.842187926617,
      "width": 150.81813673428837,
      "height": 25.30505649904171,
      "angle": 0.8364882236414415,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 1963494117,
      "version": 358,
      "versionNonce": 1825688139,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995298,
      "link": null,
      "text": "Create playlist",
      "fontSize": 20.24404519923335,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 17.30505649904171,
      "containerId": null,
      "originalText": "Create playlist"
    },
    {
      "id": "Umf3_ViviLfXnd7o0HqJP",
      "type": "text",
      "x": 689.9502868531695,
      "y": 4222.281513397372,
      "width": 170.66797835262403,
      "height": 22.45631294113473,
      "angle": 0.5000500846901641,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 2022989547,
      "version": 357,
      "versionNonce": 1505694693,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647298995298,
      "link": null,
      "text": "get recommendation",
      "fontSize": 17.965050352907788,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 15.45631294113473,
      "containerId": null,
      "originalText": "get recommendation"
    },
    {
      "id": "pR7tWbEbzogCsI86kXTx2",
      "type": "text",
      "x": 698.6681832097477,
      "y": 3839.5203606026193,
      "width": 160,
      "height": 25,
      "angle": 6.170801780076761,
      "strokeColor": "#000000",
      "backgroundColor": "#40c057",
      "fillStyle": "solid",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "strokeSharpness": "sharp",
      "seed": 510592427,
      "version": 100,
      "versionNonce": 29475627,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1647299002844,
      "link": null,
      "text": "send credentials",
      "fontSize": 20,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 18,
      "containerId": null,
      "originalText": "send credentials"
    }
  ],
  "appState": {
    "gridSize": null,
    "viewBackgroundColor": "#ffffff"
  },
  "files": {}
}
```

## File: docs/como-funciona.md

```markdown
# Como Funciona

Atualmente, as recomendações no `randomfy` funciona da seguinte maneira:

1. Ele seleciona um artista entre os cinquenta artistas mais ouvidos pelo usuário no Spotify.
2. Usando o artista selecionado, ele encontra novos artistas semelhantes para o usuário.
3. As recomendações são geradas com base nesses resultados.

As músicas para as recomendações são selecionadas a partir das músicas mais ouvidas do artista escolhido no Spotify.

Quando um usuário acessa o aplicativo pela primeira vez, o `randomfy` solicita que ele forneça suas credenciais do Spotify. Assim que as credenciais são fornecidas, o processo de autenticação é concluído.

Após a autenticação, o `randomfy` seleciona aleatoriamente um artista para ser a "semente" das recomendações. Isso significa que o artista escolhido aleatoriamente não será o artista recomendado, mas sim os artistas relacionados a ele.

Quando um usuário curte um artista, o `randomfy` faz uma solicitação ao Spotify para obter artistas relacionados e seleciona um para exibir como recomendação.

Após vinte recomendações, o usuário tem a opção de criar uma playlist com as músicas dos artistas curtidos.

## Arquitetura

O `randomfy` é construído usando funções serverless e está hospedado na Vercel.

![random-fy-arch](./arch/random-fy-arch.png)

### Funções

- `login`: Essa função cria a URL autenticada para o login no Spotify.
- `callback`: Após o processo de login, essa função recebe os tokens autenticados do Spotify.
- `recommendations`: Essa função retorna uma música e uma recomendação de artista para o usuário autenticado.
  random top artist: Essa função seleciona um artista mais ouvido da conta autenticada do usuário.
- `playlist`: Essa função cria uma playlist com as músicas dos artistas curtidos pelo usuário autenticado.
```

## File: docs/how-it-works.md

```markdown
# How it Works

Currently, the recommendation feature in `randomfy` works as follows:

1. It selects an artist among the user's top fifty most listened artists on Spotify.
2. Using the selected artist, it finds new and similar artists for the user.
3. The recommendations are generated based on these findings.

The songs for the recommendations are selected from the top listened songs of the chosen artist on Spotify.

When a user accesses the app for the first time, `randomfy` prompts them to provide their Spotify credentials. Once the credentials are provided, the authentication process is completed.

Once authenticated, `randomfy` randomly selects an artist to serve as the "seed" for the recommendations. This means that the randomly chosen artist will not be the recommended artist, but rather the artists related to them.

When a user likes an artist, `randomfy` makes a request to Spotify for related artists and selects one to display as a recommendation.

After twenty recommendations, the user has the option to create a playlist with the songs from the liked artists.

## Architecture

`randomfy` is built using serverless functions and is hosted on Vercel.

![random-fy-arch](./arch/random-fy-arch.png)

### Functions

- `login`: This function creates the authenticated URL for Spotify login.
- `callback`: After the login process, this function receives the authenticated tokens from Spotify.
- `recommendations`: This function returns a song and artist recommendation for the authenticated user.
  random top artist: This function selects a top listened artist from the user's authenticated account.
- `playlist`: This function creates a playlist with the liked artist's songs for the authenticated user.
```

## File: public/locales/en/about.json

```json
{
  "title": "About",
  "subtitle": "Randomfy takes your most listened to Spotify artists, selects one of them, and shows you similar artists so you can discover new artists based on your preferences.",
  "disclaimer": "Disclaimer: Randomfy is not affiliated with Spotify. This site was built with Next.js, React, and the Spotify API.",
  "ready": "Why are you still reading this? You must be bored. Go listen to some amazing new artists!",
  "howItWorks": {
    "title": "How it works",
    "p1": "This project displays artists and songs based on your Spotify recommendations. When a user signs in to the application, a recommendation is shown.",
    "p2": "The user can like or dislike the recommendation, just like on Tinder. After that, you can create a playlist with the liked artists and share it with your friends. Additionally, you can generate an image featuring these artists."
  }
}
```

## File: public/locales/en/common.json

```json
{
  "about": "About",
  "search": "Search",
  "logout": "Log out",
  "error": {
    "title": "Oops! Something went wrong.",
    "subtitle": "Please try again."
  },
  "toast": {
    "success": "Playlist created successfully!",
    "error": "Something went wrong with the playlist."
  }
}
```

## File: public/locales/en/footer.json

```json
{
  "initial": "Created with ",
  "prep": " by ",
  "name": "Raul Andrade"
}
```

## File: public/locales/en/login.json

```json
{
  "title": "Yeah!",
  "subtitle": "Hello, music lover!",
  "description": "Are you ready to discover new artists on Spotify and create a playlist with them?",
  "button": "Log in with Spotify"
}
```

## File: public/locales/en/logout.json

```json
{
  "title": "Logout..."
}
```

## File: public/locales/en/search.json

```json
{
  "title": "Search for an artist by name and we'll create a playlist for you",
  "placeholder": "Search for an artist...",
  "button": "Search",
  "loading": "Loading...",
  "empty": "We couldn't find any related artists. Please try searching for a different artist."
}
```

## File: public/locales/es/about.json

```json
{
  "title": "Acerca de",
  "subtitle": "Randomfy toma tus artistas más escuchados en Spotify, selecciona uno de ellos y te muestra artistas similares para que puedas descubrir nuevos artistas basados en el seleccionado anteriormente.",
  "disclaimer": "Descargo de responsabilidad: Randomfy no está afiliado con Spotify. El sitio fue construido con Nextjs, React y la API de Spotify.",
  "ready": "¿Por qué estás leyendo esto? Debes estar aburrido. Ve a escuchar nuevos artistas.",
  "howItWorks": {
    "title": "Cómo funciona",
    "p1": "Este proyecto muestra artistas y canciones basados en tus recomendaciones de Spotify. Cuando el usuario inicia sesión en la aplicación, se muestra una recomendación.",
    "p2": "El usuario puede dar like o dislike a la recomendación, al igual que en Tinder. Después de eso, puedes crear una lista de reproducción con los artistas que te gustaron y compartirla con tus amigos. Además, puedes crear una imagen con estos artistas."
  }
}
```

## File: public/locales/es/common.json

```json
{
  "about": "Acerca de",
  "search": "Buscar",
  "logout": "Cerrar sesión",
  "error": {
    "title": "¡Algo salió mal! :(",
    "subtitle": "Inténtalo de nuevo"
  },
  "toast": {
    "success": "¡La lista de reproducción se creó con éxito!",
    "error": "¡Algo salió mal con la lista de reproducción!"
  }
}
```

## File: public/locales/es/footer.json

```json
{
  "initial": "Creado con ",
  "prep": " por ",
  "name": "Raul Andrade"
}
```

## File: public/locales/es/login.json

```json
{
  "title": "¡Yeah!",
  "subtitle": "¡Hola amante de la música!",
  "description": "¿Estás listo para conocer nuevos artistas de Spotify y crear una lista de reproducción con ellos?",
  "button": "Sesión con Spotify"
}
```

## File: public/locales/es/logout.json

```json
{
  "title": "Cerrar sesión..."
}
```

## File: public/locales/es/search.json

```json
{
  "title": "Busca un artista por su nombre y crearemos una lista de reproducción para ti",
  "placeholder": "Buscar artista...",
  "button": "Buscar",
  "loading": "Cargando...",
  "empty": "No se encontraron artistas relacionados, prueba con un artista diferente."
}
```

## File: public/locales/pt/about.json

```json
{
  "title": "Sobre",
  "subtitle": "O Randomfy analisa seus artistas mais ouvidos no Spotify, seleciona um deles e apresenta artistas similares, para que você possa descobrir novos artistas com base em suas preferências musicais.",
  "disclaimer": "Aviso: O Randomfy não possui afiliação com o Spotify. Este site foi construído com Next.js, React e a API do Spotify.",
  "ready": "Por que você ainda está lendo isso? Você deve estar entediado. Vá descobrir novos artistas incríveis!",
  "howItWorks": {
    "title": "Como funciona",
    "p1": "Este projeto exibe artistas e músicas com base em suas recomendações do Spotify. Quando um usuário faz login no aplicativo, uma recomendação é mostrada.",
    "p2": "O usuário pode curtir ou não a recomendação, assim como no Tinder. Depois disso, você pode criar uma playlist com os artistas que você curtiu e compartilhá-la com seus amigos. Além disso, você pode gerar uma imagem com esses artistas."
  }
}
```

## File: public/locales/pt/common.json

```json
{
  "about": "Sobre",
  "search": "Pesquisar",
  "logout": "Sair",
  "error": {
    "title": "Ops! Algo deu errado.",
    "subtitle": "Por favor, tente novamente."
  },
  "toast": {
    "success": "A Playlist foi criada com sucesso!",
    "error": "Algo deu errado com a Playlist!"
  }
}
```

## File: public/locales/pt/footer.json

```json
{
  "initial": "Criado com ",
  "prep": " por ",
  "name": "Raul Andrade"
}
```

## File: public/locales/pt/login.json

```json
{
  "title": "Yeah!",
  "subtitle": "Olá, amante da música!",
  "description": "Você está pronto para descobrir novos artistas no Spotify e criar uma playlist com eles?",
  "button": "Entrar com o Spotify"
}
```

## File: public/locales/pt/logout.json

```json
{
  "title": "Saindo..."
}
```

## File: public/locales/pt/search.json

```json
{
  "title": "Digite o nome de um artista e nós criaremos uma playlist personalizada para você",
  "placeholder": "Pesquise por um artista...",
  "button": "Pesquisar",
  "loading": "Carregando...",
  "empty": "Não encontramos nenhum artista relacionado. Por favor, tente pesquisar por outro artista"
}
```

## File: public/manifest.json

```json
{
  "name": "randomfy",
  "short_name": "random-fy",
  "icons": [
    {
      "src": "/img/icon-16.png",
      "type": "image/png",
      "sizes": "16x16",
      "purpose": "any maskable"
    },
    {
      "src": "/img/icon-32.png",
      "type": "image/png",
      "sizes": "32x32",
      "purpose": "any maskable"
    },
    {
      "src": "/img/icon-64.png",
      "type": "image/png",
      "sizes": "64x64",
      "purpose": "any maskable"
    },
    {
      "src": "/img/icon-128.png",
      "type": "image/png",
      "sizes": "128x128",
      "purpose": "any maskable"
    },
    {
      "src": "/img/icon-264.png",
      "type": "image/png",
      "sizes": "264x264",
      "purpose": "any maskable"
    },
    {
      "src": "/img/icon-528.png",
      "type": "image/png",
      "sizes": "528x528",
      "purpose": "any maskable"
    }
  ],
  "background_color": "#fafafa",
  "description": "Randomfy takes your most listened Spotify artists, selects one of them and shows you similar artists, so you can meet new artists based on the previous selected one.",
  "display": "fullscreen",
  "start_url": "/",
  "theme_color": "#fafafa"
}
```

## File: public/sw.js

```javascript
if (!self.define) {
  let e,
    s = {}
  const n = (n, c) => (
    (n = new URL(n + '.js', c).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = n), (e.onload = s), document.head.appendChild(e)
        } else (e = n), importScripts(n), s()
      }).then(() => {
        let e = s[n]
        if (!e) throw new Error(`Module ${n} didn’t register its module`)
        return e
      })
  )
  self.define = (c, a) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[i]) return
    let o = {}
    const t = (e) => n(e, i),
      r = { module: { uri: i }, exports: o, require: t }
    s[i] = Promise.all(c.map((e) => r[e] || t(e))).then((e) => (a(...e), o))
  }
}
define(['./workbox-588899ac'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/RrFJU0Tqn5QkOHPiqo0Da/_buildManifest.js',
          revision: '847dd76e0468463657dcb584b42fcdc9'
        },
        {
          url: '/_next/static/RrFJU0Tqn5QkOHPiqo0Da/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933'
        },
        {
          url: '/_next/static/chunks/418-e3426dd310a68e2a.js',
          revision: 'e3426dd310a68e2a'
        },
        {
          url: '/_next/static/chunks/494-3392a4c159ee3d36.js',
          revision: '3392a4c159ee3d36'
        },
        {
          url: '/_next/static/chunks/966-75656e4acf567f72.js',
          revision: '75656e4acf567f72'
        },
        {
          url: '/_next/static/chunks/ad7f724d-94baee9a2d394f8b.js',
          revision: '94baee9a2d394f8b'
        },
        {
          url: '/_next/static/chunks/framework-2c79e2a64abdb08b.js',
          revision: '2c79e2a64abdb08b'
        },
        {
          url: '/_next/static/chunks/main-c7e14abb98145872.js',
          revision: 'c7e14abb98145872'
        },
        {
          url: '/_next/static/chunks/pages/_app-ec39b1bd16f3647c.js',
          revision: 'ec39b1bd16f3647c'
        },
        {
          url: '/_next/static/chunks/pages/_error-54de1933a164a1ff.js',
          revision: '54de1933a164a1ff'
        },
        {
          url: '/_next/static/chunks/pages/about-b175d8677ce97fc9.js',
          revision: 'b175d8677ce97fc9'
        },
        {
          url: '/_next/static/chunks/pages/index-fe1e992a7f192653.js',
          revision: 'fe1e992a7f192653'
        },
        {
          url: '/_next/static/chunks/pages/logout-9a7334d9201a99f5.js',
          revision: '9a7334d9201a99f5'
        },
        {
          url: '/_next/static/chunks/pages/search-2d06234ea6d82a64.js',
          revision: '2d06234ea6d82a64'
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0'
        },
        {
          url: '/_next/static/chunks/webpack-59c5c889f52620d6.js',
          revision: '59c5c889f52620d6'
        },
        {
          url: '/_next/static/css/34bb7f954873c924.css',
          revision: '34bb7f954873c924'
        },
        {
          url: '/img/Spotify_Icon_RGB_Black.png',
          revision: 'b818d523d8560f33bcf5d6628f0ffa73'
        },
        {
          url: '/img/Spotify_Icon_RGB_Green.png',
          revision: '7a34cf4279c6f8f8c97a1250ccce40a4'
        },
        {
          url: '/img/Spotify_Icon_RGB_White.png',
          revision: 'cc4e2784f47909e55d940c014cbef882'
        },
        {
          url: '/img/Spotify_Logo_RGB_Black.png',
          revision: '1f61ed6f58e8118290d52e89c82d8a6b'
        },
        {
          url: '/img/Spotify_Logo_RGB_Green.png',
          revision: '11dc437ab8ef0c32289c092083d20068'
        },
        {
          url: '/img/Spotify_Logo_RGB_White.png',
          revision: '31bad8d4fc4413d54f8c19930d3739b9'
        },
        { url: '/img/bg.jpg', revision: '3b7598ff7405c7c4e15da73b004e5550' },
        {
          url: '/img/icon-128.png',
          revision: '8933001e8003c8b84622f9f08dc3bf63'
        },
        {
          url: '/img/icon-16.png',
          revision: '844cfcecd31723a593df76497b3d07ef'
        },
        {
          url: '/img/icon-264.png',
          revision: 'dcd1df7e01ed2d41870bc75515fc79d4'
        },
        {
          url: '/img/icon-32.png',
          revision: '4fc118919c65b5abec90584eb317f564'
        },
        {
          url: '/img/icon-528.png',
          revision: '98d9ab694c6864ca47f138a418ad8186'
        },
        {
          url: '/img/icon-64.png',
          revision: 'd4b456d034945f0d00ace2cb46439fbc'
        },
        {
          url: '/locales/en/about.json',
          revision: '3fe48d4f6b3208ae2d1e368d30a226c9'
        },
        {
          url: '/locales/en/common.json',
          revision: '586a46c6fd1ff6dcc5fd5528a3fde30b'
        },
        {
          url: '/locales/en/footer.json',
          revision: '2b0b87b456ebf024d9ee7397bd472ae4'
        },
        {
          url: '/locales/en/login.json',
          revision: '36ef79e92cffa676b679983641bff4c5'
        },
        {
          url: '/locales/en/logout.json',
          revision: 'be814650ac1542a58e4acd2977aac737'
        },
        {
          url: '/locales/en/search.json',
          revision: '6c442338b49574b4f8f26ec5149b9560'
        },
        {
          url: '/locales/es/about.json',
          revision: '08a3e2ba713bd3628992f16484d18de9'
        },
        {
          url: '/locales/es/common.json',
          revision: 'f7f644e8a683dcd754a757c05d6f402e'
        },
        {
          url: '/locales/es/footer.json',
          revision: 'be2ba7f1e4b87f5563c7b93bea88b68a'
        },
        {
          url: '/locales/es/login.json',
          revision: 'a71a97e24d6780e4e580ed1846bd1e96'
        },
        {
          url: '/locales/es/logout.json',
          revision: '473a888d91df650a6a6eec152f068c94'
        },
        {
          url: '/locales/es/search.json',
          revision: 'dab744ba5c68eb047c066cb055df347a'
        },
        {
          url: '/locales/pt/about.json',
          revision: '89156d6cfe73b1e87c119ea0f7889180'
        },
        {
          url: '/locales/pt/common.json',
          revision: '47b583c52d4c370f249c41a2efc32af2'
        },
        {
          url: '/locales/pt/footer.json',
          revision: 'b9a4e16c6b3acddebb88c060fb962611'
        },
        {
          url: '/locales/pt/login.json',
          revision: '424550da4651fd11053b89ce429e2e29'
        },
        {
          url: '/locales/pt/logout.json',
          revision: '73ffc35992fbc6748e3d67d3391ee0fd'
        },
        {
          url: '/locales/pt/search.json',
          revision: '3fc06c47d66bcce73202debb73c86690'
        },
        { url: '/manifest.json', revision: 'bca1c09cba8d4e3aa4f3e48e9d583240' },
        {
          url: '/screenshots/1.png',
          revision: '91d3d48c0fcc29c20813ebc8d2b50644'
        },
        {
          url: '/screenshots/2.png',
          revision: '6f5fe15c8f3bbbe2dcbfdfab76d5b1ac'
        }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: c
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    )
})
```

## File: public/workbox-588899ac.js

```javascript
define(['exports'], function (t) {
  'use strict'
  try {
    self['workbox:core:6.5.3'] && _()
  } catch (t) {}
  const e = (t, ...e) => {
    let s = t
    return e.length > 0 && (s += ` :: ${JSON.stringify(e)}`), s
  }
  class s extends Error {
    constructor(t, s) {
      super(e(t, s)), (this.name = t), (this.details = s)
    }
  }
  try {
    self['workbox:routing:6.5.3'] && _()
  } catch (t) {}
  const n = (t) => (t && 'object' == typeof t ? t : { handle: t })
  class r {
    constructor(t, e, s = 'GET') {
      ;(this.handler = n(e)), (this.match = t), (this.method = s)
    }
    setCatchHandler(t) {
      this.catchHandler = n(t)
    }
  }
  class i extends r {
    constructor(t, e, s) {
      super(
        ({ url: e }) => {
          const s = t.exec(e.href)
          if (s && (e.origin === location.origin || 0 === s.index))
            return s.slice(1)
        },
        e,
        s
      )
    }
  }
  class a {
    constructor() {
      ;(this.t = new Map()), (this.i = new Map())
    }
    get routes() {
      return this.t
    }
    addFetchListener() {
      self.addEventListener('fetch', (t) => {
        const { request: e } = t,
          s = this.handleRequest({ request: e, event: t })
        s && t.respondWith(s)
      })
    }
    addCacheListener() {
      self.addEventListener('message', (t) => {
        if (t.data && 'CACHE_URLS' === t.data.type) {
          const { payload: e } = t.data,
            s = Promise.all(
              e.urlsToCache.map((e) => {
                'string' == typeof e && (e = [e])
                const s = new Request(...e)
                return this.handleRequest({ request: s, event: t })
              })
            )
          t.waitUntil(s),
            t.ports && t.ports[0] && s.then(() => t.ports[0].postMessage(!0))
        }
      })
    }
    handleRequest({ request: t, event: e }) {
      const s = new URL(t.url, location.href)
      if (!s.protocol.startsWith('http')) return
      const n = s.origin === location.origin,
        { params: r, route: i } = this.findMatchingRoute({
          event: e,
          request: t,
          sameOrigin: n,
          url: s
        })
      let a = i && i.handler
      const o = t.method
      if ((!a && this.i.has(o) && (a = this.i.get(o)), !a)) return
      let c
      try {
        c = a.handle({ url: s, request: t, event: e, params: r })
      } catch (t) {
        c = Promise.reject(t)
      }
      const h = i && i.catchHandler
      return (
        c instanceof Promise &&
          (this.o || h) &&
          (c = c.catch(async (n) => {
            if (h)
              try {
                return await h.handle({
                  url: s,
                  request: t,
                  event: e,
                  params: r
                })
              } catch (t) {
                t instanceof Error && (n = t)
              }
            if (this.o) return this.o.handle({ url: s, request: t, event: e })
            throw n
          })),
        c
      )
    }
    findMatchingRoute({ url: t, sameOrigin: e, request: s, event: n }) {
      const r = this.t.get(s.method) || []
      for (const i of r) {
        let r
        const a = i.match({ url: t, sameOrigin: e, request: s, event: n })
        if (a)
          return (
            (r = a),
            ((Array.isArray(r) && 0 === r.length) ||
              (a.constructor === Object && 0 === Object.keys(a).length) ||
              'boolean' == typeof a) &&
              (r = void 0),
            { route: i, params: r }
          )
      }
      return {}
    }
    setDefaultHandler(t, e = 'GET') {
      this.i.set(e, n(t))
    }
    setCatchHandler(t) {
      this.o = n(t)
    }
    registerRoute(t) {
      this.t.has(t.method) || this.t.set(t.method, []),
        this.t.get(t.method).push(t)
    }
    unregisterRoute(t) {
      if (!this.t.has(t.method))
        throw new s('unregister-route-but-not-found-with-method', {
          method: t.method
        })
      const e = this.t.get(t.method).indexOf(t)
      if (!(e > -1)) throw new s('unregister-route-route-not-registered')
      this.t.get(t.method).splice(e, 1)
    }
  }
  let o
  const c = () => (
    o || ((o = new a()), o.addFetchListener(), o.addCacheListener()), o
  )
  function h(t, e, n) {
    let a
    if ('string' == typeof t) {
      const s = new URL(t, location.href)
      a = new r(({ url: t }) => t.href === s.href, e, n)
    } else if (t instanceof RegExp) a = new i(t, e, n)
    else if ('function' == typeof t) a = new r(t, e, n)
    else {
      if (!(t instanceof r))
        throw new s('unsupported-route-type', {
          moduleName: 'workbox-routing',
          funcName: 'registerRoute',
          paramName: 'capture'
        })
      a = t
    }
    return c().registerRoute(a), a
  }
  try {
    self['workbox:strategies:6.5.3'] && _()
  } catch (t) {}
  const u = {
      cacheWillUpdate: async ({ response: t }) =>
        200 === t.status || 0 === t.status ? t : null
    },
    l = {
      googleAnalytics: 'googleAnalytics',
      precache: 'precache-v2',
      prefix: 'workbox',
      runtime: 'runtime',
      suffix: 'undefined' != typeof registration ? registration.scope : ''
    },
    f = (t) =>
      [l.prefix, t, l.suffix].filter((t) => t && t.length > 0).join('-'),
    w = (t) => t || f(l.precache),
    d = (t) => t || f(l.runtime)
  function p(t, e) {
    const s = new URL(t)
    for (const t of e) s.searchParams.delete(t)
    return s.href
  }
  class y {
    constructor() {
      this.promise = new Promise((t, e) => {
        ;(this.resolve = t), (this.reject = e)
      })
    }
  }
  const g = new Set()
  function m(t) {
    return 'string' == typeof t ? new Request(t) : t
  }
  class R {
    constructor(t, e) {
      ;(this.h = {}),
        Object.assign(this, e),
        (this.event = e.event),
        (this.u = t),
        (this.l = new y()),
        (this.p = []),
        (this.g = [...t.plugins]),
        (this.m = new Map())
      for (const t of this.g) this.m.set(t, {})
      this.event.waitUntil(this.l.promise)
    }
    async fetch(t) {
      const { event: e } = this
      let n = m(t)
      if (
        'navigate' === n.mode &&
        e instanceof FetchEvent &&
        e.preloadResponse
      ) {
        const t = await e.preloadResponse
        if (t) return t
      }
      const r = this.hasCallback('fetchDidFail') ? n.clone() : null
      try {
        for (const t of this.iterateCallbacks('requestWillFetch'))
          n = await t({ request: n.clone(), event: e })
      } catch (t) {
        if (t instanceof Error)
          throw new s('plugin-error-request-will-fetch', {
            thrownErrorMessage: t.message
          })
      }
      const i = n.clone()
      try {
        let t
        t = await fetch(n, 'navigate' === n.mode ? void 0 : this.u.fetchOptions)
        for (const s of this.iterateCallbacks('fetchDidSucceed'))
          t = await s({ event: e, request: i, response: t })
        return t
      } catch (t) {
        throw (
          (r &&
            (await this.runCallbacks('fetchDidFail', {
              error: t,
              event: e,
              originalRequest: r.clone(),
              request: i.clone()
            })),
          t)
        )
      }
    }
    async fetchAndCachePut(t) {
      const e = await this.fetch(t),
        s = e.clone()
      return this.waitUntil(this.cachePut(t, s)), e
    }
    async cacheMatch(t) {
      const e = m(t)
      let s
      const { cacheName: n, matchOptions: r } = this.u,
        i = await this.getCacheKey(e, 'read'),
        a = Object.assign(Object.assign({}, r), { cacheName: n })
      s = await caches.match(i, a)
      for (const t of this.iterateCallbacks('cachedResponseWillBeUsed'))
        s =
          (await t({
            cacheName: n,
            matchOptions: r,
            cachedResponse: s,
            request: i,
            event: this.event
          })) || void 0
      return s
    }
    async cachePut(t, e) {
      const n = m(t)
      var r
      await ((r = 0), new Promise((t) => setTimeout(t, r)))
      const i = await this.getCacheKey(n, 'write')
      if (!e)
        throw new s('cache-put-with-no-response', {
          url:
            ((a = i.url),
            new URL(String(a), location.href).href.replace(
              new RegExp(`^${location.origin}`),
              ''
            ))
        })
      var a
      const o = await this.R(e)
      if (!o) return !1
      const { cacheName: c, matchOptions: h } = this.u,
        u = await self.caches.open(c),
        l = this.hasCallback('cacheDidUpdate'),
        f = l
          ? await (async function (t, e, s, n) {
              const r = p(e.url, s)
              if (e.url === r) return t.match(e, n)
              const i = Object.assign(Object.assign({}, n), {
                  ignoreSearch: !0
                }),
                a = await t.keys(e, i)
              for (const e of a) if (r === p(e.url, s)) return t.match(e, n)
            })(u, i.clone(), ['__WB_REVISION__'], h)
          : null
      try {
        await u.put(i, l ? o.clone() : o)
      } catch (t) {
        if (t instanceof Error)
          throw (
            ('QuotaExceededError' === t.name &&
              (await (async function () {
                for (const t of g) await t()
              })()),
            t)
          )
      }
      for (const t of this.iterateCallbacks('cacheDidUpdate'))
        await t({
          cacheName: c,
          oldResponse: f,
          newResponse: o.clone(),
          request: i,
          event: this.event
        })
      return !0
    }
    async getCacheKey(t, e) {
      const s = `${t.url} | ${e}`
      if (!this.h[s]) {
        let n = t
        for (const t of this.iterateCallbacks('cacheKeyWillBeUsed'))
          n = m(
            await t({
              mode: e,
              request: n,
              event: this.event,
              params: this.params
            })
          )
        this.h[s] = n
      }
      return this.h[s]
    }
    hasCallback(t) {
      for (const e of this.u.plugins) if (t in e) return !0
      return !1
    }
    async runCallbacks(t, e) {
      for (const s of this.iterateCallbacks(t)) await s(e)
    }
    *iterateCallbacks(t) {
      for (const e of this.u.plugins)
        if ('function' == typeof e[t]) {
          const s = this.m.get(e),
            n = (n) => {
              const r = Object.assign(Object.assign({}, n), { state: s })
              return e[t](r)
            }
          yield n
        }
    }
    waitUntil(t) {
      return this.p.push(t), t
    }
    async doneWaiting() {
      let t
      for (; (t = this.p.shift()); ) await t
    }
    destroy() {
      this.l.resolve(null)
    }
    async R(t) {
      let e = t,
        s = !1
      for (const t of this.iterateCallbacks('cacheWillUpdate'))
        if (
          ((e =
            (await t({
              request: this.request,
              response: e,
              event: this.event
            })) || void 0),
          (s = !0),
          !e)
        )
          break
      return s || (e && 200 !== e.status && (e = void 0)), e
    }
  }
  class v {
    constructor(t = {}) {
      ;(this.cacheName = d(t.cacheName)),
        (this.plugins = t.plugins || []),
        (this.fetchOptions = t.fetchOptions),
        (this.matchOptions = t.matchOptions)
    }
    handle(t) {
      const [e] = this.handleAll(t)
      return e
    }
    handleAll(t) {
      t instanceof FetchEvent && (t = { event: t, request: t.request })
      const e = t.event,
        s = 'string' == typeof t.request ? new Request(t.request) : t.request,
        n = 'params' in t ? t.params : void 0,
        r = new R(this, { event: e, request: s, params: n }),
        i = this.v(r, s, e)
      return [i, this.q(i, r, s, e)]
    }
    async v(t, e, n) {
      let r
      await t.runCallbacks('handlerWillStart', { event: n, request: e })
      try {
        if (((r = await this.D(e, t)), !r || 'error' === r.type))
          throw new s('no-response', { url: e.url })
      } catch (s) {
        if (s instanceof Error)
          for (const i of t.iterateCallbacks('handlerDidError'))
            if (((r = await i({ error: s, event: n, request: e })), r)) break
        if (!r) throw s
      }
      for (const s of t.iterateCallbacks('handlerWillRespond'))
        r = await s({ event: n, request: e, response: r })
      return r
    }
    async q(t, e, s, n) {
      let r, i
      try {
        r = await t
      } catch (i) {}
      try {
        await e.runCallbacks('handlerDidRespond', {
          event: n,
          request: s,
          response: r
        }),
          await e.doneWaiting()
      } catch (t) {
        t instanceof Error && (i = t)
      }
      if (
        (await e.runCallbacks('handlerDidComplete', {
          event: n,
          request: s,
          response: r,
          error: i
        }),
        e.destroy(),
        i)
      )
        throw i
    }
  }
  function b(t) {
    t.then(() => {})
  }
  function q() {
    return (
      (q = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var s = arguments[e]
              for (var n in s)
                Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
            }
            return t
          }),
      q.apply(this, arguments)
    )
  }
  const D = (t, e) => e.some((e) => t instanceof e)
  let U, x
  const L = new WeakMap(),
    I = new WeakMap(),
    C = new WeakMap(),
    E = new WeakMap(),
    N = new WeakMap()
  let O = {
    get(t, e, s) {
      if (t instanceof IDBTransaction) {
        if ('done' === e) return I.get(t)
        if ('objectStoreNames' === e) return t.objectStoreNames || C.get(t)
        if ('store' === e)
          return s.objectStoreNames[1]
            ? void 0
            : s.objectStore(s.objectStoreNames[0])
      }
      return B(t[e])
    },
    set: (t, e, s) => ((t[e] = s), !0),
    has: (t, e) =>
      (t instanceof IDBTransaction && ('done' === e || 'store' === e)) || e in t
  }
  function T(t) {
    return t !== IDBDatabase.prototype.transaction ||
      'objectStoreNames' in IDBTransaction.prototype
      ? (
          x ||
          (x = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey
          ])
        ).includes(t)
        ? function (...e) {
            return t.apply(P(this), e), B(L.get(this))
          }
        : function (...e) {
            return B(t.apply(P(this), e))
          }
      : function (e, ...s) {
          const n = t.call(P(this), e, ...s)
          return C.set(n, e.sort ? e.sort() : [e]), B(n)
        }
  }
  function k(t) {
    return 'function' == typeof t
      ? T(t)
      : (t instanceof IDBTransaction &&
          (function (t) {
            if (I.has(t)) return
            const e = new Promise((e, s) => {
              const n = () => {
                  t.removeEventListener('complete', r),
                    t.removeEventListener('error', i),
                    t.removeEventListener('abort', i)
                },
                r = () => {
                  e(), n()
                },
                i = () => {
                  s(t.error || new DOMException('AbortError', 'AbortError')),
                    n()
                }
              t.addEventListener('complete', r),
                t.addEventListener('error', i),
                t.addEventListener('abort', i)
            })
            I.set(t, e)
          })(t),
        D(
          t,
          U ||
            (U = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction
            ])
        )
          ? new Proxy(t, O)
          : t)
  }
  function B(t) {
    if (t instanceof IDBRequest)
      return (function (t) {
        const e = new Promise((e, s) => {
          const n = () => {
              t.removeEventListener('success', r),
                t.removeEventListener('error', i)
            },
            r = () => {
              e(B(t.result)), n()
            },
            i = () => {
              s(t.error), n()
            }
          t.addEventListener('success', r), t.addEventListener('error', i)
        })
        return (
          e
            .then((e) => {
              e instanceof IDBCursor && L.set(e, t)
            })
            .catch(() => {}),
          N.set(e, t),
          e
        )
      })(t)
    if (E.has(t)) return E.get(t)
    const e = k(t)
    return e !== t && (E.set(t, e), N.set(e, t)), e
  }
  const P = (t) => N.get(t)
  const M = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
    W = ['put', 'add', 'delete', 'clear'],
    j = new Map()
  function S(t, e) {
    if (!(t instanceof IDBDatabase) || e in t || 'string' != typeof e) return
    if (j.get(e)) return j.get(e)
    const s = e.replace(/FromIndex$/, ''),
      n = e !== s,
      r = W.includes(s)
    if (
      !(s in (n ? IDBIndex : IDBObjectStore).prototype) ||
      (!r && !M.includes(s))
    )
      return
    const i = async function (t, ...e) {
      const i = this.transaction(t, r ? 'readwrite' : 'readonly')
      let a = i.store
      return (
        n && (a = a.index(e.shift())),
        (await Promise.all([a[s](...e), r && i.done]))[0]
      )
    }
    return j.set(e, i), i
  }
  O = ((t) =>
    q({}, t, {
      get: (e, s, n) => S(e, s) || t.get(e, s, n),
      has: (e, s) => !!S(e, s) || t.has(e, s)
    }))(O)
  try {
    self['workbox:expiration:6.5.3'] && _()
  } catch (t) {}
  const K = 'cache-entries',
    A = (t) => {
      const e = new URL(t, location.href)
      return (e.hash = ''), e.href
    }
  class F {
    constructor(t) {
      ;(this.U = null), (this._ = t)
    }
    L(t) {
      const e = t.createObjectStore(K, { keyPath: 'id' })
      e.createIndex('cacheName', 'cacheName', { unique: !1 }),
        e.createIndex('timestamp', 'timestamp', { unique: !1 })
    }
    I(t) {
      this.L(t),
        this._ &&
          (function (t, { blocked: e } = {}) {
            const s = indexedDB.deleteDatabase(t)
            e && s.addEventListener('blocked', (t) => e(t.oldVersion, t)),
              B(s).then(() => {})
          })(this._)
    }
    async setTimestamp(t, e) {
      const s = {
          url: (t = A(t)),
          timestamp: e,
          cacheName: this._,
          id: this.C(t)
        },
        n = (await this.getDb()).transaction(K, 'readwrite', {
          durability: 'relaxed'
        })
      await n.store.put(s), await n.done
    }
    async getTimestamp(t) {
      const e = await this.getDb(),
        s = await e.get(K, this.C(t))
      return null == s ? void 0 : s.timestamp
    }
    async expireEntries(t, e) {
      const s = await this.getDb()
      let n = await s
        .transaction(K)
        .store.index('timestamp')
        .openCursor(null, 'prev')
      const r = []
      let i = 0
      for (; n; ) {
        const s = n.value
        s.cacheName === this._ &&
          ((t && s.timestamp < t) || (e && i >= e) ? r.push(n.value) : i++),
          (n = await n.continue())
      }
      const a = []
      for (const t of r) await s.delete(K, t.id), a.push(t.url)
      return a
    }
    C(t) {
      return this._ + '|' + A(t)
    }
    async getDb() {
      return (
        this.U ||
          (this.U = await (function (
            t,
            e,
            { blocked: s, upgrade: n, blocking: r, terminated: i } = {}
          ) {
            const a = indexedDB.open(t, e),
              o = B(a)
            return (
              n &&
                a.addEventListener('upgradeneeded', (t) => {
                  n(
                    B(a.result),
                    t.oldVersion,
                    t.newVersion,
                    B(a.transaction),
                    t
                  )
                }),
              s &&
                a.addEventListener('blocked', (t) =>
                  s(t.oldVersion, t.newVersion, t)
                ),
              o
                .then((t) => {
                  i && t.addEventListener('close', () => i()),
                    r &&
                      t.addEventListener('versionchange', (t) =>
                        r(t.oldVersion, t.newVersion, t)
                      )
                })
                .catch(() => {}),
              o
            )
          })('workbox-expiration', 1, { upgrade: this.I.bind(this) })),
        this.U
      )
    }
  }
  class H {
    constructor(t, e = {}) {
      ;(this.N = !1),
        (this.O = !1),
        (this.T = e.maxEntries),
        (this.k = e.maxAgeSeconds),
        (this.B = e.matchOptions),
        (this._ = t),
        (this.P = new F(t))
    }
    async expireEntries() {
      if (this.N) return void (this.O = !0)
      this.N = !0
      const t = this.k ? Date.now() - 1e3 * this.k : 0,
        e = await this.P.expireEntries(t, this.T),
        s = await self.caches.open(this._)
      for (const t of e) await s.delete(t, this.B)
      ;(this.N = !1), this.O && ((this.O = !1), b(this.expireEntries()))
    }
    async updateTimestamp(t) {
      await this.P.setTimestamp(t, Date.now())
    }
    async isURLExpired(t) {
      if (this.k) {
        const e = await this.P.getTimestamp(t),
          s = Date.now() - 1e3 * this.k
        return void 0 === e || e < s
      }
      return !1
    }
    async delete() {
      ;(this.O = !1), await this.P.expireEntries(1 / 0)
    }
  }
  try {
    self['workbox:range-requests:6.5.3'] && _()
  } catch (t) {}
  async function $(t, e) {
    try {
      if (206 === e.status) return e
      const n = t.headers.get('range')
      if (!n) throw new s('no-range-header')
      const r = (function (t) {
          const e = t.trim().toLowerCase()
          if (!e.startsWith('bytes='))
            throw new s('unit-must-be-bytes', { normalizedRangeHeader: e })
          if (e.includes(','))
            throw new s('single-range-only', { normalizedRangeHeader: e })
          const n = /(\d*)-(\d*)/.exec(e)
          if (!n || (!n[1] && !n[2]))
            throw new s('invalid-range-values', { normalizedRangeHeader: e })
          return {
            start: '' === n[1] ? void 0 : Number(n[1]),
            end: '' === n[2] ? void 0 : Number(n[2])
          }
        })(n),
        i = await e.blob(),
        a = (function (t, e, n) {
          const r = t.size
          if ((n && n > r) || (e && e < 0))
            throw new s('range-not-satisfiable', { size: r, end: n, start: e })
          let i, a
          return (
            void 0 !== e && void 0 !== n
              ? ((i = e), (a = n + 1))
              : void 0 !== e && void 0 === n
              ? ((i = e), (a = r))
              : void 0 !== n && void 0 === e && ((i = r - n), (a = r)),
            { start: i, end: a }
          )
        })(i, r.start, r.end),
        o = i.slice(a.start, a.end),
        c = o.size,
        h = new Response(o, {
          status: 206,
          statusText: 'Partial Content',
          headers: e.headers
        })
      return (
        h.headers.set('Content-Length', String(c)),
        h.headers.set(
          'Content-Range',
          `bytes ${a.start}-${a.end - 1}/${i.size}`
        ),
        h
      )
    } catch (t) {
      return new Response('', {
        status: 416,
        statusText: 'Range Not Satisfiable'
      })
    }
  }
  function z(t, e) {
    const s = e()
    return t.waitUntil(s), s
  }
  try {
    self['workbox:precaching:6.5.3'] && _()
  } catch (t) {}
  function G(t) {
    if (!t) throw new s('add-to-cache-list-unexpected-type', { entry: t })
    if ('string' == typeof t) {
      const e = new URL(t, location.href)
      return { cacheKey: e.href, url: e.href }
    }
    const { revision: e, url: n } = t
    if (!n) throw new s('add-to-cache-list-unexpected-type', { entry: t })
    if (!e) {
      const t = new URL(n, location.href)
      return { cacheKey: t.href, url: t.href }
    }
    const r = new URL(n, location.href),
      i = new URL(n, location.href)
    return (
      r.searchParams.set('__WB_REVISION__', e),
      { cacheKey: r.href, url: i.href }
    )
  }
  class V {
    constructor() {
      ;(this.updatedURLs = []),
        (this.notUpdatedURLs = []),
        (this.handlerWillStart = async ({ request: t, state: e }) => {
          e && (e.originalRequest = t)
        }),
        (this.cachedResponseWillBeUsed = async ({
          event: t,
          state: e,
          cachedResponse: s
        }) => {
          if (
            'install' === t.type &&
            e &&
            e.originalRequest &&
            e.originalRequest instanceof Request
          ) {
            const t = e.originalRequest.url
            s ? this.notUpdatedURLs.push(t) : this.updatedURLs.push(t)
          }
          return s
        })
    }
  }
  class J {
    constructor({ precacheController: t }) {
      ;(this.cacheKeyWillBeUsed = async ({ request: t, params: e }) => {
        const s =
          (null == e ? void 0 : e.cacheKey) || this.M.getCacheKeyForURL(t.url)
        return s ? new Request(s, { headers: t.headers }) : t
      }),
        (this.M = t)
    }
  }
  let Q, X
  async function Y(t, e) {
    let n = null
    if (t.url) {
      n = new URL(t.url).origin
    }
    if (n !== self.location.origin)
      throw new s('cross-origin-copy-response', { origin: n })
    const r = t.clone(),
      i = {
        headers: new Headers(r.headers),
        status: r.status,
        statusText: r.statusText
      },
      a = e ? e(i) : i,
      o = (function () {
        if (void 0 === Q) {
          const t = new Response('')
          if ('body' in t)
            try {
              new Response(t.body), (Q = !0)
            } catch (t) {
              Q = !1
            }
          Q = !1
        }
        return Q
      })()
        ? r.body
        : await r.blob()
    return new Response(o, a)
  }
  class Z extends v {
    constructor(t = {}) {
      ;(t.cacheName = w(t.cacheName)),
        super(t),
        (this.W = !1 !== t.fallbackToNetwork),
        this.plugins.push(Z.copyRedirectedCacheableResponsesPlugin)
    }
    async D(t, e) {
      const s = await e.cacheMatch(t)
      return (
        s ||
        (e.event && 'install' === e.event.type
          ? await this.j(t, e)
          : await this.S(t, e))
      )
    }
    async S(t, e) {
      let n
      const r = e.params || {}
      if (!this.W)
        throw new s('missing-precache-entry', {
          cacheName: this.cacheName,
          url: t.url
        })
      {
        const s = r.integrity,
          i = t.integrity,
          a = !i || i === s
        ;(n = await e.fetch(
          new Request(t, { integrity: 'no-cors' !== t.mode ? i || s : void 0 })
        )),
          s &&
            a &&
            'no-cors' !== t.mode &&
            (this.K(), await e.cachePut(t, n.clone()))
      }
      return n
    }
    async j(t, e) {
      this.K()
      const n = await e.fetch(t)
      if (!(await e.cachePut(t, n.clone())))
        throw new s('bad-precaching-response', { url: t.url, status: n.status })
      return n
    }
    K() {
      let t = null,
        e = 0
      for (const [s, n] of this.plugins.entries())
        n !== Z.copyRedirectedCacheableResponsesPlugin &&
          (n === Z.defaultPrecacheCacheabilityPlugin && (t = s),
          n.cacheWillUpdate && e++)
      0 === e
        ? this.plugins.push(Z.defaultPrecacheCacheabilityPlugin)
        : e > 1 && null !== t && this.plugins.splice(t, 1)
    }
  }
  ;(Z.defaultPrecacheCacheabilityPlugin = {
    cacheWillUpdate: async ({ response: t }) =>
      !t || t.status >= 400 ? null : t
  }),
    (Z.copyRedirectedCacheableResponsesPlugin = {
      cacheWillUpdate: async ({ response: t }) =>
        t.redirected ? await Y(t) : t
    })
  class tt {
    constructor({
      cacheName: t,
      plugins: e = [],
      fallbackToNetwork: s = !0
    } = {}) {
      ;(this.A = new Map()),
        (this.F = new Map()),
        (this.H = new Map()),
        (this.u = new Z({
          cacheName: w(t),
          plugins: [...e, new J({ precacheController: this })],
          fallbackToNetwork: s
        })),
        (this.install = this.install.bind(this)),
        (this.activate = this.activate.bind(this))
    }
    get strategy() {
      return this.u
    }
    precache(t) {
      this.addToCacheList(t),
        this.$ ||
          (self.addEventListener('install', this.install),
          self.addEventListener('activate', this.activate),
          (this.$ = !0))
    }
    addToCacheList(t) {
      const e = []
      for (const n of t) {
        'string' == typeof n
          ? e.push(n)
          : n && void 0 === n.revision && e.push(n.url)
        const { cacheKey: t, url: r } = G(n),
          i = 'string' != typeof n && n.revision ? 'reload' : 'default'
        if (this.A.has(r) && this.A.get(r) !== t)
          throw new s('add-to-cache-list-conflicting-entries', {
            firstEntry: this.A.get(r),
            secondEntry: t
          })
        if ('string' != typeof n && n.integrity) {
          if (this.H.has(t) && this.H.get(t) !== n.integrity)
            throw new s('add-to-cache-list-conflicting-integrities', { url: r })
          this.H.set(t, n.integrity)
        }
        if ((this.A.set(r, t), this.F.set(r, i), e.length > 0)) {
          const t = `Workbox is precaching URLs without revision info: ${e.join(
            ', '
          )}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`
          console.warn(t)
        }
      }
    }
    install(t) {
      return z(t, async () => {
        const e = new V()
        this.strategy.plugins.push(e)
        for (const [e, s] of this.A) {
          const n = this.H.get(s),
            r = this.F.get(e),
            i = new Request(e, {
              integrity: n,
              cache: r,
              credentials: 'same-origin'
            })
          await Promise.all(
            this.strategy.handleAll({
              params: { cacheKey: s },
              request: i,
              event: t
            })
          )
        }
        const { updatedURLs: s, notUpdatedURLs: n } = e
        return { updatedURLs: s, notUpdatedURLs: n }
      })
    }
    activate(t) {
      return z(t, async () => {
        const t = await self.caches.open(this.strategy.cacheName),
          e = await t.keys(),
          s = new Set(this.A.values()),
          n = []
        for (const r of e) s.has(r.url) || (await t.delete(r), n.push(r.url))
        return { deletedURLs: n }
      })
    }
    getURLsToCacheKeys() {
      return this.A
    }
    getCachedURLs() {
      return [...this.A.keys()]
    }
    getCacheKeyForURL(t) {
      const e = new URL(t, location.href)
      return this.A.get(e.href)
    }
    getIntegrityForCacheKey(t) {
      return this.H.get(t)
    }
    async matchPrecache(t) {
      const e = t instanceof Request ? t.url : t,
        s = this.getCacheKeyForURL(e)
      if (s) {
        return (await self.caches.open(this.strategy.cacheName)).match(s)
      }
    }
    createHandlerBoundToURL(t) {
      const e = this.getCacheKeyForURL(t)
      if (!e) throw new s('non-precached-url', { url: t })
      return (s) => (
        (s.request = new Request(t)),
        (s.params = Object.assign({ cacheKey: e }, s.params)),
        this.strategy.handle(s)
      )
    }
  }
  const et = () => (X || (X = new tt()), X)
  class st extends r {
    constructor(t, e) {
      super(({ request: s }) => {
        const n = t.getURLsToCacheKeys()
        for (const r of (function* (
          t,
          {
            ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/],
            directoryIndex: s = 'index.html',
            cleanURLs: n = !0,
            urlManipulation: r
          } = {}
        ) {
          const i = new URL(t, location.href)
          ;(i.hash = ''), yield i.href
          const a = (function (t, e = []) {
            for (const s of [...t.searchParams.keys()])
              e.some((t) => t.test(s)) && t.searchParams.delete(s)
            return t
          })(i, e)
          if ((yield a.href, s && a.pathname.endsWith('/'))) {
            const t = new URL(a.href)
            ;(t.pathname += s), yield t.href
          }
          if (n) {
            const t = new URL(a.href)
            ;(t.pathname += '.html'), yield t.href
          }
          if (r) {
            const t = r({ url: i })
            for (const e of t) yield e.href
          }
        })(s.url, e)) {
          const e = n.get(r)
          if (e) {
            return { cacheKey: e, integrity: t.getIntegrityForCacheKey(e) }
          }
        }
      }, t.strategy)
    }
  }
  ;(t.CacheFirst = class extends v {
    async D(t, e) {
      let n,
        r = await e.cacheMatch(t)
      if (!r)
        try {
          r = await e.fetchAndCachePut(t)
        } catch (t) {
          t instanceof Error && (n = t)
        }
      if (!r) throw new s('no-response', { url: t.url, error: n })
      return r
    }
  }),
    (t.ExpirationPlugin = class {
      constructor(t = {}) {
        ;(this.cachedResponseWillBeUsed = async ({
          event: t,
          request: e,
          cacheName: s,
          cachedResponse: n
        }) => {
          if (!n) return null
          const r = this.G(n),
            i = this.V(s)
          b(i.expireEntries())
          const a = i.updateTimestamp(e.url)
          if (t)
            try {
              t.waitUntil(a)
            } catch (t) {}
          return r ? n : null
        }),
          (this.cacheDidUpdate = async ({ cacheName: t, request: e }) => {
            const s = this.V(t)
            await s.updateTimestamp(e.url), await s.expireEntries()
          }),
          (this.J = t),
          (this.k = t.maxAgeSeconds),
          (this.X = new Map()),
          t.purgeOnQuotaError &&
            (function (t) {
              g.add(t)
            })(() => this.deleteCacheAndMetadata())
      }
      V(t) {
        if (t === d()) throw new s('expire-custom-caches-only')
        let e = this.X.get(t)
        return e || ((e = new H(t, this.J)), this.X.set(t, e)), e
      }
      G(t) {
        if (!this.k) return !0
        const e = this.Y(t)
        if (null === e) return !0
        return e >= Date.now() - 1e3 * this.k
      }
      Y(t) {
        if (!t.headers.has('date')) return null
        const e = t.headers.get('date'),
          s = new Date(e).getTime()
        return isNaN(s) ? null : s
      }
      async deleteCacheAndMetadata() {
        for (const [t, e] of this.X)
          await self.caches.delete(t), await e.delete()
        this.X = new Map()
      }
    }),
    (t.NetworkFirst = class extends v {
      constructor(t = {}) {
        super(t),
          this.plugins.some((t) => 'cacheWillUpdate' in t) ||
            this.plugins.unshift(u),
          (this.Z = t.networkTimeoutSeconds || 0)
      }
      async D(t, e) {
        const n = [],
          r = []
        let i
        if (this.Z) {
          const { id: s, promise: a } = this.tt({
            request: t,
            logs: n,
            handler: e
          })
          ;(i = s), r.push(a)
        }
        const a = this.et({ timeoutId: i, request: t, logs: n, handler: e })
        r.push(a)
        const o = await e.waitUntil(
          (async () => (await e.waitUntil(Promise.race(r))) || (await a))()
        )
        if (!o) throw new s('no-response', { url: t.url })
        return o
      }
      tt({ request: t, logs: e, handler: s }) {
        let n
        return {
          promise: new Promise((e) => {
            n = setTimeout(async () => {
              e(await s.cacheMatch(t))
            }, 1e3 * this.Z)
          }),
          id: n
        }
      }
      async et({ timeoutId: t, request: e, logs: s, handler: n }) {
        let r, i
        try {
          i = await n.fetchAndCachePut(e)
        } catch (t) {
          t instanceof Error && (r = t)
        }
        return t && clearTimeout(t), (!r && i) || (i = await n.cacheMatch(e)), i
      }
    }),
    (t.RangeRequestsPlugin = class {
      constructor() {
        this.cachedResponseWillBeUsed = async ({
          request: t,
          cachedResponse: e
        }) => (e && t.headers.has('range') ? await $(t, e) : e)
      }
    }),
    (t.StaleWhileRevalidate = class extends v {
      constructor(t = {}) {
        super(t),
          this.plugins.some((t) => 'cacheWillUpdate' in t) ||
            this.plugins.unshift(u)
      }
      async D(t, e) {
        const n = e.fetchAndCachePut(t).catch(() => {})
        e.waitUntil(n)
        let r,
          i = await e.cacheMatch(t)
        if (i);
        else
          try {
            i = await n
          } catch (t) {
            t instanceof Error && (r = t)
          }
        if (!i) throw new s('no-response', { url: t.url, error: r })
        return i
      }
    }),
    (t.cleanupOutdatedCaches = function () {
      self.addEventListener('activate', (t) => {
        const e = w()
        t.waitUntil(
          (async (t, e = '-precache-') => {
            const s = (await self.caches.keys()).filter(
              (s) =>
                s.includes(e) && s.includes(self.registration.scope) && s !== t
            )
            return await Promise.all(s.map((t) => self.caches.delete(t))), s
          })(e).then((t) => {})
        )
      })
    }),
    (t.clientsClaim = function () {
      self.addEventListener('activate', () => self.clients.claim())
    }),
    (t.precacheAndRoute = function (t, e) {
      !(function (t) {
        et().precache(t)
      })(t),
        (function (t) {
          const e = et()
          h(new st(e, t))
        })(e)
    }),
    (t.registerRoute = h)
})
```

## File: src/components/audio-player/audio-player.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AudioPlayer } from './audio-player'

const Component = () => <audio>audio</audio>

describe('<AudioPlayer />', () => {
  const playMock = jest.fn()
  const pauseMock = jest.fn()
  const volumeMock = jest.fn()

  const useAudioMock = jest.fn().mockReturnValue([
    <Component key={0} />,
    { playing: false },
    {
      volume: volumeMock,
      pause: pauseMock,
      play: playMock
    }
  ])

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be render a AudioPlayer component', () => {
    render(<AudioPlayer src="audio" useAudio={useAudioMock} />)

    expect(useAudioMock).toHaveBeenCalled()
    expect(volumeMock).toHaveBeenCalled()

    expect(screen.getByTestId('play-icon')).toBeInTheDocument()
  })

  it('should be able to click in the play button', async () => {
    render(<AudioPlayer src="audio" useAudio={useAudioMock} />)

    expect(useAudioMock).toHaveBeenCalled()

    const playButton = screen.getByTestId('play-icon')

    await userEvent.click(playButton)

    expect(playMock).toHaveBeenCalled()
  })

  it('should be able to click in the pause button', async () => {
    const useAudioMock = jest.fn().mockReturnValue([
      <Component key={0} />,
      { playing: true },
      {
        volume: volumeMock,
        pause: pauseMock,
        play: playMock
      }
    ])

    render(<AudioPlayer src="audio" useAudio={useAudioMock} />)

    expect(useAudioMock).toHaveBeenCalled()

    const pauseButton = screen.getByTestId('pause-icon')

    await userEvent.click(pauseButton)

    expect(pauseMock).toHaveBeenCalled()
  })
})
```

## File: src/components/audio-player/audio-player.tsx

```typescript
import { useContext, useEffect } from 'react'
import { useAudio as ReactUseAudio } from 'react-use'
import { PlayIcon, PauseIcon } from '@heroicons/react/solid'
import { AudioContext } from 'contexts'

type AudioPlayerProps = {
  src: string
  useAudio?: typeof ReactUseAudio
}

export const AudioPlayer = ({
  src,
  useAudio = ReactUseAudio
}: AudioPlayerProps) => {
  const [audio, state, controls] = useAudio({
    src: src,
    autoPlay: false
  })

  const { source, setSource } = useContext(AudioContext)

  const { volume, play, pause } = controls

  useEffect(() => {
    if (src !== source) {
      pause()
    }
  }, [source, src, pause])

  useEffect(() => {
    /**
     * @disclaimer
     * I don't know why when I add volume function to array deps
     * this component receive this error
     * "Maximum update depth exceeded. This can happen when a component calls setState inside"
     */
    volume(0.1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePlay = () => {
    play()
    setSource?.(src)
  }

  const commonStyle = `h-14 w-14 sm:h-10 sm:w-10 dark:fill-gray-100 fill-gray-600 
    cursor-pointer hover:scale-110 transition duration-200 ease-out hover:ease-in`

  return (
    <div className="flex justify-center p-2">
      {audio}
      {state.playing ? (
        <PauseIcon
          data-testid="pause-icon"
          aria-label="pause-icon"
          className={commonStyle}
          onClick={pause}
        />
      ) : (
        <PlayIcon
          data-testid="play-icon"
          aria-label="play-icon"
          className={commonStyle}
          onClick={handlePlay}
        />
      )}
    </div>
  )
}
```

## File: src/components/audio-player/index.ts

```typescript
export { AudioPlayer } from './audio-player'
```

## File: src/components/content/content.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import { Content } from './content'

describe('<Content/>', () => {
  it('should be render a Content component', () => {
    render(
      <Content>
        <h1>hello content testing</h1>
      </Content>
    )

    expect(
      screen.getByRole('heading', {
        name: /hello content testing/i
      })
    ).toBeInTheDocument()
  })
})
```

## File: src/components/content/content.tsx

```typescript
import { PropsWithChildren } from 'react'

type ContentProps = Record<string, unknown>

export const Content = ({ children }: PropsWithChildren<ContentProps>) => {
  return (
    <main className="max-w-6xl my-0 mx-auto bg-neutral-50 dark:bg-neutral-700">
      {children}
    </main>
  )
}
```

## File: src/components/content/index.ts

```typescript
export { Content } from './content'
```

## File: src/components/footer/footer.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import { Footer } from './footer'

describe('<Footer/>', () => {
  it('should be render a Footer component', () => {
    render(<Footer />)

    expect(screen.getByText(/initial/i)).toBeInTheDocument()
    expect(screen.getByText(/prep/i)).toBeInTheDocument()
    expect(screen.getByText(/♥️/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /name/i
      })
    ).toBeInTheDocument()
  })
})
```

## File: src/components/footer/footer.tsx

```typescript
import { useTranslation } from 'next-i18next'

export const Footer = () => {
  const { t } = useTranslation('footer')
  return (
    <footer
      className="p-4 flex 
      justify-center font-thin dark:text-gray-300 
      text-gray-700"
    >
      <p>
        {t('initial')}
        <span className="text-rose-600">♥️</span>
        {t('prep')}
        <a
          className="border-b-blue-500 dark:border-b-orange-400 
          text-blue-500 dark:text-orange-400 hover:border-b-[1px]"
          href="https://github.com/andraderaul"
          target="_blank"
          rel="noreferrer"
        >
          {t('name')}
        </a>
      </p>
    </footer>
  )
}
```

## File: src/components/footer/index.ts

```typescript
export { Footer } from './footer'
```

## File: src/components/generic-error/generic-error.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GenericError } from './generic-error'

describe('<GenericError />', () => {
  it('should be render a GenericError component and click on tryAgain button', async () => {
    const mockTryAgain = jest.fn()

    render(<GenericError tryAgain={mockTryAgain} />)

    expect(screen.getByText(/error\.title/i)).toBeInTheDocument()

    const tryAgainButton = screen.getByRole('button', {
      name: /error\.subtitle/i
    })

    await userEvent.click(tryAgainButton)

    expect(mockTryAgain).toHaveBeenCalled()
  })
})
```

## File: src/components/generic-error/generic-error.tsx

```typescript
import { PrimaryButton, PrimaryText } from 'components'
import { useTranslation } from 'next-i18next'

type GenericErrorProps = {
  tryAgain: () => void
}

export const GenericError = ({ tryAgain }: GenericErrorProps) => {
  const { t } = useTranslation('common')

  return (
    <div className="h-60 p-4 flex flex-col justify-evenly items-center">
      <PrimaryText>{t('error.title')}</PrimaryText>
      <PrimaryButton aria-label="try-again" onClick={tryAgain}>
        {t('error.subtitle')}
      </PrimaryButton>
    </div>
  )
}
```

## File: src/components/generic-error/index.ts

```typescript
export { GenericError } from './generic-error'
```

## File: src/components/grid/grid.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import { Grid } from './grid'

describe('<Grid/>', () => {
  it('should be render a Grid component', () => {
    render(
      <Grid>
        <h1>hello grid testing</h1>
      </Grid>
    )

    expect(
      screen.getByRole('heading', {
        name: /hello grid testing/i
      })
    ).toBeInTheDocument()
  })
})
```

## File: src/components/grid/grid.tsx

```typescript
import { PropsWithChildren } from 'react'

type GridProps = Record<string, unknown>

export const Grid = ({ children }: PropsWithChildren<GridProps>) => {
  return (
    <div className="grid grid-cols-auto-fit gap-4 p-4 justify-items-center">
      {children}
    </div>
  )
}
```

## File: src/components/grid/index.ts

```typescript
export { Grid } from './grid'
```

## File: src/components/header/header.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('<Header />', () => {
  it('should be render a authenticated Header component', () => {
    const getAllMock = jest.fn().mockReturnValue({
      authorization: 'token'
    })

    const CookiesMock = {
      getAll: getAllMock,
      destroy: jest.fn(),
      set: jest.fn()
    }

    render(<Header cookies={CookiesMock} />)

    expect(
      screen.getByRole('heading', {
        name: /randomfy/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /search/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /about/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /logout/i
      })
    ).toBeInTheDocument()
  })

  it('should be render a not authenticated Header component', () => {
    const getAllMock = jest.fn().mockReturnValue({
      authorization: ''
    })

    const CookiesMock = {
      getAll: getAllMock,
      destroy: jest.fn(),
      set: jest.fn()
    }

    const { queryByText } = render(<Header cookies={CookiesMock} />)

    expect(
      screen.getByRole('heading', {
        name: /randomfy/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /about/i
      })
    ).toBeInTheDocument()

    expect(queryByText(/log out/i)).not.toBeInTheDocument()
    expect(queryByText(/search/i)).not.toBeInTheDocument()
  })
})
```

## File: src/components/header/header.tsx

```typescript
import Link from 'next/link'
import { Title } from 'components'
import { Cookies as CookiesUtils } from 'utils'
import { useTranslation } from 'next-i18next'
import { useMemo } from 'react'

type NavLinkProps = {
  href: string
  label: string
}
const NavLink = ({ href, label }: NavLinkProps) => (
  <nav
    className="p-1 sm:p-0 text-2xl font-thin 
dark:text-gray-300 text-gray-700 leading-10 tracking-wide
hover:text-blue-500 hover:dark:text-orange-400"
  >
    <Link href={href}>{label}</Link>
  </nav>
)

export type HeaderProps = {
  cookies?: typeof CookiesUtils
}

export const Header = ({ cookies = CookiesUtils }: HeaderProps) => {
  const { t } = useTranslation('common')
  const allCookies = cookies.getAll()
  const isAuthenticated = useMemo(
    () => Boolean(allCookies['authorization']),
    [allCookies]
  )

  return (
    <div className="mt-2 p-4 flex justify-between items-center sm:flex-row flex-col">
      <div className="flex items-center flex-col sm:flex-row">
        <Link href="/">
          <Title>Randomfy</Title>
        </Link>
      </div>

      <header className="mt-4 sm:mt-0 flex sm:flex-col flex-row justify-between">
        <NavLink label={t('about')} href="/about" />
        {isAuthenticated && (
          <>
            <NavLink label={t('search')} href="/search" />
            <NavLink label={t('logout')} href="/logout" />
          </>
        )}
      </header>
    </div>
  )
}
```

## File: src/components/header/index.ts

```typescript
export { Header } from './header'
export type { HeaderProps } from './header'
```

## File: src/components/image-box/image-box.skeleton.tsx

```typescript
import Image from 'next/image'
import { Fragment } from 'react'

export const ImageBoxSkeleton = () => {
  return (
    <Fragment>
      <div
        data-testid="image-box-skeleton"
        className="flex flex-col max-w-xs relative shadow-md hover:shadow-lg animate-pulse"
      >
        <div className="rounded bg-white dark:bg-neutral-900 p-4">
          <div className="pb-2 cursor-pointer">
            <Image
              alt="spotify logo"
              src="/img/Spotify_Logo_RGB_Green.png"
              width="100"
              height="30"
            />
          </div>

          <div
            aria-label="image loading"
            className="w-72 h-72 bg-gray-300 dark:bg-gray-600"
          />
          <div className="mt-4 w-20 h-4 bg-gray-800 dark:bg-gray-100 rounded" />
          <div className="mt-4 mb-2 w-6/12 h-4 bg-gray-500 dark:bg-gray-200 rounded" />

          <div className="pt-2 pb-3 flex justify-around items-center">
            <div
              className="rounded-full bg-gray-600 
              dark:bg-gray-100
              h-12 w-12
              sm:h-8 sm:w-8"
            />
            <div
              className="rounded-full bg-gray-600 
              dark:bg-gray-100
              h-12 w-12 
              sm:h-8 sm:w-8"
            />
            <div
              className="rounded-full bg-gray-600 
            dark:bg-gray-100
            h-12 w-12 
            sm:h-8 sm:w-8"
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
```

## File: src/components/image-box/image-box.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ImageBox } from './image-box'

describe('<ImageBox />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const onLikeMock = jest.fn()
  const onDislikeMock = jest.fn()

  it('should be render a ImageBox component', () => {
    render(
      <ImageBox
        href="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        onDislike={onDislikeMock}
        imgSrc="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        audioSrc="audio"
        onLike={onLikeMock}
        artist="artist test"
        track="track test"
      />
    )

    expect(
      screen.getByRole('img', {
        name: /artist test/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/artist test/i)).toBeInTheDocument()
    expect(screen.getByText(/track test/i)).toBeInTheDocument()

    expect(screen.getByLabelText('like')).toBeInTheDocument()
  })

  it('should be to click on like', async () => {
    render(
      <ImageBox
        href="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        onDislike={onDislikeMock}
        imgSrc="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        audioSrc="audio"
        onLike={onLikeMock}
        artist="artist test"
        track="track test"
      />
    )

    const likeButton = screen.getByLabelText('like')
    await userEvent.click(likeButton)
    expect(onLikeMock).toHaveBeenCalled()
  })

  it('should be to click on dislike', async () => {
    render(
      <ImageBox
        href="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        onDislike={onDislikeMock}
        imgSrc="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        audioSrc="audio"
        onLike={onLikeMock}
        artist="artist test"
        track="track test"
      />
    )

    const dislikeButton = screen.getByLabelText('dislike')
    await userEvent.click(dislikeButton)
    expect(onDislikeMock).toHaveBeenCalled()
  })
})
```

## File: src/components/image-box/image-box.tsx

```typescript
import Image from 'next/image'
import { AudioPlayer } from '..'
import { HeartIcon, XIcon } from '@heroicons/react/outline'

type ImageBoxProps = {
  href: string
  artist: string
  track: string
  imgSrc: string
  audioSrc: string
  onLike: () => void
  onDislike: () => void
}

export const ImageBox = ({
  href,
  artist,
  track,
  imgSrc,
  audioSrc,
  onLike,
  onDislike
}: ImageBoxProps) => {
  return (
    <div
      aria-label="image box"
      className="flex flex-col max-w-xs relative shadow-md hover:shadow-lg dark:shadow-neutral-700"
    >
      <div
        className="rounded bg-white dark:bg-neutral-900 p-4 
        transition duration-200 ease-out hover:ease-in"
      >
        <div className="pb-2 cursor-pointer">
          <a
            aria-label="Open in Spotify"
            target="_blank"
            href={href}
            rel="noreferrer"
          >
            <Image
              alt="spotify logo"
              src="/img/Spotify_Logo_RGB_Green.png"
              width="100"
              height="30"
            />
          </a>
        </div>
        <Image
          alt={`Image of the artist: ${artist}`}
          src={imgSrc}
          width="300"
          height="300"
          priority
        />
        <div className="flex flex-col items-start p-2">
          <strong className="w-64 truncate dark:text-neutral-200">
            {track}
          </strong>
          <p className="w-64 truncate dark:text-neutral-200">{artist}</p>
        </div>

        <div className="flex justify-around items-center">
          <XIcon
            aria-label="dislike"
            className="h-14 w-14 sm:h-10 sm:w-10 stroke-gray-600 dark:stroke-gray-50 hover:stroke-red-500
           hover:fill-red-500 hover:scale-110 cursor-pointer 
           transition duration-200 ease-out hover:ease-in"
            onClick={onDislike}
          />

          <AudioPlayer src={audioSrc} />

          <HeartIcon
            aria-label="like"
            className="h-14 w-14 sm:h-10 sm:w-10 stroke-gray-600 dark:stroke-gray-50 hover:stroke-spotifyGreen
           hover:fill-spotifyGreen hover:scale-110 cursor-pointer 
           transition duration-200 ease-out hover:ease-in"
            onClick={onLike}
          />
        </div>
      </div>
    </div>
  )
}
```

## File: src/components/image-box/index.ts

```typescript
export { ImageBox } from './image-box'
export { ImageBoxSkeleton } from './image-box.skeleton'
```

## File: src/components/input-search/index.ts

```typescript
export { InputSearch } from './input-search'
```

## File: src/components/input-search/input-search.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InputSearch } from './input-search'

describe('<InputSearch />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mockOnChange = jest.fn()

  it('should be able to render Input search component', () => {
    render(
      <InputSearch placeholder="placeholder" value="" onChange={mockOnChange} />
    )

    expect(
      screen.getByRole('textbox', {
        name: /search/i
      })
    ).toBeInTheDocument()
  })

  it('should be able to call onChange function when input is typed', async () => {
    render(
      <InputSearch placeholder="placeholder" value="" onChange={mockOnChange} />
    )
    const text = 'this is a text'
    const input = screen.getByRole('textbox', {
      name: /search/i
    })

    await userEvent.type(input, text)

    expect(mockOnChange).toHaveBeenCalledTimes(text.length)
  })
})
```

## File: src/components/input-search/input-search.tsx

```typescript
import { SearchIcon } from '@heroicons/react/outline'

type InputSearchProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  value: string
  label?: string
}

export const InputSearch = ({
  label = 'Search',
  placeholder,
  onChange,
  value
}: InputSearchProps) => {
  return (
    <label className="relative block sm:w-96">
      <span className="sr-only">{label}</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <SearchIcon className="h-5 w-5 stroke-slate-300" />
      </span>
      <input
        className="placeholder:italic placeholder:text-slate-400 
    block bg-white sm:w-full border border-slate-300 rounded-md 
    py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 
    focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder={placeholder}
        type="text"
        name="search"
        onChange={onChange}
        value={value}
      />
    </label>
  )
}
```

## File: src/components/primary-button/index.ts

```typescript
export { PrimaryButton } from './primary-button'
```

## File: src/components/primary-button/primary-button.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import { PrimaryButton } from './primary-button'

describe('<PrimaryButton/>', () => {
  it('should be render a PrimaryButton component', () => {
    render(
      <PrimaryButton onClick={jest.fn()}>hello button testing</PrimaryButton>
    )

    expect(
      screen.getByRole('button', {
        name: /hello button testing/i
      })
    ).toBeInTheDocument()
  })
})
```

## File: src/components/primary-button/primary-button.tsx

```typescript
import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

type PrimaryButtonProps = {
  onClick?: () => void
  ariaLabel?: string
} & ButtonHTMLAttributes<unknown>

export const PrimaryButton = ({
  onClick,
  ariaLabel,
  children,
  ...rest
}: PropsWithChildren<PrimaryButtonProps>) => {
  return (
    <button
      {...rest}
      className="flex justify-evenly items-center 
      w-56 p-3 rounded-full font-semibold 
      text-center text-gray-100 dark:text-gray-800 
      bg-gray-900 dark:bg-gray-200"
      aria-label={ariaLabel}
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  )
}
```

## File: src/components/primary-text/index.ts

```typescript
export { PrimaryText } from './primary-text'
```

## File: src/components/primary-text/primary-text.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import { PrimaryText } from './primary-text'

describe('<PrimaryText/>', () => {
  it('should be render a PrimaryText component', () => {
    render(<PrimaryText>hello text testing</PrimaryText>)

    expect(screen.getByText(/hello text testing/i)).toBeInTheDocument()
  })
})
```

## File: src/components/primary-text/primary-text.tsx

```typescript
import { PropsWithChildren } from 'react'

type PrimaryTextProps = Record<string, unknown>

export const PrimaryText = ({
  children,
  ...rest
}: PropsWithChildren<PrimaryTextProps>) => {
  return (
    <p
      {...rest}
      className="text-5xl font-thin dark:text-gray-300 text-gray-700 leading-10 tracking-wide"
    >
      {children}
    </p>
  )
}
```

## File: src/components/sub-title/index.ts

```typescript
export { SubTitle } from './sub-title'
```

## File: src/components/sub-title/sub-title.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import { SubTitle } from './sub-title'

describe('<SubTitle />', () => {
  it('should be render a SubTitle component', () => {
    render(<SubTitle>hello subtitle testing </SubTitle>)

    expect(
      screen.getByRole('heading', {
        name: /hello subtitle testing/i
      })
    ).toBeInTheDocument()
  })
})
```

## File: src/components/sub-title/sub-title.tsx

```typescript
import { PropsWithChildren } from 'react'

type SubTitleProps = Record<string, unknown>

export const SubTitle = ({ children }: PropsWithChildren<SubTitleProps>) => {
  return (
    <h2 className="text-5xl dark:text-gray-200 text-gray-800 font-semibold leading-10 tracking-wide">
      {children}
    </h2>
  )
}
```

## File: src/components/title/index.ts

```typescript
export { Title } from './title'
```

## File: src/components/title/title.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import { Title } from './title'

describe('<Title />', () => {
  it('should be render a Title component', () => {
    render(<Title>hello title testing </Title>)

    expect(
      screen.getByRole('heading', {
        name: /hello title testing/i
      })
    ).toBeInTheDocument()
  })
})
```

## File: src/components/title/title.tsx

```typescript
import { PropsWithChildren } from 'react'

type TitleProps = Record<string, unknown>

export const Title = ({ children }: PropsWithChildren<TitleProps>) => {
  return (
    <span
      className="before:block before:absolute 
        before:-inset-1 before:-skew-y-3 dark:before:bg-gray-600
        before:bg-gray-200 relative inline-block"
    >
      <h1
        className="relative text-5xl sm:text-7xl 
          text-gray-800 dark:text-gray-200 font-semibold
          hover:text-blue-500 hover:dark:text-orange-400 transition-all duration-700"
      >
        {children}
      </h1>
    </span>
  )
}
```

## File: src/components/index.ts

```typescript
export { ImageBox, ImageBoxSkeleton } from './image-box'
export { Grid } from './grid'
export { AudioPlayer } from './audio-player'
export { Content } from './content'
export { Title } from './title'
export { SubTitle } from './sub-title'
export { PrimaryButton } from './primary-button'
export { PrimaryText } from './primary-text'
export { Header } from './header'
export { Footer } from './footer'
export { GenericError } from './generic-error'
export { InputSearch } from './input-search'
```

## File: src/constants/index.ts

```typescript
export { scopes } from './scopes'
export {
  MAX_RANDOM_FY_ITEMS,
  MAX_ARTISTS_TO_SHOW_PER_TURN,
  BASE_URL
} from './values'
```

## File: src/constants/scopes.ts

```typescript
export const scopes = [
  // 'ugc-image-upload',
  // 'user-read-playback-state',
  // 'user-modify-playback-state',
  // 'user-read-currently-playing',
  // 'streaming',
  // 'app-remote-control',
  // 'user-read-email',
  // 'user-read-private',
  // 'playlist-read-collaborative',
  'playlist-modify-public',
  // 'playlist-read-private',
  // 'playlist-modify-private',
  // 'user-library-modify',
  // 'user-library-read',
  'user-top-read',
  // 'user-read-playback-position',
  'user-read-recently-played'
  // 'user-follow-read',
  // 'user-follow-modify'
]
```

## File: src/constants/values.ts

```typescript
export const MAX_RANDOM_FY_ITEMS = 20
export const MAX_ARTISTS_TO_SHOW_PER_TURN = 1

export const BASE_URL = process.env.NEXT_PUBLIC_API || '/api'

export const MAX_AGE_COOKIES = 30 * 24 * 60 * 60
```

## File: src/contexts/audio-context/audio-context.tsx

```typescript
import { createContext } from 'react'

type AudioContextProps = {
  source: string
  setSource?: (source: string) => void
}

const InitialValues: AudioContextProps = {
  source: ''
}

export const AudioContext = createContext<AudioContextProps>(InitialValues)
```

## File: src/contexts/audio-context/index.ts

```typescript
export { AudioContext } from './audio-context'
```

## File: src/contexts/index.ts

```typescript
export { AudioContext } from './audio-context'
```

## File: src/features/festival/festival.tsx

```typescript
import { PrimaryButton, PrimaryText } from 'components'
import { MAX_RANDOM_FY_ITEMS } from '../../constants'
import { useComponentToImage } from 'hook'
import { Recommendation } from 'types'

type FestivalProps = {
  artists: Array<Recommendation>
}

const YEAR = new Date(Date.now()).getFullYear()

const getArtistsName = (artists: Array<Recommendation>) => [
  ...new Set(
    artists
      .sort((a, b) => b.popularity - a.popularity)
      .map((artist) => artist.name)
  )
]

export const Festival = ({ artists }: FestivalProps) => {
  const { downloadImage } = useComponentToImage({
    elementName: 'festival',
    fileName: 'randomfy-festival.png',
    button: 'festival-download',
    subtitle: 'festival-subtitle'
  })

  const artistsName = getArtistsName(artists)

  return artists.length >= MAX_RANDOM_FY_ITEMS ? (
    <div id="festival" className="max-w-5xl my-0 mx-auto">
      <div className="p-4">
        <PrimaryText id="festival-subtitle">
          You can download your festival!
        </PrimaryText>
      </div>
      <div
        className="min-h-96 p-10 flex flex-col
        justify-center items-center uppercase
        bg-gradient-to-t from-amber-200 via-yellow-50 to-amber-200
        text-gray-100
        overflow-hidden
        bg-[url('/img/bg.jpg')]
      "
      >
        <div className="mb-32 text-center">
          <div
            className="text-5xl md:text-7xl flex flex-col 
          p-10 md:mb-32 font-extrabold text-red-500 font-mono"
          >
            <span>randomfest</span>
            <span>{YEAR}</span>
          </div>

          <div className="text-6xl md:text-8xl p-4">
            {artistsName.slice(0, 1).map((artist) => (
              <span className="p-2" key={artist}>
                {artist}
              </span>
            ))}
          </div>
          <div className="text-4xl md:text-6xl flex flex-wrap justify-evenly items-center pb-4">
            {artistsName.slice(1, 3).map((artist) => (
              <span className="max-w-md" key={artist}>
                {artist}
              </span>
            ))}
          </div>
          <div className="text-2xl md:text-5xl flex flex-wrap justify-around items-center pb-4">
            {artistsName.slice(3, 6).map((artist) => (
              <span className="max-w-xs" key={artist}>
                {artist}
              </span>
            ))}
          </div>
          <div className="text-xl md:text-2xl flex flex-wrap justify-around">
            {artistsName.slice(6).map((artist) => (
              <span className="" key={artist}>
                {artist}
              </span>
            ))}
          </div>
        </div>
        <span>Randomfy</span>
      </div>
      <div className="flex justify-center p-10">
        <PrimaryButton
          id="festival-download"
          onClick={downloadImage}
          ariaLabel="download button"
        >
          Download Festival
        </PrimaryButton>
      </div>
    </div>
  ) : null
}
```

## File: src/features/festival/index.ts

```typescript
export { Festival } from './festival'
```

## File: src/features/image-collage/image-collage.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockRecommendations } from 'mock'
import { useComponentToImage } from 'hook'
import { ImageCollage } from './image-collage'

jest.mock('hook', () => ({
  useComponentToImage: jest.fn().mockReturnValue({
    downloadImage: jest.fn()
  })
}))

describe('<ImageCollage />', () => {
  it('should be render a ImageCollage feature', () => {
    render(<ImageCollage artists={mockRecommendations} />)

    expect(
      screen.getByText(/you can download your randomfy!/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /download button/i
      })
    ).toBeInTheDocument()
  })

  it('should be return null when artists length less than the constant MAX_RANDOM_FY_ITEMS', () => {
    const { container } = render(<ImageCollage artists={[]} />)

    expect(container.firstChild).toBeNull()
  })

  it('should be able to download the generated Image', async () => {
    render(<ImageCollage artists={mockRecommendations} />)

    expect(useComponentToImage).toHaveBeenCalledWith({
      elementName: 'grid',
      fileName: 'randomfy.png'
    })

    const { downloadImage } = useComponentToImage({
      elementName: 'grid',
      fileName: 'randomfy.png'
    })

    const downloadButton = screen.getByRole('button', {
      name: /download button/i
    })

    await userEvent.click(downloadButton)

    expect(downloadImage).toHaveBeenCalled()
  })
})
```

## File: src/features/image-collage/image-collage.tsx

```typescript
import Image from 'next/image'
import { PrimaryButton, PrimaryText } from 'components'
import { Recommendation } from 'types'
import { MAX_RANDOM_FY_ITEMS } from '../../constants'
import { useComponentToImage } from 'hook'

type PictureProps = {
  artists: Array<Recommendation>
}

export const ImageCollage = ({ artists }: PictureProps) => {
  const { downloadImage } = useComponentToImage({
    elementName: 'grid',
    fileName: 'randomfy.png'
  })

  return artists.length >= MAX_RANDOM_FY_ITEMS ? (
    <div id="grid" className="max-w-5xl my-0 mx-auto">
      <div className="p-4">
        <PrimaryText id="subtitle">You can download your randomfy!</PrimaryText>
      </div>
      <div className="grid grid-cols-4 relative">
        {artists.map((artist, index) => (
          <Image
            key={`${index} - ${artist.id}`}
            alt={artist.name}
            src={artist.track.images[0].url}
            width="300"
            height="300"
            priority
          />
        ))}
      </div>
      <div className="flex justify-center p-10">
        <PrimaryButton
          id="download"
          onClick={downloadImage}
          ariaLabel="download button"
        >
          Download Image
        </PrimaryButton>
      </div>
    </div>
  ) : null
}
```

## File: src/features/image-collage/index.ts

```typescript
export { ImageCollage } from './image-collage'
```

## File: src/features/match/index.ts

```typescript
export { Match } from './match'
```

## File: src/features/match/match.spec.tsx

```typescript
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Match } from './match'

import { mockRecommendations } from 'mock'
import { MAX_ARTISTS_TO_SHOW_PER_TURN } from '../../constants'

describe('<Match />', () => {
  const artistIdMock = '12123'

  const setLikedArtistsMock = jest.fn()
  const refetchMock = jest.fn()

  const returnValue = {
    data: {
      data: []
    },
    isError: false,
    isLoading: false,
    isRefetching: false,
    refetch: refetchMock
  }

  const mockData = mockRecommendations.slice(0, MAX_ARTISTS_TO_SHOW_PER_TURN)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be render a Match feature', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      data: { data: mockData }
    })

    render(
      <Match
        likedArtists={[]}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(screen.getAllByText(mockData[0].track.name)).toHaveLength(
      MAX_ARTISTS_TO_SHOW_PER_TURN
    )
    expect(screen.getAllByText(mockData[0].name)).toHaveLength(
      MAX_ARTISTS_TO_SHOW_PER_TURN
    )
  })

  it('should be render a error component ', async () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      isError: true
    })

    render(
      <Match
        likedArtists={[]}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(screen.getByText(/error.title/i)).toBeInTheDocument()

    const tryAgainButton = screen.getByRole('button', {
      name: /error.subtitle/i
    })
    expect(tryAgainButton).toBeInTheDocument()

    await userEvent.click(tryAgainButton)

    expect(refetchMock).toHaveBeenCalled()
  })

  it('should be render a loading component ', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      isLoading: true
    })

    render(
      <Match
        likedArtists={[]}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(screen.getAllByTestId('image-box-skeleton')).toHaveLength(
      MAX_ARTISTS_TO_SHOW_PER_TURN
    )
  })

  it('should be return null when artists length more than the constant MAX_RANDOM_FY_ITEMS', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      data: { data: mockRecommendations }
    })

    const { container } = render(
      <Match
        likedArtists={mockRecommendations}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(container.firstChild).toBeNull()
  })

  it('should be render a refetching component ', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      isRefetching: true
    })

    render(
      <Match
        likedArtists={[]}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(screen.getAllByTestId('image-box-skeleton')).toHaveLength(
      MAX_ARTISTS_TO_SHOW_PER_TURN
    )
  })

  it('should be able to rerefetch recommendations, when a song already liked', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      data: { data: mockRecommendations.slice(0, MAX_ARTISTS_TO_SHOW_PER_TURN) }
    })

    render(
      <Match
        likedArtists={mockRecommendations.slice(
          0,
          MAX_ARTISTS_TO_SHOW_PER_TURN
        )}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(refetchMock).toHaveBeenCalledTimes(1)
  })

  it('should be able to dislike a recommendations', async () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      data: { data: mockData }
    })

    render(
      <Match
        likedArtists={[]}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    const dislikeButton = screen.getByLabelText('dislike')
    expect(dislikeButton).toBeInTheDocument()

    await userEvent.click(dislikeButton)

    expect(refetchMock).toHaveBeenCalled()
  })

  it('should be able to like a recommendation', async () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      data: { data: mockData }
    })

    render(
      <Match
        likedArtists={[]}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    const likeButton = screen.getByLabelText('like')
    expect(likeButton).toBeInTheDocument()

    await userEvent.click(likeButton)

    expect(setLikedArtistsMock).toHaveBeenCalled()
  })
})
```

## File: src/features/match/match.tsx

```typescript
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
  useMemo
} from 'react'

import { useRecommendation as useRecommendationQuery } from 'queries'
import { Recommendation } from 'types'
import {
  GenericError,
  Grid,
  ImageBox,
  ImageBoxSkeleton,
  PrimaryText
} from 'components'

import { MAX_RANDOM_FY_ITEMS } from '../../constants'

type Liked = {
  id: string
  trackId: string
}

type MatchProps = {
  likedArtists: Array<Recommendation>
  artistId: string
  setLikedArtists: Dispatch<SetStateAction<Array<Recommendation>>>
  useRecommendation?: typeof useRecommendationQuery
}

export const Match = ({
  likedArtists,
  artistId,
  setLikedArtists,
  useRecommendation = useRecommendationQuery
}: MatchProps) => {
  const [liked, setLiked] = useState<Liked>(() => ({
    id: artistId,
    trackId: ''
  }))

  const { data, isError, isLoading, isRefetching, refetch } = useRecommendation(
    liked.id,
    liked.trackId
  )

  const newArtists = useMemo(() => data?.data ?? [], [data?.data])

  useEffect(() => {
    for (const newArtist of newArtists) {
      const alreadyLiked = likedArtists.some(
        (likedArtist) => likedArtist.track.id === newArtist.track.id
      )

      if (alreadyLiked) {
        refetch()
        break
      }
    }
  }, [likedArtists, newArtists, refetch])

  const handleLike = (artist: Recommendation) => {
    setLiked({
      id: artist.id,
      trackId: artist.track.id
    })

    setLikedArtists((oldLikedArtists) => [...oldLikedArtists, artist])
  }

  if (isError) {
    return <GenericError tryAgain={() => refetch()} />
  }

  return likedArtists.length < MAX_RANDOM_FY_ITEMS ? (
    <Fragment>
      <div className="flex justify-center p-2">
        <PrimaryText>
          {likedArtists.length}/{MAX_RANDOM_FY_ITEMS}
        </PrimaryText>
      </div>
      <Grid>
        {isLoading || isRefetching ? (
          <ImageBoxSkeleton />
        ) : (
          newArtists.map((artist) => (
            <ImageBox
              key={artist.id}
              imgSrc={artist.track.images[1].url}
              audioSrc={artist.track.previewUrl ?? ''}
              track={artist.track.name}
              artist={artist.name}
              onLike={() => handleLike(artist)}
              onDislike={() => refetch()}
              href={artist.track.hrefSpotify}
            />
          ))
        )}
      </Grid>
    </Fragment>
  ) : null
}
```

## File: src/features/playlist/index.ts

```typescript
export { Playlist } from './playlist'
```

## File: src/features/playlist/playlist.spec.tsx

```typescript
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { mockRecommendations } from 'mock'
import { Playlist } from './playlist'

describe('<Playlist />', () => {
  const mutateMock = jest.fn()
  const usePlaylistMutationMock = jest.fn().mockReturnValue({
    mutate: mutateMock
  })

  it('should be render a Playlist feature', () => {
    render(
      <Playlist
        artists={mockRecommendations}
        usePlaylist={usePlaylistMutationMock}
      />
    )

    expect(
      screen.getByText(/you can make a randomfy playlist!/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /create playlist button/i
      })
    ).toBeInTheDocument()
  })

  it('should be return null when artists length less than the constant MAX_RANDOM_FY_ITEMS', () => {
    const { container } = render(
      <Playlist artists={[]} usePlaylist={usePlaylistMutationMock} />
    )

    expect(container.firstChild).toBeNull()
  })

  it('should be able to create a playlist', async () => {
    render(
      <Playlist
        artists={mockRecommendations}
        usePlaylist={usePlaylistMutationMock}
      />
    )

    const createPlaylistButton = screen.getByRole('button', {
      name: /create playlist button/i
    })

    await userEvent.click(createPlaylistButton)

    expect(mutateMock).toHaveBeenCalled()
  })
})
```

## File: src/features/playlist/playlist.tsx

```typescript
import { Fragment } from 'react'

import { MAX_RANDOM_FY_ITEMS } from '../../constants'
import { Recommendation } from 'types'
import { PrimaryButton, PrimaryText } from 'components'
import { usePlaylistMutation } from 'queries'

type PlaylistProps = {
  artists: Array<Recommendation>
  usePlaylist?: typeof usePlaylistMutation
}

export const Playlist = ({
  artists,
  usePlaylist = usePlaylistMutation
}: PlaylistProps) => {
  const { mutate, isLoading, data } = usePlaylist()

  const playlistCreated = data?.data
  const text = playlistCreated?.id
    ? 'Randomfy playlist was created.'
    : 'You can make a randomfy playlist!'

  return artists.length === MAX_RANDOM_FY_ITEMS ? (
    <Fragment>
      <div className="p-4 max-w-5xl my-0 mx-auto">
        <PrimaryText>{text}</PrimaryText>
      </div>
      <div
        className={`flex justify-center p-4 pb-12 ${
          isLoading ? 'animate-pulse' : ''
        }`}
      >
        {playlistCreated?.id ? (
          <iframe
            className="max-w-5xl my-0 mx-auto rounded-xl border-0"
            src={`https://open.spotify.com/embed/playlist/${playlistCreated.id}?utm_source=generator&theme=0`}
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        ) : (
          <PrimaryButton
            ariaLabel="create playlist button"
            onClick={() => mutate(artists)}
          >
            Create Playlist
          </PrimaryButton>
        )}
      </div>
    </Fragment>
  ) : null
}
```

## File: src/features/index.ts

```typescript
export { Playlist } from './playlist'
export { ImageCollage } from './image-collage'
export { Match } from './match'
export { Festival } from './festival'
```

## File: src/hook/use-component-to-image/index.ts

```typescript
export { useComponentToImage } from './use-component-to-image'
```

## File: src/hook/use-component-to-image/use-component-to-image.spec.ts

```typescript
import { renderHook, waitFor } from '@testing-library/react'
import html2canvas from 'html2canvas'
import {
  useComponentToImage,
  canvasCallback,
  onClone
} from './use-component-to-image'

jest.mock('html2canvas', () => jest.fn())

describe('useComponentToImage', () => {
  it("should be able return undefined if there isn't document element", async () => {
    const props = {
      elementName: 'elementName',
      fileName: 'fileName'
    }

    const { result } = renderHook(() => useComponentToImage(props))
    await waitFor(() => result.current.downloadImage())

    expect(result.current.downloadImage()).toBeUndefined()
  })

  it('should be able to download image', async () => {
    const domElement = 'domElement'
    document.getElementById = jest.fn().mockReturnValueOnce(domElement)

    const props = {
      elementName: 'elementName',
      fileName: 'fileName'
    }

    const { result } = renderHook(() => useComponentToImage(props))
    await waitFor(() => result.current.downloadImage())

    expect(html2canvas).toHaveBeenCalledWith(domElement, {
      onclone: expect.any(Function)
    })
  })
})

describe('onClone', () => {
  it('should be able to hide elements', () => {
    const document = {
      getElementById: jest.fn().mockReturnValue({
        style: {
          visibility: 'visible'
        }
      })
    } as unknown as Document

    onClone(document)

    expect(document.getElementById).toHaveBeenNthCalledWith(1, 'download')
    expect(document.getElementById).toHaveBeenNthCalledWith(2, 'subtitle')
  })

  it('shouldnt be able to hide elements', () => {
    const document = {
      getElementById: jest.fn().mockReturnValue('')
    } as unknown as Document

    onClone(document)

    expect(document.getElementById).toHaveBeenNthCalledWith(1, 'download')
    expect(document.getElementById).toHaveBeenNthCalledWith(2, 'subtitle')
  })
})
describe('canvasCallback', () => {
  it('should be able download a image', () => {
    const filename = 'test'

    const mockImage = 'image'
    const canvas = {
      toDataURL: jest.fn().mockReturnValue(mockImage)
    } as unknown as HTMLCanvasElement

    const mockA = {
      setAttribute: jest.fn(),
      click: jest.fn()
    }

    document.createElement = jest.fn().mockReturnValue(mockA)

    canvasCallback(canvas, filename)

    expect(canvas.toDataURL).toHaveBeenCalled()
    expect(mockA.setAttribute).toHaveBeenNthCalledWith(1, 'download', filename)
    expect(mockA.setAttribute).toHaveBeenNthCalledWith(2, 'href', mockImage)
    expect(mockA.click).toHaveBeenCalledTimes(1)
  })
})
```

## File: src/hook/use-component-to-image/use-component-to-image.ts

```typescript
import html2canvas from 'html2canvas'

type UseComponentToImage = {
  fileName: string
  elementName: string
  button?: string
  subtitle?: string
}

export const onClone = (
  document: Document,
  buttonName = 'download',
  subtitleText = 'subtitle'
) => {
  const button = document.getElementById(buttonName)
  const subtitle = document.getElementById(subtitleText)

  if (button && subtitle) {
    button.style.visibility = 'hidden'
    subtitle.style.visibility = 'hidden'
  }
}

export const canvasCallback = (canvas: HTMLCanvasElement, fileName: string) => {
  const image = canvas.toDataURL('png')
  const a = document.createElement('a')
  a.setAttribute('download', fileName)
  a.setAttribute('href', image)
  a.click()
}

export const useComponentToImage = ({
  fileName,
  elementName,
  button,
  subtitle
}: UseComponentToImage) => {
  const downloadImage = () => {
    const domElement = document.getElementById(elementName)

    if (!domElement) return

    html2canvas(domElement, {
      onclone: (document) => onClone(document, button, subtitle)
    }).then((canvas) => canvasCallback(canvas, fileName))
  }

  return {
    downloadImage
  }
}
```

## File: src/hook/index.ts

```typescript
export { useComponentToImage } from './use-component-to-image'
```

## File: src/mock/builder/builder.ts

```typescript
import { build, fake } from '@jackfranklin/test-data-bot'
import {
  Artist,
  Recommendation,
  Image,
  Track,
  Playlist,
  RefreshToken
} from 'types'

export const imageBuilder = build<Image>('image', {
  fields: {
    height: fake((f) => f.datatype.number()),
    url: fake((f) => f.image.imageUrl()),
    width: fake((f) => f.datatype.number())
  }
})

export const imagesBuilder = build<Array<Image>>('images', {
  fields: [],
  postBuild: () =>
    Array(3)
      .fill(undefined)
      .map(() => imageBuilder())
})

export const trackBuilder = build<Track>('track', {
  fields: {
    id: fake((f) => f.datatype.uuid()),
    uri: fake((f) => f.image.dataUri()),
    images: imagesBuilder(),
    name: fake((f) => f.name.firstName()),
    previewUrl: fake((f) => f.image.imageUrl()),
    hrefSpotify: fake((f) => f.internet.url())
  }
})

export const tracksBuilder = build<Array<Track>>('tracks', {
  fields: [],
  postBuild: () =>
    Array(20)
      .fill(undefined)
      .map(() => trackBuilder())
})

export const recommendationBuilder = build<Recommendation>('recommendation', {
  fields: {
    id: fake((f) => f.datatype.uuid()),
    images: imagesBuilder(),
    popularity: fake((f) => f.datatype.number(100)),
    type: fake((f) => f.random.word()),
    name: fake((f) => f.name.findName()),
    track: trackBuilder()
  }
})

export const recommendationsBuilder = build<Array<Recommendation>>(
  'recommendations',
  {
    fields: [],
    postBuild: () =>
      Array(20)
        .fill(undefined)
        .map(() => recommendationBuilder())
  }
)

export const artistBuilder = build<Artist>('artist', {
  fields: {
    external_urls: {
      spotify: fake((f) => f.internet.url())
    },
    followers: {
      href: fake((f) => f.internet.url()),
      total: fake((f) => f.datatype.number())
    },
    genres: fake((f) => f.datatype.array()),
    href: fake((f) => f.internet.url()),
    id: fake((f) => f.datatype.uuid()),
    images: imagesBuilder(),
    name: fake((f) => f.name.firstName()),
    popularity: fake((f) => f.datatype.number()),
    type: fake((f) => f.random.word()),
    uri: fake((f) => f.image.dataUri())
  }
})

export const artistsBuilder = build<Array<Artist>>('artists', {
  fields: [],
  postBuild: () =>
    Array(20)
      .fill(undefined)
      .map(() => artistBuilder())
})

export const playlistBuilder = build<Playlist>('playlist', {
  fields: {
    id: fake((f) => f.datatype.uuid()),
    name: 'random-fy',
    description:
      'playlist generated by randomfy. Url: https://random-fy.vercel.app/',
    uri: fake((f) => f.image.dataUri())
  }
})

export const refreshTokenBuilder = build<RefreshToken>('refreshToken', {
  fields: {
    accessToken: fake((f) => f.internet.password())
  }
})
```

## File: src/mock/builder/index.ts

```typescript
export {
  artistBuilder,
  imageBuilder,
  imagesBuilder,
  playlistBuilder,
  recommendationBuilder,
  recommendationsBuilder,
  trackBuilder,
  artistsBuilder,
  tracksBuilder,
  refreshTokenBuilder
} from './builder'
```

## File: src/mock/fixtures/fixtures.ts

```typescript
import {
  artistBuilder,
  artistsBuilder,
  playlistBuilder,
  recommendationsBuilder,
  tracksBuilder,
  refreshTokenBuilder
} from 'mock'

export const mockPlaylist = playlistBuilder()
export const mockArtist = artistBuilder()
export const mockArtists = artistsBuilder()
export const mockRecommendations = recommendationsBuilder()
export const mockTracks = tracksBuilder()
export const mockRelated = recommendationsBuilder()
export const mockRefreshToken = refreshTokenBuilder()
```

## File: src/mock/fixtures/index.ts

```typescript
export {
  mockArtist,
  mockPlaylist,
  mockRecommendations,
  mockArtists,
  mockTracks,
  mockRelated,
  mockRefreshToken
} from './fixtures'
```

## File: src/mock/server/handlers/handlers.ts

```typescript
import {
  mockArtist,
  mockPlaylist,
  mockRecommendations,
  mockRelated,
  mockRefreshToken
} from 'mock'
import { rest } from 'msw'
import { Artist, Recommendation } from 'types'

import { composeEndpoint } from '../utils'

export const playlistHandlers = [
  rest.post(composeEndpoint('/playlist'), (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json(mockPlaylist))
  })
]

export const randomArtistHandlers = [
  rest.get<Artist>(composeEndpoint('/random-top-artist'), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockArtist))
  })
]

export const recommendationsHandlers = [
  rest.get<Array<Recommendation>>(
    composeEndpoint('/recommendations'),
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockRecommendations))
    }
  )
]

export const relatedHandlers = [
  rest.get<Array<Recommendation>>(
    composeEndpoint('/search-artists'),
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockRelated))
    }
  )
]

export const refreshTokenHandlers = [
  rest.post(composeEndpoint('/refresh-token'), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockRefreshToken))
  })
]
```

## File: src/mock/server/handlers/index.ts

```typescript
export * from './handlers'
```

## File: src/mock/server/utils/index.ts

```typescript
export {
  composeEndpoint,
  composeEndpointWithId,
  forceRequestError
} from './utils'
```

## File: src/mock/server/utils/utils.ts

```typescript
import { server, rest } from '../server'
import { BASE_URL } from '../../../constants'

export const composeEndpoint = (endpoint: string) => `${BASE_URL}${endpoint}`

export const composeEndpointWithId = (endpoint: string) =>
  composeEndpoint(`${endpoint}/:id`)

type HttpMethod = 'get' | 'post' | 'delete' | 'put' | 'patch'

const responseError = {
  error: 'Invalid data'
}

export const forceRequestError = ({
  method = 'get',
  status = 400
}: {
  method: HttpMethod
  status?: number
}) => {
  server.use(
    rest?.[method]('*', (_req, res, ctx) => {
      return res(ctx.status(status), ctx.json(responseError))
    })
  )
}
```

## File: src/mock/server/index.ts

```typescript
export { rest, server } from './server'
export { forceRequestError } from './utils'
```

## File: src/mock/server/server.ts

```typescript
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import {
  playlistHandlers,
  randomArtistHandlers,
  recommendationsHandlers,
  relatedHandlers,
  refreshTokenHandlers
} from './handlers'

const handlers = [
  ...playlistHandlers,
  ...randomArtistHandlers,
  ...recommendationsHandlers,
  ...relatedHandlers,
  ...refreshTokenHandlers
]

const server = setupServer(...handlers)

export { rest, server }
```

## File: src/mock/wrappers/index.ts

```typescript
export { wrapperReactQuery, renderWithClient } from './wrappers'
```

## File: src/mock/wrappers/wrappers.tsx

```typescript
import { QueryClient, QueryClientProvider } from 'react-query'
import { render } from '@testing-library/react'

const queryClientMock = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

type PropsWithChildren = {
  children: React.ReactNode
}

export const wrapperReactQuery = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClientMock}>{children}</QueryClientProvider>
)

/**
 *
 * @see https://github.com/tannerlinsley/react-query/blob/ead2e5dd5237f3d004b66316b5f36af718286d2d/src/react/tests/utils.tsx#L6-L17
 *
 * */
export function renderWithClient(
  ui: React.ReactElement,
  client: QueryClient = queryClientMock
) {
  const { rerender, ...result } = render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>
  )
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={client}>{rerenderUi}</QueryClientProvider>
      )
  }
}
```

## File: src/mock/index.ts

```typescript
export {
  artistBuilder,
  imageBuilder,
  imagesBuilder,
  playlistBuilder,
  recommendationBuilder,
  recommendationsBuilder,
  trackBuilder,
  artistsBuilder,
  tracksBuilder,
  refreshTokenBuilder
} from './builder'
export {
  mockArtist,
  mockPlaylist,
  mockRecommendations,
  mockArtists,
  mockTracks,
  mockRelated,
  mockRefreshToken
} from './fixtures'
export { rest, server, forceRequestError } from './server'
export { wrapperReactQuery, renderWithClient } from './wrappers'
```

## File: src/pages/api/callback.ts

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { Cookies } from 'utils'
import { MAX_AGE_COOKIES } from '../../constants/values'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { error, code } = req.query

  if (error) {
    console.error('Callback Error:', error)
    res.send(`Callback Error: ${error}`)
    return
  }

  try {
    const data = await spotifyApi.authorizationCodeGrant(code as string)

    const accessToken = data.body['access_token']
    const refreshToken = data.body['refresh_token']

    spotifyApi.setAccessToken(accessToken)
    spotifyApi.setRefreshToken(refreshToken)

    Cookies.set({
      name: 'authorization',
      value: accessToken,
      options: {
        res: res,
        maxAge: MAX_AGE_COOKIES,
        path: '/'
      }
    })

    Cookies.set({
      name: 'refreshToken',
      value: refreshToken,
      options: {
        res: res,
        maxAge: MAX_AGE_COOKIES,
        path: '/'
      }
    })

    res
      .writeHead(302, {
        Location: `/`
      })
      .end()
  } catch (error) {
    console.error('Error getting Tokens:', error)
    res.send(`Error getting Tokens: ${error}`)
  }
}
```

## File: src/pages/api/login.ts

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

import { scopes } from '../../constants'
import { spotifyApi } from 'services'
import { Rnd } from 'utils'

type Data = {
  name: string
}

const state = Rnd.generateRandomString(16)

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state))
}
```

## File: src/pages/api/playlist.ts

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { Recommendation } from 'types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = req.headers.authorization as string
    spotifyApi.setAccessToken(token)

    const data = req.body as Array<Recommendation>

    const createdPlaylist = await spotifyApi.createPlaylist('randomfy', {
      description:
        'playlist generated by randomfy. Url: https://random-fy.vercel.app/'
    })

    const tracksId = data.map((item) => item.track.uri)

    const addedItems = await spotifyApi.addTracksToPlaylist(
      createdPlaylist.body.id,
      tracksId
    )

    const result = {
      id: createdPlaylist.body.id,
      name: createdPlaylist.body.name,
      uri: createdPlaylist.body.uri,
      description: createdPlaylist.body.description,
      snapshot: addedItems.body
    }

    res.status(200).json(result)
  } catch (error: any) {
    res.status(error?.statusCode || 400).json(error)
  }
}
```

## File: src/pages/api/random-top-artist.ts

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { Rnd } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = req.headers.authorization as string

    spotifyApi.setAccessToken(token)

    const myTopArtists = await spotifyApi.getMyTopArtists({
      limit: 50
    })

    const index = Rnd.getRndNumber({
      min: 0,
      max: myTopArtists.body.items.length
    })

    res.status(200).json(myTopArtists.body.items[index])
  } catch (error: any) {
    res.status(error?.statusCode || 400).json(error)
  }
}
```

## File: src/pages/api/recommendations.ts

```typescript
import { MAX_ARTISTS_TO_SHOW_PER_TURN } from '../../constants'
import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { parseToRecommendation, Rnd, asyncMap } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const originId = req.headers['x-origin-id'] as string
    const token = req.headers.authorization as string
    spotifyApi.setAccessToken(token)

    const response = await spotifyApi.getArtistRelatedArtists(
      req.query?.name as string
    )

    const artists = response.body.artists

    /* fallback when there aren't recommendations */
    if (artists.length === 0 || artists === undefined) {
      const topArtists = await spotifyApi.getMyTopArtists({
        limit: 50
      })
      req.query.name = topArtists.body.items[0].id

      return handler(req, res)
    }

    const sliceEnd = Rnd.getRndNumber({
      min: MAX_ARTISTS_TO_SHOW_PER_TURN,
      max: artists.length
    })
    const sliceStart = sliceEnd - MAX_ARTISTS_TO_SHOW_PER_TURN

    const artistCollection = response.body.artists.slice(sliceStart, sliceEnd)

    const result = await asyncMap(artistCollection, async (artist) => {
      const topTracks = await spotifyApi.getArtistTopTracks(artist.id, originId)

      const topTrackSelected = Rnd.getRndNumber({
        min: 0,
        max: topTracks.body.tracks.length
      })

      const topTrack = topTracks.body.tracks[topTrackSelected]

      return parseToRecommendation(artist, topTrack)
    })

    res.status(200).json(result)
  } catch (error: any) {
    res.status(error?.statusCode || 400).json(error)
  }
}
```

## File: src/pages/api/refresh-token.ts

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

import { setCustomHeader, spotifyApi } from 'services'
import { Cookies } from 'utils'
import { MAX_AGE_COOKIES } from '../../constants/values'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { refreshToken, accessToken } = req.body

    if (!refreshToken) {
      res.status(400).json({
        error: 'invalid_request',
        errorDescription: 'refresh token must be supplied'
      })
    }

    if (!accessToken) {
      res.status(400).json({
        error: 'invalid_request',
        errorDescription: 'access token must be supplied'
      })
    }

    spotifyApi.setAccessToken(accessToken)
    spotifyApi.setRefreshToken(refreshToken)

    const data = await spotifyApi.refreshAccessToken()
    const refreshedAccessToken = data.body['access_token']

    spotifyApi.setAccessToken(refreshedAccessToken)

    setCustomHeader({
      key: 'authorization',
      value: refreshedAccessToken
    })

    Cookies.set({
      name: 'authorization',
      value: refreshedAccessToken,
      options: {
        res: res,
        maxAge: MAX_AGE_COOKIES,
        path: '/'
      }
    })

    return res.status(200).json({
      accessToken: refreshedAccessToken
    })
  } catch (error: any) {
    res.status(error.statusCode).json({
      error: error.body.error,
      errorDescription: error.body.error_description
    })
  }
}
```

## File: src/pages/api/search-artists.ts

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { Rnd, parseToRecommendation, asyncMap } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const originId = req.headers['x-origin-id'] as string
    const token = req.headers.authorization as string
    spotifyApi.setAccessToken(token)

    const searchResponse = await spotifyApi.searchArtists(
      req.query?.name as string,
      {
        limit: 1
      }
    )

    const searchedArtist = searchResponse.body.artists?.items[0]

    const relatedArtistsResponse = await spotifyApi.getArtistRelatedArtists(
      searchedArtist?.id || ''
    )

    const relatedArtists = relatedArtistsResponse.body.artists
    const result = await asyncMap(relatedArtists, async (artist) => {
      const topTracks = await spotifyApi.getArtistTopTracks(artist.id, originId)
      const topTrackSelected = Rnd.getRndNumber({
        min: 0,
        max: topTracks.body.tracks.length
      })

      const topTrack = topTracks.body.tracks[topTrackSelected]

      return parseToRecommendation(artist, topTrack)
    })

    res.status(200).json(result)
  } catch (error: any) {
    res.status(error?.statusCode || 400).json(error)
  }
}
```

## File: src/pages/\_app.tsx

```typescript
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Toaster } from 'react-hot-toast'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>randomfy</title>
        <link rel="shortcut icon" href="/img/icon-528.png" />
        <link rel="apple-touch-icon" href="/img/icon-528.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fafafa" />
        <meta
          name="description"
          content="Randomfy takes your most listened Spotify artists, selects one of them and shows you similar artists, so you can meet new artists based on the previous selected one."
        />
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.deHydratedState}>
          <NextNProgress
            color="#171717"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <Component {...pageProps} />
          <Toaster
            toastOptions={{
              error: {
                style: {
                  background: 'red',
                  color: 'white'
                }
              }
            }}
          />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
```

## File: src/pages/\_document.tsx

```typescript
import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR" className="bg-neutral-50 dark:bg-neutral-700">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

## File: src/pages/about.tsx

```typescript
import dynamic from 'next/dynamic'
import { Content, Footer, PrimaryText, SubTitle } from 'components'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { HeaderProps } from 'components/header'
const DynamicHeader = dynamic<HeaderProps>(
  () => import('components/header').then((mod) => mod.Header),
  { ssr: false }
)

const About = () => {
  const { t } = useTranslation('about')
  return (
    <>
      <Content>
        <DynamicHeader />
        <div className="p-4 mt-8 mb-0 mx-auto sm:w-4/5 w-full">
          <SubTitle>{t('title')}</SubTitle>
          <section className="mt-8">
            <PrimaryText>{t('subtitle')}</PrimaryText>
            <div className="mt-6">
              <PrimaryText>{t('disclaimer')}</PrimaryText>
            </div>
            <div className="mt-6">
              <PrimaryText>{t('ready')}</PrimaryText>
            </div>
          </section>
          <section className="mt-12">
            <SubTitle>{t('howItWorks.title')}</SubTitle>
            <div className="mt-8">
              <PrimaryText>{t('howItWorks.p1')}</PrimaryText>
            </div>
            <div className="mt-8">
              <PrimaryText>{t('howItWorks.p2')}</PrimaryText>
            </div>
          </section>

          <section className="mt-12">
            <SubTitle>Developer</SubTitle>
            <div className="mt-6">
              <PrimaryText>Raul Andrade</PrimaryText>
            </div>
          </section>

          <section className="mt-12 pb-12">
            <SubTitle>Follow me on</SubTitle>
            <div className="mt-2 flex flex-col">
              <a
                className="text-2xl font-thin dark:text-gray-300 
              text-gray-700 leading-10 tracking-wide
              hover:text-blue-500 hover:dark:text-orange-400"
                href="https://github.com/andraderaul"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                className="text-2xl font-thin dark:text-gray-300 
              text-gray-700 leading-10 tracking-wide
              hover:text-blue-500 hover:dark:text-orange-400"
                href="https://www.linkedin.com/in/andraderaul/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
              <a
                className="text-2xl font-thin dark:text-gray-300 
              text-gray-700 leading-10 tracking-wide
              hover:text-blue-500 hover:dark:text-orange-400"
                href="https://twitter.com/theandraderaul"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>
          </section>
        </div>
      </Content>
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const locales = await serverSideTranslations(locale, [
    'about',
    'common',
    'footer'
  ])
  return {
    props: {
      ...locales
    }
  }
}

export default About
```

## File: src/pages/index.tsx

```typescript
import type { GetServerSidePropsContext, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getRandomArtist, setCustomHeader } from 'services'
import { Cookies } from 'utils'
import { HomeTemplate, Login } from 'templates'

type HomeProps = {
  auth: string
  artistId: string
}

const Home: NextPage<HomeProps> = ({ auth, artistId }) => {
  if (!auth) {
    return <Login />
  }

  return <HomeTemplate artistId={artistId} />
}

export async function getServerSideProps(
  context: GetServerSidePropsContext & { locale: string }
) {
  const locales = await serverSideTranslations(context.locale, [
    'login',
    'common',
    'footer'
  ])

  try {
    const cookies = Cookies.getAll({ ctx: context })
    const auth = cookies['authorization'] ?? null

    setCustomHeader({
      key: 'authorization',
      value: cookies['authorization'] ?? ''
    })

    const initialArtistResponse = await getRandomArtist()
    const artistId = initialArtistResponse.data.id ?? null

    return {
      props: {
        artistId,
        auth,
        ...locales
      }
    }
  } catch (error: any) {
    if (error?.response?.status === 401) {
      // Cookies.destroy({
      //   name: 'authorization',
      //   options: {
      //     ctx: context
      //   }
      // })
    }

    console.error('Unauthorized')

    return {
      props: {
        auth: null,
        artistId: null,
        ...locales
      }
    }
  }
}

export default Home
```

## File: src/pages/logout.tsx

```typescript
import { GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Cookies } from 'utils'

const Logout = () => {
  const { t } = useTranslation('logout')

  return <div>{t('title')}</div>
}

export async function getServerSideProps(
  context: GetServerSidePropsContext & { locale: string }
) {
  const locales = await serverSideTranslations(context.locale, [
    'logout',
    'footer'
  ])

  Cookies.destroy({
    name: 'authorization',
    options: {
      ctx: context
    }
  })

  context.res
    .writeHead(302, {
      Location: '/'
    })
    .end()

  return {
    props: {
      ...locales
    }
  }
}

export default Logout
```

## File: src/pages/search.tsx

```typescript
import type { GetServerSidePropsContext, NextPage } from 'next'

import { protectedRoutes } from 'utils'
import { SearchTemplate } from 'templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type SearchProps = {
  auth: string
}

const Search: NextPage<SearchProps> = () => {
  return <SearchTemplate />
}

export async function getServerSideProps(
  context: GetServerSidePropsContext & { locale: string }
) {
  const locales = await serverSideTranslations(context.locale, [
    'search',
    'common',
    'footer'
  ])
  const auth = await protectedRoutes(context)

  return {
    props: {
      auth,
      ...locales
    }
  }
}

export default Search
```

## File: src/queries/use-playlist-mutation/index.ts

```typescript
export { usePlaylistMutation } from './use-playlist-mutation'
```

## File: src/queries/use-playlist-mutation/use-playlist-mutation.spec.ts

```typescript
import { renderHook, waitFor } from '@testing-library/react'
import {
  wrapperReactQuery,
  forceRequestError,
  mockPlaylist,
  mockRecommendations
} from 'mock'

import { usePlaylistMutation } from './use-playlist-mutation'

describe('usePlaylistMutation', () => {
  it('when playlist mutate is loading return undefined data', async () => {
    const { result } = renderHook(() => usePlaylistMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(mockRecommendations)
    await waitFor(() => {
      expect(result.current.data).toBe(undefined)
    })
  })

  it('when playlist mutate is success return a data', async () => {
    const { result } = renderHook(() => usePlaylistMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(mockRecommendations)
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
      expect(result.current.data?.data).toEqual(mockPlaylist)
    })
  })

  it('when playlist mutate is error return a data error', async () => {
    forceRequestError({ method: 'post' })
    const { result } = renderHook(() => usePlaylistMutation(), {
      wrapper: wrapperReactQuery
    })

    result.current.mutate(mockRecommendations)
    await waitFor(() => {
      expect(result.current.isError).toBe(true)
      expect(result.current.error?.response?.data).toEqual({
        error: 'Invalid data'
      })
    })
  })
})
```

## File: src/queries/use-playlist-mutation/use-playlist-mutation.ts

```typescript
import { AxiosError, AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { useTranslation } from 'next-i18next'
import { useMutation } from 'react-query'

import { createPlaylist } from 'services'
import { Playlist, Recommendation } from 'types'

export const usePlaylistMutation = () => {
  const { t } = useTranslation('common')

  return useMutation<
    AxiosResponse<Playlist>,
    AxiosError,
    Array<Recommendation>
  >((data) => createPlaylist(data), {
    onSuccess: () => {
      toast.success(t('toast.success'))
    },
    onError: () => {
      toast.error(t('toast.error'))
    }
  })
}
```

## File: src/queries/use-recommendation/index.ts

```typescript
export { useRecommendation } from './use-recommendation'
```

## File: src/queries/use-recommendation/use-recommendation.spec.ts

```typescript
import { renderHook, waitFor } from '@testing-library/react'
import { wrapperReactQuery, forceRequestError, mockRecommendations } from 'mock'

import { useRecommendation } from './use-recommendation'

describe('useRecommendation', () => {
  it('when use recommendation query is loading return undefined data', async () => {
    const { result } = renderHook(
      () => useRecommendation('artistId', 'trackId'),
      {
        wrapper: wrapperReactQuery
      }
    )

    await waitFor(() => {
      expect(result.current.isLoading).toBe(true)
      expect(result.current.data).toBe(undefined)
    })
  })

  it('when use recommendation query is success return a data', async () => {
    const { result } = renderHook(
      () => useRecommendation('artistId', 'trackId'),
      {
        wrapper: wrapperReactQuery
      }
    )

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
      expect(result.current.data?.data).toEqual(mockRecommendations)
    })
  })

  it('when use recommendation query is error return a data error', async () => {
    forceRequestError({ method: 'get' })

    const { result } = renderHook(
      () => useRecommendation('artistIdError', 'trackIdError'),
      {
        wrapper: wrapperReactQuery
      }
    )

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
      expect(result.current.error?.response?.data).toEqual({
        error: 'Invalid data'
      })
    })
  })
})
```

## File: src/queries/use-recommendation/use-recommendation.ts

```typescript
import { AxiosError, AxiosResponse } from 'axios'
import { useQuery } from 'react-query'
import { getRecommendations } from 'services'
import { Recommendation } from 'types'

export const useRecommendation = (id: string, trackId = '') => {
  return useQuery<AxiosResponse<Array<Recommendation>>, AxiosError>(
    ['recommendations', id, trackId],
    () => getRecommendations(id),
    {
      refetchOnWindowFocus: false
    }
  )
}
```

## File: src/queries/use-related-artists/index.ts

```typescript
export { useRelatedArtistsMutation } from './use-related-artists'
```

## File: src/queries/use-related-artists/use-related-artists.spec.ts

```typescript
import { renderHook, waitFor } from '@testing-library/react'
import {
  wrapperReactQuery,
  forceRequestError,
  mockRelated,
  mockArtist
} from 'mock'

import { useRelatedArtistsMutation } from './use-related-artists'

describe('useRelatedArtistsMutation', () => {
  it('when related artists mutate is loading return undefined data', async () => {
    const { result } = renderHook(() => useRelatedArtistsMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(mockArtist.name)
    await waitFor(() => {
      // expect(result.current.isLoading).toBe(true)
      expect(result.current.data).toBe(undefined)
    })
  })

  it('when related artists mutate is success return a data', async () => {
    const { result } = renderHook(() => useRelatedArtistsMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(mockArtist.name)
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
      expect(result.current.data?.data).toEqual(mockRelated)
    })
  })

  it('when related artists mutate is error return a data error', async () => {
    forceRequestError({ method: 'get' })
    const { result } = renderHook(() => useRelatedArtistsMutation(), {
      wrapper: wrapperReactQuery
    })

    result.current.mutate(mockArtist.name)
    await waitFor(() => {
      expect(result.current.isError).toBe(true)
      expect(result.current.error?.response?.data).toEqual({
        error: 'Invalid data'
      })
    })
  })
})
```

## File: src/queries/use-related-artists/use-related-artists.ts

```typescript
import { AxiosError, AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { getRelatedArtists } from 'services'
import { Recommendation } from 'types'

export const useRelatedArtistsMutation = () => {
  return useMutation<AxiosResponse<Array<Recommendation>>, AxiosError, string>(
    (data) => getRelatedArtists(data),
    {
      onSuccess: () => {
        toast.success('We find related artists!')
      },
      onError: () => {
        toast.error('Something wrong with the search! ')
      }
    }
  )
}
```

## File: src/queries/index.ts

```typescript
export { useRecommendation } from './use-recommendation'
export { usePlaylistMutation } from './use-playlist-mutation'
export { useRelatedArtistsMutation } from './use-related-artists'
```

## File: src/services/network/http/create-playlist/create-playlist.spec.ts

```typescript
import { createPlaylist } from './create-playlist'

import { mockRecommendations, mockPlaylist } from 'mock'

describe('create playlist', () => {
  it('should be able to create a playlist', async () => {
    const response = await createPlaylist(mockRecommendations)

    expect(response.request.method).toBe('POST')
    expect(response.config.url).toBe('/playlist')
    expect(response.status).toBe(201)
    expect(response.config.data).toBe(JSON.stringify(mockRecommendations))
    expect(response.data).toEqual(mockPlaylist)
  })
})
```

## File: src/services/network/http/create-playlist/create-playlist.ts

```typescript
import { Recommendation, Playlist } from 'types'
import { http } from '../http'

export const createPlaylist = (data: Array<Recommendation>) => {
  return http<Playlist>({
    method: 'POST',
    url: '/playlist',
    data: data
  })
}
```

## File: src/services/network/http/create-playlist/index.ts

```typescript
export { createPlaylist } from './create-playlist'
```

## File: src/services/network/http/get-random-artist/get-random-artist.spec.ts

```typescript
import { getRandomArtist } from './get-random-artist'

import { mockArtist } from 'mock'

describe('get random artist', () => {
  it('should be able to get a random artist', async () => {
    const response = await getRandomArtist()

    expect(response.request.method).toBe('GET')
    expect(response.config.url).toBe('/random-top-artist')
    expect(response.status).toBe(200)
    expect(response.data).toEqual(mockArtist)
  })
})
```

## File: src/services/network/http/get-random-artist/get-random-artist.ts

```typescript
import { Artist } from '../../../../types'
import { http } from '../http'

export const getRandomArtist = () => {
  return http<Artist>({
    method: 'GET',
    url: '/random-top-artist'
  })
}
```

## File: src/services/network/http/get-random-artist/index.ts

```typescript
export { getRandomArtist } from './get-random-artist'
```

## File: src/services/network/http/get-recommendations/get-recommendations.spec.ts

```typescript
import { getRecommendations } from './get-recommendations'

import { mockArtist, mockRecommendations } from 'mock'

describe('get recommendations', () => {
  it('should be able to get a recommendations', async () => {
    const response = await getRecommendations(mockArtist.name)

    expect(response.request.method).toBe('GET')
    expect(response.config.url).toBe('/recommendations')
    expect(response.config.params?.name).toBe(mockArtist.name)
    expect(response.status).toBe(200)
    expect(response.data).toEqual(mockRecommendations)
  })
})
```

## File: src/services/network/http/get-recommendations/get-recommendations.ts

```typescript
import { Recommendation } from 'types'
import { http } from '../http'

export const getRecommendations = (name: string) => {
  return http<Array<Recommendation>>({
    method: 'GET',
    url: '/recommendations',
    params: {
      name
    }
  })
}
```

## File: src/services/network/http/get-recommendations/index.ts

```typescript
export { getRecommendations } from './get-recommendations'
```

## File: src/services/network/http/get-related-artists/get-related-artists.spec.ts

```typescript
import { getRelatedArtists } from './get-related-artists'

import { mockArtist, mockRelated } from 'mock'

describe('get related artists', () => {
  it('should be able to get a recommendations', async () => {
    const response = await getRelatedArtists(mockArtist.name)

    expect(response.request.method).toBe('GET')
    expect(response.config.url).toBe('/search-artists')
    expect(response.config.params?.name).toBe(mockArtist.name)
    expect(response.status).toBe(200)
    expect(response.data).toEqual(mockRelated)
  })
})
```

## File: src/services/network/http/get-related-artists/get-related-artists.ts

```typescript
import { Recommendation } from 'types'
import { http } from '../http'

export const getRelatedArtists = (name: string) => {
  return http<Array<Recommendation>>({
    method: 'GET',
    url: '/search-artists',
    params: {
      name
    }
  })
}
```

## File: src/services/network/http/get-related-artists/index.ts

```typescript
export { getRelatedArtists } from './get-related-artists'
```

## File: src/services/network/http/refresh-token-service/index.ts

```typescript
export { refreshTokenService } from './refresh-token-service'
```

## File: src/services/network/http/refresh-token-service/refresh-token-service.spec.ts

```typescript
import { refreshTokenService } from './refresh-token-service'

import { mockRefreshToken } from 'mock'

describe('get refresh token service', () => {
  it('should be able to refresh token', async () => {
    const response = await refreshTokenService('accessToken', 'refreshToken')

    expect(response.request.method).toBe('POST')
    expect(response.config.url).toBe('/refresh-token')
    expect(response.config.data).toBe(
      JSON.stringify({
        accessToken: 'accessToken',
        refreshToken: 'refreshToken'
      })
    )
    expect(response.status).toBe(200)
    expect(response.data).toEqual(mockRefreshToken)
  })
})
```

## File: src/services/network/http/refresh-token-service/refresh-token-service.ts

```typescript
import { RefreshToken } from 'types'
import { http } from '../http'

export const refreshTokenService = (
  accessToken: string,
  refreshToken: string
) => {
  return http<RefreshToken>({
    method: 'POST',
    url: '/refresh-token',
    data: {
      accessToken,
      refreshToken
    }
  })
}
```

## File: src/services/network/http/http.spec.ts

```typescript
import { setCustomHeader, http } from './http'
import { forceRequestError } from 'mock'
import { Cookies } from 'utils'
import { AxiosError } from 'axios'

jest.mock('utils', () => ({
  ...jest.requireActual('utils'),
  Cookies: {
    getAll: jest.fn().mockReturnValue({
      authorization: 'token'
    })
  }
}))

describe('http testing', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  it('should be able to set custom header', async () => {
    setCustomHeader({
      key: 'authorization',
      value: 'token'
    })

    const response = await http({
      method: 'GET',
      url: '/recommendations'
    })

    expect(response.config.headers?.authorization).toBe('token')
  })

  it('should be able to add authorization in the request', async () => {
    const response = await http({
      method: 'GET',
      url: '/recommendations'
    })

    expect(Cookies.getAll).toHaveBeenCalled()
    expect(response.config.headers?.authorization).toBe('token')
  })

  it('should be able to call custom response error interceptor', async () => {
    forceRequestError({
      method: 'get',
      status: 401
    })

    try {
      await http({
        method: 'GET',
        url: '/recommendations'
      })
    } catch (error) {
      expect((error as AxiosError)?.request?.statusText).toBe('Unauthorized')
    }
  })
})
```

## File: src/services/network/http/http.ts

```typescript
import axios, {
  AxiosError,
  AxiosPromise,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { NextPageContext } from 'next'
import { Cookies, getLocale } from 'utils'
import { refreshTokenService } from './refresh-token-service'

const baseURL = process.env.NEXT_PUBLIC_API || '/api'

type CustomHeader = string | number | boolean

type SetCustomHeader = {
  key: string
  value: CustomHeader
}

type CustomConfig = InternalAxiosRequestConfig & {
  isRetry: boolean
}

type CustomAxiosError = AxiosError & {
  config: CustomConfig
}

type CustomAxiosRequestConfig = AxiosRequestConfig & {
  ctx?: Partial<NextPageContext>
}

const requestInterceptor = async (config: InternalAxiosRequestConfig) => {
  try {
    const cookies = Cookies.getAll()

    if (cookies['authorization']) {
      config.headers.setAuthorization(cookies['authorization'])
    }

    return config
  } catch (err) {
    return Promise.reject(err)
  }
}

function responseSuccessInterceptor(response: AxiosResponse) {
  return response
}

async function responseErrorInterceptor(error: CustomAxiosError) {
  try {
    const originalRequest = error.config
    const cookies = Cookies.getAll()
    const userIsUnauthenticated = error.response?.status === 401
    const refreshToken = cookies['refreshToken'] ?? null
    const accessToken = cookies['authorization'] ?? null
    const shouldRefreshToken =
      refreshToken &&
      accessToken &&
      userIsUnauthenticated &&
      !originalRequest.isRetry

    if (shouldRefreshToken) {
      originalRequest.isRetry = true
      const refreshResponse = await refreshTokenService(
        accessToken,
        refreshToken
      )

      if (refreshResponse.status === 200 && refreshResponse.data.accessToken) {
        setCustomHeader({
          key: 'authorization',
          value: refreshResponse.data.accessToken
        })
      }
    }
  } catch (err) {
    return Promise.reject(error)
  }

  return Promise.reject(error)
}

const httpInstance = axios.create({
  headers: {
    'x-origin-id': getLocale()
  },
  baseURL
})

httpInstance.interceptors.request.use(requestInterceptor)
httpInstance.interceptors.response.use(
  responseSuccessInterceptor,
  responseErrorInterceptor
)

export const setCustomHeader = ({ key, value }: SetCustomHeader) => {
  httpInstance.defaults.headers.common[key] = value
}

export function http<T>(config: CustomAxiosRequestConfig) {
  return httpInstance(config) as AxiosPromise<T>
}
```

## File: src/services/network/http/index.ts

```typescript
export { setCustomHeader, http } from './http'
export { getRandomArtist } from './get-random-artist'
export { getRecommendations } from './get-recommendations'
export { createPlaylist } from './create-playlist'
export { getRelatedArtists } from './get-related-artists'
```

## File: src/services/network/spotify-api/index.ts

```typescript
export { spotifyApi } from './spotify-api'
```

## File: src/services/network/spotify-api/spotify-api.ts

```typescript
/**
 * @see http://michaelthelin.se/spotify-web-api-node/
 * @see https://github.com/thelinmichael/spotify-web-api-node
 */

import SpotifyWebApi from 'spotify-web-api-node'

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const redirectUri = process.env.CALLBACK_URL

export const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri
})
```

## File: src/services/network/index.ts

```typescript
export { spotifyApi } from './spotify-api'
export {
  http,
  setCustomHeader,
  getRandomArtist,
  getRecommendations,
  createPlaylist,
  getRelatedArtists
} from './http'
```

## File: src/services/index.ts

```typescript
export {
  spotifyApi,
  http,
  getRecommendations,
  getRandomArtist,
  setCustomHeader,
  createPlaylist,
  getRelatedArtists
} from './network'
```

## File: src/styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  scroll-behavior: smooth;
}
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
```

## File: src/templates/home/home.tsx

```typescript
import { useState } from 'react'
import dynamic from 'next/dynamic'

import type { HeaderProps } from 'components/header'
const DynamicHeader = dynamic<HeaderProps>(
  () => import('components/header').then((mod) => mod.Header),
  { ssr: false }
)

import { Content } from 'components'

import { Recommendation } from 'types'

import { AudioContext } from 'contexts'
import { Match, ImageCollage, Playlist, Festival } from 'features'

type HomeTemplateProps = {
  artistId: string
}

export const HomeTemplate = ({ artistId }: HomeTemplateProps) => {
  const [likedArtists, setLikedArtists] = useState<Array<Recommendation>>([])

  const [currentPlaying, setCurrentPlaying] = useState('')

  return (
    <AudioContext.Provider
      value={{ source: currentPlaying, setSource: setCurrentPlaying }}
    >
      <Content>
        <DynamicHeader />
        <Match
          artistId={artistId}
          likedArtists={likedArtists}
          setLikedArtists={setLikedArtists}
        />
        <Playlist artists={likedArtists} />
        <ImageCollage artists={likedArtists} />
        <Festival artists={likedArtists} />
      </Content>
    </AudioContext.Provider>
  )
}
```

## File: src/templates/home/index.ts

```typescript
export { HomeTemplate } from './home'
```

## File: src/templates/login/index.ts

```typescript
export { Login } from './login'
```

## File: src/templates/login/login.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'

import { Login } from './login'

describe('<Login />', () => {
  it('should be render a Login template', () => {
    render(<Login />)

    expect(
      screen.getByRole('heading', {
        name: /randomfy/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /about/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /login button/i
      })
    ).toBeInTheDocument()
  })
})
```

## File: src/templates/login/login.tsx

```typescript
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { Content, SubTitle, PrimaryText, Header, Footer } from 'components'
import Link from 'next/link'

export const Login = () => {
  const { t } = useTranslation('login')

  return (
    <>
      <Content>
        <Header />
        <div className="p-4 mt-2 sm:mt-10 mb-0 mx-auto sm:w-4/5 w-full">
          <SubTitle>{t('title')}</SubTitle>
          <SubTitle>{t('subtitle')}</SubTitle>
          <div className="mt-8">
            <PrimaryText>{t('description')}</PrimaryText>
          </div>
        </div>
        <div className="p-4 mt-2 sm:mt-10">
          <div className="flex justify-center">
            <Link
              href="/api/login"
              className="flex justify-evenly items-center w-56 p-3 rounded-full font-semibold 
              text-center text-gray-100 dark:text-gray-800 bg-gray-900 dark:bg-gray-200"
              aria-label="login button"
            >
              <Image
                alt="spotify icon"
                src="/img/Spotify_Icon_RGB_Green.png"
                width="30"
                height="30"
              />
              {t('button')}
            </Link>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  )
}
```

## File: src/templates/search/index.ts

```typescript
export { SearchTemplate } from './search'
```

## File: src/templates/search/search.tsx

```typescript
import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'

import type { HeaderProps } from 'components/header'
const DynamicHeader = dynamic<HeaderProps>(
  () => import('components/header').then((mod) => mod.Header),
  { ssr: false }
)

import { Content, InputSearch, PrimaryButton, PrimaryText } from 'components'
import { useRelatedArtistsMutation } from 'queries'
import { Festival, ImageCollage, Playlist } from 'features'
import { useTranslation } from 'next-i18next'

export const SearchTemplate = () => {
  const { t } = useTranslation('search')
  const [search, setSearch] = useState('')
  const { mutate, data, isLoading } = useRelatedArtistsMutation()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()

    mutate(search)
  }

  const isEmpty = useMemo(() => data?.data.length === 0, [data?.data.length])

  return (
    <Content>
      <DynamicHeader />
      {!data?.data && (
        <form
          onSubmit={handleSubmit}
          className={`max-w-2xl my-0 mx-auto flex flex-col items-center ${
            isLoading ? 'animate-pulse' : ''
          }`}
        >
          <div className="p-4 mb-2">
            <PrimaryText>{t('title')}</PrimaryText>
          </div>
          <InputSearch
            placeholder={t('placeholder')}
            onChange={handleOnChange}
            value={search}
          />
          <div className="flex justify-center p-10">
            <PrimaryButton type="submit">{t('button')}</PrimaryButton>
          </div>
          {isLoading && (
            <p className="font-thin dark:text-gray-300 text-gray-700 leading-10 tracking-wide">
              {t('loading')}
            </p>
          )}
        </form>
      )}
      {isEmpty && <PrimaryText>{t('empty')}</PrimaryText>}
      {data?.data && (
        <>
          <Playlist artists={data.data} />
          <ImageCollage artists={data.data} />
          <Festival artists={data.data} />
        </>
      )}
    </Content>
  )
}
```

## File: src/templates/index.ts

```typescript
export { HomeTemplate } from './home'
export { Login } from './login'
export { SearchTemplate } from './search'
```

## File: src/tests/pages/api/callback.spec.ts

```typescript
import { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { Cookies } from 'utils'
import handler from 'pages/api/callback'

jest.mock('services', () => ({
  setCustomHeader: jest.fn(),
  spotifyApi: {
    authorizationCodeGrant: jest
      .fn()
      .mockResolvedValueOnce({
        body: {
          access_token: 'access_token',
          refresh_token: 'refresh_token',
          expires_in: 'expires_in'
        }
      })
      .mockRejectedValueOnce('data error'),
    refreshAccessToken: jest.fn(),
    setAccessToken: jest.fn(),
    setRefreshToken: jest.fn()
  }
}))

jest.mock('utils', () => ({
  Cookies: {
    set: jest.fn()
  }
}))

describe('testing callback', () => {
  console.error = jest.fn()
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const writeHeadMock = jest.fn().mockReturnValue({
    end: jest.fn()
  })
  const sendMock = jest.fn()

  const req = {
    query: {
      code: '1234',
      error: ''
    }
  } as unknown as NextApiRequest
  const res = {
    writeHead: writeHeadMock,
    send: sendMock
  } as unknown as NextApiResponse

  it('should be able to redirect to home after login', async () => {
    await handler(req, res)

    expect(spotifyApi.authorizationCodeGrant).toHaveBeenCalledWith('1234')
    expect(Cookies.set).toHaveBeenCalled()
    expect(spotifyApi.setAccessToken).toHaveBeenCalledWith('access_token')
    expect(spotifyApi.setRefreshToken).toHaveBeenCalledWith('refresh_token')

    expect(writeHeadMock).toHaveBeenCalledWith(302, {
      Location: `/`
    })
  })

  it('should be able to handle req with error', async () => {
    const errorReq = {
      query: {
        code: '',
        error: 'error'
      }
    } as unknown as NextApiRequest

    await handler(errorReq, res)

    expect(sendMock).toHaveBeenCalledWith('Callback Error: error')
  })

  it('should be able to handle login error', async () => {
    await handler(req, res)

    expect(sendMock).toHaveBeenCalledWith('Error getting Tokens: data error')
  })
})
```

## File: src/tests/pages/api/login.spec.ts

```typescript
import { NextApiRequest, NextApiResponse } from 'next'

import { scopes } from '../../../constants'
import { spotifyApi } from 'services'
import handler from 'pages/api/login'

jest.mock('services', () => ({
  spotifyApi: {
    createAuthorizeURL: jest.fn().mockReturnValue('authenticatedURL')
  }
}))

jest.mock('utils', () => ({
  Rnd: {
    generateRandomString: jest.fn().mockReturnValue('abc123')
  }
}))

describe('testing login', () => {
  const redirectMock = jest.fn()

  const req = {} as NextApiRequest
  const res = {
    redirect: redirectMock
  } as unknown as NextApiResponse

  it('should be able to redirect to spotify authenticate', () => {
    handler(req, res)

    expect(redirectMock).toHaveBeenCalledTimes(1)
    expect(redirectMock).toHaveBeenCalledWith('authenticatedURL')
    expect(spotifyApi.createAuthorizeURL).toHaveBeenCalledWith(scopes, 'abc123')
  })
})
```

## File: src/tests/pages/api/playlist.spec.ts

```typescript
import { NextApiRequest, NextApiResponse } from 'next'

import { mockRecommendations, mockPlaylist } from 'mock'
import handler from 'pages/api/playlist'

jest.mock('services', () => ({
  spotifyApi: {
    setAccessToken: jest.fn(),
    createPlaylist: jest
      .fn()
      .mockResolvedValueOnce({
        body: mockPlaylist
      })
      .mockRejectedValueOnce({ statusCode: 401 }),
    addTracksToPlaylist: jest.fn().mockResolvedValue({
      body: {}
    })
  }
}))

describe('testing create playlist', () => {
  const jsonMock = jest.fn()
  const statusMock = jest.fn(() => ({
    json: jsonMock
  }))

  const req = {
    headers: {
      authorization: 'token'
    },
    body: mockRecommendations
  } as NextApiRequest

  const res = {
    status: statusMock
  } as unknown as NextApiResponse

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be able to create a playlist', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith({ ...mockPlaylist, snapshot: {} })
  })

  it('should return an error', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(401)
    expect(jsonMock).toHaveBeenCalledWith({ statusCode: 401 })
  })
})
```

## File: src/tests/pages/api/random-top-artist.spec.ts

```typescript
import { NextApiRequest, NextApiResponse } from 'next'

import { mockArtist } from 'mock'
import handler from 'pages/api/random-top-artist'

jest.mock('services', () => ({
  spotifyApi: {
    setAccessToken: jest.fn(),
    getMyTopArtists: jest
      .fn()
      .mockResolvedValueOnce({
        body: {
          items: Array.from({ length: 50 }, () => mockArtist)
        }
      })
      .mockRejectedValueOnce({
        statusCode: 404
      })
  }
}))

jest.mock('utils', () => ({
  Rnd: {
    getRndNumber: jest.fn().mockReturnValue(0)
  }
}))

describe('testing random top artist', () => {
  const jsonMock = jest.fn()
  const statusMock = jest.fn(() => ({
    json: jsonMock
  }))

  const req = {
    headers: {
      authorization: 'token'
    }
  } as NextApiRequest

  const res = {
    status: statusMock
  } as unknown as NextApiResponse

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be able return an artist', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith(mockArtist)
  })

  it('should return an error', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(404)
    expect(jsonMock).toHaveBeenCalledWith({ statusCode: 404 })
  })
})
```

## File: src/tests/pages/api/recommendations.spec.ts

```typescript
import { NextApiRequest, NextApiResponse } from 'next'

import { mockArtist } from 'mock'
import handler from 'pages/api/recommendations'

jest.mock('services', () => {
  return {
    spotifyApi: {
      setAccessToken: jest.fn(),
      getMyTopArtists: jest.fn().mockResolvedValueOnce({
        body: {
          items: Array.from({ length: 50 }, () => mockArtist)
        }
      }),
      getArtistRelatedArtists: jest
        .fn()
        .mockRejectedValueOnce({ statusCode: 401 })
        .mockResolvedValueOnce({
          body: {
            artists: []
          }
        })
        .mockResolvedValue({
          body: {
            artists: [
              {
                id: '54321',
                images: [],
                type: 'artist',
                name: 'a day to remember'
              },
              {
                id: '09876',
                images: [],
                type: 'artist',
                name: 'asking alexandria'
              },
              { id: '54321', images: [], type: 'artist', name: 'paramore' },
              {
                id: '54311',
                images: [],
                type: 'artist',
                name: 'olivia rodrigo'
              }
            ]
          }
        }),
      getArtistTopTracks: jest.fn().mockResolvedValue({
        body: {
          tracks: [
            {
              id: 'abc1234',
              uri: 'uri track 1',
              name: 'track 1',
              preview_url: 'url 1',
              album: {
                images: []
              },
              external_urls: {
                spotify: 'spotify url'
              }
            },
            {
              id: 'cba1234',
              uri: 'uri track 2',
              name: 'track 2',
              preview_url: 'url 2',
              album: {
                images: []
              },
              external_urls: {
                spotify: 'spotify url'
              }
            },
            {
              id: 'qwe3213',
              uri: 'uri track 3',
              name: 'track 3',
              preview_url: 'url 3',
              album: {
                images: []
              },
              external_urls: {
                spotify: 'spotify url'
              }
            },
            {
              id: 'qwe67612',
              uri: 'uri track 4',
              name: 'track 4',
              preview_url: 'url 4',
              album: {
                images: []
              },
              external_urls: {
                spotify: 'spotify url'
              }
            }
          ]
        }
      })
    }
  }
})

jest.mock('utils', () => {
  return {
    ...jest.requireActual('utils'),
    Rnd: {
      getRndNumber: jest.fn().mockReturnValue(1)
    }
  }
})

describe('testing create recommendations', () => {
  const jsonMock = jest.fn()
  const statusMock = jest.fn(() => ({
    json: jsonMock
  }))

  const req = {
    headers: {
      authorization: 'token'
    },
    query: {
      name: 'bring me the horizon'
    }
  } as unknown as NextApiRequest

  const res = {
    status: statusMock
  } as unknown as NextApiResponse

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return an error', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(401)
    expect(jsonMock).toHaveBeenCalledWith({ statusCode: 401 })
  })

  it("should be return a fallback artists when there aren't recommendations", async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith([
      {
        id: '54321',
        images: [],
        type: 'artist',
        name: 'a day to remember',
        track: {
          id: 'cba1234',
          uri: 'uri track 2',
          name: 'track 2',
          previewUrl: 'url 2',
          images: [],
          hrefSpotify: 'spotify url'
        }
      }
    ])
  })

  it('should be able to return a recommendation', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith([
      {
        id: '54321',
        images: [],
        type: 'artist',
        name: 'a day to remember',
        track: {
          id: 'cba1234',
          uri: 'uri track 2',
          name: 'track 2',
          previewUrl: 'url 2',
          images: [],
          hrefSpotify: 'spotify url'
        }
      }
    ])
  })
})
```

## File: src/tests/pages/api/search-artists.spec.ts

```typescript
import { NextApiRequest, NextApiResponse } from 'next'
import { mockArtist } from 'mock'

import handler from 'pages/api/search-artists'

jest.mock('services', () => {
  return {
    spotifyApi: {
      setAccessToken: jest.fn(),
      searchArtists: jest.fn().mockResolvedValue({
        body: {
          artists: {
            items: Array.from({ length: 50 }, () => mockArtist)
          }
        }
      }),
      getArtistRelatedArtists: jest
        .fn()
        .mockRejectedValueOnce({ statusCode: 401 })
        .mockResolvedValue({
          body: {
            artists: [
              {
                id: '54321',
                images: [],
                type: 'artist',
                name: 'a day to remember'
              },
              {
                id: '09876',
                images: [],
                type: 'artist',
                name: 'asking alexandria'
              },
              { id: '54321', images: [], type: 'artist', name: 'paramore' },
              {
                id: '54311',
                images: [],
                type: 'artist',
                name: 'olivia rodrigo'
              }
            ]
          }
        }),
      getArtistTopTracks: jest.fn().mockResolvedValue({
        body: {
          tracks: [
            {
              id: 'abc1234',
              uri: 'uri track 1',
              name: 'track 1',
              preview_url: 'url 1',
              album: {
                images: []
              },
              external_urls: {
                spotify: 'spotify url'
              }
            },
            {
              id: 'cba1234',
              uri: 'uri track 2',
              name: 'track 2',
              preview_url: 'url 2',
              album: {
                images: []
              },
              external_urls: {
                spotify: 'spotify url'
              }
            },
            {
              id: 'qwe3213',
              uri: 'uri track 3',
              name: 'track 3',
              preview_url: 'url 3',
              album: {
                images: []
              },
              external_urls: {
                spotify: 'spotify url'
              }
            },
            {
              id: 'qwe67612',
              uri: 'uri track 4',
              name: 'track 4',
              preview_url: 'url 4',
              album: {
                images: []
              },
              external_urls: {
                spotify: 'spotify url'
              }
            }
          ]
        }
      })
    }
  }
})

jest.mock('utils', () => {
  return {
    ...jest.requireActual('utils'),
    Rnd: {
      getRndNumber: jest.fn().mockReturnValue(1)
    }
  }
})

describe('testing search artists', () => {
  const jsonMock = jest.fn()
  const statusMock = jest.fn(() => ({
    json: jsonMock
  }))

  const req = {
    headers: {
      authorization: 'token'
    },
    query: {
      id: '1232131'
    }
  } as unknown as NextApiRequest

  const res = {
    status: statusMock
  } as unknown as NextApiResponse

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return an error', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(401)
    expect(jsonMock).toHaveBeenCalledWith({ statusCode: 401 })
  })

  it('should be able to return a recommendation', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith([
      {
        id: '54321',
        images: [],
        type: 'artist',
        name: 'a day to remember',
        popularity: undefined,
        track: {
          id: 'cba1234',
          uri: 'uri track 2',
          name: 'track 2',
          previewUrl: 'url 2',
          images: [],
          hrefSpotify: 'spotify url'
        }
      },
      {
        id: '09876',
        images: [],
        type: 'artist',
        name: 'asking alexandria',
        popularity: undefined,
        track: {
          id: 'cba1234',
          uri: 'uri track 2',
          name: 'track 2',
          previewUrl: 'url 2',
          images: [],
          hrefSpotify: 'spotify url'
        }
      },
      {
        id: '54321',
        images: [],
        type: 'artist',
        name: 'paramore',
        popularity: undefined,
        track: {
          id: 'cba1234',
          uri: 'uri track 2',
          name: 'track 2',
          previewUrl: 'url 2',
          images: [],
          hrefSpotify: 'spotify url'
        }
      },
      {
        id: '54311',
        images: [],
        type: 'artist',
        name: 'olivia rodrigo',
        popularity: undefined,
        track: {
          id: 'cba1234',
          uri: 'uri track 2',
          name: 'track 2',
          previewUrl: 'url 2',
          images: [],
          hrefSpotify: 'spotify url'
        }
      }
    ])
  })
})
```

## File: src/tests/pages/about.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import About from 'pages/about'

describe('<About />', () => {
  it('should be render a About page', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', {
        name: /randomfy/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /about/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/subtitle/i)).toBeInTheDocument()
    expect(screen.getByText(/disclaimer/i)).toBeInTheDocument()
    expect(screen.getByText(/ready/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /howitworks\.title/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/howitworks\.p1/i)).toBeInTheDocument()
    expect(screen.getByText(/howitworks\.p2/i)).toBeInTheDocument()
  })
})
```

## File: src/tests/pages/index.spec.tsx

```typescript
import { render, screen, waitFor, act } from '@testing-library/react'
import { forceRequestError, renderWithClient } from 'mock'
import { GetServerSidePropsContext } from 'next'
import Index, { getServerSideProps } from 'pages/index'

jest.mock('utils', () => ({
  ...jest.requireActual('utils'),
  Cookies: {
    getAll: jest.fn().mockReturnValue({
      authorization: 'token'
    }),
    destroy: jest.fn()
  }
}))

describe('<Index />', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  it('when user is not logged should be render a login template', () => {
    render(<Index artistId="" auth="" />)

    expect(
      screen.getByRole('heading', {
        name: /randomfy/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /about/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /login button/i
      })
    ).toBeInTheDocument()
  })

  describe('when the user is logged should render a home template', () => {
    it('when the recommendations are loading should be display the skeleton loader', async () => {
      renderWithClient(<Index artistId="123" auth="321" />)

      await act(async () => {
        expect(screen.getByLabelText('image loading')).toBeInTheDocument()
      })
    })

    it('when user is logged should be render a recommendation index page', async () => {
      const rendered = renderWithClient(<Index artistId="123" auth="321" />)

      await waitFor(() => rendered.getAllByLabelText('image box'))

      expect(rendered.getAllByLabelText('image box')).toBeTruthy()
    })

    it('when the recommendations are in error should be display the error component', async () => {
      forceRequestError({ method: 'get' })
      const rendered = renderWithClient(<Index artistId="123" auth="321" />)

      await waitFor(() => rendered.getByText('error.title'))

      expect(screen.getByText('error.title')).toBeInTheDocument()
    })
  })

  describe('testing getServerSideProps', () => {
    const context = {
      locale: 'en',
      res: {
        writeHead: jest.fn().mockReturnValue({
          end: jest.fn()
        })
      }
    } as unknown as GetServerSidePropsContext & { locale: string }

    it('should be able to return valid artistId and auth props', async () => {
      const { props } = await getServerSideProps(context)
      expect(props?.auth).toBe('token')
      expect(props.artistId).toBeTruthy()
    })

    it('should be able to return invalid artistId and auth', async () => {
      console.error = jest.fn()
      forceRequestError({
        method: 'get',
        status: 401
      })

      const { props } = await getServerSideProps(context)

      expect(props?.auth).toBeNull()
      expect(props.artistId).toBeNull()
    })
  })
})
```

## File: src/tests/pages/logout.spec.tsx

```typescript
import { render, screen } from '@testing-library/react'
import { GetServerSidePropsContext } from 'next'
import Logout, { getServerSideProps } from 'pages/logout'
import { Cookies } from 'utils'

jest.mock('utils', () => ({
  Cookies: {
    destroy: jest.fn()
  }
}))

describe('<Logout />', () => {
  it('should be render a Logout page', () => {
    render(<Logout />)

    expect(screen.getByText(/title/i)).toBeInTheDocument()
  })

  it('should be able to destroy cookies and redirect to login', async () => {
    const context = {
      locale: 'en',
      res: {
        writeHead: jest.fn().mockReturnValue({
          end: jest.fn()
        })
      }
    } as unknown as GetServerSidePropsContext & { locale: string }

    const props = await getServerSideProps(context)
    expect(Cookies.destroy).toHaveBeenCalledWith({
      name: 'authorization',
      options: {
        ctx: context
      }
    })

    expect(context.res.writeHead).toHaveBeenCalledWith(302, {
      Location: '/'
    })
    expect(props).toHaveProperty('props._nextI18Next')
  })
})
```

## File: src/tests/pages/search.spec.tsx

```typescript
import { screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithClient } from 'mock'
import { GetServerSidePropsContext } from 'next'
import Search, { getServerSideProps } from 'pages/search'

jest.mock('utils', () => ({
  ...jest.requireActual('utils'),
  protectedRoutes: jest.fn().mockResolvedValue('token')
}))

describe('<Search />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be able to render a search page', async () => {
    renderWithClient(<Search auth="123" />)

    await act(async () => {
      expect(
        screen.getByRole('textbox', {
          name: /search/i
        })
      ).toBeInTheDocument()
    })

    await act(async () => {
      expect(
        screen.getByRole('button', {
          name: /search/i
        })
      ).toBeInTheDocument()
    })
  })

  it('should be able to search by artist', async () => {
    const rendered = renderWithClient(<Search auth="123" />)

    const inputSearch = screen.getByRole('textbox', {
      name: /search/i
    })

    const searchButton = screen.getByRole('button', {
      name: /search/i
    })

    const text = 'bring me the horizon'
    await userEvent.type(inputSearch, text)

    await userEvent.click(searchButton)

    rendered.getByRole('button', {
      name: /create playlist button/i
    })

    expect(
      screen.getByRole('button', {
        name: /create playlist button/i
      })
    ).toBeInTheDocument()
  })

  describe('testing getServerSideProps', () => {
    it('should return auth props when user is authenticated', async () => {
      const props = await getServerSideProps({
        locale: 'en'
      } as unknown as GetServerSidePropsContext & { locale: string })
      expect(props).toEqual({ props: { auth: 'token' } })
    })
  })
})
```

## File: src/tests/readme.md

```markdown
### Disclaimer

All files in the directory `pages` are serverless functions, so these tests are here because the way that the framework next works.
```

## File: src/types/artist.ts

```typescript
import { Image } from './image'

export type Artist = {
  external_urls: {
    spotify: string
  }
  followers: {
    href: string
    total: number
  }
  genres: Array<string>
  href: string
  id: string
  images: Array<Image>
  name: string
  popularity: number
  type: string
  uri: string
}
```

## File: src/types/image.ts

```typescript
export type Image = {
  height?: number
  url: string
  width?: number
}
```

## File: src/types/index.ts

```typescript
export type { Artist } from './artist'
export type { Playlist } from './playlist'
export type { Recommendation } from './recommendation'
export type { Image } from './image'
export type { Track } from './track'
export type { RefreshToken } from './refresh-token'
```

## File: src/types/playlist.ts

```typescript
export type Playlist = {
  id: string
  name: string
  uri: string
  description: string
}
```

## File: src/types/recommendation.ts

```typescript
import { Image, Track } from 'types'

export type Recommendation = {
  id: string
  images: Array<Image> | SpotifyApi.ImageObject[]
  type: string
  name: string
  popularity: number
  track: Track
}
```

## File: src/types/refresh-token.ts

```typescript
export type RefreshToken = {
  accessToken: string
}
```

## File: src/types/track.ts

```typescript
import { Image } from 'types'

export type Track = {
  id: string
  uri: string
  name: string
  previewUrl: string | null
  images: Array<Image>
  hrefSpotify: string
}
```

## File: src/utils/async-map/async-map.spec.ts

```typescript
import { asyncMap } from './async-map'

describe('Testing asyncMap', () => {
  const array = [1, 2, 3, 4]

  const fn = async (x: number) => Promise.resolve(x * 2)

  it('should be able map a async array', async () => {
    const result = await asyncMap(array, fn)

    expect(result).toEqual([2, 4, 6, 8])
  })
})
```

## File: src/utils/async-map/async-map.ts

```typescript
export const asyncMap = async <T = unknown, R = unknown>(
  array: Array<T>,
  fn: (a: T) => Promise<R>
) => {
  const result: Array<R> = []
  for (const a of array) {
    const fnA = await fn(a)
    result.push(fnA)
  }
  return result
}
```

## File: src/utils/async-map/index.ts

```typescript
export { asyncMap } from './async-map'
```

## File: src/utils/cookies/cookies.spec.ts

```typescript
import { NextPageContext } from 'next'
import { Cookies } from './cookies'
import nookies, { setCookie, destroyCookie } from 'nookies'

jest.mock('nookies', () => ({
  get: jest.fn().mockReturnValue({ token: 'fake-token' }),
  set: jest.fn(),
  parseCookies: jest.fn().mockReturnValue({ token: 'fake-token' }),
  setCookie: jest.fn(),
  destroyCookie: jest.fn(),
  destroy: jest.fn()
}))

describe('Cookies', () => {
  it('should be able to return all cookies when context is undefined', () => {
    const cookies = Cookies.getAll()
    expect(cookies).toEqual({ token: 'fake-token' })
  })

  it('should be able to return all cookies when context is not undefined', () => {
    const cookies = Cookies.getAll({ ctx: {} as NextPageContext })
    expect(cookies).toEqual({ token: 'fake-token' })
  })

  it('should be able to set cookies when context is undefined', () => {
    Cookies.set({
      name: 'token',
      value: 'fake-token'
    })
    expect(setCookie).toHaveBeenCalledWith(
      { res: undefined },
      'token',
      'fake-token',
      {
        secure: false
      }
    )
  })

  it('should be able to set cookies when context is not undefined', () => {
    Cookies.set({
      name: 'token',
      value: 'fake-token',
      options: {
        ctx: {} as NextPageContext
      }
    })

    expect(nookies.set).toHaveBeenCalledWith({}, 'token', 'fake-token', {
      secure: false
    })
  })

  it('should be able to destroy cookies when context is undefined', () => {
    Cookies.destroy({ name: 'token' })

    expect(destroyCookie).toHaveBeenCalledWith({ res: undefined }, 'token', {})
  })

  it('should be able to destroy cookies when context is not undefined', () => {
    Cookies.destroy({
      name: 'token',
      options: {
        ctx: {} as NextPageContext
      }
    })

    expect(destroyCookie).toHaveBeenCalledWith({ res: undefined }, 'token', {})
  })
})
```

## File: src/utils/cookies/cookies.ts

```typescript
import {
  NextPageContext,
  GetServerSidePropsContext,
  NextApiResponse
} from 'next'

import nookies, { parseCookies, setCookie, destroyCookie } from 'nookies'

type SetCookie = {
  name: string
  value: string
  options?: {
    ctx?: NextPageContext | GetServerSidePropsContext
    res?: NextApiResponse
    [key: string]: unknown
  }
}

type GetAllCookie = {
  ctx?: NextPageContext | GetServerSidePropsContext
}

type DestroyCookie = {
  name: string
  options?: {
    ctx?: NextPageContext | GetServerSidePropsContext
    res?: NextApiResponse
    [key: string]: unknown
  }
}

const getOptions = () => {
  const secure = process.env.NODE_ENV === 'production'
  return { secure }
}

function getAll(options: GetAllCookie = {}) {
  const { ctx } = options

  if (ctx !== undefined) {
    return nookies.get(ctx)
  }

  return parseCookies()
}

function destroy({ name, options = {} }: DestroyCookie) {
  const { ctx, res, ...rest } = options
  if (ctx !== undefined) {
    nookies.destroy(ctx, name, rest)
  }

  destroyCookie({ res }, name, rest)
}

function set({ name, value, options = {} }: SetCookie) {
  const { ctx, res, ...rest } = options

  const defaultOptions = getOptions()

  if (ctx !== undefined) {
    nookies.set(ctx, name, value, {
      ...defaultOptions,
      ...rest
    })
    return
  }

  setCookie({ res }, name, value, { ...defaultOptions, ...rest })
  return
}

export const Cookies = {
  getAll,
  set,
  destroy
}
```

## File: src/utils/cookies/index.ts

```typescript
export * from './cookies'
```

## File: src/utils/get-locale/get-locale.spec.ts

```typescript
import { getLocale } from './get-locale'

describe('Testing getLocale', () => {
  it('should be able to get US locale from browser', async () => {
    Object.defineProperty(global.navigator, 'language', {
      value: 'en-US',
      configurable: true
    })

    const result = getLocale()

    expect(result).toBe('US')
  })

  it('should be able to get default locale from browser', async () => {
    Object.defineProperty(global.navigator, 'language', {
      value: undefined,
      configurable: true
    })

    const result = getLocale()

    expect(result).toBe('BR')
  })

  it("should be able to get default locale from browser when there aren't separator", () => {
    Object.defineProperty(global.navigator, 'language', {
      value: 'es',
      configurable: true
    })

    const result = getLocale()

    expect(result).toBe('BR')
  })

  it('should be able to get default locale from browser when there are separator but nothing after', () => {
    Object.defineProperty(global.navigator, 'language', {
      value: 'es-',
      configurable: true
    })

    const result = getLocale()

    expect(result).toBe('BR')
  })
})
```

## File: src/utils/get-locale/get-locale.ts

```typescript
export const getLocale = () => {
  if (typeof window === 'undefined') {
    return 'BR'
  }
  const language = window?.navigator?.language
  return language?.split('-')[1] || 'BR'
}
```

## File: src/utils/get-locale/index.ts

```typescript
export { getLocale } from './get-locale'
```

## File: src/utils/parse/index.ts

```typescript
export { parseToRecommendation } from './parse'
```

## File: src/utils/parse/parse.spec.ts

```typescript
import { parseToRecommendation } from './parse'

describe('Testing parseToRecommendation', () => {
  const mockArtist = {
    id: '12345',
    images: [
      {
        url: 'url 1'
      }
    ],
    popularity: 99,
    type: 'artist',
    name: 'Tim Maia'
  } as SpotifyApi.ArtistObjectFull

  const mockTrack = {
    id: '54321',
    uri: 'uri track 1',
    name: 'Ela Partiu',
    preview_url: 'url 1',
    album: {
      images: [{ url: 'url 1' }]
    },
    external_urls: {
      spotify: 'spotify url'
    }
  } as SpotifyApi.TrackObjectFull

  it('should be able to return a Recommendation object', () => {
    const result = parseToRecommendation(mockArtist, mockTrack)

    expect(result).toEqual({
      id: mockArtist.id,
      images: mockArtist.images,
      type: mockArtist.type,
      name: mockArtist.name,
      popularity: mockArtist.popularity,
      track: {
        id: mockTrack.id,
        uri: mockTrack.uri,
        name: mockTrack.name,
        previewUrl: mockTrack.preview_url,
        images: mockTrack.album.images,
        hrefSpotify: mockTrack.external_urls.spotify
      }
    })
  })
})
```

## File: src/utils/parse/parse.ts

```typescript
import { Recommendation } from 'types'

export const parseToRecommendation = (
  artist: SpotifyApi.ArtistObjectFull,
  track: SpotifyApi.TrackObjectFull
): Recommendation => ({
  id: artist.id,
  images: artist.images,
  type: artist.type,
  name: artist.name,
  popularity: artist.popularity,
  track: {
    id: track.id,
    uri: track.uri,
    name: track.name,
    previewUrl: track.preview_url,
    images: track.album.images,
    hrefSpotify: track.external_urls.spotify
  }
})
```

## File: src/utils/rnd/index.ts

```typescript
export { Rnd } from './rnd'
```

## File: src/utils/rnd/rnd.spec.ts

```typescript
import { Rnd } from './rnd'

describe('Testing Rnd', () => {
  it('should be able to return a number between min and max', () => {
    const min = 1
    const max = 10

    expect(
      Rnd.getRndNumber({
        min,
        max
      })
    ).toBeLessThan(max)

    expect(
      Rnd.getRndNumber({
        min,
        max
      })
    ).toBeGreaterThanOrEqual(min)
  })

  it('should be able to return a random string', () => {
    expect(Rnd.generateRandomString(16)).toHaveLength(16)
  })
})
```

## File: src/utils/rnd/rnd.ts

```typescript
type GetRndNumber = {
  min: number
  max: number
}

const getRndNumber = ({ min, max }: GetRndNumber) =>
  Math.floor(Math.random() * (max - min)) + min

const generateRandomString = (length: number) => {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

export const Rnd = {
  getRndNumber,
  generateRandomString
}
```

## File: src/utils/routes-config/index.ts

```typescript
export { protectedRoutes } from './private-route'
```

## File: src/utils/routes-config/private-route.spec.ts

```typescript
import { Cookies } from '../cookies'
import { GetServerSidePropsContext } from 'next'
import { protectedRoutes } from './private-route'

describe('Testing private route', () => {
  const mockContext = {
    res: {
      writeHead: jest.fn(),
      end: jest.fn()
    }
  } as unknown as GetServerSidePropsContext

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return auth when the user is authenticated', async () => {
    const mockSession = {
      getAll: jest.fn().mockReturnValue({
        authorization: 'token'
      })
    } as unknown as typeof Cookies

    const auth = await protectedRoutes(mockContext, mockSession)
    expect(mockSession.getAll).toHaveBeenCalled()
    expect(auth).toBe('token')
  })

  it('should call redirect when the user is not authenticated', async () => {
    const mockSession = {
      getAll: jest.fn().mockReturnValue({})
    } as unknown as typeof Cookies

    const auth = await protectedRoutes(mockContext, mockSession)
    expect(mockContext.res.writeHead).toHaveBeenCalledTimes(1)
    expect(mockContext.res.end).toHaveBeenCalledTimes(1)
    expect(auth).toBeNull()
  })

  it('should handle when session is null', async () => {
    const mockSession = {
      getAll: jest.fn().mockReturnValue(null)
    } as unknown as typeof Cookies

    const auth = await protectedRoutes(mockContext, mockSession)

    expect(auth).toBeNull()
  })
})
```

## File: src/utils/routes-config/private-route.ts

```typescript
import { GetServerSidePropsContext } from 'next'
import { Cookies } from '../cookies'

export async function protectedRoutes(
  context: GetServerSidePropsContext,
  session = Cookies
) {
  const cookies = session.getAll({ ctx: context })
  const auth = cookies?.['authorization'] ?? null

  if (!auth) {
    context.res.writeHead(302, {
      Location: `/?callbackUrl=${context.resolvedUrl}`
    })
    context.res.end()
  }

  return auth
}
```

## File: src/utils/index.ts

```typescript
export { Cookies } from './cookies'
export { Rnd } from './rnd'
export { protectedRoutes } from './routes-config'
export { parseToRecommendation } from './parse'
export { asyncMap } from './async-map'
export { getLocale } from './get-locale'
```

## File: .eslintignore

```
node_modules
dist
```

## File: .eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}
```

## File: .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# local env files
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel

# typescript
*.tsbuildinfo

.env
```

## File: .prettierrc

```
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

## File: .releaserc.json

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        "npmPublish": false
      }
    ],
    {
      "path": "@semantic-release/git",
      "assets": ["package.json", "package-lock.json", "CHANGELOG.md"],
      "message": "chore(release): <%= nextRelease.version %> - <%= new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }) %> [skip ci]\n\n<%= nextRelease.notes %>"
    }
  ],
  "branches": ["main"]
}
```

## File: CHANGELOG.md

```markdown
# [1.20.0](https://github.com/andraderaul/random-fy/compare/v1.19.0...v1.20.0) (2022-05-19)

### Features

- add refresh token ([24cb98f](https://github.com/andraderaul/random-fy/commit/24cb98fd7531ed9155bb00c02e322f6e5b40fba5))

# [1.19.0](https://github.com/andraderaul/random-fy/compare/v1.18.0...v1.19.0) (2022-05-17)

### Features

- add x origin id to requests ([815ff70](https://github.com/andraderaul/random-fy/commit/815ff70337e38115a4fd44d2f44d1e264403157f))

# [1.18.0](https://github.com/andraderaul/random-fy/compare/v1.17.3...v1.18.0) (2022-04-19)

### Features

- search artist by name ([#5](https://github.com/andraderaul/random-fy/issues/5)) ([dd6957b](https://github.com/andraderaul/random-fy/commit/dd6957bdaf29105e0eacc6c6d837c93907f208fd))

## [1.17.3](https://github.com/andraderaul/random-fy/compare/v1.17.2...v1.17.3) (2022-04-12)

### Bug Fixes

- random top artist range ([71906ea](https://github.com/andraderaul/random-fy/commit/71906ea5f17955f3e36d7dfbfe8714fee9139c4d))

## [1.17.2](https://github.com/andraderaul/random-fy/compare/v1.17.1...v1.17.2) (2022-03-22)

### Bug Fixes

- add image background to festival feat ([d9b3968](https://github.com/andraderaul/random-fy/commit/d9b396858bd38e98d56f12af95d0d1b959c611d0))

## [1.17.1](https://github.com/andraderaul/random-fy/compare/v1.17.0...v1.17.1) (2022-03-22)

### Bug Fixes

- festival responsivity on mobile ([7b659ea](https://github.com/andraderaul/random-fy/commit/7b659ea5085dd1338035882b2bdf5bd0e088db80))

# [1.17.0](https://github.com/andraderaul/random-fy/compare/v1.16.6...v1.17.0) (2022-03-22)

### Features

- add festival ([#3](https://github.com/andraderaul/random-fy/issues/3)) ([1be7058](https://github.com/andraderaul/random-fy/commit/1be70584379660cba25158b0319cea9e13902b21))

## [1.16.6](https://github.com/andraderaul/random-fy/compare/v1.16.5...v1.16.6) (2022-03-19)

### Bug Fixes

- improve title colors ([1f82403](https://github.com/andraderaul/random-fy/commit/1f824030cce9d2e435d6715f77f04a9148a99d11))

## [1.16.5](https://github.com/andraderaul/random-fy/compare/v1.16.4...v1.16.5) (2022-03-19)

### Bug Fixes

- margin on mobile in the login page ([37d2f52](https://github.com/andraderaul/random-fy/commit/37d2f5214a0a0d57328cca2b315e673d486c198b))

## [1.16.4](https://github.com/andraderaul/random-fy/compare/v1.16.3...v1.16.4) (2022-03-19)

### Bug Fixes

- improve header ([3b273d1](https://github.com/andraderaul/random-fy/commit/3b273d1031088764bff823ec3dff57fe3c608bcb))

## [1.16.3](https://github.com/andraderaul/random-fy/compare/v1.16.2...v1.16.3) (2022-03-19)

### Bug Fixes

- maskable icon to matrix icons ([5427d04](https://github.com/andraderaul/random-fy/commit/5427d045f7d25f7a188f6810583ced04d4b6cb70))

## [1.16.2](https://github.com/andraderaul/random-fy/compare/v1.16.1...v1.16.2) (2022-03-19)

### Bug Fixes

- maskable icon ([efc130f](https://github.com/andraderaul/random-fy/commit/efc130ffe815c837f4de1a71f25f62432a933357))

## [1.16.1](https://github.com/andraderaul/random-fy/compare/v1.16.0...v1.16.1) (2022-03-19)

### Bug Fixes

- play icon size in the image box ([03b9dbd](https://github.com/andraderaul/random-fy/commit/03b9dbd07e7544d06ff88439c7f88709939ae833))

# [1.16.0](https://github.com/andraderaul/random-fy/compare/v1.15.7...v1.16.0) (2022-03-19)

### Features

- add pwa ([de054be](https://github.com/andraderaul/random-fy/commit/de054be2d4e3e93c50b4bc48b7c48c1333086d59))

## [1.15.7](https://github.com/andraderaul/random-fy/compare/v1.15.6...v1.15.7) (2022-03-18)

### Bug Fixes

- footer position ([9255bdd](https://github.com/andraderaul/random-fy/commit/9255bdd1354e27733ad36c1429442f1072d18338))

## [1.15.6](https://github.com/andraderaul/random-fy/compare/v1.15.5...v1.15.6) (2022-03-17)

### Bug Fixes

- warning on console ([a5b87ee](https://github.com/andraderaul/random-fy/commit/a5b87ee4fa0dfad48755e10d8dd735281dd86b6d))

## [1.15.5](https://github.com/andraderaul/random-fy/compare/v1.15.4...v1.15.5) (2022-03-15)

### Bug Fixes

- icon size in the image box ([f7b22a4](https://github.com/andraderaul/random-fy/commit/f7b22a4da86ccc650e2a0edf5f8dcb077571bb50))

## [1.15.4](https://github.com/andraderaul/random-fy/compare/v1.15.3...v1.15.4) (2022-03-14)

### Bug Fixes

- add playlist scope ([2138e3a](https://github.com/andraderaul/random-fy/commit/2138e3af645a31f6ba4513b6ef011f8f530f98b3))

## [1.15.3](https://github.com/andraderaul/random-fy/compare/v1.15.2...v1.15.3) (2022-03-12)

### Bug Fixes

- improve error state on match ([ae72578](https://github.com/andraderaul/random-fy/commit/ae725787787eb2a3b2bcfb7ea50fd7d2db75ffd4))

## [1.15.2](https://github.com/andraderaul/random-fy/compare/v1.15.1...v1.15.2) (2022-03-12)

### Bug Fixes

- get correct scopes ([acc3864](https://github.com/andraderaul/random-fy/commit/acc3864b32bce328f65a7b1fe92b79ffc4009400))

## [1.15.1](https://github.com/andraderaul/random-fy/compare/v1.15.0...v1.15.1) (2022-03-11)

### Bug Fixes

- display icons on safari ([2ada1c6](https://github.com/andraderaul/random-fy/commit/2ada1c6beb44c73c9a4abc9b2bfda0bdf0715260))

# [1.15.0](https://github.com/andraderaul/random-fy/compare/v1.14.0...v1.15.0) (2022-03-10)

### Features

- add footer ([aadf98c](https://github.com/andraderaul/random-fy/commit/aadf98c45aad59c643a181cfc6c37d91b81048c3))

# [1.14.0](https://github.com/andraderaul/random-fy/compare/v1.13.3...v1.14.0) (2022-03-10)

### Features

- hide already liked songs ([b054be2](https://github.com/andraderaul/random-fy/commit/b054be2813c6d13cd681628c1706d73302ded2d3))

## [1.13.3](https://github.com/andraderaul/random-fy/compare/v1.13.2...v1.13.3) (2022-03-10)

### Bug Fixes

- remove refetch on window focus ([bb89339](https://github.com/andraderaul/random-fy/commit/bb893393e5c9f5ed1cd6b78d6c6726d742487088))

## [1.13.2](https://github.com/andraderaul/random-fy/compare/v1.13.1...v1.13.2) (2022-03-08)

### Bug Fixes

- header on mobile ([ecba47b](https://github.com/andraderaul/random-fy/commit/ecba47bec3d831d518ef8d60434daa4ab7cecfd7))

## [1.13.1](https://github.com/andraderaul/random-fy/compare/v1.13.0...v1.13.1) (2022-03-08)

### Bug Fixes

- Spotify design guidelines ([#2](https://github.com/andraderaul/random-fy/issues/2)) ([26e69e7](https://github.com/andraderaul/random-fy/commit/26e69e7f7a8cdf35270085c241275a9e707ad197))

# [1.13.0](https://github.com/andraderaul/random-fy/compare/v1.12.2...v1.13.0) (2022-03-06)

### Features

- show playlist after created ([5b96579](https://github.com/andraderaul/random-fy/commit/5b96579f86ff501ffcee575c8afb8dbfb31d67ff))

## [1.12.2](https://github.com/andraderaul/random-fy/compare/v1.12.1...v1.12.2) (2022-03-06)

### Bug Fixes

- download image ([5ce3e17](https://github.com/andraderaul/random-fy/commit/5ce3e1764de2bff575ae8c1f75e980d448df5954))

## [1.12.1](https://github.com/andraderaul/random-fy/compare/v1.12.0...v1.12.1) (2022-03-06)

### Bug Fixes

- x icon color in the dark mode ([5de11f4](https://github.com/andraderaul/random-fy/commit/5de11f481b84f650c15ac02317584b4a8dd39e38))

# [1.12.0](https://github.com/andraderaul/random-fy/compare/v1.11.0...v1.12.0) (2022-03-02)

### Features

- add success and error toast ([d7986fe](https://github.com/andraderaul/random-fy/commit/d7986febc97e2d9789538909b7df830e31fd9158))

# [1.11.0](https://github.com/andraderaul/random-fy/compare/v1.10.1...v1.11.0) (2022-03-02)

### Features

- add is refetching icon ([190d3c2](https://github.com/andraderaul/random-fy/commit/190d3c218b8a2002b0fd6fb49296821665487736))

## [1.10.1](https://github.com/andraderaul/random-fy/compare/v1.10.0...v1.10.1) (2022-03-01)

### Bug Fixes

- logout when status is 401 ([5439a52](https://github.com/andraderaul/random-fy/commit/5439a52c67245e38620798013db3d76868e488eb))

# [1.10.0](https://github.com/andraderaul/random-fy/compare/v1.9.0...v1.10.0) (2022-03-01)

### Features

- create log out ([4dbe585](https://github.com/andraderaul/random-fy/commit/4dbe5859deaa38d82e25ebe31de4c1a6fb062265))

# [1.9.0](https://github.com/andraderaul/random-fy/compare/v1.8.0...v1.9.0) (2022-03-01)

### Features

- create about page ([2be6b59](https://github.com/andraderaul/random-fy/commit/2be6b595c0dfbae77e7778668528a5b8ac09e3f9))

# [1.8.0](https://github.com/andraderaul/random-fy/compare/v1.7.2...v1.8.0) (2022-03-01)

### Features

- create primary button and primary text components ([c8b9bfb](https://github.com/andraderaul/random-fy/commit/c8b9bfb4bc67e2427bee2b2e43c46c57cab2a338))

## [1.7.2](https://github.com/andraderaul/random-fy/compare/v1.7.1...v1.7.2) (2022-03-01)

### Bug Fixes

- when two tracks was played same time ([df70e17](https://github.com/andraderaul/random-fy/commit/df70e17ccc1bf710945b0df7fe00fff5b28840fe))

## [1.7.1](https://github.com/andraderaul/random-fy/compare/v1.7.0...v1.7.1) (2022-02-28)

### Bug Fixes

- album url image ([8a61428](https://github.com/andraderaul/random-fy/commit/8a614282e321d2f910bd3c4177f022187c3d42e8))

# [1.7.0](https://github.com/andraderaul/random-fy/compare/v1.6.1...v1.7.0) (2022-02-28)

### Features

- create a new playlist by randomfy ([3d1a388](https://github.com/andraderaul/random-fy/commit/3d1a388bf57d9e8afbd75f7be08251ef26bca23e))

## [1.6.1](https://github.com/andraderaul/random-fy/compare/v1.6.0...v1.6.1) (2022-02-28)

### Bug Fixes

- get recommendations ([aa027c7](https://github.com/andraderaul/random-fy/commit/aa027c7aa81b8a44909b029e1445901407a02e3c))

# [1.6.0](https://github.com/andraderaul/random-fy/compare/v1.5.0...v1.6.0) (2022-02-28)

### Features

- add html to image component ([#1](https://github.com/andraderaul/random-fy/issues/1)) ([fa557ce](https://github.com/andraderaul/random-fy/commit/fa557ce4d79fdbf196fd62c1653a5d8789540c5b))

# [1.5.0](https://github.com/andraderaul/random-fy/compare/v1.4.0...v1.5.0) (2022-02-27)

### Features

- dark mode ([104e13e](https://github.com/andraderaul/random-fy/commit/104e13e51e36da02ff4f71e350251510c9ea43d2))

# [1.4.0](https://github.com/andraderaul/random-fy/compare/v1.3.0...v1.4.0) (2022-02-27)

### Features

- create subtitle component ([0d76f9b](https://github.com/andraderaul/random-fy/commit/0d76f9b68054e156874479f49f7f8f959fa4805a))

# [1.3.0](https://github.com/andraderaul/random-fy/compare/v1.2.0...v1.3.0) (2022-02-26)

### Features

- add react query ([43eda7c](https://github.com/andraderaul/random-fy/commit/43eda7c4da1b9231596160e98d1f39dc6d4a7193))

# [1.2.0](https://github.com/andraderaul/random-fy/compare/v1.1.0...v1.2.0) (2022-02-26)

### Features

- add next N progress bar ([485729c](https://github.com/andraderaul/random-fy/commit/485729cfd68221f28970bbc033f8c870068c550e))

# [1.1.0](https://github.com/andraderaul/random-fy/compare/v1.0.2...v1.1.0) (2022-02-26)

### Features

- create authenticated and non-authenticated components ([3da7dd0](https://github.com/andraderaul/random-fy/commit/3da7dd01007aae71442014cf8102e69cb9f24265))

## [1.0.2](https://github.com/andraderaul/random-fy/compare/v1.0.1...v1.0.2) (2022-02-25)

### Bug Fixes

- centering grid items ([0320f85](https://github.com/andraderaul/random-fy/commit/0320f859ea097ac87183cd8c751560de90a2935d))

## [1.0.1](https://github.com/andraderaul/random-fy/compare/v1.0.0...v1.0.1) (2022-02-25)

### Bug Fixes

- server side render when request has error ([76fbbfd](https://github.com/andraderaul/random-fy/commit/76fbbfdb97d967b05ebf0472d896bf7e251fe0b6))

# 1.0.0 (2022-02-25)

### Bug Fixes

- add fallback to .env ([a1054d6](https://github.com/andraderaul/random-fy/commit/a1054d6aa552b3c3e6e5fd8f534dfb7a3fe06ee9))
- api url ([a5a94d8](https://github.com/andraderaul/random-fy/commit/a5a94d8d1ec9d4bfba5f18696ac1c98255ef9091))
- callback url ([d6f171c](https://github.com/andraderaul/random-fy/commit/d6f171ccb6caa3debadbfa947d6dd6d113a71c51))
- fallback ([ed95597](https://github.com/andraderaul/random-fy/commit/ed955978552a113437df03d4905bfee5ab6f0646))
- initial props ([7cad309](https://github.com/andraderaul/random-fy/commit/7cad30906af027480ac844dad46fa7f4de40869b))
- initial props from server side render ([33b7b64](https://github.com/andraderaul/random-fy/commit/33b7b64013a64181da2044907c303e4ed0428e95))
```

## File: commitlint.config.js

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

## File: jest.config.js

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules',
    '/.next/',
    'stories.tsx',
    '/mock',
    '/constants',
    '/styles',
    '_app.tsx',
    '_document.tsx'
  ],
  coveragePathIgnorePatterns: [
    'stories.tsx',
    '/mock',
    '/constants',
    '/styles',
    '_app.tsx',
    '_document.tsx'
  ],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  transformIgnorePatterns: ['node_modules/(?!imask|react-extras)'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  coverageThreshold: {
    global: {
      lines: 80
    }
  }
}
```

## File: LICENSE

```
MIT License

Copyright (c) 2022 Raul Andrade

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## File: lint-staged.config.js

```javascript
module.exports = {
  'src/**/*.{js,ts,jsx,tsx}': ['yarn lint --fix', 'prettier --write']
}
```

## File: next-env.d.ts

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
```

## File: next-i18next.config.js

```javascript
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt']
  },
  fallbackLng: 'en',
  localePath: path.resolve('./public/locales')
}
```

## File: next.config.js

```javascript
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
  runtimeCaching
})
const { i18n } = require('./next-i18next.config')

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co']
  },
  i18n
})

module.exports = nextConfig
```

## File: package.json

```json
{
  "name": "random-fy",
  "version": "1.20.0",
  "private": true,
  "repository": {
    "type": "git",
    "url": "git@github.com:andraderaul/random-fy"
  },
  "scripts": {
    "release:dry": "semantic-release --dry-run",
    "release": "semantic-release",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prepare": "is-ci || husky install",
    "typecheck": "yarn tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "engines": {
    "node": ">=18.x.x"
  },
  "dependencies": {
    "@babel/preset-typescript": "^7.16.7",
    "@heroicons/react": "^1.0.5",
    "axios": "^1.4.0",
    "html2canvas": "^1.4.1",
    "i18next": "^22.4.15",
    "next": "^13.3.1",
    "next-i18next": "^13.2.2",
    "next-pwa": "^5.6.0",
    "nextjs-progressbar": "^0.0.13",
    "nookies": "^2.5.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hot-toast": "^2.2.0",
    "react-i18next": "^12.2.2",
    "react-query": "^3.39.3",
    "react-use": "^17.4.0",
    "spotify-web-api-node": "^5.0.2"
  },
  "devDependencies": {
    "@commitlint/cli": "^16.2.1",
    "@commitlint/config-conventional": "^16.2.1",
    "@jackfranklin/test-data-bot": "^1.4.0",
    "@semantic-release/changelog": "^6.0.1",
    "@semantic-release/git": "^10.0.1",
    "@swc/core": "^1.3.56",
    "@swc/jest": "^0.2.26",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/jest": "^29.5.1",
    "@types/node": "^18.16.3",
    "@types/react": "^18.2.0",
    "@types/spotify-web-api-node": "^5.0.7",
    "@typescript-eslint/eslint-plugin": "^5.59.1",
    "@typescript-eslint/parser": "^5.59.1",
    "autoprefixer": "^10.4.2",
    "eslint": "^8.39.0",
    "eslint-config-next": "^13.3.1",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "husky": "^7.0.4",
    "is-ci": "^3.0.1",
    "jest": "^29.5.0",
    "jest-environment-jsdom": "^29.5.0",
    "lint-staged": "^12.3.4",
    "msw": "^1.2.1",
    "postcss": "^8.4.6",
    "prettier": "^2.8.8",
    "semantic-release": "^19.0.2",
    "tailwindcss": "^3.3.2",
    "typescript": "^5.0.4"
  }
}
```

## File: postcss.config.js

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

## File: README.md

````markdown
[![Quality](https://github.com/andraderaul/random-fy/actions/workflows/quality.yml/badge.svg)](https://github.com/andraderaul/random-fy/actions/workflows/quality.yml) [![Release](https://github.com/andraderaul/random-fy/actions/workflows/release.yml/badge.svg)](https://github.com/andraderaul/random-fy/actions/workflows/release.yml)

# randomfy

## About

`randomfy` takes your most listened Spotify artists, selects one of them and shows you similar artists, so you can meet new artists based on the previous selected one.

Disclaimer: `randomfy` is not affiliated with Spotify. The site was build with Nextjs, React and the Spotify API.

## [How it works](./docs//how-it-works.md)

This project has some amazing features and can be described as follows:

1. When the user logs into the application, a recommendation is displayed.
2. The user can like or dislike the recommendation, just like on Tinder.

After that, `randomfy` provides:

- A playlist with the liked artists that the user can listen to and share with their friends.
- An image with the album artwork of the available songs for download.
- A festival image with the participating artists available for download.
  These additional features enhance the overall experience for `randomfy` users, making it more engaging and enjoyable.

## Quickstart

You can start cloning the repository:

```bash

git clone git@github.com:andraderaul/random-fy.git
```

Then install all dependencies:

```bash

yarn install
```

Finally, start the application:

```bash

yarn dev
```

## Environments

Important: you must have a [spotify developer](https://developer.spotify.com/) account with an app created. Then add the `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` from your app created to `.env`.

## Todo

- [ ] Performance
- [ ] Cookies

## Demo

[`randomfy`](https://random-fy.vercel.app/)

## Screenshots

- Light Mode

![`randomfy` screen light mode](./public/screenshots/2.png)

- Dark Mode

![`randomfy` screen dark mode](./public/screenshots/1.png)

## Stack

**Front-end:**

- [NextJs](https://nextjs.org/docs)
- [React](https://pt-br.reactjs.org/docs/getting-started.html)
- [TailwindCSS](https://tailwindcss.com/docs/)
- [React-Query](https://react-query.tanstack.com/)
- [Axios](https://github.com/axios/axios)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [MSW JS](https://mswjs.io/)

**Back-end:**

- [NextJs](https://nextjs.org/docs)
- [Jest](https://jestjs.io/)

## Related projects

- [Festify](https://salty-beach-42139.herokuapp.com/)
- [Receiptify](https://receiptify.herokuapp.com/)

## References

- [Spotify Web Api](https://developer.spotify.com/documentation/web-api/reference)

## License

[MIT](./LICENSE)

## Author

- [@andraderaul](https://github.com/andraderaul)
````

## File: tailwind.config.js

```javascript
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        spotifyGreen: '#1DB954'
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))'
      }
    }
  },
  plugins: []
}
```

## File: tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "downlevelIteration": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "next-i18next.config.js"],
  "exclude": ["node_modules"]
}
```
