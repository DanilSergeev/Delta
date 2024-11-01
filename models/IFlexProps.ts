import { ReactNode } from "react";

export interface FlexProps {
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    flex?: 'row' | 'column';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    /** Indicates whether the width of child elements is equal (accepts "true" as a string) */
    $isEqualWidth?: string;
    mt?: string;
    mb?: string;
    pt?: string;
    pb?: string;
    gap?: string;
    $textAlign?: 'center' | 'left' | 'justify' | 'right';
    children: ReactNode;
}
