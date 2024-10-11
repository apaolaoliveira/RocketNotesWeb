import { Container } from './styles';
import { Tag } from '../../components/Tag';
import { SlNotebook } from "react-icons/sl";
import { SlBookOpen } from "react-icons/sl";
import { useState } from 'react';

export function Note({ data, ...rest }){
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      {...rest}
    >
      <div>
        <h1>{data.title}</h1>
        { isHovered? <SlBookOpen /> : <SlNotebook />}
      </div>

      <p>{data.description}</p>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(
              tag => <Tag key={tag.name} title={tag.name} />
            )
          }
        </footer>
      }
    </Container>
  );
}