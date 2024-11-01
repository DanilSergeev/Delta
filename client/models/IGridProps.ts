import { ReactNode } from "react";

export interface IGridProps {
    $templateColumns?: string;
    templateRows?: string;
    gap?: string;
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    textAlign?: 'center' | 'left' | 'justify' | 'right';
  
    mt?: string;
    mb?: string;
    children: ReactNode;
  }