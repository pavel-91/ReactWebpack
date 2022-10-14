import React, { useState } from "react";
import { Button } from "@mui/material";
import '../../main.scss';
import MinMax from "./MinMax";


const App = () => {
   const [ products, setProducts ] = useState(ProductsStub());
   const setCnt = (id, cnt) => {
      setProducts(
         products.map(pr => pr.id != id ? pr : ({
            ...pr,
            cnt
         }))
      );
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
            <th>Cnt</th>
         </tr>
         { products.map((pr, i) => (
            <tr key={ pr.id }>
               <td>{ i + 1 }</td>
               <td>{ pr.id }</td>
               <td>{ pr.category }</td>
               <td>{ pr.title }</td>
               <td>{ pr.price }</td>
               <td>
                  <MinMax max={ pr.rest } current={ pr.cnt } onChange={cnt => setCnt(pr.id, cnt)}/>
               </td>
            </tr>
         ))}
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
         "rest": 7,
         "cnt": 1
      },
      {
         "id": 74265,
         "category": "Смартфон",
         "title": "Samsung Galaxy A33",
         "price": 23990,
         "rest": 5,
         "cnt": 1
      },
      {
         "id": 357946,
         "category": "Смартфон",
         "title": "realme C35",
         "price": 10366,
         "rest": 2,
         "cnt": 1
      },
      {
         "id": 48269,
         "category": "Смартфон",
         "title": "Xiaomi Redmi Note 10S",
         "price": 18999,
         "rest": 3,
         "cnt": 1
      },
      {
         "id": 28193,
         "category": "Смартфон",
         "title": "Vivo Y33s",
         "price": 15990,
         "rest": 6,
         "cnt": 1
      },
   ]
}