'use client'

import { useTransition, useState } from "react"

// Define the props for the AddToCartButton component
interface AddToCartButtonProps {
    productId: string,
    incrementProductQuantity: (productId: string) => Promise<void>
}

export default function AddToCartButton({productId, incrementProductQuantity}: AddToCartButtonProps) {
     // State to manage the loading transition
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);

    return (
        <div className="flex items-center gap-2">
            <button className="btn btn-primary"
            onClick={() => {
                // Reset the success status
                    setSuccess(false);
                    
                    // Initiate a transition, handling asynchronous operations
                    startTransition(async () => {
                        // Invoke the function to increment product quantity
                        await incrementProductQuantity(productId);
                        
                        // Set the success status upon completion
                        setSuccess(true);
                })
            }}>
                ADD TO CART

                {/* Cart icon */}
                <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
            </button>
           {/* Display loading spinner when an operation is pending */}
            {isPending && <span className="loading loading-spinner loading-md" />}
            
            {/* Display success message when operation is complete */}
            {!isPending && success && <span className="text-success">Added to Cart.</span>}
        </div>
    )
}

// Note: useTransition is a relatively new React hook that allows to pass server actions from a client component
    // "startTransition from useTransition bounds the errors that happen in the transition to the component where you call useTransition, this ensures that server actions, when called manually, do not crash the entire page. Instead the error would be caught by error boundaries above the component." - From Next.js team member
// Important to do : Set up an error page 