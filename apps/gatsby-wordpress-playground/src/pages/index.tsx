import { Button } from '@gatsby-design-system/shared/ui/design-system/buttons';
import React from 'react';

export function Index() {
  return (
    <>
      <h1>Aplikacja testowa</h1>
      <Button 
          border="none"
          color="gray"
          height = "50px"
          onClick={() => console.log("You clicked button!")}
          radius = "5%"
          width = "300px"
          children = "Button"
        />
    </>
  );
}

export default Index;
