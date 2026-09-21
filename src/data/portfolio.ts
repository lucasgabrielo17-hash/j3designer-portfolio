export interface PortfolioItem {
  id: string
  title: string
  image: string
  description: string
  videoUrl?: string
  isVideo?: boolean
}

export interface PortfolioCategory {
  id: string
  title: string
  titleEn: string
  coverImage: string
  description: string
  year: string
  items: PortfolioItem[]
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'visualizacoes-arquitetonicas',
    title: 'Visualizações Arquitetônicas',
    titleEn: 'Architectural Visualizations',
    coverImage: '/portfolio/exteriores/cb0a2977-7c51-43e2-aa53-2b6e1eac2e00_rwc_0x0x1907x1074x1907.jpg',
    description: 'Projetos de arquitetura externa, renderizações 3D de edifícios residenciais e comerciais.',
    year: '2021',
    items: [
      {
        id: 'arq-1',
        title: 'Projeto Residencial 01',
        image: '/portfolio/exteriores/5595841d-4d4e-444a-a43f-b64b73e28fd0_rw_1920.jpg',
        description: 'Visualização 3D de residência com fachada moderna e iluminação noturna.'
      },
      {
        id: 'arq-3',
        title: 'Empreendimento Residencial',
        image: '/portfolio/exteriores/04e20188-fbf8-4b76-ba61-48f06f050ed3_rw_1920.jpg',
        description: 'Projeto de condomínio com área de lazer completa.'
      },
      {
        id: 'arq-4',
        title: 'Residência de Alto Padrão 01',
        image: '/portfolio/exteriores/6422d9b2-7ba7-4814-ba33-6c2117a0a9b3_rw_1920.jpg',
        description: 'Casa de luxo com arquitetura sofisticada e acabamentos premium.'
      },
      {
        id: 'arq-5',
        title: 'Residência de Alto Padrão 02',
        image: '/portfolio/exteriores/04b28d0b-2c80-40f1-9c01-40abc519e039_rw_1920.jpg',
        description: 'Projeto residencial com área de lazer e piscina integrada.'
      },
      {
        id: 'arq-6',
        title: 'Casa Moderna 01',
        image: '/portfolio/exteriores/6cb83dc4-be6b-420b-bf8f-809451d22dec_rw_1920.jpg',
        description: 'Arquitetura minimalista com linhas limpas e materiais nobres.'
      },
      {
        id: 'arq-7',
        title: 'Casa Moderna 02',
        image: '/portfolio/exteriores/cd802561-6fc4-4df6-9801-3ee05ea2fce7_rw_1920.jpg',
        description: 'Residência com fachada em vidro e concreto aparente.'
      },
      {
        id: 'arq-8',
        title: 'Projeto Arquitetônico',
        image: '/portfolio/exteriores/703db943-cd52-46b2-b242-1daa37a23621_rw_1920.jpg',
        description: 'Visualização externa com paisagismo e iluminação.'
      },
      {
        id: 'arq-9',
        title: 'Edifício Residencial',
        image: '/portfolio/exteriores/30a9241e-20b7-4c4e-8122-69aa70dc74a0_rw_1920.jpg',
        description: 'Prédio residencial com sacadas amplas e fachada contemporânea.'
      },
      {
        id: 'arq-local-1',
        title: 'Residência Nossa Senhora Aparecida',
        image: '/portfolio/exteriores/EdNossaSraAparecida.jpg.jpeg',
        description: 'Visualização arquitetônica residencial com fachada contemporânea.'
      },
      {
        id: 'arq-local-2',
        title: 'Condomínio Nossa Senhora Aparecida',
        image: '/portfolio/exteriores/Planta_02_Cond_Nossa_Sra_Ap.jpg.jpeg',
        description: 'Planta e apresentação visual de empreendimento residencial.'
      },
      {
        id: 'arq-local-3',
        title: 'Ópera La Luna 02',
        image: '/portfolio/exteriores/OperaLaLuna_02.jpg.jpeg',
        description: 'Visualização arquitetônica de residência de alto padrão.'
      },
      {
        id: 'arq-local-4',
        title: 'Ópera La Luna 03',
        image: '/portfolio/exteriores/OperaLaLuna_03.jpg.jpeg',
        description: 'Estudo visual de fachada e composição arquitetônica.'
      }
    ]
  },
  {
    id: 'interiores',
    title: 'Interiores',
    titleEn: 'Interior Design',
    coverImage: '/portfolio/interiores/f9155a53-7e15-4a4d-a126-e25c177251e7_rwc_659x231x1081x609x1081.jpg',
    description: 'Projetos de interiores residenciais e comerciais com foco em conforto e estética.',
    year: '2021',
    items: [
      {
        id: 'int-1',
        title: 'Suíte Casal - Giardino Ópera',
        image: '/portfolio/interiores/f5e3dd24-6f44-4aac-869b-fcdf4a93a213_rw_1920.jpg',
        description: 'Suíte master para Construtora Patagônia com design elegante.'
      },
      {
        id: 'int-2',
        title: 'Banheiro Moderno',
        image: '/portfolio/interiores/7244a459-1b49-4aed-a53c-48a971549586_rw_1920.jpg',
        description: 'Banheiro com acabamentos em mármore e design contemporâneo.'
      },
      {
        id: 'int-4',
        title: 'Sala de Estar Integrada',
        image: '/portfolio/interiores/9691b2f3-38ef-450f-8220-d7019d5344c1_rw_3840.jpg',
        description: 'Ambiente amplo com iluminação natural e vista panorâmica.'
      },
      {
        id: 'int-5',
        title: 'Cozinha Gourmet',
        image: '/portfolio/interiores/1a56f374-73b6-4e51-8be2-9e167e717f3d_rw_1920.jpg',
        description: 'Cozinha planejada com ilha central e acabamentos premium.'
      },
      {
        id: 'int-6',
        title: 'Sala de Estar Moderna',
        image: '/portfolio/interiores/0911472d-dfc2-46fd-a8bc-ae07cfe8b472_rw_1920.jpg',
        description: 'Living com mobiliário contemporâneo e decoração minimalista.'
      },
      {
        id: 'int-8',
        title: 'Lounge',
        image: '/portfolio/interiores/98728e4f-1913-4c79-b076-3e08736aa6b4_rw_1920.jpg',
        description: 'Área de convívio com decoração sofisticada.'
      },
      {
        id: 'int-local-1',
        title: 'Suíte Ópera La Luna',
        image: '/portfolio/interiores/OperaLaLuna_Suite.jpg.jpeg',
        description: 'Suíte residencial com composição acolhedora e acabamentos sofisticados.'
      },
      {
        id: 'int-local-2',
        title: 'Cozinha Tecno',
        image: '/portfolio/interiores/TecnoTR14FZDA_Capa01_Web.jpg.jpeg',
        description: 'Visualização de cozinha planejada com design contemporâneo.'
      }
    ]
  },
  {
    id: 'produtos-3d',
    title: 'Produtos 3D',
    titleEn: '3D Products',
    coverImage: '/portfolio/produtos/eb621932-34cf-4293-9d91-d9d7034b69a8_car_16x9.jpg',
    description: 'Modelagem 3D de produtos para e-commerce, catálogos e apresentações comerciais.',
    year: '2021',
    items: [
      {
        id: 'prod-1',
        title: 'Poltrona de Design',
        image: '/portfolio/produtos/1c0f8fa6-b35f-4c57-8595-0cdda7350a23_rw_1920.jpg',
        description: 'Renderização de poltrona com acabamento em couro.'
      },
      {
        id: 'prod-2',
        title: 'Garrafa de Perfume',
        image: '/portfolio/produtos/dc322d8d-af6d-4473-b48d-140f078abd93_rw_3840.jpg',
        description: 'Modelagem de embalagem para cosméticos de luxo.'
      },
      {
        id: 'prod-3',
        title: 'Garrafa de Vidro',
        image: '/portfolio/produtos/7a8c598e-318f-4302-be71-7c319b211de5_rw_1920.jpg',
        description: 'Produto com material transparente e reflexos realistas.'
      },
      {
        id: 'prod-4',
        title: 'Relógio de Luxo',
        image: '/portfolio/produtos/01c306d7-8059-478a-9937-2a282227ece8_rw_1920.jpg',
        description: 'Renderização de relógio com detalhes metálicos.'
      },
      {
        id: 'prod-6',
        title: 'Frasco Cosmético',
        image: '/portfolio/produtos/59307d5c-174d-4cf6-b621-e00e6a0ad961_rw_1920.jpg',
        description: 'Embalagem de produto de beleza com design elegante.'
      },
      {
        id: 'prod-8',
        title: 'Caixa de Som',
        image: '/portfolio/produtos/44e0d1be-53c2-4ab2-87f1-3ce5a6123cf3_rw_1920.jpg',
        description: 'Speaker Bluetooth com acabamento premium.'
      },
      {
        id: 'prod-9',
        title: 'Luminária Decorativa',
        image: '/portfolio/produtos/5583406f-601b-40fc-a763-1d985c491ad8_rw_1920.jpg',
        description: 'Luminária com design moderno e iluminação LED.'
      },
      {
        id: 'prod-local-1',
        title: 'Gol P Detran',
        image: '/portfolio/produtos/Gol_P_Detran_ajustes.jpg.jpeg',
        description: 'Visualização de produto automotivo para apresentação comercial.'
      },
      {
        id: 'prod-local-2',
        title: 'Composição Eudora',
        image: '/portfolio/produtos/Eudora_ComposFinal_03_24_B.jpg.jpeg',
        description: 'Composição de produtos de beleza para campanha visual.'
      },
      {
        id: 'prod-local-3',
        title: 'Dream Pack',
        image: '/portfolio/produtos/DREAM_PACK_.jpg.jpeg',
        description: 'Apresentação de linha de produtos com composição promocional.'
      },
      {
        id: 'prod-local-4',
        title: 'Cuide-se Bem de Leite',
        image: '/portfolio/produtos/CuideSeBemDeLeite_corte.jpg.jpeg',
        description: 'Visualização de embalagem e produto para campanha comercial.'
      }
    ]
  },
  {
    id: 'tratamentos-fotos',
    title: 'Tratamentos de Fotos',
    titleEn: 'Photo Retouching',
    coverImage: '/portfolio/tratamento/f8a1b887-be58-4040-a5c5-45fe8c487bcc_rw_1920.jpg',
    description: 'Fusão 3D com fotografia, tratamento de imagens e pós-produção avançada.',
    year: '2021',
    items: [
      {
        id: 'foto-1',
        title: 'Fusão 3D + Foto - Produto',
        image: '/portfolio/tratamento/f8a1b887-be58-4040-a5c5-45fe8c487bcc_rw_1920.jpg',
        description: 'Integração entre modelagem 3D e fotografia de produto.'
      },
      {
        id: 'foto-3',
        title: 'Pós-Produção Arquitetônica',
        image: '/portfolio/tratamento/b587f65a-21b6-470e-bb53-6b225e0e49f2_rw_1920.jpg',
        description: 'Tratamento de imagem arquitetônica com elementos 3D.'
      },
      {
        id: 'foto-4',
        title: 'Fusão 3D + Foto - Cenário',
        image: '/portfolio/tratamento/8e820df4-8647-40b1-a5d3-d0417bf78fa7_rw_1920.jpg',
        description: 'Composição de cenário com fusão 3D e fotografia.'
      },
      {
        id: 'foto-5',
        title: 'Tratamento Fotográfico',
        image: '/portfolio/tratamento/3b7ba014-602a-48f9-b5d2-76836cf966b8_rw_1920.jpg',
        description: 'Pós-produção profissional com ajustes de cor e iluminação.'
      },
      {
        id: 'foto-6',
        title: 'Fusão 3D + Foto Vertical',
        image: '/portfolio/tratamento/086e11d1-a34e-4ebb-b74b-3566094f43f0_rw_1920.jpg',
        description: 'Composição vertical com elementos 3D integrados.'
      },
      {
        id: 'foto-7',
        title: 'Pós-Produção Criativa',
        image: '/portfolio/tratamento/d9767875-c4df-47ab-a87f-3053fc2b6f20_rw_1920.jpg',
        description: 'Tratamento criativo com fusão de técnicas 3D e fotografia.'
      },
      {
        id: 'foto-local-1',
        title: 'Vult Superfix',
        image: '/portfolio/tratamento/VULT_SUPERFIX_101.jpg.jpeg',
        description: 'Tratamento e composição visual para produto cosmético.'
      },
      {
        id: 'foto-local-2',
        title: 'Vult Balm Pack',
        image: '/portfolio/tratamento/VULT_03_25_59508_BALM_PACK_08.jpg.jpeg',
        description: 'Pós-produção de embalagem e composição publicitária.'
      },
      {
        id: 'foto-local-3',
        title: 'Vult Balm Pack Composição',
        image: '/portfolio/tratamento/VULT_03_25_59508_59509_59510_BALM_PACK_03.jpg.jpeg',
        description: 'Composição final de linha de produtos para campanha.'
      },
    ]
  },
  {
    id: 'ilustracoes',
    title: 'Ilustrações',
    titleEn: 'Illustrations',
    coverImage: '/portfolio/ilustracoes/7348d9e9-f8bf-4710-afb6-fbab9bf97520_rw_1920.jpg',
    description: 'Ilustrações técnicas, concept art e artes para projetos diversos.',
    year: '2021',
    items: [
      {
        id: 'ilus-1',
        title: 'Ilustração Paisagem',
        image: '/portfolio/ilustracoes/7348d9e9-f8bf-4710-afb6-fbab9bf97520_rw_1920.jpg',
        description: 'Ilustração digital de paisagem com cores vibrantes.'
      },
      {
        id: 'ilus-2',
        title: 'Arte Conceitual',
        image: '/portfolio/ilustracoes/3341c091-90b3-4402-bec0-58ab53db70c3_rw_1920.jpg',
        description: 'Concept art com técnicas de ilustração digital.'
      },
      {
        id: 'ilus-3',
        title: 'Ilustração Vertical',
        image: '/portfolio/ilustracoes/33e6dde6-80e3-45c1-b6b4-7d95da177d8b_rw_1920.jpg',
        description: 'Arte digital em formato vertical com estilo único.'
      },
      {
        id: 'ilus-4',
        title: 'Ilustração Ambiente',
        image: '/portfolio/ilustracoes/54fd2fba-ce6e-427e-b7c2-22bc12d0f207_rw_1920.jpg',
        description: 'Ilustração de ambiente com iluminação atmosférica.'
      },
      {
        id: 'ilus-5',
        title: 'Ilustração Decorativa',
        image: '/portfolio/ilustracoes/b6228ae2-14b6-4450-a8fe-5612b0eeaed4_rw_1920.jpg',
        description: 'Arte decorativa com composição equilibrada.'
      }
    ]
  },
  {
    id: 'videos',
    title: 'Vídeos',
    titleEn: 'Videos',
    coverImage: '/portfolio/videos/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg',
    description: 'Animações, reels e vídeos promocionais com motion graphics.',
    year: '2021',
    items: [
      {
        id: 'vid-1',
        title: 'Institucional Dexter Latina',
        image: '/portfolio/videos/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg',
        description: 'Institucional Dexter Latina - Agência GPAC - Produtora Soft Cine - Direção Gustavo Brandau - Fotografia Nelson Guaripuna. O que fiz: Modelagem/Animação 3D/Motion',
        videoUrl: 'https://www-ccv.adobe.io/v1/player/ccv/UhF_upJinHQ/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
        isVideo: true
      },
      {
        id: 'vid-2',
        title: 'Institucional Unimed Curitiba',
        image: '/portfolio/videos/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg',
        description: 'Institucional Unimed Curitiba - Agência Bronx - Produtora Easy Filmes - Direção Cristiano Rieck. O que fiz: Animação/Edição',
        videoUrl: 'https://www-ccv.adobe.io/v1/player/ccv/VrosHqQ9R-U/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
        isVideo: true
      },
      {
        id: 'vid-3',
        title: 'Vinheta Cosmopolitan Store',
        image: '/portfolio/videos/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg',
        description: 'Vinheta Cosmopolitan Store - Agência Casal Design Lovers. O que fiz: Animação 3D e Edição',
        videoUrl: 'https://www-ccv.adobe.io/v1/player/ccv/RGDYmh9Yome/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
        isVideo: true
      },
      {
        id: 'vid-4',
        title: 'Vídeo Produto Gelopar',
        image: '/portfolio/videos/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg',
        description: 'Vídeo Apresentação de Produto - Gelopar - StudioM. O que fiz: Animação 3D e Edição',
        videoUrl: 'https://www-ccv.adobe.io/v1/player/ccv/3GTDwKspb2U/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
        isVideo: true
      },
      {
        id: 'vid-5',
        title: 'Vídeo Produto Bergerson',
        image: '/portfolio/videos/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg',
        description: 'Vídeo Apresentação de Produto - Bergerson - StudioM. O que fiz: Animação 3D, Materiais e Edição',
        videoUrl: 'https://www-ccv.adobe.io/v1/player/ccv/-W4ZVTyUZzm/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
        isVideo: true
      }
    ]
  }
]

export const getCategoryById = (id: string): PortfolioCategory | undefined => {
  return portfolioCategories.find(cat => cat.id === id)
}
