# registry-viewer

## UI for the Devfile Registry

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create next-app --example with-patternfly`](https://github.com/vercel/next.js/tree/canary/examples/with-patternfly).

## Scripts

```json
"scripts": {
  "analyze": "cross-env ANALYZE=true next build",
  "dev": "next",
  "build": "next build",
  "start": "next start",
  "clean": "rimraf .next/ .nyc_output/ coverage/ docs/ out/ node_modules/",
  "cypress:start": "concurrently --names 'CYPRESS,SERVER' --prefix-colors 'yellow,blue' \"yarn cypress open\" \"yarn build && yarn start\"",
  "typedoc:build": "typedoc --tsconfig .",
  "typedoc:start": "npx serve docs",
  "jest:test": "jest --watchAll --verbose",
  "test": "cypress run",
  "lint": "prettier --check .",
  "format": "prettier --write .",
  "prepare": "husky install"
}
```

- `analyze` - Runs `next build` and analyzes the webpack bundle size
- `dev` - Runs `next dev` which starts Next.js in development mode
- `build` - Runs `next build` which builds the application for production usage
- `start` - Runs `next start` which starts a Next.js production server
- `clean` - Slims the directory
- `cypress:start` - Runs cypress concurrently with a production build
- `typedoc:build` - Runs typedoc to generate docs
- `typedoc:start` - Serves the docs
- `jest:test` - Runs all jest tests
- `test` - Runs all cypress and jest tests
- `lint` - Checks the formatting of all files
- `format` - Formats all files
- `prepare` - System script for auto formatting before committing

## Getting Started

### Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Creating a Production Build

Create an optimized production build of your application:

```bash
npm run build
# or
yarn build
```

### Serving a Production Build

Start the application in production mode:

```bash
npm run start
# or
yarn start
```

## Adding remote repositories

Notes:

- For devfile hosts (environment variable or config file) specify a remote url or a local folder structure and `index.json` that follows the `devfile/api` spec.
- You can have infinitely many sources as long as the name for the source repository is different.
- There are two types of source types, url and local.
  - url is for specifying a remote hosts.
  - local is for specifying a local hosts. NOTE: Local MUST have `index.json` under the root path specified, an example is below.

`/devfiles`

```
+-- devfiles
|   +-- java-maven
|       +-- devfile.yaml
|   +-- java-openliberty
|       +-- devfile.yaml
|   +-- index.json
```

`/**/index.json`

```json
[
  {
    "name": "java-maven",
    "version": "1.1.0",
    "displayName": "Maven Java",
    "description": "Upstream Maven and OpenJDK 11",
    "type": "stack",
    "tags": ["Java", "Maven"],
    "projectType": "maven",
    "language": "java",
    "links": {
      "self": "devfile-catalog/java-maven:latest"
    },
    "resources": ["devfile.yaml"],
    "starterProjects": ["springbootproject"]
  },
  {
    "name": "java-openliberty",
    "version": "0.5.0",
    "displayName": "Open Liberty",
    "description": "Java application stack using Open Liberty runtime",
    "type": "stack",
    "projectType": "docker",
    "language": "java",
    "links": {
      "self": "devfile-catalog/java-openliberty:latest"
    },
    "resources": ["devfile.yaml"],
    "starterProjects": ["user-app"]
  }
]
```

Configure the registry viewer through environment the variable.

`DEVFILE_REGISTRY_HOSTS`

Notes about environment variable:

- The value assigned to the environment variable must be surrounded by quotes.
- Each source MUST contain a name for the source repository, a source type (url or local), and a location and is split by ">". i.e. `name>type>location`
- Multiple sources are be split by "|". i.e. `name>type>location|name>type>location`

```
DEVFILE_REGISTRY_HOSTS="example1>url>https://registry.devfile.io|example2>local>/devfiles"
```

Configure the registry viewer through config file.

`/config/devfile-registry-hosts.json`

```json
{
  "Example1": {
    "url": "https://registry.devfile.io"
  },
  "Example2": {
    "local": "/devfiles"
  }
}
```

## Environment Variables

The environment variable `DEVFILE_VIEWER_ROOT` controls the registry viewer's base path. Note: Defaults to `/`.

The environment variable `DEVFILE_COMMUNITY_HOST` controls whether the registry viewer uses the community registry. Note: Defaults to `true` and any value assigned will be `false`.

## Contributing

Contributions are welcome!

Issues are tracked via the the [devfile/api](https://github.com/devfile/api) repo. Open or search for issues on the [devfile/api](https://github.com/devfile/api) repo with the label `area/registry`.
