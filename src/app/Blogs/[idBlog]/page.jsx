import Container from "../../components/ui/Container"
import { BlogItems } from "../../components/data/data"

export default async function Page({ params }) {
  const { idBlog } = await params
  const Blog = BlogItems[idBlog]
  return (
    <main>
      <Container>
        <header className="py-32 flex flex-col gap-10">
          <h1 className="text-6xl font-medium max-w-2/3">{Blog.title}</h1>
          <img src={Blog.image} className="w-full h-[550px] object-cover rounded-2xl" alt="" />
          <div className="flex flex-col gap-7 max-w-4/5 ml-[20%]" id="blogBox" >
            {Blog.text}
          </div>
        </header>
      </Container>
    </main>
  )
}
