import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
       ${tw`m-0 p-0 text-indigo-900 bg-white leading-7`};
     }

  ${
    '' /* a {
    ${tw`text-indigo-600 hover:text-indigo-700`};
  } */
  }

  p + p {
    ${tw`mt-5`};
  }
`;
