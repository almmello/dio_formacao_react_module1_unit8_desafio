import { ImageContainer } from './styles';
import { LinkContainer } from './styles';

const MyImage = ({ src, alt, href }) => {
  return (
    <LinkContainer href={href} target="_blank">
      <ImageContainer src={src} alt={alt}></ImageContainer>
    </LinkContainer>    
  );
};

export default MyImage;