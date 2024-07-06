import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const menu = [
        { name: "Rice with fried fish", price: 25 },
        { name: "Rice with chicken", price: 25 },
        { name: "Rice with grill rib", price: 25 },
        { name: "Rice with Dieu Hong fish", price: 20 },
        { name: "Rice with cat fish", price: 20 },
        { name: "Fried rice with sea food", price: 25 },
        { name: "Fried rice with fried chicken", price: 25 },
        { name: "Fried rice with boiled chicken", price: 25 },
        { name: "Noodles with sea food", price: 30 },
        { name: "Noodles with beef", price: 30 },
        { name: "Hu tieu with sea food", price: 30 },
        { name: "Extra rice", price: 0 },
        { name: "Chilli", price: 0 },
    ];

    const [orderList, setOrderList] = useState([]);

    const addItem = (id, qty) => {
        setOrderList((prevOrderList) => {
            const existingItemIndex = prevOrderList.findIndex((item) => item.id === id);
            if (existingItemIndex !== -1) {
                const updatedOrderList = [...prevOrderList];
                updatedOrderList[existingItemIndex].quantity += qty;
                return updatedOrderList;
            }
            return [...prevOrderList, { id, quantity: qty }];
        });
    };

    const deleteItem = (index) => {
        setOrderList((prevOrderList) => prevOrderList.filter((_, i) => i !== index));
    };

    const exportPDF = () => {
        const orderTbl = document.getElementById('order-tbl');
        const doc = new jsPDF();
        doc.text(orderTbl.innerText, 20, 20);
        doc.save('order.pdf');
    };

    return (
        <div className="home">
            <header>
                <h1><i className="fa fa-cutlery" aria-hidden="true"></i> Food Ordering App</h1>
                <h1><i className="fa fa-cutlery" aria-hidden="true"></i> Made by Razak Attar with love</h1>
            </header>
            <main>
                <section id="order-list">
                    <h2>Order(s)</h2>
                    <table id="order-tbl">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderList.length > 0 ? (
                                orderList.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{menu[item.id].name}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <button className="del-btn" onClick={() => deleteItem(index)}>
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" style={{ textAlign: 'center' }}>Your order list is empty</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {orderList.length > 0 && (
                        <button id="export" onClick={exportPDF}>
                            Export PDF <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                        </button>
                    )}
                </section>
                <section id="menu">
                    <h2>Menu</h2>
                    {menu.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <p className="food-name">{item.name}</p>
                            <p className="price">{item.price === 0 ? 'Free' : `${item.price}k`}</p>
                            <input
                                className="qty"
                                type="number"
                                name="qty"
                                defaultValue="1"
                                min="1"
                                max="100"
                            />
                            <button className="add-btn" type="button" onClick={() => addItem(index, parseInt(document.querySelectorAll('.qty')[index].value))}>
                                ADD
                            </button>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Home;
