import Link from 'next/link';
import Footer from '.';

const FooterNarrativasVisuales = () => (
  <Footer>
    <span>
      Oráculo virtual de consignas fotográficas desarrollado colaborativamente
      por <Link href="https://www.instagram.com/ruminga/">Ruminga</Link> y{' '}
      <Link href="https://www.santa-talleres.com/" target="_blank">
        Santa Talleres
      </Link>
      .
    </span>
  </Footer>
);

export default FooterNarrativasVisuales;
