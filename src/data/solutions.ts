export type SolutionCategory =
  | "gestao"
  | "vistorias"
  | "manutencao"
  | "relatorios"
  | "equipe"
  | "documentos"
  | "comunicacao";

export type SolutionItem = {
  title: string;
  /** Descrição curta (até ~140 chars) usada nos cards da esteira. */
  shortDescription: string;
  /** Descrição completa original — aparece no hover/expansão dos cards. */
  description: string;
  icon: string; // Material Symbols name
  category: SolutionCategory;
};

export const categoryLabels: Record<SolutionCategory, string> = {
  gestao: "Gestão",
  vistorias: "Vistorias",
  manutencao: "Manutenção",
  relatorios: "Relatórios",
  equipe: "Equipe",
  documentos: "Documentos",
  comunicacao: "Comunicação",
};

export const solutions: SolutionItem[] = [
  {
    title: "Cadastro de Edificações",
    shortDescription: "Cadastre endereço, contato, fotos e dados técnicos de cada edificação em um único lugar.",
    description:
      "Tenha acesso a informações detalhadas sobre suas edificações, incluindo endereço, dados de contato, fotos e outras informações importantes para o gerenciamento da edificação.",
    icon: "apartment",
    category: "gestao",
  },
  {
    title: "Cadastro de Fornecedores",
    shortDescription: "Centralize fornecedores, contatos e contratos pra ter agilidade nas tomadas de decisão.",
    description:
      "Gerencie facilmente sua lista de fornecedores, incluindo informações de contato, contratos, histórico de compras e outros detalhes importantes para o gerenciamento de sua edificação.",
    icon: "groups",
    category: "gestao",
  },
  {
    title: "Armazenamento em Nuvem",
    shortDescription: "Guarde contratos, plantas e manuais com segurança e acesso fácil pela nuvem.",
    description:
      "Armazene de forma segura todos os documentos relacionados à sua edificação, incluindo contratos, planos, manuais e outros documentos importantes, com acesso fácil e seguro via nuvem.",
    icon: "cloud",
    category: "documentos",
  },
  {
    title: "CheckList",
    shortDescription: "Avalie segurança, saúde e meio ambiente com questionários e gráficos automáticos.",
    description:
      "Avalie a segurança, saúde, meio ambiente e outras áreas críticas com questionários personalizados. Obtenha dados precisos para decisões eficazes. Identifique problemas com gráficos gerados automaticamente e melhore a classificação da edificação.",
    icon: "checklist",
    category: "vistorias",
  },
  {
    title: "Tarefas",
    shortDescription: "Crie, atribua e acompanhe tarefas com lembretes automáticos pra não perder prazos.",
    description:
      "Crie, acompanhe e gerencie tarefas relacionadas à gestão da edificação. Designe atores específicos para cada tarefa e receba lembretes automáticos para garantir que as tarefas sejam completadas em tempo hábil.",
    icon: "task_alt",
    category: "gestao",
  },
  {
    title: "Sub-Áreas",
    shortDescription: "Divida pavimentos em apartamentos, corredores e andares pra gerenciar melhor cada espaço.",
    description:
      "Permite organizar o pavimento em áreas específicas, como apartamentos, corredores, ou andares, facilitando o gerenciamento dos espaços. É possível dividir o pavimento em várias subáreas para uma gestão mais eficiente do espaço.",
    icon: "grid_view",
    category: "gestao",
  },
  {
    title: "Pavimentos",
    shortDescription: "Separe inspeções e manutenções por andar pra visualizar dados de forma estruturada.",
    description:
      "Permite organizar e separar os dados obtidos durante inspeções ou manutenções de acordo com a estrutura física da edificação, como térreo, primeiro pavimento e garagem. Isso facilita a visualização e análise dos dados.",
    icon: "layers",
    category: "gestao",
  },
  {
    title: "Acesso a Edificação",
    shortDescription: "Libere entrada de terceirizados e moradores via código compartilhável ou gerado automaticamente.",
    description:
      "Permite que usuários como terceirizadas, condomínios ou funcionários possam acessar uma edificação específica através do uso de um código de acesso. Esse código pode ser compartilhado pelo administrador da edificação ou gerado automaticamente, facilitando a entrada e a gestão de acesso às diferentes áreas da edificação.",
    icon: "vpn_key",
    category: "equipe",
  },
  {
    title: "Inspeção",
    shortDescription: "Crie inspeções e acompanhe serviços e manutenções em cada edificação.",
    description: "Permite criar inspeções e acompanhar serviços e manutenção nas edificações.",
    icon: "fact_check",
    category: "vistorias",
  },
  {
    title: "VistoCam Pro",
    shortDescription: "Câmera com IA que identifica patologias e mede pH, cor e mais durante a inspeção.",
    description:
      "A VistoCam Pro é um módulo opcional do aplicativo que oferece uma câmera avançada com inteligência artificial. Podendo identificar patologias comuns em edificações e também possui funcionalidades como medidor colorimétrico, medidor de Ph e capacidade de edição de fotos para ajudar a identificar patologias.",
    icon: "photo_camera",
    category: "vistorias",
  },
  {
    title: "Quadro de Avisos",
    shortDescription: "Comunique avisos a gestores, grupos e usuários com agilidade e organização.",
    description:
      "Comunique avisos importantes de forma rápida e eficaz, compartilhando informações com gestores e usuários específicos ou grupos de usuários, garantindo que todos estejam sempre atualizados sobre as últimas notícias e eventos relacionados à edificação.",
    icon: "campaign",
    category: "comunicacao",
  },
  {
    title: "Check-in e Check-out",
    shortDescription: "Marque entrada e saída de prestadores e funcionários como folha de ponto digital.",
    description:
      "Função que permite a marcação de entrada e saída de prestadores de serviço, funcionários, usuários ou moradores, além de poder ser usada como uma folha de ponto eletrônico.",
    icon: "login",
    category: "equipe",
  },
  {
    title: "Alerta",
    shortDescription: "Notificações imediatas e críticas pra todos agirem rapidamente em emergências.",
    description:
      'Dentro da função Quadro de Avisos, a função "Alerta" permite enviar notificações imediatas e críticas para usuários, garantindo que todos estejam cientes de questões importantes e possam tomar medidas de forma rápida e eficaz.',
    icon: "warning",
    category: "comunicacao",
  },
  {
    title: "Central do Usuário",
    shortDescription: "Ponto único pra solicitar acesso, gerenciar permissões e falar com a gestão.",
    description:
      "Ofereça aos usuários um ponto centralizado para solicitar acesso à edificação, definir seus níveis de hierarquia e gerenciar suas premiações de acesso, além de acompanhar suas solicitações e se comunicar com a equipe de gerenciamento.",
    icon: "account_circle",
    category: "equipe",
  },
  {
    title: "Grupos e Permissões",
    shortDescription: "Crie grupos, defina leitura/edição e organize equipes com controle total de acesso.",
    description:
      "Cria grupos e categorias, define permissões de leitura/edição para cada grupo, organiza equipes de trabalho, atribui tarefas e controla acesso a áreas do aplicativo.",
    icon: "admin_panel_settings",
    category: "equipe",
  },
  {
    title: "Relatório Dinâmico",
    shortDescription: "Gere relatórios completos automaticamente com fotos, vídeos e áudios da inspeção.",
    description:
      "Funcionalidade que gera automaticamente um relatório completo a partir das informações coletadas na inspeção, incluindo fotos, vídeos e áudios. Organiza e apresenta essas informações no app, podendo ser personalizado para atender as necessidades do usuário.",
    icon: "description",
    category: "relatorios",
  },
  {
    title: "Função Informações",
    shortDescription: "Veja seus dados, limites de uso e configure sua conta com facilidade.",
    description:
      "Permite aos usuários visualizar seus dados (limites de edificação, vistorias e armazenamento) e solicitar a exclusão da conta. Possibilita também o upload de foto de perfil para uma visão geral fácil e intuitiva das configurações de conta.",
    icon: "info",
    category: "gestao",
  },
  {
    title: "Criação de Grupos",
    shortDescription: "Compartilhe documentos e informações com grupos específicos pra colaboração segura.",
    description:
      "Crie grupos de usuários específicos para compartilhar informações e documentos relacionados à edificação, aumentando a segurança e garantindo que somente as pessoas certas tenham acesso aos assuntos críticos. Facilite a colaboração e a tomada de decisões entre os membros do grupo.",
    icon: "group_add",
    category: "equipe",
  },
  {
    title: "Integração de Aviso e Tarefa",
    shortDescription: "Transforme um aviso em tarefa pra agir rápido em questões críticas.",
    description:
      "Essa função permite transformar um aviso em uma tarefa, permitindo que os usuários possam agir de forma rápida e eficaz para resolver questões críticas de forma organizada, melhorando a eficiência e agilidade no gerenciamento da edificação.",
    icon: "sync_alt",
    category: "comunicacao",
  },
  {
    title: "Linha Cronológica",
    shortDescription: "Registro cronológico de ações pra transparência total das decisões da edificação.",
    description:
      "Registro cronológico de ações, permitindo acompanhar e ter transparência de decisões e atividades para os atuais e futuros gestores da edificação.",
    icon: "timeline",
    category: "relatorios",
  },
  {
    title: "Histórico Geral da Edificação",
    shortDescription: "Registro detalhado de tudo que aconteceu e foi planejado em cada sistema.",
    description:
      "Registro detalhado de tudo que aconteceu/planejado nos sistemas da edificação, incluindo manutenção, incidentes, eventos e informações relevantes para gestão.",
    icon: "history",
    category: "relatorios",
  },
  {
    title: "Coleta Seletiva Especial",
    shortDescription: "Coleta de lixo reciclável e e-lixo direto pelo app — disponível na versão gratuita.",
    description:
      "Permite aos usuários do aplicativo VistoPred coletar e descartar lixo reciclável e e-lixo, contribuindo para a sustentabilidade. Este módulo está disponível gratuitamente na versão gratuita do aplicativo.",
    icon: "recycling",
    category: "gestao",
  },
  {
    title: "Cotações em Tarefas",
    shortDescription: "Envie notificação a prestadores anexados à tarefa pra cotar serviços rapidamente.",
    description:
      "Permite adicionar prestadores de serviço a uma tarefa criada no app, gerando notificações para cotações. Isso oferece agilidade na busca por ofertas, simplificando o processo de escolha do prestador ideal para sua tarefa.",
    icon: "request_quote",
    category: "gestao",
  },
  {
    title: "Filtro",
    shortDescription: "Filtre edificações e vistorias por dados válidos ou inativos sem perder histórico.",
    description:
      "Permite ao usuário procurar e filtrar edificações ou vistorias com facilidade. Ele está disponível em várias camadas do aplicativo e permite filtrar por dados válidos ou inativos, sem excluir nenhum dado, garantindo transparência e segurança dos dados do usuário.",
    icon: "filter_alt",
    category: "gestao",
  },
  {
    title: "Cotação em Série",
    shortDescription: "Solicite orçamentos de várias empresas parceiras e compare pra escolher a melhor.",
    description:
      "Solicita orçamentos de empresas parceiras para serviços de prédio (limpeza, manutenção, reformas, etc.) e compara as cotações para escolher a melhor. Automatize com a função “Tarefas” para agilidade.",
    icon: "receipt_long",
    category: "gestao",
  },
  {
    title: "Equipe de Emergência Comunitária",
    shortDescription: "Conecta moradores e funcionários numa equipe de resposta rápida a emergências.",
    description:
      "A função EEC ajuda a aumentar a segurança em emergências. Conecta moradores e funcionários para formar equipe de resposta rápida. Envia alarme virtual em caso de emergência, permite comunicação rápida entre membros e ajuda na coordenação de esforços de resgate. Garante segurança de todos envolvidos.",
    icon: "health_and_safety",
    category: "comunicacao",
  },
  {
    title: "Inspeções Especiais",
    shortDescription: "Módulo flexível pra inspeções fora do padrão: náuticas, veículos e imóveis.",
    description:
      "Módulo adicional para realizar inspeções fora do escopo principal do aplicativo, utilizando todas as ferramentas disponíveis para garantir agilidade e eficiência, incluindo inspeções náuticas, veículos e imóveis, e é flexível e adaptável às necessidades do usuário.",
    icon: "search",
    category: "vistorias",
  },
  {
    title: "Agendamento de Áreas Comuns",
    shortDescription: "Reserve salão, academia e áreas comuns com controle e opção de cobrança.",
    description:
      "Permite que os moradores possam reservar e agendar as áreas comuns do prédio, como salão de festas, academia, etc.. Com acesso exclusivo durante o período agendado. Isso garante organização e evita conflitos de uso dessas áreas, com opção de cobrança.",
    icon: "event_available",
    category: "gestao",
  },
  {
    title: "Assembleia Digital",
    shortDescription: "Reúna o condomínio em assembleias virtuais com enquetes e votações.",
    description:
      "Permite a realização de assembleias virtuais para condomínios, possibilitando a participação de todos os moradores de forma remota. Além disso, essa função também oferece a opção de criação de enquetes, permitindo aos participantes votarem e decidirem aos questões importantes do condomínio.",
    icon: "how_to_vote",
    category: "comunicacao",
  },
  {
    title: "Correspondência",
    shortDescription: "Registre entregas e recebimentos pra evitar falhas e manter histórico organizado.",
    description:
      "Comunique-se com moradores e funcionários para garantir entregas e recebimentos corretos. Registre e armazene informações para consultas fáceis e decisões em caso de crise, de forma simples.",
    icon: "markunread_mailbox",
    category: "comunicacao",
  },
  {
    title: "Notas",
    shortDescription: "Anote, grave áudios e anexe arquivos vinculados a sub-áreas específicas.",
    description:
      "Permite adicionar anotações, áudios, fotos, vídeos e arquivos relacionados a uma subárea específica dentro da função “Sub-Área”, possibilitando uma melhor documentação e referência das informações relacionadas a esta subárea.",
    icon: "note_add",
    category: "documentos",
  },
  {
    title: "Rede VistoPred",
    shortDescription: "Rede social interna pra moradores trocarem informações, eventos e notícias.",
    description:
      "Ferramenta de comunicação para os moradores do prédio, compartilhamento de informações, eventos e notícias. Permite conexão e troca de informações entre moradores e uso pela gestão para informar sobre eventos, manutenções, etc. Cria ambiente colaborativo e comunitário.",
    icon: "forum",
    category: "comunicacao",
  },
  {
    title: "Gestão de Vistoria e Serviços Adicionais",
    shortDescription: "Compartilhe código pra acompanhar e entregar serviços de terceiros pelo app.",
    description:
      "Permite acompanhar ou entregar serviços de terceiros, através de um simples compartilhamento de um código, dentro do aplicativo. Essa funcionalidade possibilita a gestão eficiente de serviços externos, como vistorias, manutenção, entre outros.",
    icon: "handyman",
    category: "manutencao",
  },
  {
    title: "Ata Eletrônica",
    shortDescription: "Registre e compartilhe atas de reunião em tempo real com notas e comentários.",
    description:
      "Permite registrar, gerenciar e compartilhar informações e decisões de uma reunião de forma digital. Os participantes podem inserir notas e comentários em tempo real, garantindo que todos tenham acesso às informações atualizadas.",
    icon: "edit_document",
    category: "documentos",
  },
  {
    title: "Relatórios Diários Automatizados",
    shortDescription: "Reúna registros do dia (diário de obra, fotos) em um relatório único pronto.",
    description:
      "Reúnem informações de diferentes módulos do aplicativo em um único local, permitindo registrar informações diárias de forma mais rápida e fácil, como o próprio diário de uma obra ou relatório fotográfico. O objetivo é aumentar a eficiência e velocidade na realização dessas tarefas diárias.",
    icon: "date_range",
    category: "relatorios",
  },
  {
    title: "Gerenciador de Serviços Externos",
    shortDescription: "Contrate, gerencie e avalie limpeza, jardins e outros serviços terceirizados.",
    description:
      "Permite aos usuários contratar e gerenciar serviços de terceiros, como limpeza, manutenção de jardins e maridos de aluguel. Com esta ferramenta, os usuários podem buscar, avaliar e contratar profissionais qualificados, além de acompanhar o andamento das tarefas, receber notificações do progresso e avaliar o trabalho realizado pelos profissionais.",
    icon: "engineering",
    category: "manutencao",
  },
  {
    title: "Multi Estoque",
    shortDescription: "Controle estoques com rastreamento, reabastecimento inteligente e personalização.",
    description:
      "Gerenciador de estoques de forma eficiente, controlando o fluxo de materiais, evitando desperdícios e garantindo reposições oportunas. Rastreamento, reabastecimento inteligente e personalização flexível, você terá uma visão abrangente de todos os seus estoques.",
    icon: "inventory",
    category: "manutencao",
  },
  {
    title: "PMAV",
    shortDescription: "Panorama dos próximos 10 anos de manutenção com base nas normas vigentes.",
    description:
      "Serviço que visa dar um panorama aos gestores das edificações sobre os procedimentos de manutenção que eles precisarão realizar nos próximos 10 anos. Este planejamento é construído com base nas normas vigentes e recebe o suporte técnico da nossa experiente equipe de engenharia.",
    icon: "event_note",
    category: "manutencao",
  },
  {
    title: "Manual Dinâmico",
    shortDescription: "Manual de uso e operação interativo com vídeos e agendamento de tarefas.",
    description:
      "O Manual Dinâmico eleva o manual de uso e operação do condomínio a um novo patamar. Com vídeos explicativos e agendamento de tarefas, ele transforma o manual tradicional em uma experiência dinâmica e interativa.",
    icon: "menu_book",
    category: "documentos",
  },
  {
    title: "Suporte Prioritário",
    shortDescription: "Especialista dedicado pra te guiar na implantação e tirar dúvidas quando precisar.",
    description:
      "O Suporte Prioritário oferece acesso direto a um especialista dedicado para auxiliar na implantação do app. Garanta uma transição suave e eficiente com orientação especializada disponível quando você mais precisar.",
    icon: "support_agent",
    category: "gestao",
  },
  {
    title: "Mobilidade Urbana",
    shortDescription: "Acompanhe rotas, transporte e verifique presença de funcionários no trajeto.",
    description:
      "Módulo extra que permite uso privado de transporte, acompanhamento de rotas e verificação de presença de funcionários. Busca proporcionar transparência e eficiência na comunicação de informações.",
    icon: "directions_car",
    category: "gestao",
  },
  {
    title: "VistoView",
    shortDescription: "Converte dados complexos de vistoria em gráficos e planilhas pra decisões claras.",
    description:
      "O VistoView converte dados complexos de vistoria em gráficos claros e planilhas organizadas. Decifre as tendências de manutenção facilmente e faça gestões mais assertivas com informações ao alcance dos seus olhos",
    icon: "query_stats",
    category: "relatorios",
  },
  {
    title: "Sair",
    shortDescription: "Desconecta sua conta e retorna ao login mantendo a segurança dos seus dados.",
    description:
      "Função que desconecta o usuário da sua conta no aplicativo, retornando à tela de login. A segurança e privacidade das informações são preservadas.",
    icon: "logout",
    category: "gestao",
  },
];
