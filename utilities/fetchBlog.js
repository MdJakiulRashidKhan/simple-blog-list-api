export default async function fetchBlog(){
    const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");
    const data = await res.json();
    return data;
}