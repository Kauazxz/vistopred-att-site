export type Plan = {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    id: "basico-inspecao",
    name: "Básico",
    title: "VistoPred Básico Inspeção",
    description:
      "Foco em inspeção predial: checklists, registro fotográfico e geração de relatórios profissionais.",
    features: [
      "Checklists inteligentes",
      "Registro fotográfico organizado",
      "Relatórios automáticos em PDF",
      "Cadastro de edificações",
      "Suporte por e-mail",
    ],
  },
  {
    id: "basico-manutencao",
    name: "Básico",
    title: "VistoPred Básico Manutenção",
    description:
      "Controle completo da manutenção predial: tarefas, equipes e histórico técnico em um só lugar.",
    features: [
      "Manutenção preventiva e corretiva",
      "Gestão de equipes e fornecedores",
      "Histórico da edificação",
      "Quadro de avisos e tarefas",
      "Suporte por e-mail",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    title: "VistoPred Pro",
    description:
      "Inspeção e manutenção unidas em uma única plataforma. A escolha mais comum para equipes técnicas.",
    features: [
      "Inspeção + Manutenção integradas",
      "Relatórios dinâmicos",
      "Gestão completa de tarefas",
      "Painel de acompanhamento técnico",
      "Suporte prioritário",
    ],
    highlight: true,
  },
  {
    id: "pro-completo",
    name: "Pro Completo",
    title: "VistoPred Pro Completo",
    description:
      "Tudo do Pro + recursos avançados de checklist, controle de estoque e gestão estendida.",
    features: [
      "Tudo do plano Pro",
      "Multi estoque",
      "Cotações em série",
      "Inspeções especiais e PMAV",
      "Manual dinâmico da edificação",
    ],
  },
  {
    id: "administradora",
    name: "Administradora",
    title: "VistoPred Administradora Pro Completo",
    description:
      "Para administradoras que gerenciam múltiplas edificações com a mesma qualidade técnica.",
    features: [
      "Várias edificações em um painel",
      "Grupos e permissões avançadas",
      "Rede VistoPred",
      "Relatórios consolidados",
      "Atendimento dedicado",
    ],
  },
  {
    id: "obra",
    name: "Obra",
    title: "VistoPred Obra & Pós-Obra",
    description:
      "Acompanhamento técnico durante toda a obra e o pós-obra, com registros, vistorias e histórico.",
    features: [
      "Registros diários de obra",
      "Vistorias técnicas",
      "Acompanhamento pós-obra",
      "Gestão de serviços externos",
      "Relatórios de entrega",
    ],
  },
];
