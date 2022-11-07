import { Text01Container } from './styles';

const Text01 = ({valueT, valueL, href}) => {
  return (
    <Text01Container>
      <p>{valueT}<a href={href} target="_blank" rel="noreferrer">{valueL}</a></p>
    </Text01Container>
  );
};

export default Text01;