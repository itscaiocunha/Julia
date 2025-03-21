import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, CalendarCheck, Calendar, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const integrations = [
  { img: "/images/logo/Gympass-Logo.png", name: "Gympass", url: "https://www.Gympass.com.br/" },
  { img: "/images/logo/Stone-Logo.png", name: "Stone", url: "https://stone.com.br/" },
  { img: "/images/logo/FidelizarMais-Logo.png", name: "Fidelizar Mais", url: "https://fidelizarmais.co/" },
  { img: "/images/logo/WhatsApp-Logo.png", name: "WhatsApp Business", url: "https://business.whatsapp.com/" },
  { img: "/images/logo/GoogleMeet-Logo.png", name: "Google Meet", url: "https://meet.google.com/landing" },
  { img: "/images/logo/HubSpot-Logo.png", name: "HubSpot", url: "https://www.HubSpot.com.br/" },
  { img: "/images/logo/MercadoPago-Logo.png", name: "Mercado Pago", url: "https://MercadoPago.com.br/" },
  { img: "/images/logo/Zoom-Logo.png", name: "Zoom", url: "https://www.zoom.com/pt" },
  { img: "/images/logo/PayPal-Logo.png", name: "PayPal", url: "https://www.paypal.com/br/home" },
  { img: "/images/logo/Trustpilot-Logo.png", name: "Trustpilot", url: "https://Trustpilot.com.br/" }
];

function Academia() {

  // Novo estado para controlar o fluxo do formulário
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário completo
    console.log('Dados completos do formulário:', formData);
    alert('Agendamento recebido! Entraremos em contato em breve.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Head Section */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="w-32" src="/images/logo.png" alt="logo Julia" />
          </div>
          <a
            href="#cadastro"
            className="bg-blue-500 hover:opacity-90 text-white px-6 py-2 text-black rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="Fale Conosco"
          >
            Fale Conosco
          </a>
        </nav>
      </header>


      {/* CTA + WhatsApp Demo Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 w-full md:w-[90%] lg:w-[100%] bg-gradient-to-b from-[#f9e863] to-[#ff9100] bg-clip-text text-transparent">
              Atenda seus alunos com um plano ideal e personalizado para cada necessidade!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Aumente o número de clientes da sua academia com um atendimento rápido e personalizado!  Detalhes de planos,  assinaturas e suporte 24 horas!
            </p>
            <div className="flex gap-4">
              <a href="#teste">
                <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-[24px] text-black font-medium flex items-center gap-2 transition-colors">
                  Testar agora <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            <img className="w-full max-w-[800px]" src="/images/Academia.png" alt="Conversa de atendimento virtual para academia" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Veja como a Julia aumenta suas vendas</h2>
          <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden bg-gray-800">
            <iframe
              className="w-full h-full"
              src="https://w7startup.com.br/video/Academia.mp4"
              title="JulIA Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Como a Julia revoluciona o atendimento na sua academia
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CalendarCheck className="w-8 h-8 text-blue-400" />,
                title: "Inscrições e agendamentos automatizados",
                description: "Facilite a matrícula de novos alunos e a reserva de aulas, reduzindo burocracia e otimizando a experiência dos clientes."
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-teal-400" />,
                title: "Atendimento rápido e personalizado",
                description: "Responda dúvidas sobre planos, horários e treinos de forma instantânea, garantindo suporte eficiente e humanizado."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
                title: "Segurança e praticidade",
                description: "Proteja os dados dos alunos e ofereça uma experiência segura, garantindo conformidade com as normas de privacidade."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Integrações Poderosas</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Nossa plataforma se integra perfeitamente com as principais ferramentas do mercado
          </p>
        </div>

        {/* Carrossel Swiper */}
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true} // Ativando rotação infinita
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Mantendo autoplay
          modules={[Autoplay]} // Removendo paginação e navegação
          className="mb-12"
        >
          {integrations.map(({ img, name, url }) => (
            <SwiperSlide key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-3 group-hover:border-blue-500 border border-transparent transition-all duration-300">
                  <img src={img} alt={name} className="w-28 h-28 object-contain" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors">{name}</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>


        {/* Contador de integrações */}
        <h3 className="text-3xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-b from-[#f9e863] to-[#ff9100] from-blue-400 to-purple-500 text-transparent bg-clip-text">+ 500</span> integrações
        </h3>
      </section>

      {/* Test AI Section */}
      <section id="teste" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experimente a Julia agora mesmo
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Teste nossa IA e veja como ela pode revolucionar seu atendimento
            </p>
            <div className="overflow-hidden rounded-2xl border border-gray-300">
              <iframe
                id="zaia-iframe"
                src="https://platform.zaia.app/embed/chat/17834"
                className="w-full h-80"
                style={{ border: "none" }}
              ></iframe>
            </div>
            <p className="text-lg text-gray-400 mt-4">
              Esta é uma versão de demonstração. Para acesso completo, agende uma demonstração abaixo.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Demo Section */}
      <section id="cadastro" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Agende um bate-papo para saber mais
          </h2>
          <button
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 text-black text-[24px] rounded-full font-medium flex items-center gap-2 transition-colors"
            onClick={() => window.open('https://share.hsforms.com/1CCnSfBE9SWWulIUs8cbDsAblq37', '_blank')}
          >
            <Calendar className="w-5 h-5" /> Marcar reunião
          </button>


          {/* <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Agende uma Demonstração
            </h2>
            <div className="bg-gray-800/50 rounded-2xl p-8"> */}
          {/* Indicador de progresso */}
          {/* <div className="flex justify-between mb-8">
                <div className={`flex items-center ${formStep >= 1 ? 'text-blue-500' : 'text-gray-500'}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      formStep >= 1 ? 'border-blue-500 bg-blue-500/20' : 'border-gray-500'
                    }`}
                  >
                    1
                  </div>
                  <span className="ml-2 text-sm">Desafio</span>
                </div>
                <div className={`flex items-center ${formStep >= 2 ? 'text-blue-500' : 'text-gray-500'}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      formStep >= 2 ? 'border-blue-500 bg-blue-500/20' : 'border-gray-500'
                    }`}
                  >
                    2
                  </div>
                  <span className="ml-2 text-sm">Volume</span>
                </div>
                <div className={`flex items-center ${formStep >= 3 ? 'text-blue-500' : 'text-gray-500'}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      formStep >= 3 ? 'border-blue-500 bg-blue-500/20' : 'border-gray-500'
                    }`}
                  >
                    3
                  </div>
                  <span className="ml-2 text-sm">Dados</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img className="w-32" src="/images/logo.png" alt="logo Julia" />
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-b from-[#f9e863] to-[#ff9100] from-blue-400 to-purple-500 text-transparent bg-clip-text">
              <a href="https://www.instagram.com/hello.juliabr/">Instagram</a> |
              <a href="https://www.linkedin.com/company/hellojulia/">Linkedin</a> |
              <a href="mailto:ola@hellojulia.com.br">E-mail</a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Julia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Academia;