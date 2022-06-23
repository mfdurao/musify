import * as React from 'react';
import { Header } from '../../components';
import { LayoutStyles } from './style';

interface Props {
  children: JSX.Element;
}

const CommonLayout = ({children}:Props) => (
  <LayoutStyles>
    <Header/>
    {children}
  </LayoutStyles>
)

export default CommonLayout;
