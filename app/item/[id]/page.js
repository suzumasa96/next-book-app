const Item = async ({ params }) => {
    const { id } = await params;
    return <div>Item{id}ページ</div>
}

export default Item