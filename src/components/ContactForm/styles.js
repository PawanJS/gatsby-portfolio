import styled from 'styled-components';
import tw from 'tailwind.macro';

export const ContactForm = styled.section`
  ${tw`bg-gray-100 border-t border-indigo-100 mt-auto`};
`;

export const Textarea = styled.textarea`
  ${tw`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal mb-3`};
`;

export const Label = styled.label`
  max-width: 16.25rem;

  ${tw`w-full`};
`;
