import React from "react";
import { Container, Card } from "react-bootstrap";

const ProductCard = ({ pokemon }) => {
  // Generar un precio aleatorio entre 1000 y 11000                  
  const randomPrice = (Math.random() * 10000 + 1000).toFixed(2);                            

  return (              
    <div>
      <Card className="m-2">
         <Card.Img 
         src={pokemon.sprites.front_default} 
         className="card-img-top" 
         alt={pokemon.name} />                   
      <Card.Body>       
        <Card.Title className="fw-bold text-capitalize">{pokemon.name}</Card.Title>              
        <Card.Text className="mb-1 text-success">${randomPrice}</Card.Text>
        <button className="btn btn-success w-100">Seleccionar</button>             
      </Card.Body>        
      </Card>                      
    </div>                              
  );
};

export default ProductCard; 
