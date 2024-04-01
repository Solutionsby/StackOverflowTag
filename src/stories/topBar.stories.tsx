import { Meta, Story } from '@storybook/react';
import { TopBar } from '../components/topBar/TopBar'; // Importuj swój komponent TopBar

export default {
    title: 'Components/TopBar', // Tytuł kategorii w panelu nawigacyjnym Storybooka
    component: TopBar,
    argTypes: {
      bgcolor: { control: 'color' }, // Props do kontrolowania koloru tła
      color: { control: 'color' }, // Props do kontrolowania koloru tekstu
      boxShadow: { control: 'text' }, // Props do kontrolowania cieniowania
      // Dodaj więcej propsów w zależności od potrzeb
    },
  } as Meta;
  
  // Definiowanie szablonu (Template) dla Twojego TopBar
  const Template: Story = (args) => <TopBar {...args} />;
  
  // Definiowanie domyślnej historii dla Twojego TopBar
  export const Default = Template.bind({});
  Default.args = {
    // Tutaj możesz przekazać wartości domyślne dla propsów
    bgcolor: '#3f51b5', // Domyślny kolor tła
    color: '#ffffff', // Domyślny kolor tekstu
    boxShadow: 'none', // Domyślne cieniowanie
  };