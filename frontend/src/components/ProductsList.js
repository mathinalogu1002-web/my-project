import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>ID</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Name</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Description</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{p.id}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{p.name}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{p.description}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductsList;
