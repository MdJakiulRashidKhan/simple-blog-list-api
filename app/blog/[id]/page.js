import blogData from '../../../utilities/fetchBlogDetail'
import Image from 'next/image';

export default async function SingleBlog({ params: searchParams }) {

    const id = searchParams.id;
    console.log(id)
    const data = await blogData(id);

    return (
        <div>
            <p>{data?.postDetails?.title}</p> 
            <p>{data?.postDetails?.content}</p>
            <Image src={data?.postDetails?.img} width={500}
      height={500}/>
        </div>
    )
}