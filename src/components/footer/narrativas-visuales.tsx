import Link from 'next/link';
import Footer from '.';

const FooterNarrativasVisuales = () => (
  <Footer>
    <span>
      Oráculo de consignas desarrollado colaborativamente por{' '}
      <Link href="https://www.instagram.com/ruminga/">
        <a target="_blank">ruminga</a>
      </Link>{' '}
      y{' '}
      <Link href="https://www.santa-talleres.com/" target="_blank">
        <a target="_blank">Santa Talleres</a>
      </Link>
      .
    </span>
  </Footer>
);

export default FooterNarrativasVisuales;