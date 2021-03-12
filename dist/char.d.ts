import { Component } from 'react';
import { StyledComponent } from 'styled-components';
import Animation from './enum/animation';
interface Props {
    duration: number;
    hide: boolean;
    animate: boolean;
    unload: boolean;
    animation: Animation;
}
interface State {
    display: JSX.Element | null;
    visibility: 'hidden' | 'visible';
}
export default class Char extends Component<Props, State> {
    styledComponent: StyledComponent<"span", any, {}, never>;
    baseComponent: StyledComponent<"span", any, {}, never>;
    state: State;
    static defaultProps: {
        duration: number;
        hide: boolean;
        unload: boolean;
        animate: boolean;
        style: Animation;
    };
    constructor(props: Props);
    componentDidMount(): void;
    render: () => JSX.Element;
    load(): void;
    unload(): void;
    hide(): void;
    animate(): void;
}
export {};
