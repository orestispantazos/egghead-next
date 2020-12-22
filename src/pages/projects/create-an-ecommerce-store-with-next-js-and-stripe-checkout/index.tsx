import Project from 'components/pages/projects/create-an-ecommerce-store-with-next-js-and-stripe-checkout'
import projects, {
  ProjectProps,
} from 'components/pages/projects/create-an-ecommerce-store-with-next-js-and-stripe-checkout/data'
import filter from 'lodash/filter'
import first from 'lodash/first'

const ProjectPage = () => {
  const project = first(
    filter(projects, {
      slug: 'create-an-ecommerce-store-with-next-js-and-stripe-checkout',
    }),
  )

  return <Project {...(project as ProjectProps)} />
}

export default ProjectPage
