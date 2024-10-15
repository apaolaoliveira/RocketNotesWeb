import { Container, Links, Content, Modal } from './styles.js';

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
import { Button } from '../../components/Button/index.jsx';
import { IoMdClose } from "react-icons/io";

export function Details(){
  const [data, setData] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
    try {
      await api.delete(`/notes/${params.id}`);
      toast.success('Note deleted successfully');
      navigate(-1);
    } catch (error) {
      toast.error('Failed to delete note');
    }
    setIsDeleteModalOpen(false);
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
                onClick={() => setIsDeleteModalOpen(true)}
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

      {isDeleteModalOpen && (
        <Modal>
          <div>
            <header>
              <div>
                <h2>Are you sure about deleting this note?</h2>
                <p>This action can't be undone!</p>
              </div>
              <button onClick={() => setIsDeleteModalOpen(false)}>
                <IoMdClose />
              </button>
            </header>
            <Button title='Confirm' onClick={handleDelete}/>
          </div>
        </Modal>
      )}
    </Container>
  )
}