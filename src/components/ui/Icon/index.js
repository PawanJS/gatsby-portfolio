import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faBlender,
  faPhone,
  faPaperPlane,
  faTachometerAlt,
  faUserShield,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(fab, faLaptopCode, faBlender, faCodeBranch, faPhone, faPaperPlane, faTachometerAlt, faUserShield);

const Icon = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
