import woven from "../../assets/images/products/woven.png";
import printed from "../../assets/images/products/printed-label.png";
import hangTag from "../../assets/images/products/hang-tag.png";
import ribbon from "../../assets/images/products/ribbon.png";
import packaging from "../../assets/images/products/packaging.png";
import accessories from "../../assets/images/products/accessories.png";

export const products = [
  {
    id: 1,
    title: "Woven Labels",
    image: woven,
    description: "Premium woven labels with exceptional quality.",
    link: "/products/woven-labels",
    
  },
  {
    id: 2,
    title: "Printed Labels",
    image: printed,
    description: "High-quality printed labels.",
    link: "/products/printed-labels",
    
  },
  {
    id: 3,
    title: "Hang Tags",
    image: hangTag,
    description: "Luxury hang tags.",
    link: "/products/hang-tags",
    
  },
  {
    id: 4,
    title: "Ribbons",
    image: ribbon,
    description: "Elegant woven ribbons.",
    link: "/products/ribbons",
    
  },
  {
    id: 5,
    title: "Packaging",
    image: packaging,
    description: "Premium packaging.",
    link: "/products/packaging",
    
  },
  {
    id: 6,
    title: "Accessories",
    image: accessories,
    description: "Complete textile accessories.",
    link: "/products/accessories",
    
  },
];
console.log(products[1].image);
