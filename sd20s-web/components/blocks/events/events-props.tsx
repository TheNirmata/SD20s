/* eslint-disable react/display-name */
import React from "react";

// This is a higher-order component (HOC) that takes a component and an eventId as arguments.
export const EventProps = (Component: React.FunctionComponent<{ eventId: number }>, eventId: number) => {
  
  return (props: any) => {
    const { eventId: paramEventId } = props as { eventId: number };
    const eventProps = {
      ...props,
      eventId: paramEventId || eventId,
    };

    return( <Component {...eventProps} />);
  };
};
