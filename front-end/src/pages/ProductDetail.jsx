import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState , useContext } from "react";
// import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    // Fetch product details from backend
    useEffect(() => {
        fetch(`http://localhost:5000/api/items/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch product");
                return res.json();
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("Product not found.");
                setLoading(false);
            });
    }, [id]);



    const handleBuyNow = () => {
        navigate("/cart");
    };

    if (loading) {
        return <div className="pt-20 text-center text-gray-700">Loading product...</div>;
    }

    if (error) {
        return <div className="pt-20 text-center text-red-600">{error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 pt-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="md:flex">
                    {/* Image Section */}
                    <div className="md:w-1/2 p-4 bg-gray-50 flex justify-center items-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto max-h-96 object-contain rounded-lg"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="md:w-1/2 p-6 space-y-4">
                        <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                        <p className="text-gray-600">{product.description}</p>

                        <div className="space-y-2 mt-4">
                            <h2 className="font-semibold text-gray-700">Features:</h2>
                            {product.features && product.features.length > 0 ? (
                                product.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-700">
                                        <span className="w-2 h-2 bg-black rounded-full"></span>
                                        <span>{feature}</span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No additional features listed.</p>
                            )}
                        </div>

                        <div className="mt-6 text-2xl font-bold text-gray-900">
                            ₹{product.price.toFixed(2)}
                        </div>

                        <div className="flex gap-4 mt-6">

                            <button
                                onClick={handleBuyNow}
                                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
