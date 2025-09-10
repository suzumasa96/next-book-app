export const generateMetadata = async ({ params }) => {
    const { id } = await params
    return {
        title: `Item${id}`,
    }
}

const Item = async ({ params }) => {
    const { id } = await params;
    return <div>Item{id}ページ</div>
}

export default Item