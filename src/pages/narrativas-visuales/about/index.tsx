import type { NextPage } from 'next';
import Card from '../../../components/card';
import WebContentContext from '../../../components/context/web-content';
import { Layout } from '../../../components/layout/narrativas-visuales';
import { Tag } from '../../../data';
import { random } from '../../../helpers/random';

const TAG: Tag = 'narrativas-visuales';
const AVAILABLE_BACKGROUNDS = 7;

const Random: NextPage = () => (
  <WebContentContext.Consumer>
    {({ content }) => (
      <Layout>
        <Card
          actions={[
            {
              external: true,
              href: 'https://www.santa-talleres.com/narrativas-visuales',
              label: 'Ver más',
              type: 'primary',
            },
          ]}
          topImage={`/${TAG}/0${random(AVAILABLE_BACKGROUNDS, 1)}.jpg`}
          type="large"
        >
          <>
            {content.about
              ? content.about
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

export default Random;
