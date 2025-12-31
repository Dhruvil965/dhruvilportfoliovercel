import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/project-5.jpg',
    title: 'Frontend ECommerce Webapp',
    tags: ['ECommerce', 'Frontend Development'],
    projectLink: 'https://cs476-project-zanto-ecommerce-webapp.onrender.com/'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Personal portfolio webapp',
    tags: ['Web-design', 'Frontend Development', 'ReactJS', 'TailwindCSS'],
    projectLink: 'https://github.com/Dhruvil965/Dhruvil-Portfolio'
  },
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Full stack ecommerce web app',
    tags: ['API', 'MVC','Ecommerce', 'Full-stack Development'],
    projectLink: 'https://zanto-app.onrender.com/'
  }
];

const Work = () => {
  return (
    <section 
    id="work"
    className="section">
        <div className="container">
            <h2 className="headline-2 mb-8">
                My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    />)
                )}
            </div>
        </div>
    </section>
  )
}

export default Work
