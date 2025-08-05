import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  Award,
  Network,
  Star,
  Zap,
  Target,
  TrendingUp,
  Users,
  BookOpen,
  Lightbulb,
  Trophy,
  ArrowRight,
  Phone,
  Globe,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* WhatsApp Floating Button */}
      <a
        href="https://pay.kiwify.com.br/h89Xh6V"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 group"
        aria-label="Ir para o Checkout"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8">
          <path d="M12 2L2 7l10 5 10-5-10-5Z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          !
        </div>
      </a>

      {/* Fixed Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-2 sm:py-3 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-center">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
            <p className="font-bold text-xs sm:text-sm md:text-base">VAGAS LIMITADAS • INSCREVA-SE JÁ!</p>
          </div>
        </div>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-slate-900 via-red-900 to-yellow-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left space-y-6 lg:space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                  <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    GM
                  </span>
                  <span className="hidden sm:inline">PROGRAMA DE ALTA PERFORMANCE</span>
                  <span className="sm:hidden">PROGRAMA</span>
                </div>

                {/* Napoleon Quote */}
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl mb-6">
                  <blockquote className="text-sm sm:text-base italic text-yellow-200 mb-2">
                    "Não existem maus soldados, somente maus comandantes"
                  </blockquote>
                  <cite className="text-xs sm:text-sm text-white/80 font-semibold">— Napoleão Bonaparte</cite>
                </div>

                {/* Main Headline with Logo */}
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <Image
                      src="/logogerentemelhor.jpg"
                      alt="Como Ser um Gerente Melhor Logo"
                      width={400}
                      height={200}
                      className="w-64 h-32 sm:w-80 sm:h-40 lg:w-96 lg:h-48 object-contain"
                    />
                  </div>
                  <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mx-auto lg:mx-0 mb-4 sm:mb-8"></div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    O Programa de Alta Performance que vai ensinar{" "}
                    <span className="text-yellow-400 font-bold">técnicas e metodologias avançadas</span>, melhorando seu
                    gerenciamento e desenvolvimento profissional.
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
                  {[
                    "10 módulos de 3-4h cada",
                    "Pasta + Livro + E-Books",
                    "Certificado incluso",
                    "MARINGÁ, Início em Agosto",
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg"
                    >
                      <div className="bg-green-500 p-1 rounded-full flex-shrink-0">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      </div>
                      <span className="text-slate-200 text-xs sm:text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Button */}
                <div className="pt-4 sm:pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="group relative bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-700 hover:via-red-600 hover:to-yellow-600 text-white font-black text-base sm:text-lg px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 rounded-2xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 transform hover:scale-105 w-full sm:w-auto overflow-hidden"
                  >
                    <a
                      href="https://pay.kiwify.com.br/h89Xh6V"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 relative z-10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
                      <span className="relative">INSCREVA-SE JÁ!</span>
                      <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>

                {/* Social Proof */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex -space-x-1 sm:-space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-400 to-yellow-500 rounded-full border-2 border-white"
                        ></div>
                      ))}
                    </div>
                    <span className="text-slate-200 text-xs sm:text-sm">+1000 gerentes treinados</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-slate-200 text-xs sm:text-sm ml-1">4.9/5</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Program Info Card */}
              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="w-full max-w-sm lg:max-w-md">
                  <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl">
                    
                    {/* Pricing */}
                    <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-xl p-4 sm:p-6 text-white text-center">
                      <div className="text-xs sm:text-sm text-white/80 mb-2">Investimento</div>
                      
                      {/* 1º Lote */}
                      <div className="mb-3 p-2 bg-green-500/20 rounded-lg">
                        <div className="text-xs text-green-300 font-bold mb-1">1º LOTE</div>
                        <div className="text-xl sm:text-2xl font-black text-white mb-1">10x R$ 97,00</div>
                        <div className="text-xs text-green-300">até 15/8</div>
                      </div>
                      
                      {/* 2º Lote */}
                      <div className="p-2 bg-yellow-500/20 rounded-lg">
                        <div className="text-xs text-yellow-300 font-bold mb-1">2º LOTE</div>
                        <div className="text-xl sm:text-2xl font-black text-white mb-1">10x R$ 197,00</div>
                        <div className="text-xs text-yellow-300">após 15/8</div>
                      </div>
                      
                      <div className="text-xs sm:text-sm text-white/90 font-semibold mt-2">*Nos cartões</div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="relative h-12 sm:h-16 md:h-24">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Target Audience - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />A QUEM SE DESTINA
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-red-900 mb-4 sm:mb-6">
                PARA QUEM É O <span className="text-red-600">PROGRAMA?</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                Diretores, Gerentes, Supervisores, Encarregados e Líderes de Setores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: Users,
                  title: "Diretores",
                  description: "Profissionais em cargos de direção",
                  color: "red",
                  gradient: "from-red-500 to-red-600",
                  bgGradient: "from-red-50 to-red-100",
                },
                {
                  icon: Target,
                  title: "Gerentes",
                  description: "Gestores de áreas e departamentos",
                  color: "yellow",
                  gradient: "from-yellow-500 to-yellow-600",
                  bgGradient: "from-yellow-50 to-yellow-100",
                },
                {
                  icon: TrendingUp,
                  title: "Supervisores",
                  description: "Profissionais de supervisão",
                  color: "red",
                  gradient: "from-red-500 to-yellow-500",
                  bgGradient: "from-red-50 to-yellow-50",
                },
                {
                  icon: Award,
                  title: "Líderes",
                  description: "Encarregados e líderes de setores",
                  color: "yellow",
                  gradient: "from-yellow-500 to-red-500",
                  bgGradient: "from-yellow-50 to-red-50",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="text-center p-6 sm:p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-50`}></div>
                  <div className="relative z-10">
                    <div
                      className={`bg-gradient-to-r ${item.gradient} p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                    >
                      <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button
                asChild
                size="lg"
                className="group relative bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-700 hover:via-red-600 hover:to-yellow-600 text-white font-black text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden"
              >
                <a
                  href="https://pay.kiwify.com.br/h89Xh6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 relative z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">QUERO PARTICIPAR</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300 relative" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Modules - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                CONTEÚDO DOS MÓDULOS
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 px-4">
                O QUE VOCÊ VAI <span className="text-yellow-600">APRENDER</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto px-4 leading-relaxed">
                10 encontros com conteúdo completo e metodologia prática
              </p>
            </div>

            {/* Program Modules Image */}
            <div className="flex justify-center mb-12 sm:mb-16">
              <div className="w-full max-w-4xl">
                <Image
                  src="/program-modules.jpg"
                  alt="Módulos do Programa Como Ser um Gerente Melhor"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Modules List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  number: "01",
                  title: "Gestão da Mudança & Planejamento",
                  subtitle: "O Princípio da Excelência",
                  color: "bg-gradient-to-r from-gray-500 to-gray-600",
                },
                {
                  number: "02",
                  title: "Atributos da Liderança",
                  subtitle: "Na Retenção de Talentos",
                  color: "bg-gradient-to-r from-orange-500 to-orange-600",
                },
                {
                  number: "03",
                  title: "O Poder do Marketing Pessoal",
                  subtitle: "E da Inteligência Emocional",
                  color: "bg-gradient-to-r from-purple-500 to-purple-600",
                },
                {
                  number: "04",
                  title: "Como Melhorar sua Comunicação",
                  subtitle: "Oratória Básica e Como Fazer Reuniões Práticas",
                  color: "bg-gradient-to-r from-blue-500 to-blue-600",
                },
                {
                  number: "05",
                  title: "Autoliderança",
                  subtitle: "Como Administrar Melhor seu Tempo",
                  color: "bg-gradient-to-r from-pink-500 to-pink-600",
                },
                {
                  number: "06",
                  title: "Desenvolvimento de Equipes",
                  subtitle: "Formação e Gestão de Times",
                  color: "bg-gradient-to-r from-teal-500 to-teal-600",
                },
                {
                  number: "07",
                  title: "Como Motivar e Avaliar",
                  subtitle: "O Desempenho da sua Equipe",
                  color: "bg-gradient-to-r from-green-500 to-green-600",
                },
                {
                  number: "08",
                  title: "Como Delegar no Método TAC",
                  subtitle: "A Arte de dar Feedback",
                  color: "bg-gradient-to-r from-blue-600 to-blue-700",
                },
                {
                  number: "09",
                  title: "Como Elaborar um Manual",
                  subtitle: "De Ética e Normas Internas",
                  color: "bg-gradient-to-r from-red-500 to-red-600",
                },
                {
                  number: "10",
                  title: "O Gerente Minuto",
                  subtitle: "Técnicas de Gestão Eficiente",
                  color: "bg-gradient-to-r from-purple-600 to-purple-700",
                },
              ].map((module, index) => (
                <Card
                  key={index}
                  className="p-6 sm:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`${module.color} text-white p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="font-black text-lg">{module.number}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-2">{module.title}</h3>
                      <p className="text-slate-600 text-sm sm:text-base">{module.subtitle}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-red-900 to-yellow-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                RAZÕES PARA PARTICIPAR
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-4">
                O QUE VOCÊ VAI <span className="text-yellow-400">CONQUISTAR</span>
              </h2>
              <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg lg:text-xl text-red-100 max-w-3xl mx-auto px-4">
                Transformações reais que você experimentará ao concluir o programa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Target,
                  title: "Consciência do Papel Gerencial",
                  description:
                    "Você estará mais consciente sobre a importância do papel do Gerente no alcance de melhores resultados",
                  gradient: "from-red-600 to-red-700",
                },
                {
                  icon: Users,
                  title: "Formação de Equipes",
                  description: "Você estará mais capacitado para formar equipes orientadas para as metas",
                  gradient: "from-yellow-600 to-yellow-700",
                },
                {
                  icon: Network,
                  title: "Relacionamentos Interpessoais",
                  description: "Você aprenderá a fortalecer relacionamentos interpessoais",
                  gradient: "from-red-600 to-yellow-600",
                },
                {
                  icon: TrendingUp,
                  title: "Gestão de Mudanças",
                  description: "Você compreenderá como lidar melhor com as mudanças",
                  gradient: "from-yellow-600 to-red-600",
                },
                {
                  icon: Lightbulb,
                  title: "Comunicação Persuasiva",
                  description:
                    "Você estará mais bem preparado para ser um comunicador persuasivo e um Gerente mais focado",
                  gradient: "from-red-500 to-yellow-500",
                },
                {
                  icon: Trophy,
                  title: "Criação de Soluções",
                  description:
                    "Você estará mais bem preparado para ser um criador de soluções e um Gerente mais engajado",
                  gradient: "from-yellow-500 to-red-500",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className={`group hover:scale-105 transition-all duration-300 border-0 shadow-xl hover:shadow-2xl bg-gradient-to-br ${benefit.gradient} text-white overflow-hidden`}
                >
                  <div className="p-6 sm:p-8 relative">
                    <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-full w-fit mb-4 sm:mb-6">
                      <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">{benefit.title}</h3>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 sm:mt-16">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4 sm:mb-6">
                  🎯 DESENVOLVA UMA EQUIPE MAIS CONSCIENTE
                </h3>
                <p className="text-red-100 text-base sm:text-lg mb-6 sm:mb-8">
                  Você saberá como desenvolver uma equipe mais consciente e preparada para os desafios do mercado.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="group relative bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-700 hover:via-red-600 hover:to-yellow-600 text-white font-black text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500 w-full sm:w-auto overflow-hidden"
                >
                  <a
                    href="https://pay.kiwify.com.br/h89Xh6V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 relative z-10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Trophy className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce relative" />
                    <span className="relative">QUERO ME DESENVOLVER AGORA</span>
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300 relative" />
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                METODOLOGIA
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 px-4">
                COMO VOCÊ VAI <span className="text-red-600">APRENDER</span>
              </h2>
              <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
                O Programa trabalha com estudo de práticas de Liderança e Equipe, com recursos multimídia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[
                {
                  icon: BookOpen,
                  title: "Estudo de Práticas",
                  description: "Práticas de Liderança e Equipe comprovadas",
                  color: "bg-gradient-to-br from-red-500 to-red-600",
                },
                {
                  icon: Users,
                  title: "Dinâmicas Práticas",
                  description: "Exercícios e simulações para fixação",
                  color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
                },
                {
                  icon: Lightbulb,
                  title: "Recursos Multimídia",
                  description: "Técnicas de transmissão e fixação de conceitos",
                  color: "bg-gradient-to-br from-red-500 to-yellow-500",
                },
                {
                  icon: Target,
                  title: "Trabalhos Aplicados",
                  description: "Atividades em sala e resumos práticos",
                  color: "bg-gradient-to-br from-yellow-500 to-red-500",
                },
              ].map((method, index) => (
                <Card
                  key={index}
                  className="text-center p-6 sm:p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div
                    className={`${method.color} p-4 sm:p-6 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-3 sm:mb-4">{method.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base">{method.description}</p>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-slate-900 to-red-900 text-white border-0 shadow-2xl overflow-hidden">
              <div className="p-8 sm:p-12 lg:p-16 relative">
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 sm:mb-8">
                    📚 INCLUI MATERIAL COMPLETO
                  </h3>
                  <p className="text-red-100 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
                    Os conceitos são absorvidos de maneira prazerosa pelo participante, porém altamente úteis e
                    reflexivos.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {[
                      { icon: "📁", title: "Pasta Completa", desc: "Material organizado" },
                      { icon: "📖", title: "Livro Incluso", desc: "Conteúdo para consulta" },
                      { icon: "💻", title: "E-Books", desc: "Material digital" },
                      { icon: "🏆", title: "Certificado", desc: "Reconhecimento oficial" },
                    ].map((item, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                        <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-red-200 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                CONSULTORES & INSTRUTORES
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 px-4">
                CONHEÇA SEUS <span className="text-yellow-600">INSTRUTORES</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Amauri Crozariolli */}
              <Card className="bg-white border-0 shadow-2xl overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden shadow-xl mb-4">
                      <Image
                        src="/amauri-crozariolli.png"
                        alt="Amauri Crozariolli - Instrutor"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">AMAURI CROZARIOLLI</h3>
                    <div className="text-yellow-600 font-bold text-sm">CONSULTOR & INSTRUTOR</div>
                  </div>

                  <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      <strong>Graduado em Ciências Contábeis</strong>, Pós-Graduado em Finanças e em Consultoria
                      Empresarial.
                    </p>
                    <p>
                      <strong>Professor de Pós-Graduação</strong> em Marketing Pessoal e Comunicação no Processo de
                      Vendas.
                    </p>
                    <p>
                      <strong>Especialista em Management of Financial Services Cooperative</strong>, pela L'École das
                      Hautes.
                    </p>
                    <p>
                      Atua como <strong>Consultor Empresarial e Palestrante Motivacional</strong> nas áreas de Vendas,
                      Atendimento ao Cliente, Empreendedorismo, Cooperativismo e Liderança.
                    </p>
                  </div>
                </div>
              </Card>

              {/* José Carlos Poli */}
              <Card className="bg-white border-0 shadow-2xl overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden shadow-xl mb-4">
                      <Image
                        src="/jose-carlos-poli.png"
                        alt="José Carlos Poli - Instrutor"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">JOSÉ CARLOS POLI</h3>
                    <div className="text-yellow-600 font-bold text-sm">CONSULTOR & INSTRUTOR</div>
                  </div>

                  <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      <strong>Especialista em Desenvolvimento Gerencial</strong> com vasta experiência em treinamentos
                      corporativos.
                    </p>
                    <p>
                      <strong>Consultor Empresarial</strong> com foco em liderança e gestão de equipes.
                    </p>
                    <p>
                      <strong>Facilitador</strong> em programas de desenvolvimento de competências gerenciais.
                    </p>
                    <p>
                      Atua como <strong>Instrutor e Conferencista</strong> em empresas de diversos segmentos,
                      desenvolvendo líderes e gestores.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment - Mobile Optimized */}
      <section
        id="investimento"
        className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-red-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"></path>
                  <path d="M12 18v2"></path>
                  <path d="M12 6V4"></path>
                </svg>
                INVESTIMENTO
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 px-4">
                DESENVOLVA SUA LIDERANÇA POR <span className="text-yellow-400">APENAS</span>
              </h2>
              <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
            </div>

            {/* Pricing Card */}
            <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
              <Card className="bg-gradient-to-br from-red-600 to-yellow-600 border-0 text-center p-8 sm:p-12 lg:p-16 hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-black text-sm font-black py-3 animate-pulse">
                  🔥 VAGAS LIMITADAS - INSCREVA-SE JÁ!
                </div>
                <div className="pt-8">
                  <div className="bg-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 inline-block">
                    INÍCIO EM AGOSTO
                  </div>
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-4">10x</div>
                  
                  {/* 1º Lote */}
                  <div className="mb-4 p-3 bg-green-500/20 rounded-xl">
                    <div className="text-sm text-green-300 font-bold mb-2">1º LOTE</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1">R$ 97,00</div>
                    <div className="text-sm text-green-300">até 15/8</div>
                  </div>
                  
                  {/* 2º Lote */}
                  <div className="mb-4 p-3 bg-yellow-500/20 rounded-xl">
                    <div className="text-sm text-yellow-300 font-bold mb-2">2º LOTE</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1">R$ 197,00</div>
                    <div className="text-sm text-yellow-300">após 15/8</div>
                  </div>
                  
                  <p className="text-red-100 font-bold mb-8 text-lg">*Nos cartões</p>
                  <Button
                    asChild
                    className="group w-full bg-white text-red-600 hover:bg-red-50 font-black py-6 rounded-2xl flex items-center justify-center gap-3 text-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <a
                      href="https://pay.kiwify.com.br/h89Xh6V"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Zap className="h-6 w-6 animate-pulse relative z-10" />
                      <span className="relative z-10">GARANTIR MINHA VAGA</span>
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            {/* What's Included */}
            <div className="max-w-5xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8 lg:p-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-black text-center mb-8 sm:mb-12">
                  🎁 O QUE ESTÁ INCLUSO:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                  {[
                    {
                      icon: BookOpen,
                      title: "10 Módulos Completos",
                      description: "3 a 4 horas cada módulo",
                      color: "bg-gradient-to-br from-red-500 to-red-600",
                    },
                    {
                      icon: Award,
                      title: "Material Físico",
                      description: "Pasta + Livro + E-Books + Planilhas",
                      color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
                    },
                    {
                      icon: Trophy,
                      title: "Certificado",
                      description: "Certificado de conclusão",
                      color: "bg-gradient-to-br from-red-500 to-yellow-500",
                    },
                    {
                      icon: Users,
                      title: "Metodologia Prática",
                      description: "Dinâmicas e exercícios aplicados",
                      color: "bg-gradient-to-br from-yellow-500 to-red-500",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <div className={`${item.color} p-2 sm:p-3 rounded-full flex-shrink-0`}>
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-2 text-yellow-300">{item.title}</h4>
                        <p className="text-red-100 text-sm sm:text-base">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Location & Schedule */}
                <Card className="bg-gradient-to-r from-red-600 to-yellow-600 border-0 p-6 text-center">
                  <h4 className="font-bold text-xl text-white mb-4">📍 INFORMAÇÕES IMPORTANTES</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span className="text-sm">Sala da Febracis - Átrium Centro Empresarial</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span className="text-sm">Das 19h às 23h - Com intervalo para café</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span className="text-sm">Início em Agosto</span>
                    </div>
                  </div>
                </Card>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Mobile Optimized */}
      <section id="faq" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                DÚVIDAS FREQUENTES
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 px-4">
                TIRE SUAS{" "}
                <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  DÚVIDAS
                </span>
              </h2>
              <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                Respostas para as principais questões sobre o programa
              </p>
            </div>

            {/* FAQ Accordion */}
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    icon: "👥",
                    question: "Quem pode participar do programa?",
                    answer:
                      "O programa é destinado a Diretores, Gerentes, Supervisores, Encarregados e Líderes de Setores que desejam aprimorar suas habilidades gerenciais.",
                  },
                  {
                    icon: "📚",
                    question: "Como funciona a metodologia do programa?",
                    answer:
                      "O programa trabalha com estudo de práticas de Liderança e Equipe, recursos multimídia, técnicas de transmissão e fixação de conceitos, dinâmicas práticas, testes e trabalhos desenvolvidos em sala de aula e fora dela.",
                  },
                  {
                    icon: "⏰",
                    question: "Qual a duração e horário do programa?",
                    answer:
                      "O programa possui 10 encontros de 3 a 4 horas cada, das 19h às 23h com intervalo para café, com início em agosto.",
                  },
                  {
                    icon: "🎓",
                    question: "O que está incluso no programa?",
                    answer:
                      "Inclui 10 módulos de treinamento, pasta completa, livro, e-books, planilhas e certificado de conclusão.",
                  },
                  {
                    icon: "💰",
                    question: "Como funciona o pagamento?",
                    answer:
                      "O investimento varia conforme o lote: 1º lote até 15/8 com 10x de R$ 97,00, 2º lote após 15/8 com 10x de R$ 197,00 nos cartões. Oferecemos facilidades de pagamento para sua comodidade.",
                  },
                  {
                    icon: "📍",
                    question: "Onde acontecem as aulas?",
                    answer:
                      "As aulas acontecem na Sala da Febracis - Átrium Centro Empresarial, com toda infraestrutura necessária para um aprendizado de qualidade.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-slate-200">
                    <AccordionTrigger className="text-left px-4 sm:px-8 py-4 sm:py-6 hover:bg-red-50 transition-colors group">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-red-100 group-hover:bg-red-200 p-2 sm:p-3 rounded-full transition-colors">
                          <span className="text-lg sm:text-xl">{faq.icon}</span>
                        </div>
                        <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-8 pb-4 sm:pb-6">
                      <div className="ml-12 sm:ml-16">
                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>

            {/* FAQ CTA */}
            <div className="mt-8 sm:mt-12 text-center">
              <Card className="bg-gradient-to-r from-red-600 to-yellow-600 text-white border-0 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
                <p className="text-red-100 mb-6 text-sm sm:text-base">
                  Entre em contato conosco para mais informações!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="group bg-white text-red-600 hover:bg-red-50 font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <a
                      href="https://wa.me/554498569991"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 relative z-10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 sm:h-5 sm:w-5 relative"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                        <path d="M9.5 15.5a5 5 0 0 0 5 0"></path>
                      </svg>
                      <span className="relative">FALAR NO WHATSAPP</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="group bg-white text-red-600 hover:bg-red-50 font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <a
                      href="https://www.comoserumgerentemelhor.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 relative z-10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Globe className="h-4 w-4 sm:h-5 sm:w-5 relative" />
                      <span className="relative">VISITAR SITE</span>
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Mobile Optimized */}
      <section
        id="inscricao"
        className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-red-600 via-red-600 to-yellow-700 text-white relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5"></div>
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 animate-pulse">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                VAGAS LIMITADAS - INSCREVA-SE JÁ!
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
                DESENVOLVA SUA LIDERANÇA <span className="text-yellow-300">AGORA!</span>
              </h2>
              <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full mx-auto mb-4 sm:mb-6"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-red-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                Não deixe essa oportunidade passar. Sua carreira e sua empresa merecem essa evolução!
              </p>
            </div>

            {/* Main CTA Card */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Benefits */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl text-white sm:text-2xl lg:text-3xl font-black flex items-center gap-2 sm:gap-3">
                    <Target className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                    VOCÊ VAI CONSEGUIR:
                  </h3>
                  <div className="space-y-3 sm:space-y-4 text-white">
                    {[
                      "Formar equipes orientadas para metas",
                      "Fortalecer relacionamentos interpessoais",
                      "Ser um comunicador persuasivo",
                      "Desenvolver equipes mais conscientes",
                    ].map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg"
                      >
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                        <span className="text-base sm:text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 text-slate-900">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-xs sm:text-sm text-slate-600 mb-2">Investimento</div>
                    
                    {/* 1º Lote */}
                    <div className="mb-3 p-2 bg-green-100 rounded-lg">
                      <div className="text-xs text-green-700 font-bold mb-1">1º LOTE</div>
                      <div className="text-2xl sm:text-3xl font-black text-red-600 mb-1">10x R$ 97,00</div>
                      <div className="text-xs text-green-700">até 15/8</div>
                    </div>
                    
                    {/* 2º Lote */}
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <div className="text-xs text-yellow-700 font-bold mb-1">2º LOTE</div>
                      <div className="text-2xl sm:text-3xl font-black text-red-600 mb-1">10x R$ 197,00</div>
                      <div className="text-xs text-yellow-700">após 15/8</div>
                    </div>
                    
                    <div className="text-xs sm:text-sm text-slate-600 mt-2">*Nos cartões</div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm bg-slate-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span>Início:</span>
                      <span className="font-bold text-red-600">Agosto</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Horário:</span>
                      <span className="font-bold text-green-600">19h às 23h</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Material incluso:</span>
                      <span className="font-bold text-red-600">Pasta + Livro + E-Books</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="group w-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-700 hover:via-red-600 hover:to-yellow-600 text-white font-black text-base sm:text-lg py-4 sm:py-5 rounded-xl shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden"
                  >
                    <a
                      href="https://pay.kiwify.com.br/h89Xh6V"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 relative z-10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse relative" />
                      <span className="relative">GARANTIR MINHA VAGA AGORA</span>
                      <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300 relative" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Contact Info */}
            <div className="text-center">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">📞 MAIS INFORMAÇÕES</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-yellow-400" />
                    <span className="font-bold">44 9 9856-9991</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-yellow-400" />
                    <span className="font-bold">www.comoserumgerentemelhor.com.br</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
