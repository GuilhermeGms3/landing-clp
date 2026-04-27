/*
Design philosophy for this file: Futurismo infraestrutural.
Use composição assimétrica, atmosfera azul petróleo, painéis translúcidos, brilho contido e linguagem técnica corporativa.
Cada bloco deve reforçar precisão, sofisticação e engenharia avançada.
Conteúdo baseado na base de marca CLP Engenharia Consultiva.
*/
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Briefcase,
  CheckCircle,
  DraftingCompass,
  FileText,
  HardHat,
  LineChart,
  MessageCircle,
  MoveUpRight,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveEngineeringBackground } from "@/components/InteractiveEngineeringBackground";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

const services = [
  {
    title: "Projetos de engenharia",
    text: "Soluções técnicas sob medida com compatibilização, viabilidade e prazo confiável para projetos elétricos e civis.",
    icon: DraftingCompass,
  },
  {
    title: "Orçamentos de engenharia",
    text: "Orçamentos com critério técnico, composição para licitação e previsibilidade de custo para suas propostas.",
    icon: LineChart,
  },
  {
    title: "Perícias e assistência técnica",
    text: "Laudo técnico com respaldo, análise de patologias e parecer técnico para processos e negociações.",
    icon: FileText,
  },
];

const segments = [
  "Condomínios",
  "Imobiliárias",
  "Escritórios de advocacia",
  "Empresas de engenharia",
  "Indústrias",
  "Construtoras e incorporadoras",
  "Investidores imobiliários",
  "Pessoas físicas com demandas técnicas",
];

const differentiators = [
  {
    title: "Redução de risco técnico",
    text: "Análises rigorosas e documentação completa para decisões seguras e com respaldo profissional.",
    icon: ShieldCheck,
  },
  {
    title: "Agilidade com qualidade",
    text: "Entregas rápidas sem comprometer o detalhamento técnico e a precisão das soluções.",
    icon: Briefcase,
  },
  {
    title: "Decisão apoiada",
    text: "Relatórios e pareceres pensados para sua necessidade real, não apenas para o mínimo básico.",
    icon: CheckCircle,
  },
];

const process = [
  "Análise técnica e diagnóstico da demanda",
  "Desenvolvimento de solução com rigor e prazo definido",
  "Entrega com documentação completa e respaldo profissional",
];



