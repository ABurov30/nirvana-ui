import React from 'react';
export interface MyButtonProps {
    color: string;
    big: boolean;
    children: React.ReactNode;
}
export default function MyButton({ color, children, ...props }: MyButtonProps): JSX.Element;
