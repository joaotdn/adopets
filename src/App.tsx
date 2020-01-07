import * as React from "react";
import { Layout } from 'antd';
import Routes from "./routes";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
    <Layout className="layout">
        <Header>
            <h4 style={{color: '#fff'}}>ADOPETS &copy;</h4>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Routes />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Adopets ©2020</Footer>
    </Layout>
);

export default App;