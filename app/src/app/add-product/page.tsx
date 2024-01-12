import type { Metadata } from "next";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubmitButton from "@/components/FormSubmitButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: 'Add Product - Shop-a-Hub'
}

// Server action async function. More info: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
// There is no need to set up a separate endpoint if we use Server action
async function addProduct(formData: FormData) {
    // The following line tells Next.js that this is a Server action
    "use server";

    // Level of security added integrated with authentication
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/add-product");
    }

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    // Error handling - Validation method
    if(!name || !description || !imageUrl || !price) {
        throw Error("Missing required fields");
    }

    await prisma.product.create({
        data: { name, description, imageUrl, price },
    });

    redirect("/");
}

export default async function AddProductPage() {

    // Level of security added integrated with authentication
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/add-product");
    }

    return (
        <div>
            <h1 className="text-lg mb-3 font-bold">Add Product</h1>
            <form action={addProduct}>
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
                <FormSubmitButton type="submit" className="btn-block">Add Product</FormSubmitButton>
            </form>
        </div>
    )
}