import * as React from 'react'
import {
  GenericResourceProps,
  ProjectProps,
} from 'components/pages/projects/data'
import filter from 'lodash/filter'
import first from 'lodash/first'
import uniq from 'lodash/uniq'
import ResourceTemplate from 'components/pages/projects/layouts/resource'

const PROJECT_SLUG =
  'create-an-ecommerce-store-with-next-js-and-stripe-checkout'

const Resource = (resource: GenericResourceProps, project: ProjectProps) => {
  console.log(resource)
  return (
    <ResourceTemplate
      project={project as ProjectProps}
      {...(resource as GenericResourceProps)}
    />
  )
}

export async function getStaticProps(context: any) {
  const resources: any = await import('components/pages/projects/data').then(
    (data) => data.default,
  )
  const project: any = first(filter(resources, {slug: PROJECT_SLUG}))
  const items: any = uniq(
    project?.items
      .map((i: any) =>
        i?.items.map((i: any) => (i.items ? i.items.map((i: any) => i) : i)),
      )
      .flat(2),
  )

  console.log('nestedItems: ', items)
  console.log('context: ', context)

  const resource = first(filter(items, {slug: context.params.resource}))

  return {
    props: {...resource, project}, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const resources: any = await import('components/pages/projects/data').then(
    (data) => data.default,
  )
  const project: any = first(filter(resources, {slug: PROJECT_SLUG}))

  const items: any = uniq(
    project?.items
      .map((i: any) =>
        i?.items.map((i: any) => (i.items ? i.items.map((i: any) => i) : i)),
      )
      .flat(2),
  )
  console.log('nestedItems: ', items)

  const resourceSlugs: [any] = items.map((resource: any) => resource).sort()
  const paths = resourceSlugs.map((resource) => ({
    params: {
      slug: resource.slug,
      resource: resource.slug,
    },
  }))

  console.log({resources})
  console.log({resourceSlugs})
  console.log({paths})

  return {
    paths: paths,
    fallback: false,
  }
}

export default Resource
