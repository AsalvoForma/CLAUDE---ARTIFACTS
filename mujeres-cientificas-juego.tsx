import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Datos de científicas notables
const cientificas = [
  {
    nombre: "Marie Curie",
    area: "Física y Química",
    logro: "Primera persona en ganar dos premios Nobel en diferentes campos",
    pista1: "Descubrí el radio y el polonio",
    pista2: "Mis investigaciones sobre radiactividad fueron revolucionarias",
    imagen: "/api/placeholder/200/250"
  },
  {
    nombre: "Ada Lovelace",
    area: "Informática",
    logro: "Considerada la primera programadora de computadoras",
    pista1: "Trabajé con máquinas analíticas antes de que existieran las computadoras",
    pista2: "Escribí el primer algoritmo destinado a ser procesado por una máquina",
    imagen: "/api/placeholder/200/250"
  },
  {
    nombre: "Jane Goodall",
    area: "Primatología",
    logro: "Experta mundial en chimpancés y defensora de la conservación",
    pista1: "Estudié el comportamiento de los chimpancés en su hábitat natural",
    pista2: "Descubrí que los chimpancés hacen y usan herramientas",
    imagen: "/api/placeholder/200/250"
  },
  {
    nombre: "Katherine Johnson",
    area: "Matemáticas",
    logro: "Matemática crucial para el programa espacial de la NASA",
    pista1: "Mis cálculos fueron esenciales para los vuelos espaciales",
    pista2: "Ayudé a Estados Unidos a ganar la carrera espacial",
    imagen: "/api/placeholder/200/250"
  }
];

const JuegoMujeresCientificas = () => {
  const [cientificaActual, setCientificaActual] = useState(null);
  const [mostrarPista1, setMostrarPista1] = useState(false);
  const [mostrarPista2, setMostrarPista2] = useState(false);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const seleccionarCientifica = () => {
    const cientifica = cientificas[Math.floor(Math.random() * cientificas.length)];
    setCientificaActual(cientifica);
    setMostrarPista1(false);
    setMostrarPista2(false);
    setMostrarRespuesta(false);
  };

  const mostrarPista = (numero) => {
    if (numero === 1) {
      setMostrarPista1(true);
    } else {
      setMostrarPista2(true);
    }
  };

  const revelarRespuesta = () => {
    setMostrarRespuesta(true);
    setMostrarPista1(true);
    setMostrarPista2(true);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card className="w-full">
        <CardHeader className="bg-pink-100">
          <CardTitle className="text-center text-2xl font-bold text-pink-800">
            🔬 Descubre a la Científica 🔬
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">
              ¡Celebrando el Día Internacional de la Mujer y la Niña en la Ciencia! 🌟
            </h2>

            {!cientificaActual && (
              <Button 
                onClick={seleccionarCientifica}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                Comenzar Juego
              </Button>
            )}

            {cientificaActual && (
              <div>
                <div className="mb-4">
                  <img 
                    src={cientificaActual.imagen} 
                    alt="Científica misteriosa" 
                    className="mx-auto mb-4 rounded-lg shadow-md"
                  />

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <Button 
                      onClick={() => mostrarPista(1)}
                      disabled={mostrarPista1}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Pista 1
                    </Button>
                    <Button 
                      onClick={() => mostrarPista(2)}
                      disabled={mostrarPista2}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Pista 2
                    </Button>
                    <Button 
                      onClick={revelarRespuesta}
                      className="bg-purple-500 hover:bg-purple-600 text-white"
                    >
                      Revelar Científica
                    </Button>
                  </div>

                  {mostrarPista1 && (
                    <div className="bg-yellow-100 p-3 rounded-lg mb-2">
                      <strong>Pista 1:</strong> {cientificaActual.pista1}
                    </div>
                  )}

                  {mostrarPista2 && (
                    <div className="bg-yellow-100 p-3 rounded-lg mb-2">
                      <strong>Pista 2:</strong> {cientificaActual.pista2}
                    </div>
                  )}

                  {mostrarRespuesta && (
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h3 className="text-2xl font-bold mb-2">{cientificaActual.nombre}</h3>
                      <p><strong>Área:</strong> {cientificaActual.area}</p>
                      <p><strong>Logro destacado:</strong> {cientificaActual.logro}</p>
                    </div>
                  )}

                  <Button 
                    onClick={seleccionarCientifica}
                    className="mt-4 bg-pink-500 hover:bg-pink-600 text-white"
                  >
                    Siguiente Científica
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JuegoMujeresCientificas;
