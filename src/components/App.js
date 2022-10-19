import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../main.scss';
import ModalOpen from "./ModalOpen";
import MinMax from "./MinMax";
import { Container, Button } from 'react-bootstrap';


const App = () => {
   const [ products, setProducts ] = useState(ProductsStub());
   const [ showModal, setShowModal ] = useState(false);

   const total = products.reduce((sum, pr) => sum + pr.price * pr.quantity, 0);

   const setCnt = (id, quantity) => {
      setProducts(
         products.map(pr => pr.id != id ? pr : ({
            ...pr,
            quantity
         }))
      );
   }

   const removeProduct = (id) => {
      setProducts(products.filter(pr => pr.id !== id))
   }

   return (
   <Container>
   <h3 className="title">Корзина покупателя</h3>
   <hr/>
   <table>
      <tbody>
         <tr>
            <th>№</th>
            <th>ID</th>
            <th>Категория</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Количество на складе</th>
            <th>Цена товара</th>
            <th>Удалить товар</th>
         </tr>
         { products.map((pr, i) => (
            <tr key={ pr.id }>
               <td>{ i + 1 }</td>
               <td>{ pr.id }</td>
               <td>{ pr.category }</td>
               <td>{ pr.title }</td>
               <td>{ pr.price }</td>
               <td>
                  <MinMax max={ pr.MaximumQuantity } current={ pr.quantity } onChange={quantity => setCnt(pr.id, quantity)}/>
               </td>
               <td>{ pr.MaximumQuantity }</td>
               <td>{ pr.quantity * pr.price}</td>
               <td><Button className="btn btn-success"onClick={() => removeProduct(pr.id)}>Удалить</Button></td>
            </tr>
         ))}
      </tbody>
   </table>
   <hr/>
   <p>Общая сумма товаров:<strong>{total}</strong></p>
   <hr/>
   <Button onClick={() => setShowModal(true)} >Оформить заказ</Button>
   <ModalOpen
      show={showModal}
      title={products.length}
      onClose={() => setShowModal(false)}/>
   </Container>
   )
}
 
export default App;

function ProductsStub() {
   return [
      {
         "id": 85376,
         "category": "Смартфон",
         "title": "Infinix HOT 12 PRO",
         "price": 14990,
         "MaximumQuantity": 75,
         "quantity": 0
      },
      {
         "id": 74265,
         "category": "Смартфон",
         "title": "Samsung Galaxy A33",
         "price": 23990,
         "MaximumQuantity": 57,
         "quantity": 0
      },
      {
         "id": 357946,
         "category": "Смартфон",
         "title": "realme C35",
         "price": 10366,
         "MaximumQuantity": 129,
         "quantity": 0
      },
      {
         "id": 48269,
         "category": "Смартфон",
         "title": "Xiaomi Redmi Note 10S",
         "price": 18999,
         "MaximumQuantity": 103,
         "quantity": 0
      },
      {
         "id": 28193,
         "category": "Смартфон",
         "title": "Vivo Y33s",
         "price": 15990,
         "MaximumQuantity": 68,
         "quantity": 0
      },
   ]
}