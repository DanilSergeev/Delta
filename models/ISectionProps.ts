import { ReactNode } from "react";

export interface ISectionProps {
    mt?: string;
    mb?: string;
    pt?: string;
    pb?: string;
    bg?: string;
    children: ReactNode;
  }