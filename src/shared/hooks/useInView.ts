import { useEffect,useState } from 'react';
import type { RefObject } from 'react';
export function useInView(ref:RefObject<HTMLElement|null>){const [visible,setVisible]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;if(!('IntersectionObserver'in window)){setVisible(true);return}const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect()}},{threshold:.08});observer.observe(el);return()=>observer.disconnect()},[ref]);return visible}
