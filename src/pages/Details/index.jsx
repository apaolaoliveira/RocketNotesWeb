import { Container, Links, Content } from './styles.js';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api.js';
import { FaArrowLeft } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { toast } from 'react-toastify';

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

  async function handleDelete(){
    const confirm = window.confirm('Are you sure you want to delete this note?');

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      toast.success('Note deleted successfully');
      navigate(-1);
    }
  }
  
  return(
    <Container>
      <Header />

      { data &&
        <main>
          <Content>
            <div>
              <button 
                onClick={() => navigate(-1)}
                type='button'
              >
                <FaArrowLeft/>
              </button>

              <ButtonText 
                onClick={handleDelete}
                title="Delete note" 
              />
            </div>

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            { data.links &&
              <Section title='Resources'>
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <IoLink />
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
          </Content>
        </main>
      }
    </Container>
  )
}