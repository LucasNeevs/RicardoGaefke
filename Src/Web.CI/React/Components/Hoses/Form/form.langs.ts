// eslint-disable-next-line no-unused-vars
import { IHoseForm } from './IFormLangs';

const formLangs = (l: string): IHoseForm => {
  const formPT: IHoseForm = {
    type: {
      label: 'Tipo',
      options: [
        {
          text: 'Mangueira hidráulica',
          value: 1,
        },
        {
          text: 'Mangueira industrial',
          value: 2,
        },
        {
          text: 'Mangueira de alta performance',
          value: 3,
        },
        {
          text: 'Mangueira offloading',
          value: 4,
        },
        {
          text: 'Mangueira de incêndio',
          value: 5,
        },
      ],
    },
    technical: 'Informações técnicas',
    technician: 'Técnico responsável',
    assistant: 'Técnico auxiliar',
    description: 'Descrição',
    code: 'Código do sistema',
    date: 'Data',
    installation: 'Data de instalação',
    tag: 'TAG do cliente',
    detached: 'Código avulso',
    brand: 'Marca',
    rule: 'Norma',
    compatibleRules: 'Normas compatíveis',
    fluid: 'Fluído',
    gauge: 'Ângulo',
    workPressureLegend: 'Pressão de trabalho',
    workPressure: 'Pressão de trabalho',
    workPressureExceeds: 'Pressão de trabalho excede a norma',
    workPressureExceedsMandatory: 'É necessário exceder a norma?',
    workPressureOverRule: 'Pressão de trabalho personalizada',
    size: 'Tamanho',
    length: 'Comprimento',
    terminal1gender: 'Gênero do terminal 1',
    terminal1: 'Terminal 1',
    terminal1Angle: 'Ângulo terminal 1',
    terminal1Material: 'Tipo de material',
    terminal1Abrasion: 'Desgaste do terminal 1',
    adapter1: 'Adaptador 1',
    adapter1Abrasion: 'Desgaste do adaptador 2',
    terminal2gender: 'Gênero do terminal 2',
    terminal2: 'Terminal 2',
    terminal2Angle: 'Ângulo terminal 2',
    terminal2Material: 'Tipo de aterial',
    terminal2Abrasion: 'Desgaste do terminal 2',
    adapter2: 'Adaptador 2',
    adapter2Abrasion: 'Desgaste do adaptador 2',
    additional: 'Informações adicionais',
    angle: 'Ângulo de montagem',
    radius: 'Raio de montagem',
    recommended: 'Recomendação de periodicidade de inspeção',
    criticality: 'Criticidade',
    security: 'Segurança',
    environment: 'Meio ambiente',
    operability: 'Operabilidade',
    accessibility: 'Acessibilidade',
    abrasion: 'Abrasão',
    location: 'Localização',
    from: 'De',
    to: 'Para',
    result: 'Resultado',
    reason: 'Motivo',
    approved: 'Aprovado',
    disapproved: 'Reprovado',
    dropzoneText: 'Arraste e solte arquivos JPG ou PNG de até 300kb ou clique',
    noAttachments: 'Nenhum arquivo anexo!',
    finalRecommendations: 'Recomendações finais',
    notice: 'Observações',
    idleness: {
      stop: 'Houve ociosidade técnica?',
      start: 'Início da parada técnica',
      end: 'Fim da parada técnica',
    },
  };

  const formENG: IHoseForm = {
    type: {
      label: 'Type',
      options: [
        {
          text: 'Hydraulic hose',
          value: 1,
        },
        {
          text: 'Industrial hose',
          value: 2,
        },
        {
          text: 'High performance hose',
          value: 3,
        },
        {
          text: 'Offloading hose',
          value: 4,
        },
        {
          text: 'Fire hose',
          value: 5,
        },
      ],
    },
    technical: 'Technical info',
    technician: 'Responsible technician',
    assistant: 'Assistant technician',
    description: 'Description',
    code: 'System code',
    date: 'Date',
    installation: 'Date of installation',
    tag: 'Client TAG',
    detached: 'Detached code',
    brand: 'Brand',
    rule: 'Rule',
    compatibleRules: 'Compatible rules',
    fluid: 'Fluid',
    gauge: 'Gauge',
    workPressureLegend: 'Work pressure',
    workPressure: 'Work pressure',
    workPressureExceeds: 'Work pressure exceeds rule',
    workPressureExceedsMandatory: 'Is it mandatory to exceed?',
    workPressureOverRule: 'Custom work pressure',
    size: 'Size',
    length: 'Length',
    terminal1gender: 'Gender terminal 1',
    terminal1: 'Terminal 1',
    terminal1Angle: 'Terminal 1 angle',
    terminal1Material: 'Material type',
    terminal1Abrasion: 'Terminal 1 abrasion',
    adapter1: 'Adapter 1',
    adapter1Abrasion: 'Adapter 1 abrasion',
    terminal2gender: 'Gender terminal 2',
    terminal2: 'Terminal 2',
    terminal2Angle: 'Terminal 2 angle',
    terminal2Material: 'Material type',
    terminal2Abrasion: 'Terminal 2 abrasion',
    adapter2: 'Adapter 2',
    adapter2Abrasion: 'Adapter 2 abrasion',
    additional: 'Additional info',
    angle: 'Mounting angle',
    radius: 'Mounting radius',
    recommended: 'Inspection Periodicity Recommendation',
    criticality: 'Criticality',
    security: 'Security',
    environment: 'Environment',
    operability: 'Operability',
    accessibility: 'Acessibilidade',
    abrasion: 'Abrasão',
    location: 'Location',
    from: 'From',
    to: 'To',
    result: 'Result',
    reason: 'Reason',
    approved: 'Approved',
    disapproved: 'Disapproved',
    dropzoneText: 'Drag and drop a JPEG or PNG files up to 300kb here or click',
    noAttachments: 'No attachments yet!',
    finalRecommendations: 'Final recommendations',
    notice: 'Notice',
    idleness: {
      stop: 'Was there technical idleness?',
      start: 'Beginning of technical idleness',
      end: 'End of technical idleness',
    },
  };

  if (l === 'PT') return formPT;
  return formENG;
};

export default formLangs;
