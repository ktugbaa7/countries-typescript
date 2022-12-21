import React, { FunctionComponent } from 'react';

interface ILoadingProps {
    loading: boolean;
    children: React.ReactNode; // bu children propertysinde otomatik çıkmadığı için buraya eklendi
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
    const { loading } = props;

    if(loading) {
        return <>Loading...</>;
    }

    return <>{props.children}</>; 
};

export default Loading;