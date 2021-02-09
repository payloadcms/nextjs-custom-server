# Payload + NextJS Server-Rendered TypeScript Boilerplate

This repo contains a boilerplate that'll get you going on a Payload install combined with a NextJS frontend.

When you use Payload, you plug it into _**your**_ Express server. That's a fundamental difference between Payload and other CMS / application frameworks. It means that when you use Payload, you're adding Payload to your app, and not building a "Payload app".

One of the strengths of this pattern is that it lets you do powerful things like combining your Payload CMS directly with a custom NextJS server. With this pattern, you can host your Payload CMS as well as a fully dynamic, CMS-integrated NextJS site right on one host—while still getting all of the benefits of a headless CMS.

**This boilerplate demonstrates the following:**

- How to build a TypeScript Payload + NextJS project
- How to use Payload's Uploads via a Media collection
- How to seed initial data into your database through Payload's Local API
- How to build dynamic layouts in React using Payload's Blocks field type
- How to use Payload field hooks to dynamically generate and format page `slug`s

## This pattern is great for the following situations:

**1. If your content changes often, or is completely dynamic in nature.**

Static sites are good for sites and apps where their content is typically set in stone at build-time, or does not change often. If your app's content doesn't change often, then taking advantage of a static site generator such as Gatsby or NextJS' static functionality might be a good fit. But, if your content changes constantly, or is completely dynamic, it might make sense to server-render your content instead.

**2. If your views depend on dynamic data for each load.**

If you need to generate views that depend on user-generated data, or data that changes based on who the authenticated user is, you might choose to server-render your app rather than generate it statically. If you were to go a static route, your site or app would have to do all the heavy lifting on the client side and might miss out on SEO opportunities.

**3. If parts of your app need to be server-rendered, but others are better suited to static generation.**

Commonly, you might use Payload to build full applications - where certain views are statically generated, like pages and posts, but other views are fully dynamic and must be server-rendered—like an account portal or similar. If this describes your application, you can benefit by utilizing NextJS in both a server-rendered and statically generated context. At the same time, you'll benefit from running your Payload app completely within the same NextJS server.

## Installation

Here is a step-by-step guide for how to use this repo:

1. Clone this repo using `git clone --depth=1 https://github.com/payloadcms/nextjs-custom-server.git <YOUR_PROJECT_NAME>`
1. Run `cp .env.example .env` to create an `.env` file
1. Fill out your `.env` file with values that describe your environment
1. Run `yarn` or `npm install`
1. Run `yarn dev` to open a development environment
1. *optional* Run `yarn seed` to add sample pages and a Media upload
1. Go to [http://localhost:3000/admin](http://localhost:3000/admin) to create your first user

## Building and serving in Production

This repo contains everything you need to both build your project for production purposes as well as serve it after it's been built.

- To build, run `yarn build` or `npm run build`.
- To serve, run `yarn serve` or `npm run serve`.

### This boilerplate is not for all NextJS projects

We will be releasing more boilerplates over time, including one for pairing Payload with a statically generated NextJS site. If you don't need NextJS' server rendering, you should go fully static.
