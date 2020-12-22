import projects, {ProjectProps} from 'components/pages/projects/data'
import Project from 'components/pages/projects/layouts/project'
import {InferGetStaticPropsType} from 'next'
import filter from 'lodash/filter'
import first from 'lodash/first'

const ProjectPage = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return project && <Project {...(project as ProjectProps)} />
}

export async function getStaticProps(context: any) {
  const project: ProjectProps | undefined = first(
    filter(projects.map((project) => project).sort(), {
      slug: 'create-an-ecommerce-store-with-next-js-and-stripe-checkout',
    }),
  )

  return {
    props: {project}, // will be passed to the page component as props
  }
}

export default ProjectPage
