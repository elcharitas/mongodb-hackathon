import { Box } from '@chakra-ui/react';
import { NavBar, Footer } from '../components';

const Page = ({ title, children, bg }) => {
    return (
        <Box bgImage={bg}>
            <NavBar title={title} />
            {children}
            <Footer />
        </Box>
    );
}

export { Page };
