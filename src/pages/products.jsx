import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({
        title: '',
        price: '',
        description: '',
        image: ''
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleEdit = (product) => {
        setEditingId(product.id);
        setEditForm({
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image
        });
    };

    const handleUpdate = () => {
        const updatedProducts = products.map(product =>
            product.id === editingId
                ? {
                    ...product,
                    title: editForm.title,
                    price: parseFloat(editForm.price),
                    description: editForm.description,
                    image: editForm.image
                }
                : product
        );
        setProducts(updatedProducts);
        console.log('Updated product:', { id: editingId, ...editForm });
        setEditingId(null);
    };

    const handleDelete = (id) => {
        const filteredProducts = products.filter(product => product.id !== id);
        setProducts(filteredProducts);
        console.log('Deleted product ID:', id);
    };

    const handleCancel = () => {
        setEditingId(null);
    };

    return (
        <div className="min-h-screen pt-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
                            {editingId === product.id ? (
                                <div className="space-y-3 flex-1">
                                    <input
                                        type="text"
                                        value={editForm.title}
                                        onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Product name"
                                    />
                                    <input
                                        type="number"
                                        value={editForm.price}
                                        onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Price"
                                        step="0.01"
                                    />
                                    <textarea
                                        value={editForm.description}
                                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Description"
                                        rows="3"
                                    />
                                    <input
                                        type="text"
                                        value={editForm.image}
                                        onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Image URL"
                                    />
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={handleUpdate}
                                            className="bg-green-500 text-white px-3 py-1 rounded text-sm flex-1"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="bg-gray-500 text-white px-3 py-1 rounded text-sm flex-1"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-48 object-contain mb-4"
                                    />
                                    <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
                                    <p className="text-emerald-600 font-bold mb-2">${product.price}</p>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                                        {product.description}
                                    </p>
                                    <div className="flex space-x-2 mt-auto">
                                        <button
                                            onClick={() => handleEdit(product)}
                                            className="bg-green-500 text-white px-3 py-1 rounded text-sm flex-1"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded text-sm flex-1"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;