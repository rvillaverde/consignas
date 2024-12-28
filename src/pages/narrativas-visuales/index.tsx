import type { NextPage } from 'next';
import Card from '../../components/card';
import WebContentContext from '../../components/context/web-content';
import { Layout } from '../../components/layout/narrativas-visuales';
import { Tag } from '../../data';

const TAG: Tag = 'narrativas-visuales';

const Index: NextPage = () => (
  <WebContentContext.Consumer>
    {({ content, loading }) => (
      <Layout>
        <Card
          actions={[
            {
              href: `/${TAG}/random`,
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

export default Index;
