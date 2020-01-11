import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Font Awesome Icons
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


// Add icons to the library
library.add(faSpinner);

// Convert all <i> tags in the DOM into SVG icons.
dom.watch();