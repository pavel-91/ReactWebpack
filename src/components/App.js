import React, { useState } from "react";
import { Button } from "@mui/material";
import '../../main.scss';
import MinMax from "./MinMax";


const App = () => {
   const [ products, setProducts ] = useState(ProductsStub());
   const setCnt = (id, quantity) => {
      setProducts(
         products.map(pr => pr.id != id ? pr : ({
            ...pr,
            quantity
         }))
      );
   }

   const sumPrice = (quantity, price) => {
      return quantity * price;
   }

   return (
   <>
   <h3>Корзина покупателя</h3>
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
               <td>{ sumPrice(pr.quantity, pr.price)}</td>
            </tr>
         ))}
      </tbody>
   </table>
   <hr/>
   <table>
      <tbody>
         {
            <tr>
               <td><label>Общая сумма товаров:</label></td>
               <td>5</td>
            </tr>
         }
      </tbody>
   </table>
   </>
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
         "MaximumQuantity": 7,
         "quantity": 1
      },
      {
         "id": 74265,
         "category": "Смартфон",
         "title": "Samsung Galaxy A33",
         "price": 23990,
         "MaximumQuantity": 5,
         "quantity": 1
      },
      {
         "id": 357946,
         "category": "Смартфон",
         "title": "realme C35",
         "price": 10366,
         "MaximumQuantity": 2,
         "quantity": 1
      },
      {
         "id": 48269,
         "category": "Смартфон",
         "title": "Xiaomi Redmi Note 10S",
         "price": 18999,
         "MaximumQuantity": 3,
         "quantity": 1
      },
      {
         "id": 28193,
         "category": "Смартфон",
         "title": "Vivo Y33s",
         "price": 15990,
         "MaximumQuantity": 6,
         "quantity": 1
      },
   ]
}