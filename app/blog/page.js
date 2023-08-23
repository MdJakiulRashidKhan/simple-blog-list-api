import Link from 'next/link';
import blogData from '../../utilities/fetchBlog'

export default async function Blog() {

    const data = await blogData();

    return (
        <div>
            {data.map((item) => {
                return (
                    <p key={item.id}>
                        <Link href={`blog/${item.id}`}>{item.title}</Link>
                    </p>
                );
            })}

        </div>
    )
}