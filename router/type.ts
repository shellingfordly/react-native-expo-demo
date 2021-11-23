import React from "react";

export interface RouteItem {
  name: string;
  options: {
    title: string;
    header?: boolean;
  };
  component: React.ComponentType<any>;
}
