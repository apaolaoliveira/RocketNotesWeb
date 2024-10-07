import { Container, Links, Content } from './styles.js';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api.js';

export function Details(){
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  function handleBack(){
    navigate('/');
  }
  
  return(
    <Container>
      <Header />

      { data &&
        <main>
          <Content>
            <ButtonText title="Delete note" />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            { data.links &&
              <Section title='Resources'>
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url.startsWith('http') ? link.url : `https://${link.url}`} target='_blank'>
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            { data.tags &&
              <Section title='Tags'>
                {
                  data.tags.map(tag => (
                    <Tag key={String(tag.id)} title={tag.name} />
                  ))
                }
              </Section>
            }

            <Button 
              onClick={handleBack}
              title='Back'
            />
          </Content>
        </main>
      }
    </Container>
  )
}