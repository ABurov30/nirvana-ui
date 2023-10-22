import React from 'react';
export interface MyButtonProps {
    srcImg: string;
    color: string;
    big: boolean;
    children: React.ReactNode;
}
export default function MyButton({ srcImg, color, children, ...props }: MyButtonProps): JSX.Element;
