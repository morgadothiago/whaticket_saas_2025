import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-300 to-slate-800">
      <Header />
      <div className="container mx-auto flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-4xl font-extrabold mb-4 text-white text-center">Bem-vindo à nossa plataforma!</h1>
        <p className="text-lg mb-8 text-gray-200 text-center">Crie sua conta e comece a explorar nossos serviços.</p>
        <Card className="p-8 shadow-lg max-w-md w-full bg-white">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Pronto para começar?</h2>
          <div className="space-y-4">
            <Button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200" asChild>
              <a href="/page/signup">Criar Conta</a>
            </Button>
            <Button variant="outline" className="w-full py-3 rounded-lg" asChild>
              <a href="/page/signin">Já tenho uma conta</a>
            </Button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
