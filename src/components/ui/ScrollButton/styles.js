import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export const Button = motion.custom(styled.button`
  outline: none !important;
  right: 2rem;
  bottom: 2rem;
  width: 2rem;
  height: 2rem;

  ${tw` fixed `};
`);
