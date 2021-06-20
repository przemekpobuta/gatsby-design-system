import { Button } from '@gatsby-design-system/shared/ui/design-system/buttons';
import React from 'react';

export function Index() {
  return (
    <>
      <h1>Aplikacja testowa</h1>
      <Button
        backgroundColor="#3498db"
        border="2px solid #2980b9"
        color="#ffffff"
        height={60}
        radius={100}
        width={200}
      >
        Przycisk
      </Button>
    </>
  );
}

export default Index;
