export default function AddProductPage() {
    return (
        <div>
            <h1 className="text-lg mb-3 font-bold">Add Product</h1>
            <form>
                <input 
                required
                // contain the product name
                name="name"
                placeholder="Name"
                // The w-full formatting shortcut corresponds to width: 100% in vanilla CSS
                // Hover over "input" to check all the style it applied from DaisyUI
                className="input input-bordered mb-3 w-full"
                />
                <textarea 
                required 
                name="description"
                placeholder="Description"
                className="textarea-bordered textarea mb-3 w-full"
                />
                <input 
                required
                name="imageUrl"
                placeholder="Image URL"
                type="url"
                className="mb-3 w-full input input-bordered"
                />
                <input 
                required
                name="price"
                placeholder="Price"
                type="number"
                className="mb-3 w-full input input-bordered"
                />
                <button type="submit" className="btn btn-primary btn-block">Add Product</button>
            </form>
        </div>
    )
}