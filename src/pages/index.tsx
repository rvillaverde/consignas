import type { NextPage } from 'next';
import WebContentContext from '../components/context/web-content';
import { NARRATIVAS_VISUALES } from '../components/header/menu-items';
import Card from '../components/card';
import { Layout } from '../components/layout';

const Home: NextPage = () => (
  <WebContentContext.Consumer>
    {({ content, loading }) => (
      <Layout menu={{ items: [NARRATIVAS_VISUALES] }}>
        <Card
          actions={[
            {
              href: '/random',
              label: 'Pedir consigna',
              type: 'primary',
            },
          ]}
          type="large"
        >
          <>
            {loading
              ? ''
              : content.home
                ? content.home
                    .split('\n')
                    .filter(p => p.length > 0)
                    .map((p, i) => <p key={i}>{p}</p>)
                : null}
          </>
        </Card>
      </Layout>
    )}
  </WebContentContext.Consumer>
);

export default Home;
