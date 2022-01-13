import { Page } from './Page';

const Auth = ({ title, children }) => {
    return (
        <Page title={title}>
            {children}
        </Page>
    )
}

export { Auth };