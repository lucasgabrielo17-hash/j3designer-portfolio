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
    coverImage: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/cb0a2977-7c51-43e2-aa53-2b6e1eac2e00_rwc_0x0x1907x1074x1907.jpg?h=5c691cefadfd7c31cc6c789e21d226c9',
    description: 'Projetos de arquitetura externa, renderizações 3D de edifícios residenciais e comerciais.',
    year: '2021',
    items: [
      {
        id: 'arq-1',
        title: 'Projeto Residencial 01',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/5595841d-4d4e-444a-a43f-b64b73e28fd0_rw_1920.jpg?h=6960c5245cd0ddf9c8838a0bb1b70548',
        description: 'Visualização 3D de residência com fachada moderna e iluminação noturna.'
      },
      {
        id: 'arq-2',
        title: 'Projeto Residencial 02',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/a395a694-a04b-4d3e-a72f-106646e4d9a3_rw_1920.jpg?h=4d8f0f656fa1d80697db1a6818475f31',
        description: 'Casa com design contemporâneo e integração com jardim.'
      },
      {
        id: 'arq-3',
        title: 'Empreendimento Residencial',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/04e20188-fbf8-4b76-ba61-48f06f050ed3_rw_1920.jpg?h=394fd8c8629afa316f82c944d6e7d101',
        description: 'Projeto de condomínio com área de lazer completa.'
      },
      {
        id: 'arq-4',
        title: 'Residência de Alto Padrão 01',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/6422d9b2-7ba7-4814-ba33-6c2117a0a9b3_rw_1920.jpg?h=32f75cee24a8a88e87d26e430cf886d1',
        description: 'Casa de luxo com arquitetura sofisticada e acabamentos premium.'
      },
      {
        id: 'arq-5',
        title: 'Residência de Alto Padrão 02',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/04b28d0b-2c80-40f1-9c01-40abc519e039_rw_1920.jpg?h=cf49a08d5417bee335f3a662c8a412f2',
        description: 'Projeto residencial com área de lazer e piscina integrada.'
      },
      {
        id: 'arq-6',
        title: 'Casa Moderna 01',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/6cb83dc4-be6b-420b-bf8f-809451d22dec_rw_1920.jpg?h=be645367754d1d572435d08cebf8ec4d',
        description: 'Arquitetura minimalista com linhas limpas e materiais nobres.'
      },
      {
        id: 'arq-7',
        title: 'Casa Moderna 02',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/cd802561-6fc4-4df6-9801-3ee05ea2fce7_rw_1920.jpg?h=5f224c595f525c0e66223a5840dab16f',
        description: 'Residência com fachada em vidro e concreto aparente.'
      },
      {
        id: 'arq-8',
        title: 'Projeto Arquitetônico',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/703db943-cd52-46b2-b242-1daa37a23621_rw_1920.jpg?h=25ea2f1da88142d23644e4bdb9a5ba74',
        description: 'Visualização externa com paisagismo e iluminação.'
      },
      {
        id: 'arq-9',
        title: 'Edifício Residencial',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/30a9241e-20b7-4c4e-8122-69aa70dc74a0_rw_1920.jpg?h=3bfbc74eddbb830d1bf4dd4860766307',
        description: 'Prédio residencial com sacadas amplas e fachada contemporânea.'
      }
    ]
  },
  {
    id: 'interiores',
    title: 'Interiores',
    titleEn: 'Interior Design',
    coverImage: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/f9155a53-7e15-4a4d-a126-e25c177251e7_rwc_659x231x1081x609x1081.jpg?h=2510a43ab8e7d10b9bf95428e2291ee3',
    description: 'Projetos de interiores residenciais e comerciais com foco em conforto e estética.',
    year: '2021',
    items: [
      {
        id: 'int-1',
        title: 'Suíte Casal - Giardino Ópera',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/f5e3dd24-6f44-4aac-869b-fcdf4a93a213_rw_1920.jpg?h=8aeb68303beb22446dfabbae96c51b48',
        description: 'Suíte master para Construtora Patagônia com design elegante.'
      },
      {
        id: 'int-2',
        title: 'Banheiro Moderno',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/7244a459-1b49-4aed-a53c-48a971549586_rw_1920.jpg?h=9b4bd2ff1f6f8638114dff17563730b9',
        description: 'Banheiro com acabamentos em mármore e design contemporâneo.'
      },
      {
        id: 'int-3',
        title: 'Sala de Jantar',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/a4232eaa-5a03-464e-9404-2a2b8c565777_rw_1920.jpg?h=89773979e775f08971317428207d6804',
        description: 'Ambiente de jantar integrado com sala de estar.'
      },
      {
        id: 'int-4',
        title: 'Sala de Estar Integrada',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/9691b2f3-38ef-450f-8220-d7019d5344c1_rw_3840.jpg?h=e7e7a30a222acf7af1d92edbc273819a',
        description: 'Ambiente amplo com iluminação natural e vista panorâmica.'
      },
      {
        id: 'int-5',
        title: 'Cozinha Gourmet',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/1a56f374-73b6-4e51-8be2-9e167e717f3d_rw_1920.jpg?h=6c9e34ee2211d631fda726b3710998e7',
        description: 'Cozinha planejada com ilha central e acabamentos premium.'
      },
      {
        id: 'int-6',
        title: 'Sala de Estar Moderna',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/0911472d-dfc2-46fd-a8bc-ae07cfe8b472_rw_1920.jpg?h=9cfe44fafb98fe2d7ad271a3d3d3e782',
        description: 'Living com mobiliário contemporâneo e decoração minimalista.'
      },
      {
        id: 'int-7',
        title: 'Quarto de Casal',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/611f1c1f-9072-47ba-956e-61bf4624f827_rw_1920.jpg?h=47a4287e5903ef27030ee53ba56ba657',
        description: 'Dormitório aconchegante com iluminação intimista.'
      },
      {
        id: 'int-8',
        title: 'Lounge',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/98728e4f-1913-4c79-b076-3e08736aa6b4_rw_1920.jpg?h=6f5f90402388deb063c0e2f91ecc30d1',
        description: 'Área de convívio com decoração sofisticada.'
      }
    ]
  },
  {
    id: 'produtos-3d',
    title: 'Produtos 3D',
    titleEn: '3D Products',
    coverImage: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/eb621932-34cf-4293-9d91-d9d7034b69a8_car_16x9.jpg?h=ad0a7deb27881edd431c70382fe718af',
    description: 'Modelagem 3D de produtos para e-commerce, catálogos e apresentações comerciais.',
    year: '2021',
    items: [
      {
        id: 'prod-1',
        title: 'Poltrona de Design',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/1c0f8fa6-b35f-4c57-8595-0cdda7350a23_rw_1920.jpg?h=c0a6762e0bab31442eee6ebe55b2e9df',
        description: 'Renderização de poltrona com acabamento em couro.'
      },
      {
        id: 'prod-2',
        title: 'Garrafa de Perfume',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/dc322d8d-af6d-4473-b48d-140f078abd93_rw_3840.jpg?h=8ee0c30e9650d4298b3e971e37a61ea0',
        description: 'Modelagem de embalagem para cosméticos de luxo.'
      },
      {
        id: 'prod-3',
        title: 'Garrafa de Vidro',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/7a8c598e-318f-4302-be71-7c319b211de5_rw_1920.jpg?h=9915d8208bd68f30f361aa17facd99dc',
        description: 'Produto com material transparente e reflexos realistas.'
      },
      {
        id: 'prod-4',
        title: 'Relógio de Luxo',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/01c306d7-8059-478a-9937-2a282227ece8_rw_1920.jpg?h=6fc4c589610b90007a76ba6c2e38e9a7',
        description: 'Renderização de relógio com detalhes metálicos.'
      },
      {
        id: 'prod-5',
        title: 'Frasco de Perfume Gold',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/146956c7-3626-4327-9548-34ff73a025fd_rw_1920.jpg?h=71df308568c0f8c1caf39711b83041c8',
        description: 'Produto de beleza com acabamento dourado.'
      },
      {
        id: 'prod-6',
        title: 'Frasco Cosmético',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/59307d5c-174d-4cf6-b621-e00e6a0ad961_rw_1920.jpg?h=96dab9aa64327fa80c0854300ce820a0',
        description: 'Embalagem de produto de beleza com design elegante.'
      },
      {
        id: 'prod-7',
        title: 'Perfume Premium',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/29bd944c-b467-4dc3-a36a-e504c944c18c_rw_1920.jpg?h=5184bbb261afb21f019ff6fdcd5bbfa4',
        description: 'Frasco de perfume com tampa metálica e vidro escuro.'
      },
      {
        id: 'prod-8',
        title: 'Caixa de Som',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/44e0d1be-53c2-4ab2-87f1-3ce5a6123cf3_rw_1920.jpg?h=3ecabd4405dabb574cbbbe75a7148d15',
        description: 'Speaker Bluetooth com acabamento premium.'
      },
      {
        id: 'prod-9',
        title: 'Luminária Decorativa',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/5583406f-601b-40fc-a763-1d985c491ad8_rw_1920.jpg?h=e6112b8fd78c76ac8a8e14e669f505d1',
        description: 'Luminária com design moderno e iluminação LED.'
      }
    ]
  },
  {
    id: 'tratamentos-fotos',
    title: 'Tratamentos de Fotos',
    titleEn: 'Photo Retouching',
    coverImage: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/f8a1b887-be58-4040-a5c5-45fe8c487bcc_rw_1920.jpg?h=e14bde1bc6a48efebc4895ad30979b0c',
    description: 'Fusão 3D com fotografia, tratamento de imagens e pós-produção avançada.',
    year: '2021',
    items: [
      {
        id: 'foto-1',
        title: 'Fusão 3D + Foto - Produto',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/f8a1b887-be58-4040-a5c5-45fe8c487bcc_rw_1920.jpg?h=e14bde1bc6a48efebc4895ad30979b0c',
        description: 'Integração entre modelagem 3D e fotografia de produto.'
      },
      {
        id: 'foto-2',
        title: 'Fusão 3D + Foto - Retrato',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/e679298f-cb48-400c-b2ba-37b6a303ab48_rw_1920.jpg?h=83534aab9e0753792baba84c7acd2a5f',
        description: 'Composição de elementos 3D com fotografia de retrato.'
      },
      {
        id: 'foto-3',
        title: 'Pós-Produção Arquitetônica',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/b587f65a-21b6-470e-bb53-6b225e0e49f2_rw_1920.jpg?h=2086fb927a24db6048f0e307de7dd865',
        description: 'Tratamento de imagem arquitetônica com elementos 3D.'
      },
      {
        id: 'foto-4',
        title: 'Fusão 3D + Foto - Cenário',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/8e820df4-8647-40b1-a5d3-d0417bf78fa7_rw_1920.jpg?h=54d32122f85267fe94e4d01f28f61c8d',
        description: 'Composição de cenário com fusão 3D e fotografia.'
      },
      {
        id: 'foto-5',
        title: 'Tratamento Fotográfico',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/3b7ba014-602a-48f9-b5d2-76836cf966b8_rw_1920.jpg?h=79fe28335c6818dd148ca03dea1be905',
        description: 'Pós-produção profissional com ajustes de cor e iluminação.'
      },
      {
        id: 'foto-6',
        title: 'Fusão 3D + Foto Vertical',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/086e11d1-a34e-4ebb-b74b-3566094f43f0_rw_1920.jpg?h=4923d1d050dd168edcb5f05b9ab588da',
        description: 'Composição vertical com elementos 3D integrados.'
      },
      {
        id: 'foto-7',
        title: 'Pós-Produção Criativa',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/d9767875-c4df-47ab-a87f-3053fc2b6f20_rw_1920.jpg?h=d0248a7cfde6dbc81805ea0d25f998e2',
        description: 'Tratamento criativo com fusão de técnicas 3D e fotografia.'
      },
      {
        id: 'foto-8',
        title: 'Fusão 3D + Ambiente',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/03610f15-e41e-473e-b238-2dd1fcf6ff72_rw_1920.jpg?h=e40332083437f881deb300f0eccfbc98',
        description: 'Integração de elementos 3D em ambiente fotografado.'
      },
      {
        id: 'foto-9',
        title: 'Composição 3D + Foto',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/ec0d8447-83a8-4583-9333-6ce88e220239_rw_1920.jpg?h=264685e5f1ccfc44cf9ab2f8e12ef829',
        description: 'Composição final com fusão perfeita entre 3D e fotografia.'
      }
    ]
  },
  {
    id: 'ilustracoes',
    title: 'Ilustrações',
    titleEn: 'Illustrations',
    coverImage: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/7348d9e9-f8bf-4710-afb6-fbab9bf97520_rw_1920.jpg?h=f867e39f7836d3c6e124b4764b4c1e10',
    description: 'Ilustrações técnicas, concept art e artes para projetos diversos.',
    year: '2021',
    items: [
      {
        id: 'ilus-1',
        title: 'Ilustração Paisagem',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/7348d9e9-f8bf-4710-afb6-fbab9bf97520_rw_1920.jpg?h=f867e39f7836d3c6e124b4764b4c1e10',
        description: 'Ilustração digital de paisagem com cores vibrantes.'
      },
      {
        id: 'ilus-2',
        title: 'Arte Conceitual',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/3341c091-90b3-4402-bec0-58ab53db70c3_rw_1920.jpg?h=c8dd4b138150f851784bb3e1e8bb3b6d',
        description: 'Concept art com técnicas de ilustração digital.'
      },
      {
        id: 'ilus-3',
        title: 'Ilustração Vertical',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/33e6dde6-80e3-45c1-b6b4-7d95da177d8b_rw_1920.jpg?h=7c6873efa6d613b42029d018e8ccf092',
        description: 'Arte digital em formato vertical com estilo único.'
      },
      {
        id: 'ilus-4',
        title: 'Ilustração Ambiente',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/54fd2fba-ce6e-427e-b7c2-22bc12d0f207_rw_1920.jpg?h=76cb52826e8d24e346f9518759dabab2',
        description: 'Ilustração de ambiente com iluminação atmosférica.'
      },
      {
        id: 'ilus-5',
        title: 'Ilustração Decorativa',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/b6228ae2-14b6-4450-a8fe-5612b0eeaed4_rw_1920.jpg?h=691413698a4e763a6cd5640cf9a16e2a',
        description: 'Arte decorativa com composição equilibrada.'
      }
    ]
  },
  {
    id: 'videos',
    title: 'Vídeos',
    titleEn: 'Videos',
    coverImage: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg?h=66413c6b42996321a9d8d6767c8f62e9',
    description: 'Animações, reels e vídeos promocionais com motion graphics.',
    year: '2021',
    items: [
      {
        id: 'vid-1',
        title: 'Institucional Dexter Latina',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg?h=66413c6b42996321a9d8d6767c8f62e9',
        description: 'Institucional Dexter Latina - Agência GPAC - Produtora Soft Cine - Direção Gustavo Brandau - Fotografia Nelson Guaripuna. O que fiz: Modelagem/Animação 3D/Motion',
        videoUrl: 'https://www-ccv.adobe.io/v1/player/ccv/UhF_upJinHQ/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
        isVideo: true
      },
      {
        id: 'vid-2',
        title: 'Institucional Unimed Curitiba',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg?h=66413c6b42996321a9d8d6767c8f62e9',
        description: 'Institucional Unimed Curitiba - Agência Bronx - Produtora Easy Filmes - Direção Cristiano Rieck. O que fiz: Animação/Edição',
        videoUrl: 'https://www-ccv.adobe.io/v1/player/ccv/VrosHqQ9R-U/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
        isVideo: true
      },
      {
        id: 'vid-3',
        title: 'Vinheta Cosmopolitan Store',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg?h=66413c6b42996321a9d8d6767c8f62e9',
        description: 'Vinheta Cosmopolitan Store - Agência Casal Design Lovers. O que fiz: Animação 3D e Edição',
        videoUrl: 'https://www-ccv.adobe.io/v1/player/ccv/RGDYmh9Yome/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
        isVideo: true
      },
      {
        id: 'vid-4',
        title: 'Vídeo Produto Gelopar',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg?h=66413c6b42996321a9d8d6767c8f62e9',
        description: 'Vídeo Apresentação de Produto - Gelopar - StudioM. O que fiz: Animação 3D e Edição',
        videoUrl: 'https://www-ccv.adobe.io/v1/player/ccv/3GTDwKspb2U/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View',
        isVideo: true
      },
      {
        id: 'vid-5',
        title: 'Vídeo Produto Bergerson',
        image: 'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/3d11298a-b6d2-48d1-a2bf-72e479e2497f_rwc_576x70x777x438x777.jpg?h=66413c6b42996321a9d8d6767c8f62e9',
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
