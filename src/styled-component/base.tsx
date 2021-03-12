import styled, { StyledComponent } from 'styled-components';

export default function base(): StyledComponent<"span", any, {}, never> {
    return styled.span`display:inline-block;`
}