import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`;

export const Image = styled.figure`
  ${tw`w-full rounded-lg overflow-hidden mt-4 mb-10`};
`;

export const Links = styled.div`
  span:nth-of-type(1) {
    margin-right: 1rem;
  }

  ${tw`w-full flex justify-between mt-10 text-pink-600`};
`;
