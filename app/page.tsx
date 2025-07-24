import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, MapPin, CheckCircle, Award, Coffee, Network, Star, Zap, Target, TrendingUp, Shield, Users, BookOpen, Lightbulb, Trophy, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5544998569991"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 group"
        aria-label="Falar no WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
        </svg>
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          !
        </div>
      </a>

      {/* Fixed Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 sm:py-3 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-center">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
            <p className="font-bold text-xs sm:text-sm md:text-base">1º LOTE COM 50% DE DESCONTO • VAGAS LIMITADAS</p>
          </div>
        </div>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left space-y-6 lg:space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    GM
                  </span>
                  <span className="hidden sm:inline">PROGRAMA DE DESENVOLVIMENTO GERENCIAL</span>
                  <span className="sm:hidden">PROGRAMA GERENCIAL</span>
                </div>

                {/* Napoleon Quote */}
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl mb-6">
                  <blockquote className="text-sm sm:text-base italic text-purple-200 mb-2">
                    "Não existem maus soldados, somente maus comandantes"
                  </blockquote>
                  <cite className="text-xs sm:text-sm text-white/80 font-semibold">— Napoleão Bonaparte</cite>
                </div>

                {/* Main Headline */}
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight mb-4 sm:mb-6">
                    COMO SER UM{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                      GERENTE
                    </span>
                    <br />
                    MELHOR
                  </h1>
                  <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mx-auto lg:mx-0 mb-4 sm:mb-8"></div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Desenvolva suas{" "}
                    <span className="text-purple-400 font-bold">habilidades gerenciais</span> com técnicas e metodologias avançadas
                    que garantem resultados duradouros para sua liderança.
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
                  {[
                    "10 módulos completos",
                    "Metodologia comprovada",
                    "Certificado incluso",
                    "50% de desconto no 1º lote",
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
                    className="group relative bg-gradient-to-r from-purple-600 via-purple-500 to-teal-500 hover:from-purple-700 hover:via-purple-600 hover:to-teal-600 text-white font-black text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 rounded-2xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-105 w-full sm:w-auto overflow-hidden"
                  >
                    <a href="#inscricao" className="flex items-center justify-center gap-3 relative z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
                      <span className="relative">GARANTIR MINHA VAGA</span>
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
                          className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-400 to-teal-500 rounded-full border-2 border-white"
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

              {/* Right Column - Program Card */}
              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="w-full max-w-sm lg:max-w-md">
                  <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl">
                    {/* Urgency Badge */}
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold animate-pulse shadow-lg">
                        <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
                        <span className="hidden sm:inline">1º LOTE - 50% OFF</span>
                        <span className="sm:hidden">50% OFF</span>
                      </div>
                    </div>

                    {/* Program Info */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-white mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
                        <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                        <span className="hidden sm:inline">PROGRAMA COMPLETO</span>
                        <span className="sm:hidden">PROGRAMA</span>
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-500/20 p-2 rounded-full flex-shrink-0">
                            <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                          </div>
                          <span className="text-xs sm:text-sm md:text-base">10 Módulos de 3-4h cada</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-500/20 p-2 rounded-full flex-shrink-0">
                            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                          </div>
                          <span className="text-xs sm:text-sm md:text-base">Pasta + Livro + E-Books</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-500/20 p-2 rounded-full flex-shrink-0">
                            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                          </div>
                          <span className="text-xs sm:text-sm md:text-base">Até 10 de agosto às 23:59</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-gradient-to-r from-purple-600 to-teal-600 rounded-xl p-4 sm:p-6 text-white">
                      <div className="text-center">
                        <div className="text-xs sm:text-sm text-white/80 mb-1">1º Lote (50% OFF)</div>
                        <div className="text-2xl sm:text-3xl font-black text-white mb-1">10x R$ 197,00</div>
                        <div className="text-xs sm:text-sm text-white/90 font-semibold line-through">
                          De: 10x R$ 394,00
                        </div>
                      </div>
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
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                A QUEM SE DESTINA
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-purple-900 mb-4 sm:mb-6">
                PARA QUEM É O <span className="text-purple-600">PROGRAMA?</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                Profissionais que desejam desenvolver ou aprimorar suas habilidades gerenciais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Users,
                  title: "Líderes Atuais",
                  description: "Proprietários, Diretores, Gerentes e Supervisores em exercício",
                  color: "purple",
                  gradient: "from-purple-500 to-purple-600",
                  bgGradient: "from-purple-50 to-purple-100",
                },
                {
                  icon: Target,
                  title: "Futuros Gestores",
                  description: "Encarregados e pessoas sendo preparadas para liderança",
                  color: "indigo",
                  gradient: "from-indigo-500 to-indigo-600",
                  bgGradient: "from-indigo-50 to-indigo-100",
                },
                {
                  icon: TrendingUp,
                  title: "Líderes de Setores",
                  description: "Profissionais que coordenam equipes e processos",
                  color: "teal",
                  gradient: "from-teal-500 to-teal-600",
                  bgGradient: "from-teal-50 to-teal-100",
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
                className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden"
              >
                <a href="#inscricao" className="flex items-center justify-center gap-2 relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">QUERO PARTICIPAR</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Objective - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <Target className="h-4 w-4 sm:h-5 sm:w-5" />
                OBJETIVO DO PROGRAMA
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 px-4">
                DESENVOLVA SUA <span className="text-teal-600">LIDERANÇA</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto px-4 leading-relaxed">
                Capacitar, desenvolver ou aprimorar a atuação gerencial é um dos principais desafios de qualquer empresa, 
                independente do seu segmento.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Column - Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="/como-ser-gerente-melhor.jpg"
                      alt="Como ser um gerente melhor - Silhuetas de líderes e equipe"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-purple-500 text-white p-3 sm:p-4 rounded-full shadow-lg">
                    <Trophy className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white p-3 sm:p-4 rounded-full shadow-lg">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">
                  PASSOS FUNDAMENTAIS PARA O <span className="text-teal-600">SUCESSO GERENCIAL</span>
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Entender o Mercado",
                      description: "Compreenda os principais movimentos e tendências do seu segmento"
                    },
                    {
                      icon: Users,
                      title: "Gerir sua Equipe",
                      description: "Desenvolva habilidades para liderar e motivar seu time efetivamente"
                    },
                    {
                      icon: Target,
                      title: "Executar Processos",
                      description: "Garanta que processos sejam bem executados e agreguem valor aos resultados"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                      <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                        <step.icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base sm:text-lg">{step.title}</h4>
                        <p className="text-slate-600 text-sm sm:text-base">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-gradient-to-r from-purple-600 to-teal-600 text-white p-6 sm:p-8 rounded-xl">
                  <h4 className="font-bold text-lg sm:text-xl mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6" />
                    Metodologia Comprovada
                  </h4>
                  <p className="text-purple-100 text-sm sm:text-base">
                    O programa ensina técnicas e metodologias avançadas em gestão, melhorando sua liderança e comunicação, 
                    garantindo resultados duradouros para os participantes.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                RAZÕES PARA PARTICIPAR
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-4">
                O QUE VOCÊ VAI <span className="text-purple-400">CONQUISTAR</span>
              </h2>
              <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg lg:text-xl text-purple-100 max-w-3xl mx-auto px-4">
                Transformações reais que você experimentará ao concluir o programa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Target,
                  title: "Consciência do Papel Gerencial",
                  description: "Entenda a importância do gerente no atingimento de melhores resultados",
                  gradient: "from-purple-600 to-purple-700"
                },
                {
                  icon: Users,
                  title: "Formação de Equipes",
                  description: "Capacite-se para formar equipes orientadas para metas e resultados",
                  gradient: "from-indigo-600 to-indigo-700"
                },
                {
                  icon: Network,
                  title: "Relacionamentos Interpessoais",
                  description: "Aprenda a fortalecer relacionamentos e melhorar a comunicação",
                  gradient: "from-teal-600 to-teal-700"
                },
                {
                  icon: TrendingUp,
                  title: "Gestão de Mudanças",
                  description: "Compreenda como lidar melhor com mudanças organizacionais",
                  gradient: "from-purple-600 to-indigo-600"
                },
                {
                  icon: Lightbulb,
                  title: "Comunicação Persuasiva",
                  description: "Torne-se um comunicador persuasivo e um gerente mais focado",
                  gradient: "from-indigo-600 to-teal-600"
                },
                {
                  icon: Trophy,
                  title: "Criação de Soluções",
                  description: "Desenvolva-se como um criador de soluções e gerente engajado",
                  gradient: "from-teal-600 to-purple-600"
                }
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
                  🎯 ATENÇÃO ESPECIAL PARA FUTUROS LÍDERES
                </h3>
                <p className="text-purple-100 text-base sm:text-lg mb-6 sm:mb-8">
                  Este treinamento dará especial atenção naqueles que estão sendo preparados para desempenhar funções de comando.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="group relative bg-gradient-to-r from-purple-600 via-purple-500 to-teal-500 hover:from-purple-700 hover:via-purple-600 hover:to-teal-600 text-white font-black text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500 w-full sm:w-auto overflow-hidden"
                >
                  <a href="#inscricao" className="flex items-center justify-center gap-3 relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Trophy className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
                    <span className="relative">QUERO ME DESENVOLVER AGORA</span>
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
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
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                METODOLOGIA
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 px-4">
                COMO VOCÊ VAI <span className="text-indigo-600">APRENDER</span>
              </h2>
              <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
                Uma abordagem completa e prática que combina teoria, dinâmicas e aplicação real
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[
                {
                  icon: BookOpen,
                  title: "Estudo de Práticas",
                  description: "Análise de práticas gerenciais comprovadas no mercado",
                  color: "bg-gradient-to-br from-purple-500 to-purple-600"
                },
                {
                  icon: Users,
                  title: "Dinâmicas Práticas",
                  description: "Exercícios e simulações para fixação dos conceitos",
                  color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
                },
                {
                  icon: Lightbulb,
                  title: "Recursos Multimídia",
                  description: "Técnicas modernas de transmissão e fixação de conceitos",
                  color: "bg-gradient-to-br from-teal-500 to-teal-600"
                },
                {
                  icon: Target,
                  title: "Trabalhos Aplicados",
                  description: "Atividades desenvolvidas em sala e fora dela",
                  color: "bg-gradient-to-br from-purple-500 to-teal-500"
                }
              ].map((method, index) => (
                <Card key={index} className="text-center p-6 sm:p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className={`${method.color} p-4 sm:p-6 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-3 sm:mb-4">{method.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base">{method.description}</p>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-slate-900 to-purple-900 text-white border-0 shadow-2xl overflow-hidden">
              <div className="p-8 sm:p-12 lg:p-16 relative">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-10"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 sm:mb-8">
                    🎓 APRENDIZADO PRAZEROSO E REFLEXIVO
                  </h3>
                  <p className="text-purple-100 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
                    Os conceitos são absorvidos de maneira prazerosa pelo participante, porém altamente reflexivos, 
                    garantindo uma transformação real na forma de gerir pessoas e processos.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                    {[
                      { icon: "📚", title: "Pasta Completa", desc: "Material físico organizado" },
                      { icon: "📖", title: "Livro Incluso", desc: "Conteúdo para consulta" },
                      { icon: "💻", title: "E-Books", desc: "Material digital complementar" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                        <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-purple-200 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment - Mobile Optimized */}
      <section
        id="investimento"
        className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-purple-900 text-white"
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
                  className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"></path>
                  <path d="M12 18v2"></path>
                  <path d="M12 6V4"></path>
                </svg>
                INVESTIMENTO ESPECIAL
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 px-4">
                DESENVOLVA SUA LIDERANÇA POR <span className="text-purple-400">APENAS</span>
              </h2>
              <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 max-w-5xl mx-auto">
              {/* 1st Batch - Current */}
              <Card className="bg-gradient-to-br from-purple-600 to-teal-600 border-0 text-center p-6 sm:p-8 lg:p-10 hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-black text-xs font-black py-2 sm:py-3 animate-pulse">
                  🔥 1º LOTE - 50% DE DESCONTO!
                </div>
                <div className="pt-6 sm:pt-8">
                  <div className="bg-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 inline-block">
                    ATÉ 10 DE AGOSTO ÀS 23:59
                  </div>
                  <div className="text-sm sm:text-base text-purple-100 mb-2">De: 10x R$ 394,00</div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2">10x R$ 197,00</div>
                  <p className="text-purple-100 font-bold mb-6 sm:mb-8 text-base sm:text-lg">50% DE ECONOMIA</p>
                  <Button
                    asChild
                    className="group w-full bg-white text-purple-600 hover:bg-purple-50 font-black py-4 sm:py-5 rounded-xl flex items-center justify-center gap-3 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <a href="#inscricao" className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse relative z-10" />
                      <span className="relative z-10">GARANTIR DESCONTO</span>
                      <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    </a>
                  </Button>
                </div>
              </Card>

              {/* 2nd Batch - Future */}
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-center p-6 sm:p-8 lg:p-10">
                <div className="bg-white/10 text-white/80 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 inline-block">
                  2º LOTE
                </div>
                <div className="text-sm sm:text-base text-white/60 mb-2">Após 10 de agosto</div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white/70 mb-2">10x R$ 394,00</div>
                <p className="text-white/60 font-bold mb-6 sm:mb-8 text-base sm:text-lg">VALOR NORMAL</p>
                <div className="text-white/50 text-sm sm:text-base py-3 sm:py-4 border border-white/20 rounded-xl">
                  Disponível após o 1º lote
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
                      description: "3 a 4 horas/aula cada módulo",
                      color: "bg-gradient-to-br from-purple-500 to-purple-600",
                    },
                    {
                      icon: Award,
                      title: "Material Físico",
                      description: "Pasta + Livro + E-Books",
                      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
                    },
                    {
                      icon: Trophy,
                      title: "Certificado",
                      description: "Certificado de conclusão",
                      color: "bg-gradient-to-br from-teal-500 to-teal-600",
                    },
                    {
                      icon: Users,
                      title: "Metodologia Prática",
                      description: "Dinâmicas e exercícios aplicados",
                      color: "bg-gradient-to-br from-purple-500 to-teal-500",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <div className={`${item.color} p-2 sm:p-3 rounded-full flex-shrink-0`}>
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-2 text-purple-300">{item.title}</h4>
                        <p className="text-purple-100 text-sm sm:text-base">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Urgency */}
                <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 border-0 p-4 sm:p-6 text-center">
                  <h4 className="font-bold text-lg sm:text-xl text-white mb-3">⏰ ATENÇÃO: PRAZO LIMITADO!</h4>
                  <p className="text-purple-100 text-sm sm:text-base mb-4">
                    O desconto de 50% é válido apenas até <strong>10 de agosto às 23:59</strong> ou enquanto não esgotar as vagas do 1º lote.
                  </p>
                  <div className="text-2xl sm:text-3xl font-black text-yellow-300">
                    NÃO PERCA ESTA OPORTUNIDADE!
                  </div>
                </Card>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                  GARANTIA TOTAL
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-green-900 mb-4 sm:mb-6">
                  <span className="text-green-600">100% SATISFEITO</span> OU SEU DINHEIRO DE VOLTA
                </h2>
                <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6 sm:mb-8 mx-auto lg:mx-0"></div>

                <p className="text-lg sm:text-xl text-slate-700 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Se você participar do programa e não ficar{" "}
                  <span className="font-bold text-green-600">COMPLETAMENTE SATISFEITO</span> com o conteúdo, devolvemos{" "}
                  <span className="font-bold text-green-600">100% do seu investimento</span> em até 7 dias após o programa.
                </p>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {[
                      { text: "Sem perguntas", icon: CheckCircle },
                      { text: "Sem burocracia", icon: CheckCircle },
                      { text: "100% reembolso", icon: CheckCircle },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center text-center">
                        <div className="bg-green-100 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 w-full lg:w-auto overflow-hidden"
                >
                  <a href="#inscricao" className="flex items-center justify-center gap-2 relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse relative" />
                    <span className="relative">GARANTIR MINHA VAGA COM SEGURANÇA</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300 relative" />
                  </a>
                </Button>
              </div>

              <div className="flex justify-center order-1 lg:order-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-12 sm:p-16 rounded-full">
                    <Shield className="h-24 w-24 sm:h-32 sm:w-32 text-white" />
                  </div>
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-yellow-400 text-green-800 p-3 sm:p-4 rounded-full shadow-lg">
                    <Award className="h-6 w-6 sm:h-10 sm:w-10" />
                  </div>
                  <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-yellow-400 text-green-800 p-3 sm:p-4 rounded-full shadow-lg">
                    <CheckCircle className="h-6 w-6 sm:h-10 sm:w-10" />
                  </div>
                </div>
              </div>
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
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
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
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  DÚVIDAS
                </span>
              </h2>
              <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
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
                      "O programa é destinado a Proprietários, Diretores, Gerentes, Supervisores, Encarregados, Líderes de Setores e pessoas que estão sendo preparadas para assumir cargos de liderança.",
                  },
                  {
                    icon: "📚",
                    question: "Como funciona a metodologia do programa?",
                    answer:
                      "O programa trabalha com estudo de práticas gerenciais, recursos multimídia, técnicas de transmissão e fixação de conceitos, dinâmicas práticas, testes e trabalhos desenvolvidos em sala de aula e fora dela.",
                  },
                  {
                    icon: "⏰",
                    question: "Qual a duração do programa?",
                    answer:
                      "O programa possui 10 módulos de 3 a 4 horas/aula cada, proporcionando um aprendizado completo e aprofundado em gestão e liderança.",
                  },
                  {
                    icon: "🎓",
                    question: "Vou receber certificado?",
                    answer:
                      "Sim! Todos os participantes recebem certificado de conclusão do programa, além de pasta completa, livro e e-books complementares.",
                  },
                  {
                    icon: "💰",
                    question: "Como funciona o desconto do 1º lote?",
                    answer:
                      "O 1º lote oferece 50% de desconto, custando 10x de R$ 197,00 (ao invés de 10x de R$ 394,00). Esta oferta é válida até 10 de agosto às 23:59 ou enquanto não esgotar as vagas.",
                  },
                  {
                    icon: "🔄",
                    question: "Existe garantia?",
                    answer:
                      "Sim! Oferecemos garantia de 100% de satisfação. Se você não ficar completamente satisfeito com o programa, devolvemos 100% do seu investimento em até 7 dias após a conclusão.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-slate-200">
                    <AccordionTrigger className="text-left px-4 sm:px-8 py-4 sm:py-6 hover:bg-purple-50 transition-colors group">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-purple-100 group-hover:bg-purple-200 p-2 sm:p-3 rounded-full transition-colors">
                          <span className="text-lg sm:text-xl">{faq.icon}</span>
                        </div>
                        <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
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
              <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
                <p className="text-purple-100 mb-6 text-sm sm:text-base">
                  Nossa equipe está pronta para esclarecer qualquer questão!
                </p>
                <Button
                  asChild
                  size="lg"
                  className="group bg-white text-purple-600 hover:bg-purple-50 font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <a
                    href="https://wa.me/5544998569991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 relative z-10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    <span className="relative">FALAR COM ESPECIALISTA</span>
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Mobile Optimized */}
      <section
        id="inscricao"
        className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-teal-700 text-white relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5"></div>
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 animate-pulse">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                1º LOTE COM 50% DE DESCONTO!
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
                DESENVOLVA SUA LIDERANÇA <span className="text-yellow-300">AGORA!</span>
              </h2>
              <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full mx-auto mb-4 sm:mb-6"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
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
                    <div className="text-xs sm:text-sm text-slate-600 mb-2">1º Lote - 50% OFF</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-600 mb-2">10x R$ 197,00</div>
                    <div className="text-xs sm:text-sm text-slate-600 line-through">De: 10x R$ 394,00</div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm bg-slate-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span>Prazo do desconto:</span>
                      <span className="font-bold text-red-600">10 de agosto às 23:59</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Garantia:</span>
                      <span className="font-bold text-green-600">100% - 7 dias</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Material incluso:</span>
                      <span className="font-bold text-purple-600">Pasta + Livro + E-Books</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="group w-full bg-gradient-to-r from-purple-600 via-purple-500 to-teal-500 hover:from-purple-700 hover:via-purple-600 hover:to-teal-600 text-white font-black text-base sm:text-lg py-4 sm:py-5 rounded-xl shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden"
                  >
                    <a
                      href="https://wa.me/5544998569991"
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

            {/* Program Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              {[
                {
                  icon: BookOpen,
                  title: "10 Módulos",
                  subtitle: "3-4h cada",
                },
                {
                  icon: Award,
                  title: "Material Completo",
                  subtitle: "Pasta + Livro + E-Books",
                },
                {
                  icon: Trophy,
                  title: "Certificado",
                  subtitle: "Incluso",
                },
              ].map((detail, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                  <detail.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-yellow-400 mx-auto mb-2 sm:mb-3" />
                  <div className="font-bold text-base sm:text-lg">{detail.title}</div>
                  <div className="text-xs sm:text-sm text-purple-200">{detail.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
