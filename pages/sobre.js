import React from 'react';
import Link from 'next/link';
import PageTitle from '../components/PageTitle';

const Sobre = () => {
  return (
    <div>
      <PageTitle title="Sobre" />
      <h1 className="text-center font-bold my-4 text-xl">Sobre este projeto</h1>
      <p className="text-center mb-6">
        Este projeto tem como objetivo reunir sujestoẽs de clientes,
        <br />
        para que os estabelecimentos possam estar sempre melhorando o
        atendimento ao cliente
      </p>
    </div>
  );
};
export default Sobre;
