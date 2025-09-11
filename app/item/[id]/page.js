export const generateMetadata = async ({ params }) => {
    const { id } = await params
    const response = await fetch(`http://localhost:3000/api?id=${id}`)
    const item = await response.json()
    return {
        title: item.name,
    }
}

const Item = async ({ params }) => {
    const { id } = await params;
    const response = await fetch(`http://localhost:3000/api?id=${id}`)
    const item = await response.json()
    return (
        <>
            <h2>{item.name}</h2>
            <p>価格： {item.price}円</p>
        </>
    )
}

export default Item