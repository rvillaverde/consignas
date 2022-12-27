import type { NextPage } from 'next';
import { useEffect } from 'react';
import { TagType } from '../../api/task';
import Card from '../../components/card';
import { Layout } from '../../components/layout/narrativas-visuales';
import { random } from '../../helpers/random';

const TAG: TagType = 'narrativas-visuales';
const AVAILABLE_BACKGROUNDS = 7;

const Random: NextPage = () => {
  useEffect(() => {
    document.querySelector('body')?.classList.add(TAG);
  }, []);

  return (
    <Layout>
      <Card
        actions={[
          {
            href: `/${TAG}/random`,
            label: 'Pedir consigna',
            type: 'primary',
          },
        ]}
        topImage={`/${TAG}/0${random(AVAILABLE_BACKGROUNDS, 1)}.jpg`}
        type="large"
      >
        <p>
          Narrativas visuales es un método de exploración y entrenamiento visual
          a través de la práctica fotográfica. Un taller para investigar otros
          modos de mirar a través del desarrollo de consignas tomadas al azar
          del mazo de desafíos fotográficos. Se trata de 90 consignas pensadas
          para abordar la práctica fotográfica desde diferentes puntos
          vinculados, no sólo a la práctica en sí, sino con la escritura, el
          video, la revisión de archivo, el diálogo con otros universos
          visuales, la investigación y la visualización de referentes clásicos y
          contemporáneos. La consigna es una punta de lanza que luego les
          participantes re-elaboran. Un disparador que nos sumerge en un nuevo
          mundo que inevitablemente implica otros modos de ver, buscando así
          activar el goce y el placer que nos brinda esta herramienta de
          expresión tan poderosa, la fotografía.
          <br />
          <br />
          Narrativas es un espacio para deambular, flotar, sumergirnos en las
          profundidades de la práctica acompañadas de un grupo que siempre
          termina siendo una red a donde podemos caer tranquilxs, sabiéndonos
          sostenidxs. Nos frustra y esa frustración es abono, nos allana el
          camino volviéndolo fértil para volver a empezar y ver crecer algo.
          Narrativas invita a la escritura sin imponerla, aunque siempre algo
          sale, es mágico. Narrativas también es revisarnos, iluminar nuestras
          resistencias, las expectativas y los espejos, y a partir de ahí
          encontrar calma aunque también quizás, en esa calma, podamos
          prendernos fuego.
        </p>
      </Card>
    </Layout>
  );
};

export default Random;
