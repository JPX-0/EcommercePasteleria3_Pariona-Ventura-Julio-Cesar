import product1 from "../assets/products/product1.jpg";
import product2 from "../assets/products/product2.jpg";
import product3 from "../assets/products/product3.jpg";

const data = [
  {
    id:1,
    title: "Pastel de Médico",
    stock: 5,
    initial: 1,
    price: 15,
    thumbnail: `${product1}`,
    description: "Pastel de Médico"
  },
  {
    id:2,
    title: "Pastel de Quinceañera",
    stock: 20,
    initial: 1,
    price: 25,
    thumbnail: `${product2}`,
    description: "Pastel de Quinceañera"
  },
  {
    id:3,
    title: "Pastel de Estudios",
    stock: 8,
    initial: 1,
    price: 18,
    thumbnail: `${product3}`,
    description: "Pastel de Estudios"
  }
];
export default data;