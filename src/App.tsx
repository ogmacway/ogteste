import { Search } from 'lucide-react';

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5548992050264', '_blank');
  };

  const handleCTAClick = () => {
    const whatsappSection = document.getElementById('whatsapp-section');
    whatsappSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(250,66,121,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(118,58,91,0.1),transparent_50%)]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight"
              style={{ color: '#FA4279' }}>
            <span className="whitespace-nowrap">Ferramentas Holísticas</span><br />Anti-Stress
          </h1>

          <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
            <img
              src="/hero2.png"
              alt="O Segredo dos Terapeutas"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed max-w-4xl mx-auto px-2">
            Conheça o segredo dos terapeutas para a cura da <span className="font-bold whitespace-nowrap">DOENÇA DO SÉCULO</span>
          </p>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="bg-white py-8 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* CNN Header Bar */}
          <div className="flex items-center justify-between py-3 sm:py-4 mb-6 sm:mb-8 border-b-4 border-red-600">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 text-white font-black text-xl sm:text-2xl px-2 sm:px-3 py-1 tracking-tight">
                CNN
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            OMS DECLARA A "DOENÇA DO SÉCULO" E 8 EM CADA 10 BRASILEIROS ESTÃO EM RISCO!
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Descubra como o <strong>stress crônico</strong> está silenciosamente destruindo sua saúde,
            relacionamentos e carreira, e a solução milenar que está escondida entre os maiores terapeutas
          </p>

          {/* YouTube Video */}
          <div className="aspect-video bg-gray-900 rounded-lg mb-6 sm:mb-8 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/pFZCXGecOhM?si=t0m-3arEKGguKcyx"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Article Content */}
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-800 leading-relaxed">
            <p>
              O estresse, definido pela <strong>Organização Mundial de Saúde (OMS)</strong> como um estado
              de preocupação ou tensão mental em situações de adversidade, preocupa por possivelmente ter{' '}
              <strong>atividade transmissível</strong> entre os seres vivos, incluindo os humanos.
            </p>

            <blockquote className="border-l-4 border-red-600 pl-4 sm:pl-6 italic text-gray-700 my-6 sm:my-8 text-sm sm:text-base">
              "Se considerarmos o estresse como um fenômeno que pode ser transmitido de uma pessoa para outra,
              a convivência próxima com indivíduos estressados pode amplificar o problema em grupos sociais.
              O resultado é um ciclo vicioso, no qual o estresse é constantamente alimentado e retransmitido,
              criando uma espécie de contágio emocional que afeta grandes porções da sociedade"
            </blockquote>

            <p>
              Se você quer se proteger e proteger quem você ama, você precisa do conhecimento e das ferramentas certas.
              O que muitos terapeutas não revelam é que, o estresse, nada mais é do que um desequilíbrio emocional,
              um balanço energético e a desestabilização interna. Abaixo, você vai conhecer o segredo dos terapeutas
              holísticos para acabar com seu estresse ou de seus pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#763a5b' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 border-2 border-white/20 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight px-2"
                style={{ color: '#FA4279', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Clique aqui e descubra a cura!
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-relaxed px-2">
              O stress está crescendo cada vez mais, aprenda o que está escondido entre os terapeutas para acabar com essa doença.
            </p>
          </div>
          <button
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg sm:text-xl md:text-2xl font-bold px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-green-500/50"
          >
            DESCOBRIR SEGREDO DOS TERAPEUTAS
          </button>
        </div>
      </section>

      {/* WHATSAPP SECTION */}
      <section id="whatsapp-section" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 font-semibold mb-8 sm:mb-10 leading-relaxed px-2">
            Se preferir, entre em contato conosco agora mesmo.<br />
            Teremos o prazer de te atender pessoalmente!
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg sm:text-xl md:text-2xl font-bold px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-green-500/50"
          >
            <img src="/logo whatsapp.png" alt="WhatsApp" className="w-7 h-7 sm:w-8 sm:h-8" />
            ENTRAR EM CONTATO
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
