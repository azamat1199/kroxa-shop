import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../configs/firebase';


export default function Products() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const res = await db.collection('products').get();
            const data = res.docs.map(item => ({ ...item.data(), id: item.id}));
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchChanges = async () => {
        try {
            await db.collection('products').orderBy('createdAt', 'desc').onSnapshot(data => {
                const response = data.docs.map(item => ({ ...item.data(), id: item.id }));
                console.log(response);
                if (response.length) {
                    setProducts(response)
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchChanges();
    }, []);

    const handleDelete = useCallback(async (id) => {
        try {
            const res = await db.collection('products').doc(id).delete();
            console.log(res);
            // fetchProducts();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div>
      <Link to="/clients/add">Add Client</Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Full name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(item => {
              const { id, phone, address, firstName, lastName, email, createdAt } = item;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{firstName} {lastName}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>{address}</td>
                  <td>{new Date(createdAt.seconds * 1000).toLocaleDateString()}</td>
                  <td>
                    <Link to={`/clients/${id}/edit`}>Edit</Link>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
    </div>
    )
}