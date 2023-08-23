import blogData from '../../utilities/fetchBlog'

export default async function Home() {

    const data = await blogData();

    return (
        <div>
        {
            data.map((item) => {
                return (
                    <div>
                        <h2>{item.title}</h2>
                    </div>
                )
            })
        }
        </div>
    )
}