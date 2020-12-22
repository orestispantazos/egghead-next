export type GenericResourceProps = {
  type:
    | 'playlist'
    | 'video'
    | 'text'
    | 'audio'
    | 'quiz'
    | 'activity'
    | 'external'
    | 'podcast'
  title: string
  slug: string
  lesson_slug?: string // weird but necessarry in order to distinguish between slug with -intro / -solution appendix to fetch lesson data
  path?: string
  image?: string
  description?: string
  summary?: string
  items?: GenericResourceProps[]
  first_resource_path?: string
  media_urls?: {
    hls_url: string
    dash_url: string
  }
  code?: {
    label: string
    github: {
      repo: string
      user: string
      branch: string
    }
  }
  next?: {
    label: string
    path: string
  }
}

export type ProjectProps = {
  title: string
  slug: string
  github: string
  image: string
  summary: string
  podcast?: {id?: string}
  instructor: {
    name: string
    path: string
    bio: string
    twitter: string
    image: string
  }
  tags: {title: string; image: string}[]
  items?: GenericResourceProps[]
}

const projects: ProjectProps[] = [
  {
    title: `Create an eCommerce Store with Next.js and Stripe Checkout`,
    slug: `create-an-ecommerce-store-with-next-js-and-stripe-checkout`,
    github: `https://github.com/colbyfayock/space-jelly-store-workshop`,
    image: `https://res.cloudinary.com/dg3gyk0gu/image/upload/v1608034857/next.egghead.io/pages/projects/create-an-ecommerce-store-with-next-js-and-stripe-checkout/create-an-ecommerce-store-with-next-js-and-stripe-checkout_1.png`,
    summary: `#### Accept payments & sell products powered by Stripe and the best of the JAMStack\n\nThere are as many ways to build an e-commerce store on the internet as there are products to sell. One thing is for certain, e-commerce is here to stay and as professional developers we need to understand how to build fully custom stores for our clients using the best modern tools available.\n\n* React: flexible and customizable while following modern best practices\n* Next.js: lightening fast with guide rails to help your project perform like consumers expect\n* Stripe Checkout: let's you offload reams of complicated business logic to a trusted third party that maintains regulatory compliance, global payments, and a standard UX.\n\nYour store will have well managed local component state using React Hooks and you'll also have clear and cohesive shared (global) state with React Context.\n\nFinally you'll deploy your custom store to Vercel (the platform behind Next.js) as well as how to make your Next.js e-commerce store portable to deploy to other platforms.`,
    podcast: {
      id: '',
    },
    instructor: {
      name: 'Colby Fayock',
      path: '/q/resources-by-colby-fayock',
      bio:
        'Colby is a UX designer and front-end engineer living on the Philly side of Pennsylvania. He got his start in web design customizing his AIM and MySpace pages, and quickly graduated to whole websites for teams and bands. He currently works as a developer advocate for Applitools.',
      twitter: 'colbyfayock',
      image:
        'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/366/medium/IMG_7414.JPG',
    },
    tags: [
      {
        title: 'Next.js',
        image: `data:image/svg+xml;base64,PHN2ZyBjbGFzc05hbWU9InctNiBoLTYiIHdpZHRoPSIxMTYiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTE2IDEwMCIgZmlsbD0iIzAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGxSdWxlPSJldmVub2RkIiBjbGlwUnVsZT0iZXZlbm9kZCIgZD0iTTU3LjUgMEwxMTUgMTAwSDBMNTcuNSAweiIgLz48L3N2Zz4=`,
      },
      {
        title: 'Stripe',
        image: `data:image/svg+xml;base64,PHN2ZyBjbGFzc05hbWU9InctNiBoLTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjM0IiB2aWV3Qm94PSIwIDAgMjQgMzQiPgogICAgPHBhdGggZmlsbD0iIzY3NzJFNSIgZmlsbFJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgZD0iTTY4OC41NjIyMDUsNTY1LjEyNTI3NSBDNjg4LjU2MjIwNSw1NjMuNjY4MTMyIDY4OS43NzE2NTQsNTYzLjEwNzY5MiA2OTEuNzc0ODAzLDU2My4xMDc2OTIgQzY5NC42NDcyNDQsNTYzLjEwNzY5MiA2OTguMjc1NTkxLDU2My45NjcwMzMgNzAxLjE0ODAzMSw1NjUuNDk4OTAxIEw3MDEuMTQ4MDMxLDU1Ni43MTg2ODEgQzY5OC4wMTEwMjQsNTU1LjQ4NTcxNCA2OTQuOTExODExLDU1NSA2OTEuNzc0ODAzLDU1NSBDNjg0LjEwMjM2Miw1NTUgNjc5LDU1OC45NjA0NCA2NzksNTY1LjU3MzYyNiBDNjc5LDU3NS44ODU3MTQgNjkzLjM2MjIwNSw1NzQuMjQxNzU4IDY5My4zNjIyMDUsNTc4LjY4NzkxMiBDNjkzLjM2MjIwNSw1ODAuNDA2NTkzIDY5MS44NTAzOTQsNTgwLjk2NzAzMyA2ODkuNzMzODU4LDU4MC45NjcwMzMgQzY4Ni41OTY4NSw1ODAuOTY3MDMzIDY4Mi41OTA1NTEsNTc5LjY5NjcwMyA2NzkuNDE1NzQ4LDU3Ny45NzgwMjIgTDY3OS40MTU3NDgsNTg2Ljg3MDMzIEM2ODIuOTMwNzA5LDU4OC4zNjQ4MzUgNjg2LjQ4MzQ2NSw1ODkgNjg5LjczMzg1OCw1ODkgQzY5Ny41OTUyNzYsNTg5IDcwMyw1ODUuMTUxNjQ5IDcwMyw1NzguNDYzNzM2IEM3MDIuOTYyMjA1LDU2Ny4zMjk2NyA2ODguNTYyMjA1LDU2OS4zMDk4OSA2ODguNTYyMjA1LDU2NS4xMjUyNzUgWiIKICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjc5IC01NTUpIiAvPjwvc3ZnPg==`,
      },
    ],
    items: [
      {
        type: 'playlist',
        title: 'Bootstrap a Next.js Ecommerce App',
        slug: 'bootstrap-a-next-js-ecommerce-app',
        image:
          'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1608205688/next.egghead.io/pages/projects/create-an-ecommerce-store-with-next-js-and-stripe-checkout/ecommerce-stripe-icon-2.png',
        items: [
          {
            type: 'playlist',
            title:
              'Create a New React Application with the Next.js create-next-app CLI',
            slug:
              'next-js-create-a-new-react-application-with-the-next-js-create-next-app-cli',
            items: [
              {
                type: 'text',
                title: 'Exercise',
                description: 'this is an exercise',
                slug:
                  'next-js-create-a-new-react-application-with-the-next-js-create-next-app-cli',
                path:
                  '/lessons/next-js-create-a-new-react-application-with-the-next-js-create-next-app-cli',
                image:
                  'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/square_280/nextjs.png',
              },
              {
                type: 'video',
                title: 'Solution',
                lesson_slug:
                  'next-js-create-a-new-react-application-with-the-next-js-create-next-app-cli',
                slug:
                  'next-js-create-a-new-react-application-with-the-next-js-create-next-app-cli-solution',
                path:
                  '/lessons/next-js-create-a-new-react-application-with-the-next-js-create-next-app-cli',
                image:
                  'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/square_280/nextjs.png',
              },
            ],
          },

          {
            type: 'video',
            title:
              'Add and Style a Grid of Products with Images in a Next.js React App',
            slug:
              'next-js-add-and-style-a-grid-of-products-with-images-in-a-next-js-react-app',
            path:
              '/lessons/next-js-add-and-style-a-grid-of-products-with-images-in-a-next-js-react-app',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/square_280/nextjs.png',
          },
          {
            type: 'video',
            title:
              'Add and Configure Products in the Stripe Dashboard for an Online Store',
            slug:
              'next-js-add-and-configure-products-in-the-stripe-dashboard-for-an-online-store',
            path:
              '/lessons/next-js-add-and-configure-products-in-the-stripe-dashboard-for-an-online-store',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/square_280/nextjs.png',
          },
          {
            type: 'video',
            title:
              'Dynamically Manage a Grid of Products in an Online Store with a JSON Document',
            slug:
              'javascript-dynamically-manage-a-grid-of-products-in-an-online-store-with-a-json-document',
            path:
              '/lessons/javascript-dynamically-manage-a-grid-of-products-in-an-online-store-with-a-json-document',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/square_280/javascriptlang.png',
          },
          {
            type: 'video',
            title:
              'Host & Deploy a Next.js React App on Vercel imported from GitHub',
            slug:
              'next-js-host-deploy-a-next-js-react-app-on-vercel-imported-from-github',
            path:
              '/lessons/next-js-host-deploy-a-next-js-react-app-on-vercel-imported-from-github',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/square_280/nextjs.png',
          },
        ],
      },
      {
        type: 'playlist',
        title: 'Integrate Stripe Checkout into Next.js',
        slug: 'integrate-stripe-checkout-into-next-js',
        image:
          'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1608205688/next.egghead.io/pages/projects/create-an-ecommerce-store-with-next-js-and-stripe-checkout/ecommerce-stripe-icon-3.png',
        items: [
          {
            type: 'video',
            title:
              'Configure a Stripe Checkout Domain for Client-Only Integration',
            slug:
              'stripe-configure-a-stripe-checkout-domain-for-client-only-integration',
            path:
              '/lessons/stripe-configure-a-stripe-checkout-domain-for-client-only-integration',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/294/square_280/Artboard.png',
          },
          {
            type: 'video',
            title:
              'Add a Stripe API Key as an Environment Variable in Next.js & Vercel',
            slug:
              'next-js-add-a-stripe-api-key-as-an-environment-variable-in-next-js-vercel',
            path:
              '/lessons/next-js-add-a-stripe-api-key-as-an-environment-variable-in-next-js-vercel',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/square_280/nextjs.png',
          },
          {
            type: 'video',
            title:
              'Integrate Stripe Checkout to Purchase Products in Next.js with Stripe @stripe/stripe-js Cl',
            slug:
              'stripe-integrate-stripe-checkout-to-purchase-products-in-next-js-with-stripe-stripe-stripe-js-cl',
            path:
              '/lessons/stripe-integrate-stripe-checkout-to-purchase-products-in-next-js-with-stripe-stripe-stripe-js-cl',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/294/square_280/Artboard.png',
          },
        ],
      },
      {
        type: 'playlist',
        title: 'Manage Shopping Cart State',
        slug: 'manage-shopping-cart-state',
        image:
          'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1608205688/next.egghead.io/pages/projects/create-an-ecommerce-store-with-next-js-and-stripe-checkout/ecommerce-stripe-icon-1.png',
        items: [
          {
            type: 'video',
            title:
              'Create a Shopping Cart with the useState React Hook to Manage Product Quantity and Total',
            slug:
              'react-create-a-shopping-cart-with-the-usestate-react-hook-to-manage-product-quantity-and-total',
            path:
              '/lessons/react-create-a-shopping-cart-with-the-usestate-react-hook-to-manage-product-quantity-and-total',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/square_280/react.png',
          },
          {
            type: 'video',
            title: 'Create a Custom React Hook to Manage Cart State',
            slug: 'react-create-a-custom-react-hook-to-manage-cart-state',
            path:
              '/lessons/react-create-a-custom-react-hook-to-manage-cart-state',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/square_280/react.png',
          },
          {
            type: 'video',
            title:
              'Use the React Context API to Globally Manage Cart State in a Next.js App',
            slug:
              'react-use-the-react-context-api-to-globally-manage-cart-state-in-a-next-js-app',
            path:
              '/lessons/react-use-the-react-context-api-to-globally-manage-cart-state-in-a-next-js-app',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/square_280/react.png',
          },
          {
            type: 'video',
            title:
              'Store and Load Cart State from Local Storage to Persist Cart Data When Reloading the Page',
            slug:
              'react-store-and-load-cart-state-from-local-storage-to-persist-cart-data-when-reloading-the-page',
            path:
              '/lessons/react-store-and-load-cart-state-from-local-storage-to-persist-cart-data-when-reloading-the-page',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/square_280/react.png',
          },
          {
            type: 'video',
            title:
              'Use Next.js Dynamic Routes to Create Product Pages for an Online Store',
            slug:
              'next-js-use-next-js-dynamic-routes-to-create-product-pages-for-an-online-store',
            path:
              '/lessons/next-js-use-next-js-dynamic-routes-to-create-product-pages-for-an-online-store',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/square_280/nextjs.png',
          },
          {
            type: 'video',
            title:
              'Create a Shopping Cart Page to Manage Products to Purchase in a Next.js App',
            slug:
              'next-js-create-a-shopping-cart-page-to-manage-products-to-purchase-in-a-next-js-app',
            path:
              '/lessons/next-js-create-a-shopping-cart-page-to-manage-products-to-purchase-in-a-next-js-app',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/square_280/nextjs.png',
          },
          {
            type: 'video',
            title:
              'Add a Quantity Input to the Cart Page to Add or Remove Items from a Shopping Cart in Next',
            slug:
              'react-add-a-quantity-input-to-the-cart-page-to-add-or-remove-items-from-a-shopping-cart-in-next',
            path:
              '/lessons/react-add-a-quantity-input-to-the-cart-page-to-add-or-remove-items-from-a-shopping-cart-in-next',
            image:
              'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/square_280/react.png',
          },
        ],
      },
    ],
  },
]

export default projects
