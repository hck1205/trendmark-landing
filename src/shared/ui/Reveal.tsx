import { useRef } from 'react';
import type { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { useInView } from '../hooks/useInView';
const Wrapper=styled.div<{active:boolean}>`opacity:${p=>p.active?1:0};transform:translateY(${p=>p.active?'0':'24px'});transition:opacity .65s ease,transform .65s ease;@media(prefers-reduced-motion:reduce){opacity:1;transform:none}`;
export function Reveal({children}:PropsWithChildren){const ref=useRef<HTMLDivElement>(null);const active=useInView(ref);return <Wrapper ref={ref} active={active}>{children}</Wrapper>}
