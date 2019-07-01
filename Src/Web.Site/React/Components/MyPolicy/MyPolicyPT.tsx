import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { Link as RLink } from 'react-router-dom';

const MyPolicyPT = (): any => (
  <Container fixed>
    <Typography variant="h6" gutterBottom>
      Política de privacidade para
      {' '}
      <Link
        title="Home page"
        color="textPrimary"
        underline="always"
        component={RLink}
        to="/"
      >
        Ricardo Gaefke
      </Link>
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar a sua visita no nosso site o mais produtiva
      e agradável possível.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para nós.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem
      nossa plataforma serão tratadas em concordância com a Lei da Proteção de Dados Pessoais
      de 26 de outubro de 1998 (Lei n.º 67/98).
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      A informação pessoal recolhida pode incluir o seu nome, e-mail, número de telefone e/ou telemóvel, morada, data de nascimento e/ou outros.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      O uso de nossa plataforma pressupõe a aceitação deste Acordo de privacidade.
      A equipa do Ricardo Gaefke reserva-se ao direito de alterar este acordo sem aviso prévio.
      Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Os anúncios
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Tal como outros websites, coletamos e utilizamos informação contida nos anúncios.
      A informação contida nos anúncios, inclui o seu endereço IP (Internet Protocol),
      o seu ISP (Internet Service Provider, como o Sapo, Clix, ou outro), o browser que utilizou ao visitar
      o nosso website (como o Internet Explorer ou o Firefox), o tempo da sua visita e que páginas visitou dentro do nosso website.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Cookie DoubleClick Dart
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios no nosso website;
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Com o cookie DART, o Google pode exibir anúncios com base nas visitas que o leitor fez a outros websites na Internet;
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Os utilizadores podem desativar o cookie DART visitando a Política de
      {' '}
      <Link
        href="http://politicaprivacidade.com/"
        title="privacidade da rede de conteúdo"
        color="textPrimary"
        underline="always"
      >
        privacidade da rede de conteúdo
      </Link>
      {' '}
      e dos anúncios do Google.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Os Cookies e Web Beacons
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Utilizamos cookies para armazenar informação, tais como as suas preferências pessoas quando visita o nosso website.
      Isto poderá incluir um simples popup, ou uma ligação em vários serviços que providenciamos, tais como fóruns.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Em adição também utilizamos publicidade de terceiros no nosso website para suportar os custos de manutenção.
      Alguns destes publicitários, poderão utilizar tecnologias como os cookies e/ou web beacons quando publicitam no nosso website,
      o que fará com que esses publicitários (como o Google através do Google AdSense) também recebam a sua informação pessoal,
      como o endereço IP, o seu ISP, o seu browser, etc. Esta função é geralmente utilizada para geotargeting
      (mostrar publicidade de Lisboa apenas aos leitores oriundos de Lisboa por ex.) ou apresentar publicidade direcionada a um tipo de
      utilizador (como mostrar publicidade de restaurante a um utilizador que visita sites de culinária regularmente, por ex.).
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Você detém o poder de desligar os seus cookies, nas opções do seu browser, ou efetuando alterações nas ferramentas de programas Anti-Virus,
      como o Norton Internet Security. No entanto, isso poderá alterar a forma como interage com o nosso website, ou outros websites.
      Isso poderá afetar ou não permitir que faça logins em programas, sites ou fóruns da nossa e de outras redes.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Ligações a Sites de terceiros
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      O Ricardo Gaefke possui ligações para outros sites, os quais, a nosso ver, podem conter informações /
      ferramentas úteis para os nossos visitantes. A nossa política de privacidade não é aplicada a sites de terceiros,
      pelo que, caso visite outro site a partir do nosso deverá ler a politica de privacidade do mesmo.
    </Typography>
    <Typography variant="body2" align="justify" gutterBottom>
      Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites.
    </Typography>
  </Container>
);

export default MyPolicyPT;
