import React, { Component, Fragment } from 'react';
import { StyledComponent } from 'styled-components';
import Animation from './enum/animation';
import StyledComponents from './styled-component';

interface Props {
    duration: number;
    hide: boolean;
    animate: boolean;
    unload: boolean;
    animation: Animation;
    onPlay?: (char: Char) => void;
}

interface State {
    display: JSX.Element | null;
    visibility: 'hidden' | 'visible';
}

export default class Char extends Component<Props, State> {

    styledComponent: StyledComponent<"span", any, {}, never>;
    baseComponent: StyledComponent<"span", any, {}, never>;
    state: State;

    static defaultProps = {
        duration: 0,
        hide: false,
        unload: false,
        animate: true,
        style: Animation.base
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            display: null,
            visibility: 'hidden'
        }
    }

    componentDidMount() {
        if (this.props.unload) {
            this.unload()
            console.log('unload')
        } else {
            this.load();

            if (this.props.hide) {
                this.hide()
                console.log('hide')
            } else if (this.props.animate) {
                this.play()
                console.log('animate')
            }

            console.log('load')
        }
    }

    render = () => <Fragment>{this.state?.display}</Fragment>;

    load() {
        const Component = StyledComponents.base();
        this.setState({
            display: <Component>{this.props.children}</Component>
        })
    }

    unload() {
        this.setState({
            display: null
        })
    }

    hide() {
        const Component = StyledComponents.base();
        this.setState({
            display: <Component style={{ visibility: 'hidden' }}>{this.props.children}</Component>
        })
    }

    play() {
        const Component = StyledComponents[this.props.animation](this.props.duration);
        this.setState({
            display: <Component>{this.props.children}</Component>
        }, () => {
            this.onPlay();
        })
    }

    onPlay() {
        this.props.onPlay?.(this);
    }
}