export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <InteractiveEngineeringBackground />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.16),transparent_24%),radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.12),transparent_20%),linear-gradient(180deg,rgba(5,16,31,0.72),rgba(5,16,31,0.96))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-screen engineering-grid" />

      <header className="relative z-10">
        <div className="container pt-6">
          <div className="glass-panel flex items-center justify-between gap-6 rounded-full px-5 py-4">
            <a href="#" className="flex items-center gap-3 text-sm text-slate-200 hover:opacity-80 transition-opacity">
              <img
                src="/assets/logo-clp.jfif"
                alt="Logo CLP Engenharia Consultiva"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </a>

            <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
              <a className="transition-colors hover:text-white" href="#servicos">
                Serviços
              </a>
              <a className="transition-colors hover:text-white" href="#segmentos">
                Segmentos
              </a>
              <a className="transition-colors hover:text-white" href="#diferenciais">
                Diferenciais
              </a>
              <a className="transition-colors hover:text-white" href="#contato">
                Contato
              </a>
            </nav>


          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="container pb-24 pt-10 lg:pb-28 lg:pt-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-medium tracking-[0.22em] text-amber-100 uppercase backdrop-blur-md">
                <BadgeCheck className="h-4 w-4" />
                Precisão técnica, agilidade e respaldo
              </div>

              <h1 className="max-w-2xl font-heading text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                Engenharia consultiva com <span className="text-cyan-300">segurança</span> para decisões críticas.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                Projetos, orçamentos, perícias e avaliações para condomínios, imobiliárias, indústrias, escritórios de advocacia e empresas de engenharia.
              </p>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -left-10 top-8 hidden h-36 w-36 rounded-full bg-cyan-400/12 blur-3xl lg:block" />
              <div className="absolute -bottom-8 right-8 hidden h-40 w-40 rounded-full bg-amber-400/12 blur-3xl lg:block" />

              <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/12 p-5 shadow-[0_30px_90px_rgba(2,8,23,0.55)]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663576659315/avhyjNB8K9MB3tNxAxqxKc/engenharia-hero-futurista-GumLFZgBC2YEVSprzU9fxF.webp"
                  alt="Ambiente avançado de visualização de engenharia e infraestrutura"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover"
                />

                <div className="absolute inset-x-9 bottom-9 grid gap-4 md:grid-cols-2">
                  <Card className="border-white/10 bg-slate-950/64 text-white shadow-2xl backdrop-blur-xl">
                    <CardContent className="p-5">
                      <p className="text-[0.65rem] tracking-[0.24em] text-slate-400 uppercase">
                        Nossa promessa
                      </p>
                      <p className="mt-3 font-heading text-2xl font-semibold text-cyan-300">
                        Redução de risco
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Análises rigorosas e documentação completa para decisões seguras.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-white/10 bg-white/8 text-white shadow-2xl backdrop-blur-xl">
                    <CardContent className="flex h-full flex-col justify-between p-5">
                      <div>
                        <p className="text-[0.65rem] tracking-[0.24em] text-slate-400 uppercase">
                          Escala de atuação
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Condomínios, imobiliárias, indústrias, construtoras, investidores e escritórios jurídicos.
                        </p>
                      </div>
                      <div className="mt-6 flex items-center justify-between text-sm text-slate-200">
                        <span>Visão integrada</span>
                        <MoveUpRight className="h-4 w-4 text-amber-300" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="servicos" className="container pb-24">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="space-y-6">
              <p className="eyebrow">Linhas de Serviço</p>
              <h2 className="section-title max-w-md text-white">
                Soluções técnicas pensadas para sua necessidade real.
              </h2>
              <p className="max-w-md text-base leading-7 text-slate-300">
                Atuamos com visão integrada entre concepção, execução e gestão, oferecendo suporte técnico com rigor, prazo e qualidade.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-panel group rounded-[1.75rem] border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/9"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="segmentos" className="container pb-24">
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Segmentos</p>
              <h2 className="section-title mt-4 max-w-2xl text-white">
                Atendemos empresas e profissionais que precisam de rigor técnico.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {segments.map((segment, index) => (
                <motion.div
                  key={segment}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="glass-panel flex items-center gap-3 rounded-[1.5rem] border border-white/10 px-5 py-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm font-medium text-slate-200">{segment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="container pb-24">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/10 p-5">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663576659315/avhyjNB8K9MB3tNxAxqxKc/fachada-engenharia-premium-MRyUGjn59cM6z694eC5nYk.webp"
                alt="Visual técnico de edifício corporativo com sobreposição de desenho estrutural"
                className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="eyebrow">Diferenciais</p>
              <h2 className="section-title mt-4 max-w-xl text-white">
                Por que confiar na CLP.
              </h2>

              <div className="mt-8 space-y-4">
                {differentiators.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-panel rounded-[1.5rem] border border-white/10 p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-cyan-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-400">{item.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 glass-panel rounded-[1.5rem] border border-amber-300/20 bg-amber-300/8 p-5"
              >
                <p className="text-sm leading-7 text-amber-100">
                  <span className="font-semibold">Sócios e consultor com 7 a 10 anos de experiência</span> em serviços de alto valor técnico e impacto financeiro.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="container pb-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">Processo</p>
              <h2 className="section-title mt-4 max-w-lg text-white">
                Como trabalhamos.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
                Cada demanda recebe análise rigorosa, desenvolvimento com prazo definido e entrega com documentação completa e respaldo profissional.
              </p>

              <div className="mt-10 space-y-4">
                {process.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: index * 0.1 }}
                    className="glass-panel flex items-center gap-5 rounded-[1.5rem] border border-white/10 px-5 py-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 font-heading text-sm font-semibold text-cyan-200">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/10 p-5">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663576659315/avhyjNB8K9MB3tNxAxqxKc/rede-tecnica-reativa-iXA475kVr5toh3nscXNbNJ.webp"
                  alt="Rede técnica e analítica representando integração de dados na engenharia"
                  className="h-[420px] w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.08),rgba(2,8,23,0.82))]" />

                <div className="absolute inset-x-6 top-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/58 p-5 backdrop-blur-md">
                    <p className="text-[0.65rem] tracking-[0.24em] text-slate-400 uppercase">
                      Nossa promessa
                    </p>
                    <p className="mt-3 font-heading text-2xl font-semibold text-white">Segurança</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Análises rigorosas com documentação completa.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/6 p-5 backdrop-blur-md">
                    <p className="text-[0.65rem] tracking-[0.24em] text-slate-400 uppercase">
                      Resultado
                    </p>
                    <p className="mt-3 font-heading text-2xl font-semibold text-cyan-300">Confiável</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Decisões apoiadas em rigor técnico.
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/10 bg-slate-950/68 p-5 backdrop-blur-xl">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.24em] text-slate-400 uppercase">
                        Foco consultivo
                      </p>
                      <p className="mt-2 max-w-lg text-sm leading-7 text-slate-300">
                        Entregas pensadas para sua necessidade real, não apenas para o mínimo básico.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-200">
                      Engenharia com respaldo <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="container pb-20">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] p-8 shadow-[0_24px_70px_rgba(2,8,23,0.46)] backdrop-blur-xl lg:p-10">
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_56%)] lg:block" />

            <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="eyebrow">Contato</p>
                <h2 className="section-title mt-4 max-w-lg text-white">
                  Pronto para uma solução técnica com segurança?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                  Estruturamos propostas sob medida para empresas, profissionais e instituições que precisam de engenharia consultiva com rigor, agilidade e respaldo técnico.
                </p>


              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/52 p-6">
                  <p className="text-[0.7rem] tracking-[0.24em] text-slate-400 uppercase">Email</p>
                  <p className="mt-3 font-heading text-sm font-semibold text-white break-all">
                    contato@clp.com.br
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/52 p-6">
                  <p className="text-[0.7rem] tracking-[0.24em] text-slate-400 uppercase">Telefone</p>
                  <p className="mt-3 font-heading text-lg font-semibold text-white">
                    (11) 98765-4321
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/52 p-6 sm:col-span-2">
                  <p className="text-[0.7rem] tracking-[0.24em] text-slate-400 uppercase">Localização</p>
                  <p className="mt-3 text-base leading-7 text-slate-200">
                    Brasília, DF. Atendimento consultivo para projetos, orçamentos, perícias e avaliações em todo o Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsAppButton />
    </div>
  );
}
