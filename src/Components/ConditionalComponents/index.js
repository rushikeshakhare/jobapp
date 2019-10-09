import React from 'react';

const Switch = (props) => {
    const {value} = props;
    return props.children.map(elem => {
        return elem.props.value == value ? elem : null
    })
}

const If = (props) => {
    if(props.condition)
        return props.children;
    else 
        return <></>;
}

const Case = (props) => {
    return props.children;
}

export {
    Switch,If,Case
};