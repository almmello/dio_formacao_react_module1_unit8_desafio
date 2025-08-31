import { LinkContainer } from './styles';

const Text01 = ({href, value}) => {
  return (
    <LinkContainer href={href} target="_blank">
      {value}
    </LinkContainer>
  );
};

export default Text01;