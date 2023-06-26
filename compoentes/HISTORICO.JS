import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';

const Historico = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('AIzaSyBCUlC-SjXLxw2P4ssFMFY-qieChbwj-zo');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div>
        <div key={item.id}>
        <p>{item.nome}</p>
        <p>{item.inicial}</p>
        <p>{item.final}</p>
        <p>{item.professor}</p>
        <p>{item.dias}</p>
      </div>
      <Navbar/>
    </div>
  );
};

export default Historico;
