import { IMAGE_BASE_URL } from '../../config';
const size = {
    mobile: '600px',
    tablet: '900px',
    laptop: '1200px',
    desktop: '1800px',
};
const theme = {
    darkBlue: 'rgba(3,37,65,1)',
    white: '#f5f5f5',
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
};

export default theme;
